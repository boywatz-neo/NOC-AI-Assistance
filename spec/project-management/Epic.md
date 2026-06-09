# Epic

High-level epics for controlling MVP scope and keeping feature delivery aligned with the product goal.

## EP-01 Foundation And App Shell

Goal: Establish the Next.js App Router project baseline for Vercel deployment.

Scope:

- Scaffold Next.js App Router with TypeScript.
- Add styling, UI component foundation, and layout shell.
- Add environment validation.
- Add CI-ready scripts for checks and tests.
- Add protected admin route structure.

Success outcome:

- App can run locally and build on Vercel.
- Team has a stable base for feature implementation.

## EP-02 Data Platform And Domain Model

Goal: Implement the database, storage, and service boundaries needed for RAG workflows.

Scope:

- Configure managed PostgreSQL.
- Add vector extension support.
- Implement release, document, chunk, conversation, message, feedback, and ingestion job tables.
- Add repository/service layer for domain access.
- Add seed data for development and tests.

Success outcome:

- The system can store document metadata, chunks, embeddings, chat logs, and feedback.

## EP-03 RAG Chat Experience

Goal: Allow NOC operators to ask questions and receive grounded, cited answers.

Scope:

- Implement `/api/chat`.
- Add Azure OpenAI chat and embedding client wrapper.
- Add retrieval against active release chunks.
- Add grounded answer prompt.
- Build chat UI with citations, confidence, copy, and feedback controls.

Success outcome:

- Operators can ask Thai/English questions and get cited answers from indexed content.

## EP-04 Document Ingestion And Version Management

Goal: Let admins upload vendor PDFs, index them, and manage active releases.

Scope:

- Implement admin document upload.
- Store original PDFs.
- Extract text, chunk content, embed chunks, and persist indexing status.
- Implement release activation and archive behavior.
- Show active release status in user-facing UI.

Success outcome:

- Admins can activate a new release and chat retrieval automatically uses it.

## EP-05 Checklist Generator

Goal: Generate configuration checklists from the same trusted knowledge base.

Scope:

- Implement `/api/checklist`.
- Add checklist request form.
- Generate ordered steps with required parameters.
- Include citations where applicable.
- Support copy-to-clipboard for MVP.

Success outcome:

- Operators can generate a practical checklist for common configuration tasks.

## EP-06 Feedback And Quality Loop

Goal: Capture feedback and provide the minimum review workflow for supervisors/admins.

Scope:

- Implement `/api/feedback`.
- Store thumbs up/down and optional comments.
- Link feedback to assistant message, citations, and confidence.
- Add admin feedback review list.

Success outcome:

- The team can review weak answers and improve retrieval, prompts, or documentation.

## EP-07 Security, Observability, And Operations

Goal: Prepare the MVP for controlled deployment and support.

Scope:

- Protect admin routes.
- Add structured logs for chat, retrieval, token usage, and indexing failures.
- Add health check endpoint if needed.
- Configure Vercel deployment environments.
- Add smoke tests and release runbook.

Success outcome:

- MVP can be deployed, monitored, validated, and rolled back.

