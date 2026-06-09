# MVP PRD

## Product

NOC AI Assistant is a web application for NOC operators who need fast, cited answers from vendor PDF manuals and controlled configuration checklists.

## MVP Objective

Deliver a Vercel-deployable Next.js App Router application that proves the RAG workflow end to end:

1. Admin uploads vendor PDFs with release metadata.
2. The system extracts, chunks, embeds, and stores searchable document chunks.
3. Operators ask Thai/English questions in chat.
4. The assistant answers with citations, confidence, and active release context.
5. Operators can generate a basic configuration checklist from the same knowledge base.

## Primary Users

- NOC Operator: asks questions, copies answers, generates checklists.
- NOC Supervisor: reviews feedback and low-confidence answers.
- IT / Document Admin: uploads PDFs, manages active document releases.

## MVP Functional Scope

### F-01 Chat

- Mixed Thai/English input.
- Multi-turn conversation within one browser session.
- Cited answers using document name, version, page, and chunk references.
- Confidence value: `high`, `medium`, or `low`.
- Copy answer and submit thumbs up/down feedback.

### F-02 Checklist Generator

- User enters service type, action, and optional customer context.
- System generates ordered steps and parameters to verify.
- Copy checklist to clipboard.
- PDF export is deferred unless time remains.

### F-03 Document Upload

- Admin uploads PDF files.
- Admin enters metadata: document name, version, release date, category, language.
- System indexes in background using server-side job orchestration appropriate for Vercel.
- Admin can mark a completed release as active.

### F-04 Version Management

- Every document belongs to a release version.
- Only one release version is active for default user queries.
- Archived versions remain queryable only through admin/debug filters in MVP.

### F-05 Feedback

- Store rating, optional comment, question, answer id, citations, and confidence.
- Provide a simple admin list view for review.

## Non-Functional MVP Targets

- P95 chat response: <= 8 seconds for indexed documents and warm functions.
- Concurrent users: 25 for MVP validation, scalable to 50 after load testing.
- Browser support: latest Chrome and Edge.
- Deployment target: Vercel.
- Data privacy: Azure OpenAI only, no public OpenAI API for production.
- Access: Vercel protection, IP allowlist, or upstream intranet gateway for MVP.

## Out Of Scope For MVP

- Separate FastAPI backend.
- Azure AI Search as mandatory vector store.
- Native mobile app.
- SSO/AD.
- ITSM/ticketing integration.
- Live network monitoring integration.
- OCR-heavy scanned PDF support beyond best-effort extraction.

## Open Decisions

- Final Azure region and model availability.
- Maximum PDF size and monthly token budget.
- Required audit log retention period.
- Whether production must be accessible only through private network connectivity or Vercel access controls are acceptable.

