# Environment Variables

## Application

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_APP_NAME` | no | Display name. |
| `APP_BASE_URL` | yes | Production URL. |
| `ADMIN_BASIC_AUTH_USER` | MVP | Admin protection if SSO is deferred. |
| `ADMIN_BASIC_AUTH_PASSWORD` | MVP | Store only in Vercel environment variables. |

## Database

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | yes | PostgreSQL connection string. |
| `DIRECT_URL` | optional | Prisma direct connection if provider requires pooling split. |

## Azure OpenAI

| Variable | Required | Notes |
|---|---|---|
| `AZURE_OPENAI_ENDPOINT` | yes | Azure OpenAI resource endpoint. |
| `AZURE_OPENAI_API_KEY` | yes | Server-side only. |
| `AZURE_OPENAI_API_VERSION` | yes | Pin supported API version. |
| `AZURE_OPENAI_CHAT_DEPLOYMENT` | yes | Azure deployment name, not necessarily model id. |
| `AZURE_OPENAI_EMBEDDING_DEPLOYMENT` | yes | Embedding deployment name. |

## Storage

| Variable | Required | Notes |
|---|---|---|
| `BLOB_READ_WRITE_TOKEN` | if Vercel Blob | Vercel Blob access token. |
| `AZURE_STORAGE_CONNECTION_STRING` | if Azure Blob | Preferred for Azure-controlled PDF storage. |
| `AZURE_STORAGE_CONTAINER` | if Azure Blob | Container for original PDFs. |

## Observability

| Variable | Required | Notes |
|---|---|---|
| `LOG_LEVEL` | no | `info` default. |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | optional | Add later if tracing is enabled. |

