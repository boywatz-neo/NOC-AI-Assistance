# Architecture

## Architecture Decision

The MVP uses a single Next.js App Router application deployed on Vercel. UI, backend APIs, RAG orchestration, admin flows, and database access live in the same codebase. This replaces the original split Next.js + FastAPI architecture for MVP speed and lower deployment complexity.

## Target Runtime

- Frontend: Next.js App Router pages and React Server Components.
- Backend: Next.js Route Handlers in `/app/api/*`.
- Server runtime: Node.js runtime by default, not Edge, because PDF parsing, database drivers, and Azure SDKs require Node APIs.
- Deployment: Vercel project connected to managed PostgreSQL and Azure OpenAI.

## Logical Components

```text
NOC User / Admin Browser
        |
        | HTTPS
        v
Vercel Next.js App Router
        |
        +-- UI routes
        |   +-- / chat workspace
        |   +-- /admin document and feedback portal
        |
        +-- API routes
        |   +-- /api/chat
        |   +-- /api/checklist
        |   +-- /api/documents
        |   +-- /api/documents/[id]/activate
        |   +-- /api/feedback
        |
        +-- RAG services
        |   +-- query rewrite
        |   +-- embedding
        |   +-- vector search
        |   +-- answer generation
        |
        +-- ingestion services
            +-- PDF upload
            +-- text extraction
            +-- chunking
            +-- embedding
            +-- indexing

Managed Services
        |
        +-- Azure OpenAI: chat and embeddings
        +-- PostgreSQL + vector extension: metadata, logs, chunks, embeddings
        +-- Blob storage: original PDFs
```

## Request Flows

### Chat Flow

1. User sends message to `/api/chat`.
2. API validates request and loads active release.
3. System embeds the query.
4. System performs hybrid retrieval using vector similarity plus metadata filters.
5. System sends retrieved context to Azure OpenAI.
6. API stores answer, citations, confidence, usage metadata, and returns response.

### Document Ingestion Flow

1. Admin uploads PDF and metadata to `/api/documents`.
2. API stores original file in blob storage.
3. API creates `documents` and `document_jobs` records.
4. Background ingestion extracts text by page.
5. Text is chunked with section/page metadata.
6. Chunks are embedded and inserted into `document_chunks`.
7. Job status moves to `completed`; admin can activate release.

### Activation Flow

1. Admin activates a release.
2. Transaction sets previous active release to archived.
3. Selected release becomes active.
4. Future user queries filter by active release unless an admin override is used.

## Vercel Considerations

- Use Node.js runtime for APIs that touch PDFs, PostgreSQL, or Azure SDKs.
- Keep upload and indexing work within Vercel function limits. For larger PDFs, use a queued job approach with Vercel Cron or an external queue.
- Store files outside the server filesystem because Vercel functions are ephemeral.
- Use environment variables for all credentials.

## Key Tradeoffs

- PostgreSQL vector search is simpler than Azure AI Search for MVP, but Azure AI Search can be introduced later if retrieval quality or scale requires it.
- Next.js API routes reduce operational overhead, but long-running ingestion must be designed around serverless execution limits.
- Vercel is not an intranet-only hosting model by default, so production access must be constrained with Vercel Firewall, Authentication, IP allowlisting, or an enterprise network gateway.

