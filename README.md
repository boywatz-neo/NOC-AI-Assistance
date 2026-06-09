# NOC AI Assistant Prototype

Spec-driven prototype for the PRD in [spec/PRD.md](/Users/chopin/projects/e-learning/AI%20Workshop/project-script/spec/PRD.md). The current build is a Vercel-friendly Next.js frontend with mock API routes that model the Phase 1 product experience while keeping backend integration points explicit.

## What is included

- PRD-traceable prototype for chat, checklist generation, active release visibility, admin document inventory, and feedback review
- Contract-first mock API endpoints under `app/api/*`
- Supporting implementation specs in `spec/`
- Vercel-compatible Next.js app structure with no custom server requirement

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel deployment

1. Import this repository into Vercel.
2. Use the default Next.js framework preset.
3. Add environment variables from `.env.example` as you connect real Azure and database services.
4. Deploy. No `vercel.json` is required for the current prototype.

## Suggested next implementation step

Replace the mock handlers with:

- FastAPI service for document ingestion, RAG orchestration, admin workflows, and audit logging
- Vercel frontend calls to that backend via environment-configured base URLs
- Azure OpenAI, Azure AI Search, Blob Storage, and PostgreSQL integrations per the implementation spec
