# Milestones

Milestones translate the implementation phases into delivery gates.

## M0: Project Baseline Approved

Target outcome:

- MVP scope is approved.
- Architecture and stack are agreed.
- PM docs are available.

Exit criteria:

- `spec/PRD.md` approved.
- `spec/Architecture.md` approved.
- `spec/Techstack.md` approved.
- Epics, stories, tasks, and milestones are available.

## M1: Pitch Landing Ready

Target outcome:

- Next.js app shell is scaffolded and deployable with a Thai-first pitch landing page.

Exit criteria:

- App runs locally.
- Production build passes.
- Landing page explains project overview, problem, MVP solution, target architecture, expected outcomes, and roadmap.
- Static product mockups are visible for chat, admin document portal, checklist generator, and feedback loop.
- Static checks pass for the scaffolded app.

Related epics:

- EP-01

## M2: Data Platform Ready

Target outcome:

- Database and storage model supports RAG workflows.

Exit criteria:

- PostgreSQL connection works.
- Migrations run cleanly.
- Vector extension is usable.
- Seed data can be queried.

Related epics:

- EP-02

## M3: Seeded Chat MVP

Target outcome:

- Chat works against seeded chunks.

Exit criteria:

- `/api/chat` returns cited answers.
- Chat UI renders answer, citations, and confidence.
- Low-confidence path asks for clarification.
- Chat API integration tests pass.

Related epics:

- EP-03

## M4: Document Ingestion MVP

Target outcome:

- Admin can upload and index PDFs.

Exit criteria:

- PDF upload works with metadata.
- Text extraction, chunking, embedding, and persistence work.
- Indexing status is visible.
- Chat can retrieve from uploaded document chunks.

Related epics:

- EP-04

## M5: Release Version Control Ready

Target outcome:

- Admin can control active release.

Exit criteria:

- Indexed release can be activated.
- Previous active release is archived.
- Chat filters by active release.
- Active release badge is visible.

Related epics:

- EP-04

## M6: Operator Workflow Complete

Target outcome:

- Operator can use chat, checklist, and feedback workflows.

Exit criteria:

- Checklist generation works.
- Feedback submission works.
- Admin feedback review list exists.
- Playwright smoke tests cover main workflows.

Related epics:

- EP-03
- EP-05
- EP-06

## M7: MVP Release Candidate

Target outcome:

- Staging environment is ready for demo/release approval.

Exit criteria:

- Staging deployment passes release gates.
- RAG evaluation passes agreed threshold.
- Admin protection is verified.
- Deployment and rollback runbook has been exercised.

Related epics:

- EP-07
