# User Stories

Stories are grouped by epic. IDs are stable planning references for tasks, tests, and milestone tracking.

## EP-01 Foundation And App Shell

### US-001 App Shell

As a NOC operator, I want a clean web application shell so that I can access chat and checklist workflows from one place.

Acceptance:

- Main route loads without authentication in MVP.
- Layout supports desktop and tablet widths.
- Active release indicator has a reserved placement.

### US-002 Admin Shell

As an admin, I want a separated admin area so that document and feedback management do not interfere with operator workflows.

Acceptance:

- `/admin` route exists.
- Admin route is protected before production.
- Admin navigation includes documents and feedback.

## EP-02 Data Platform And Domain Model

### US-003 Store Releases And Documents

As a document admin, I want releases and documents stored with metadata so that the system can track active and archived content.

Acceptance:

- Release version, status, and activation timestamps are stored.
- Document category, language, status, and source URI are stored.

### US-004 Store Chunks And Embeddings

As the system, I need searchable document chunks so that chat and checklist generation can retrieve grounded context.

Acceptance:

- Chunks include document, release, page, section, content, hash, and embedding.
- Retrieval can filter by active release.

## EP-03 RAG Chat Experience

### US-005 Ask A Question

As a NOC operator, I want to ask Thai, English, or mixed-language questions so that I can find configuration guidance quickly.

Acceptance:

- User can submit a text question.
- API validates the request.
- System retrieves relevant active-release chunks.

### US-006 Receive Cited Answer

As a NOC operator, I want answers with citations so that I can verify the source before applying configuration changes.

Acceptance:

- Answer includes citations with document name, version, and page.
- Answer includes confidence.
- Low retrieval confidence asks for clarification instead of fabricating an answer.

### US-007 Continue Conversation

As a NOC operator, I want follow-up questions in the same session so that I can refine a task without repeating context.

Acceptance:

- Conversation id is returned and reused.
- Follow-up messages are stored.
- Retrieval still grounds the answer in active release content.

## EP-04 Document Ingestion And Version Management

### US-008 Upload PDF

As a document admin, I want to upload vendor PDFs with metadata so that new releases can be indexed.

Acceptance:

- Upload accepts PDF only.
- Metadata is required and validated.
- Ingestion job is created.

### US-009 Track Indexing Status

As a document admin, I want to see indexing status so that I know when a release is ready.

Acceptance:

- Status shows pending, processing, indexed, or failed.
- Failed jobs expose actionable error details to admins.

### US-010 Activate Release

As a document admin, I want to activate an indexed release so that operators query the latest approved version.

Acceptance:

- Only indexed releases can be activated.
- Previous active release is archived transactionally.
- Chat uses the active release by default.

## EP-05 Checklist Generator

### US-011 Generate Checklist

As a NOC operator, I want to generate a checklist by service type and action so that I can follow a controlled configuration process.

Acceptance:

- Form captures service type, action, and optional context.
- Result includes ordered steps and required parameters.
- Result can be copied.

## EP-06 Feedback And Quality Loop

### US-012 Rate Answer

As a NOC operator, I want to rate an answer so that the team can identify poor or useful responses.

Acceptance:

- Thumbs up/down can be submitted once per answer in the current UI state.
- Feedback links to the assistant message.

### US-013 Review Feedback

As a supervisor, I want to review feedback so that low-quality answers can be corrected through documentation, prompt, or retrieval improvements.

Acceptance:

- Admin can see feedback entries.
- Entries include rating, question/answer reference, confidence, and citations.

## EP-07 Security, Observability, And Operations

### US-014 Protect Admin

As an IT owner, I want admin routes protected so that only authorized users can upload or activate documents.

Acceptance:

- Admin protection is enabled in staging and production.
- Unauthorized access is blocked.

### US-015 Monitor Operations

As an operator of the system, I want logs for important events so that failures can be diagnosed.

Acceptance:

- Chat latency, retrieval scores, token usage, and indexing errors are logged.
- Logs do not expose secrets.

