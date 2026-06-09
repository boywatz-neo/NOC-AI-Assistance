# Implementation Plan

## Phase 0: Pitch Landing And Deployable Baseline

This phase is intentionally narrower than the full foundation epic. Its purpose is to create a Vercel-ready Next.js baseline and a Thai-first pitch landing page with static product mockups for stakeholder sessions.

1. Initialize minimal Next.js App Router project with TypeScript.
2. Add Tailwind CSS and global responsive styling.
3. Build a static landing page that explains problem, MVP solution, target architecture, expected outcomes, and roadmap.
4. Add static mockups for chat workspace, admin document portal, checklist generator, and feedback/quality loop.
5. Add typecheck and build scripts for initial deployment verification.

Exit criteria:

- App runs locally.
- Production build succeeds.
- Landing page is suitable for pitch sessions.
- Static checks pass for the scaffolded app.

Deferred from the original foundation scope:

- Environment variable validation.
- Admin route shell and protection.
- Test tooling beyond typecheck/build.

## Phase 1: Data Model

1. Add PostgreSQL provider and ORM.
2. Create migrations for releases, documents, chunks, conversations, messages, feedback, and jobs.
3. Add seed script with one sample release and sample chunks.
4. Add repository/service layer for active release and search.

Exit criteria:

- Migrations run cleanly.
- Tests can create and query isolated data.

## Phase 2: Chat MVP

1. Implement `/api/chat` request/response contract.
2. Add Azure OpenAI client wrapper.
3. Add embedding and retrieval service.
4. Add grounded answer prompt with citation requirements.
5. Build chat UI with answer, confidence, citations, copy, and feedback controls.

Exit criteria:

- User can ask a question and receive cited answer from seeded chunks.
- Low-confidence path asks for clarification instead of inventing an answer.

## Phase 3: Document Ingestion

1. Implement admin upload form and metadata fields.
2. Store original PDFs in blob storage.
3. Extract text per page.
4. Chunk content with page and section metadata.
5. Generate embeddings and persist chunks.
6. Track ingestion status.

Exit criteria:

- Admin can upload a PDF and see indexed status.
- Chat can retrieve from the uploaded document.

## Phase 4: Version Management

1. Add release list and document list UI.
2. Implement activate release transaction.
3. Show active release badge in chat.
4. Ensure retrieval filters by active release.

Exit criteria:

- Activating a new release archives the previous release.
- Chat uses the active release by default.

## Phase 5: Checklist And Feedback

1. Implement `/api/checklist`.
2. Add checklist form and result component.
3. Implement `/api/feedback`.
4. Add admin feedback list.

Exit criteria:

- Checklist generation works from retrieved context.
- Feedback is saved and visible to admin.

## Phase 6: Hardening And Demo Readiness

1. Add Playwright smoke tests.
2. Add RAG golden dataset checks.
3. Add structured logging for API latency, token usage, retrieval scores, and indexing errors.
4. Configure Vercel environment variables.
5. Create demo runbook and rollback notes.

Exit criteria:

- MVP release gates in Testing Plan pass.
- Demo environment is reproducible.

## Suggested Task Order

1. Scaffold app.
2. Database schema.
3. Seeded RAG chat.
4. Real document upload and indexing.
5. Admin release activation.
6. Checklist.
7. Feedback dashboard.
8. Test and deploy.
