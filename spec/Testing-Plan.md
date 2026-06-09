# Testing Plan

## Goals

- Prove the MVP works end to end before adding advanced features.
- Catch regressions in RAG retrieval, citation formatting, admin indexing, and API validation.
- Keep tests fast enough for every pull request and broad enough for release validation.

## Test Layers

### Static Checks

- TypeScript strict type checking.
- ESLint for Next.js and React rules.
- Format check with the selected formatter.
- Dependency audit before release.

### Unit Tests

Use Vitest for:

- Request schema validation.
- Chunking logic.
- Citation formatting.
- Confidence calculation.
- Prompt input assembly.
- Active release selection.

### API Integration Tests

Use mocked Azure OpenAI and a test database for:

- `POST /api/chat`
- `POST /api/checklist`
- `POST /api/documents`
- `POST /api/documents/[id]/activate`
- `POST /api/feedback`

Assertions:

- Invalid requests return typed 400 responses.
- Chat answers include citations when retrieval succeeds.
- Low retrieval score does not hallucinate a direct answer.
- Document activation archives previous active release.
- Feedback is linked to an assistant message.

### RAG Evaluation Tests

Create a small golden dataset from sample vendor-like PDFs:

- 20 Thai questions.
- 20 English questions.
- 10 mixed Thai/English questions.
- Expected citation document/page.
- Expected answer rubric.

Metrics:

- Citation hit rate.
- Answer groundedness.
- Refusal/clarification correctness for out-of-scope questions.
- Latency and token usage.

### E2E Tests

Use Playwright for:

- Chat question and cited answer rendering.
- Admin upload form validation.
- Document list status display.
- Active release badge.
- Feedback buttons.
- Checklist generation.

### Performance Tests

MVP gates:

- P95 chat response <= 8 seconds with warm functions.
- Upload/indexing can process the agreed sample PDF size.
- 25 concurrent chat users in staging without elevated error rate.

Post-MVP target:

- P95 chat response <= 5 seconds.
- 50 concurrent users.

## Release Gates

Before MVP demo:

- Typecheck passes.
- Unit tests pass.
- API integration tests pass.
- Playwright smoke suite passes.
- Golden RAG dataset reaches agreed citation and answer quality threshold.
- Manual security smoke test confirms admin routes are protected.

## Test Data Policy

- Use sanitized vendor-like PDFs for automated tests.
- Do not commit real vendor manuals unless the repository access model permits it.
- Keep generated embeddings for tests small and reproducible.

