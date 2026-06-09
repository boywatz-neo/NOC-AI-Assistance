# Implementation Specification

## Objective

Translate [PRD.md](/Users/chopin/projects/e-learning/AI%20Workshop/project-script/spec/PRD.md) into a buildable Phase 1 implementation with a Vercel-hosted prototype frontend and clear seams for later Azure-backed production architecture.

## Prototype scope

The current prototype covers these PRD items:

- `F-01` AI chat interface with citations, confidence badge, and feedback controls
- `F-02` Checklist generator interaction and parameter prompts
- `F-03` Active release visibility and archived version display
- `F-04` Admin-facing document inventory and indexing status view
- `F-05` Feedback log review UI for low-confidence answers

The prototype intentionally mocks:

- LLM orchestration
- Hybrid retrieval
- PDF processing
- Persistent storage
- Authentication and intranet-only enforcement

## Delivery architecture

### Prototype

- Frontend/runtime: Next.js App Router on Vercel
- API surface: Next.js route handlers for mocked responses
- State: in-memory mock data only
- Styling: Tailwind CSS

### Target production architecture

- Frontend: Next.js on Vercel or internal container platform
- Backend: FastAPI service
- Retrieval: Azure OpenAI + Azure AI Search hybrid search
- Storage: PostgreSQL + Azure Blob Storage
- Background jobs: document processing worker for parsing, chunking, embedding, and indexing

## Functional mapping

| PRD ID | Implementation note | Prototype status |
|---|---|---|
| `F-01` | `/api/chat` returns answer text, citations, confidence | Implemented as mock |
| `F-02` | `/api/checklist` returns ordered steps with required parameters | Implemented as mock |
| `F-03` | active release badge and document table show status/version | Implemented as mock |
| `F-04` | admin dashboard shows upload area, inventory, statuses | Implemented as UI placeholder |
| `F-05` | feedback cards highlight low confidence answers | Implemented as mock |

## Non-functional interpretation

- Response time target for prototype: under 1 second for mock endpoints
- Browser support: modern Chrome and Edge through standard Next.js output
- Responsiveness: desktop and tablet layouts supported
- Security note: Vercel prototype is for demonstration only and does not satisfy the PRD intranet-only requirement

## Transition plan to production

1. Move route handler logic into a FastAPI backend.
2. Introduce shared API schema validation and typed DTOs.
3. Replace mock data with PostgreSQL metadata and Azure search retrieval.
4. Add admin upload pipeline and asynchronous indexing worker.
5. Enforce admin protection and private network access at the edge/network layer.
