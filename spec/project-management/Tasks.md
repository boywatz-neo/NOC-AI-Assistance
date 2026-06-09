# Tasks

Implementation task backlog for the MVP. Status values: `todo`, `doing`, `blocked`, `done`.

## Phase 0: Foundation

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-001 | Scaffold Next.js App Router project with TypeScript. | EP-01 | P0 | todo | None |
| T-002 | Add Tailwind CSS, component primitives, and base layout. | EP-01 | P0 | todo | T-001 |
| T-003 | Add environment variable validation. | EP-01 | P0 | todo | T-001 |
| T-004 | Add test tooling and baseline scripts. | EP-01 | P0 | todo | T-001 |
| T-005 | Add protected admin route shell. | EP-01 | P0 | todo | T-002 |

## Phase 1: Data Model

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-101 | Select PostgreSQL provider for MVP. | EP-02 | P0 | todo | None |
| T-102 | Configure ORM and database connection. | EP-02 | P0 | todo | T-101 |
| T-103 | Create schema migrations for core tables. | EP-02 | P0 | todo | T-102 |
| T-104 | Enable vector extension and embedding column support. | EP-02 | P0 | todo | T-101 |
| T-105 | Add seed data for one release and sample chunks. | EP-02 | P1 | todo | T-103 |
| T-106 | Add repository/service layer for releases, chunks, messages, and feedback. | EP-02 | P1 | todo | T-103 |

## Phase 2: RAG Chat

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-201 | Implement Azure OpenAI client wrapper. | EP-03 | P0 | todo | T-003 |
| T-202 | Implement query embedding service. | EP-03 | P0 | todo | T-201 |
| T-203 | Implement active-release retrieval service. | EP-03 | P0 | todo | T-106, T-202 |
| T-204 | Implement grounded answer prompt and citation mapping. | EP-03 | P0 | todo | T-203 |
| T-205 | Implement `POST /api/chat`. | EP-03 | P0 | todo | T-204 |
| T-206 | Build chat UI. | EP-03 | P0 | todo | T-002, T-205 |
| T-207 | Add low-confidence clarification behavior. | EP-03 | P1 | todo | T-205 |

## Phase 3: Document Ingestion And Versioning

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-301 | Configure blob storage integration. | EP-04 | P0 | todo | T-003 |
| T-302 | Implement document upload API. | EP-04 | P0 | todo | T-103, T-301 |
| T-303 | Build admin upload form. | EP-04 | P0 | todo | T-005, T-302 |
| T-304 | Implement PDF text extraction. | EP-04 | P0 | todo | T-302 |
| T-305 | Implement chunking with page metadata. | EP-04 | P0 | todo | T-304 |
| T-306 | Generate embeddings and persist chunks. | EP-04 | P0 | todo | T-202, T-305 |
| T-307 | Show indexing status in admin. | EP-04 | P1 | todo | T-302, T-306 |
| T-308 | Implement release activation transaction. | EP-04 | P0 | todo | T-103 |
| T-309 | Show active release badge. | EP-04 | P1 | todo | T-308 |

## Phase 4: Checklist And Feedback

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-401 | Implement `POST /api/checklist`. | EP-05 | P1 | todo | T-203, T-204 |
| T-402 | Build checklist form and result UI. | EP-05 | P1 | todo | T-401 |
| T-403 | Add copy checklist action. | EP-05 | P2 | todo | T-402 |
| T-501 | Implement `POST /api/feedback`. | EP-06 | P1 | todo | T-106, T-205 |
| T-502 | Add answer rating controls. | EP-06 | P1 | todo | T-206, T-501 |
| T-503 | Build admin feedback review list. | EP-06 | P2 | todo | T-005, T-501 |

## Phase 5: Hardening And Release

| ID | Task | Epic | Priority | Status | Dependencies |
|---|---|---|---|---|---|
| T-601 | Add structured application logs. | EP-07 | P1 | todo | T-205, T-302 |
| T-602 | Add admin protection in staging and production. | EP-07 | P0 | todo | T-005 |
| T-603 | Add API integration tests. | EP-07 | P1 | todo | T-205, T-302, T-501 |
| T-604 | Add Playwright smoke tests. | EP-07 | P1 | todo | T-206, T-303 |
| T-605 | Build RAG golden dataset and evaluation script. | EP-07 | P1 | todo | T-205 |
| T-606 | Configure Vercel environments. | EP-07 | P0 | todo | T-001, T-101 |
| T-607 | Run staging deployment and release gates. | EP-07 | P0 | todo | T-601, T-602, T-603, T-604 |

