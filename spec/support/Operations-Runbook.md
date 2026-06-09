# Operations Runbook

## Deploy

1. Configure Vercel project.
2. Set production environment variables.
3. Run database migrations.
4. Deploy from main branch.
5. Verify `/`, `/admin`, and `/api/health` if implemented.

## Document Release Update

1. Admin creates or selects release version.
2. Upload vendor PDFs with metadata.
3. Wait for indexing status `indexed`.
4. Run a small validation query set.
5. Activate release.
6. Confirm active release badge in chat.

## Incident Checks

### Chat Errors

- Check Vercel function logs.
- Confirm Azure OpenAI quota and deployment availability.
- Confirm database connectivity.
- Check whether active release has indexed chunks.

### Slow Responses

- Inspect retrieval latency.
- Inspect Azure OpenAI latency and token usage.
- Reduce retrieved chunk count if prompts are too large.
- Check cold start behavior.

### Bad Answers

- Review citations.
- Check if source chunks contain the needed content.
- Add feedback entry to review list.
- Improve chunking, metadata filters, or prompt constraints.

## Rollback

- Revert Vercel deployment to previous known-good deployment.
- If document activation caused the issue, reactivate previous release version.
- Keep archived release chunks available for rollback.

