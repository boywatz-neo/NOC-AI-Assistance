# Acceptance Criteria

Project-level acceptance criteria for MVP release.

## Product Acceptance

- Operators can ask Thai, English, or mixed-language questions.
- Answers include citations with document name, version, and page.
- Answers include confidence level.
- Low-confidence or out-of-scope questions do not produce unsupported configuration advice.
- Operators can generate a basic configuration checklist.
- Operators can submit answer feedback.
- Admins can upload PDFs with metadata.
- Admins can see indexing status.
- Admins can activate an indexed release.
- Chat uses the active release by default.

## Technical Acceptance

- Next.js App Router application builds successfully on Vercel.
- API routes use Node.js runtime where required by dependencies.
- API requests are validated.
- Database migrations run cleanly.
- Retrieval filters by active release.
- Original PDFs are stored outside the Vercel filesystem.
- Secrets are read from environment variables only.

## Quality Acceptance

- Typecheck passes.
- Unit tests pass for changed domain logic.
- API integration tests pass for MVP routes.
- Playwright smoke tests pass for chat, admin upload, release badge, feedback, and checklist.
- RAG golden dataset meets agreed citation and answer quality threshold.

## Security Acceptance

- Admin routes are protected in staging and production.
- Production LLM calls use Azure OpenAI.
- Uploads validate file type and size.
- No secrets are committed.
- Logs do not expose credentials or raw secrets.

## Performance Acceptance

- P95 chat response is <= 8 seconds in staging for MVP.
- Staging supports 25 concurrent chat users for validation.
- Indexing completes for agreed sample PDF size.

## Deployment Acceptance

- Vercel deployment environments are configured.
- Required environment variables are present.
- Rollback to previous Vercel deployment is documented.
- Previous document release can be reactivated if a new release fails validation.

