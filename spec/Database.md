# Database

## Database Decision

Use managed PostgreSQL with vector support for MVP. It stores product metadata, conversations, feedback, document chunks, embeddings, and audit logs. This keeps the MVP simple and deployable from Vercel without introducing a separate Azure AI Search dependency on day one.

## Recommended Providers

- Neon Postgres through Vercel Marketplace for fastest Vercel integration.
- Supabase Postgres if the team wants a built-in dashboard and storage options.
- Azure Database for PostgreSQL if enterprise policy requires Azure-only data residency.

## Extensions

- `vector` for embedding columns.
- `pg_trgm` for fuzzy keyword matching if supported.
- `uuid-ossp` or native `gen_random_uuid()` depending on provider.

## Core Tables

### `release_versions`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Release id. |
| `version` | text unique | Example: `v2025.1`. |
| `release_date` | date | Vendor release date. |
| `status` | enum | `draft`, `processing`, `active`, `archived`, `failed`. |
| `activated_at` | timestamptz nullable | Active timestamp. |
| `created_at` | timestamptz | Audit. |
| `updated_at` | timestamptz | Audit. |

### `documents`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Document id. |
| `release_version_id` | uuid fk | Parent release. |
| `name` | text | Display name. |
| `category` | enum | `admin_guide`, `config`, `release_note`, `training`, `other`. |
| `language` | enum | `th`, `en`, `mixed`. |
| `source_uri` | text | Blob path. |
| `page_count` | integer nullable | Extracted after parsing. |
| `status` | enum | `uploaded`, `processing`, `indexed`, `failed`, `archived`. |
| `metadata` | jsonb | Vendor/system-specific tags. |
| `created_at` | timestamptz | Audit. |

### `document_chunks`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Chunk id. |
| `document_id` | uuid fk | Parent document. |
| `release_version_id` | uuid fk | Duplicated for filtering. |
| `chunk_index` | integer | Stable order within document. |
| `page_start` | integer | Citation start page. |
| `page_end` | integer | Citation end page. |
| `section_title` | text nullable | Header/path if available. |
| `content` | text | Chunk text. |
| `content_hash` | text | Deduplication. |
| `embedding` | vector | Dimension depends on embedding model. |
| `token_count` | integer nullable | Cost estimation. |
| `created_at` | timestamptz | Audit. |

### `conversations`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Conversation id. |
| `session_id` | text | Anonymous browser/session id for MVP. |
| `title` | text nullable | Optional generated title. |
| `created_at` | timestamptz | Audit. |
| `updated_at` | timestamptz | Audit. |

### `messages`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Message id. |
| `conversation_id` | uuid fk | Parent conversation. |
| `role` | enum | `user`, `assistant`, `system`. |
| `content` | text | Message body. |
| `confidence` | enum nullable | Assistant only: `high`, `medium`, `low`. |
| `citations` | jsonb | Document/page/chunk references. |
| `model` | text nullable | Azure model deployment used. |
| `token_usage` | jsonb nullable | Prompt/completion/token cost metadata. |
| `created_at` | timestamptz | Audit. |

### `feedback`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Feedback id. |
| `message_id` | uuid fk | Assistant message. |
| `rating` | enum | `up`, `down`. |
| `comment` | text nullable | Optional user note. |
| `created_at` | timestamptz | Audit. |

### `ingestion_jobs`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid pk | Job id. |
| `document_id` | uuid fk | Target document. |
| `status` | enum | `pending`, `processing`, `completed`, `failed`. |
| `error_message` | text nullable | Failure detail. |
| `started_at` | timestamptz nullable | Job timing. |
| `finished_at` | timestamptz nullable | Job timing. |
| `created_at` | timestamptz | Audit. |

## Retrieval Query Requirements

- Filter by active `release_version_id` for normal users.
- Retrieve top K chunks by vector similarity.
- Prefer chunks from config manuals over release notes when scores are similar.
- Include page and document metadata in every citation.
- Reject answer generation when retrieval confidence is too low and ask for clarification.

## Data Retention

- Keep document metadata indefinitely unless compliance requires deletion.
- Keep original PDFs for all active and archived release versions.
- Keep conversation logs for a configurable retention period.
- Do not store PII unless a future security review approves it.

