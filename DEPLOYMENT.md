# Deployment

Deployment guide for the NOC AI Assistant MVP.

## Target Platform

- Hosting: Vercel.
- Framework: Next.js App Router.
- Backend: Next.js Route Handlers under `/app/api/*`.
- Runtime: Node.js runtime for API routes that use PostgreSQL, Azure SDKs, PDF parsing, or storage SDKs.
- Database: Managed PostgreSQL with vector support.
- LLM provider: Azure OpenAI.
- File storage: Azure Blob Storage preferred; Vercel Blob acceptable only if data policy allows it.

## Deployment Environments

| Environment | Purpose | Branch | Notes |
|---|---|---|---|
| Local | Developer implementation and unit tests. | Any feature branch. | Requires local env vars or mocked services. |
| Preview | PR and feature validation. | Vercel preview branches. | Use non-production Azure/database resources. |
| Staging | MVP demo and release candidate testing. | Release branch or protected staging branch. | Run smoke tests and RAG evaluation before production. |
| Production | NOC user access. | `main` after approval. | Must have admin protection and network access controls. |

## Required Services

Provision before production deployment:

- Vercel project.
- Managed PostgreSQL with vector extension enabled.
- Azure OpenAI resource with chat and embedding deployments.
- Blob storage container for original PDFs.
- Admin access protection method.
- Monitoring/logging access for the delivery team.

## Required Environment Variables

Follow `spec/support/Environment.md`.

Minimum production variables:

- `APP_BASE_URL`
- `DATABASE_URL`
- `AZURE_OPENAI_ENDPOINT`
- `AZURE_OPENAI_API_KEY`
- `AZURE_OPENAI_API_VERSION`
- `AZURE_OPENAI_CHAT_DEPLOYMENT`
- `AZURE_OPENAI_EMBEDDING_DEPLOYMENT`
- Storage variables for Azure Blob or Vercel Blob.
- Admin protection variables if Basic Auth is used for MVP.

## Pre-Deployment Checklist

- Database migrations have run successfully.
- Environment variables are configured in Vercel.
- Admin routes are protected.
- File upload size limits are configured.
- Chat API uses Azure OpenAI, not a public OpenAI endpoint.
- Active release has indexed chunks.
- Test document upload and activation works in staging.
- RAG golden dataset meets the agreed acceptance threshold.
- Rollback path is understood by the team.

## Deployment Steps

1. Merge approved changes into the deployment branch.
2. Confirm Vercel preview build passes.
3. Run typecheck, unit tests, API tests, and Playwright smoke tests.
4. Run database migrations against the target environment.
5. Deploy through Vercel.
6. Verify app routes:
   - `/`
   - `/admin`
   - `/api/health` if implemented.
7. Upload or confirm active release documents.
8. Run smoke questions against the active release.
9. Confirm citations, confidence, feedback, and checklist generation.

## Rollback

Application rollback:

1. Revert to the previous known-good Vercel deployment.
2. Confirm APIs and UI load.
3. Re-run smoke questions.

Document release rollback:

1. Reactivate the previous release version.
2. Confirm chat uses the previous active version.
3. Keep failed release documents archived until reviewed.

Database rollback:

- Avoid destructive migrations for MVP.
- For schema changes, prepare explicit down migration or restore from backup.
- Test migration rollback in staging before production.

## Production Readiness Gates

- Static checks pass.
- API integration tests pass.
- Playwright smoke tests pass.
- Admin route protection verified.
- No secrets in repository.
- Audit logging enabled for chat, retrieval, model, token usage, and feedback events.
- P95 chat response is within MVP target in staging.

## References

- `spec/Architecture.md`
- `spec/Techstack.md`
- `spec/Testing-Plan.md`
- `spec/support/Environment.md`
- `spec/support/Operations-Runbook.md`
- `spec/support/Security.md`

