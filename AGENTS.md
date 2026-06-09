# AGENTS.md

Guidance for AI coding agents and contributors working in this repository.

## Project Context

NOC AI Assistant is a spec-driven MVP for a RAG-based chatbot web application. The product helps NOC operators ask Thai/English questions against vendor PDF manuals, receive cited answers, and generate configuration checklists.

The project direction is a Vercel-ready Next.js monolith:

- Next.js App Router for UI.
- Next.js Route Handlers under `/app/api/*` for backend APIs.
- Azure OpenAI for chat and embeddings.
- PostgreSQL with vector support for MVP retrieval.
- Blob storage for source PDFs.
- Vercel as the primary deployment target.

Do not reintroduce the old split FastAPI backend, Docker/Nginx deployment plan, or mandatory Azure AI Search dependency unless the specs are explicitly updated first.

## Source Of Truth

Read these files before making architectural or implementation decisions:

- `PRD.md`: original full product context.
- `spec/PRD.md`: MVP product scope.
- `spec/Architecture.md`: target architecture.
- `spec/Techstack.md`: approved stack and versions.
- `spec/Database.md`: data model direction.
- `spec/Testing-Plan.md`: expected verification approach.
- `spec/Implementing-Plan.md`: implementation sequence.
- `spec/support/API-Contract.md`: API request/response contracts.
- `spec/support/Environment.md`: environment variables.
- `spec/support/Security.md`: security baseline.
- `spec/support/Operations-Runbook.md`: deployment and operational notes.
- `DEPLOYMENT.md`: Vercel deployment environments, release gates, and rollback.
- `spec/project-management/README.md`: project-management artifact index.
- `spec/project-management/Epic.md`: high-level feature groups.
- `spec/project-management/User-Stories.md`: user-centered story backlog.
- `spec/project-management/Tasks.md`: task backlog with priorities and dependencies.
- `spec/project-management/Milestones.md`: delivery gates.
- `spec/project-management/Acceptance-Criteria.md`: MVP release acceptance criteria.
- `spec/project-management/RAID-Log.md`: risks, assumptions, issues, and dependencies.
- `spec/project-management/RACI.md`: responsibility matrix.
- `spec/project-management/Release-Plan.md`: release stages and release-note template.
- `spec/project-management/Change-Control.md`: scope/spec change process.

When code and specs conflict, pause and update the relevant spec or call out the conflict before implementing a broad change.

## Repository Shape

Current important files:

```text
PRD.md
README.md
README.me
AGENTS.md
DEPLOYMENT.md
spec/
  Architecture.md
  Database.md
  Implementing-Plan.md
  PRD.md
  Techstack.md
  Testing-Plan.md
  support/
    API-Contract.md
    Environment.md
    Operations-Runbook.md
    Security.md
  project-management/
    Acceptance-Criteria.md
    Change-Control.md
    Epic.md
    Milestones.md
    RACI.md
    RAID-Log.md
    README.md
    Release-Plan.md
    Tasks.md
    User-Stories.md
```

The implementation source tree may not exist yet. When creating it, follow the planned Next.js App Router structure:

```text
app/
  api/
  admin/
  page.tsx
components/
lib/
server/
prisma/ or db/
tests/
```

## Development Rules

- Keep the project spec-driven: update specs when changing architecture, API contracts, database shape, or deployment assumptions.
- Keep project-management docs current when changing MVP scope, epics, stories, tasks, milestones, owners, risks, acceptance criteria, or release plans.
- Use `spec/project-management/Change-Control.md` when a change affects scope, architecture, timeline, database schema, API contracts, deployment model, or security posture.
- Prefer small, focused commits.
- Do not commit real vendor PDFs, secrets, production data, or generated embeddings from confidential documents.
- Keep credentials in environment variables only.
- Use TypeScript strict mode once the app is scaffolded.
- Use Node.js runtime for API routes that touch PDF parsing, PostgreSQL, Azure SDKs, or storage SDKs.
- Do not use Edge runtime for ingestion or database-heavy endpoints unless the dependency constraints have been verified.
- Use structured request validation for every API route, preferably Zod.
- Keep user-facing answers grounded in retrieved context and always return citations for configuration guidance.

## Stack Expectations

Follow `spec/Techstack.md` for exact version guidance. Current baseline:

- Next.js `16.2.7`
- React `19.2.7`
- TypeScript `6.0.3`
- Tailwind CSS `4.3.0`
- Azure OpenAI for production LLM access
- PostgreSQL with vector extension for MVP retrieval
- Vitest, React Testing Library, and Playwright for tests

If a package version has likely changed, verify from official sources before updating the spec.

## API Guidelines

Expected MVP API routes:

- `POST /api/chat`
- `POST /api/checklist`
- `POST /api/documents`
- `GET /api/documents`
- `POST /api/documents/[id]/activate`
- `POST /api/feedback`

All API responses should use the error shape defined in `spec/support/API-Contract.md`.

## Database Guidelines

Use the model in `spec/Database.md` as the baseline:

- `release_versions`
- `documents`
- `document_chunks`
- `conversations`
- `messages`
- `feedback`
- `ingestion_jobs`

Normal chat retrieval must filter by the active release version unless an admin/debug flow explicitly requests otherwise.

## Security Guidelines

- Production LLM calls must use Azure OpenAI unless the security spec is updated.
- Admin routes must be protected before production deployment.
- File upload must validate MIME type, extension, size, and metadata.
- Do not expose raw storage credentials or signed URLs to unauthenticated users.
- Do not store PII unless approved and documented.
- Log retrieval chunk ids, model deployment names, token usage, and confidence for review.

## Testing Expectations

When implementation exists, run the relevant checks before finalizing a change:

- Typecheck.
- Lint.
- Unit tests for changed services.
- API integration tests for changed routes.
- Playwright smoke tests for changed user flows.

If tests cannot be run because the app is not scaffolded or dependencies are missing, state that clearly in the final response.

## Project Management Expectations

- Map significant implementation work to an epic, story, task, or milestone when possible.
- Update `spec/project-management/Tasks.md` when task status, priority, or dependencies change.
- Update `spec/project-management/Milestones.md` when delivery gates change.
- Update `spec/project-management/RAID-Log.md` when new risks, assumptions, issues, or dependencies are discovered.
- Update `spec/project-management/Acceptance-Criteria.md` before changing release gates.
- Use `DEPLOYMENT.md` and `spec/project-management/Release-Plan.md` for deployment and release workflow changes.

## Git Notes

- The fork remote is expected to be `https://github.com/boywatz-neo/NOC-AI-Assistance.git`.
- Prefer working on feature branches.
- Do not revert user changes unless explicitly requested.
- Before committing, inspect `git status --short` and stage only the intended files.
