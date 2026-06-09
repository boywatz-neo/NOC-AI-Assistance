# Security Notes

## MVP Security Baseline

- Keep all Azure OpenAI, database, and storage credentials server-side only.
- Protect admin routes with at least Basic Auth or Vercel Authentication.
- Restrict production access using Vercel Firewall/IP allowlisting or an enterprise gateway.
- Do not expose raw document download URLs to unauthenticated users.
- Store audit logs for user prompts, response ids, citation ids, model name, and token usage.
- Do not store PII unless approved by IT Security.

## Data Privacy

- Production LLM provider should be Azure OpenAI.
- Avoid public OpenAI API for production unless a future policy change approves it.
- Prefer Azure Blob Storage and Azure-hosted PostgreSQL if data residency policy requires Azure-only storage.

## Admin Controls

- Admin upload must validate file type and size.
- Only PDF is accepted in MVP.
- Metadata fields must be validated before ingestion.
- Failed ingestion must not activate a release.
- Activation must be transactional so only one release is active.

## Prompt And RAG Controls

- Instruct the model to answer only from retrieved context.
- Require citations for factual configuration advice.
- If retrieved context is weak, return a low-confidence clarification response.
- Log retrieval scores and chunk ids for review.

## Future Security Work

- SSO/AD integration.
- Role-based access control.
- Private network connectivity.
- Secrets rotation runbook.
- Vendor document access classification.

