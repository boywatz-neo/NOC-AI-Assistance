# NOC AI Assistant

Spec-driven MVP for a RAG-based chatbot web application used by NOC operators to search vendor PDF manuals, receive cited answers, and generate configuration checklists.

## Current Direction

This repository is being reshaped from the original split frontend/backend proposal into a Vercel-ready Next.js monolith:

- Next.js App Router for UI and server routes.
- Next.js Route Handlers under `/app/api/*` as the backend API.
- Azure OpenAI for chat and embeddings.
- Managed PostgreSQL with pgvector-compatible vector search for MVP simplicity.
- Vercel deployment target with environment-based configuration.

The original product requirements remain in [PRD.md](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/PRD.md). The MVP implementation specs live under [spec](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec).

## Spec Index

- [Architecture](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Architecture.md)
- [Tech Stack](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Techstack.md)
- [Database](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Database.md)
- [Testing Plan](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Testing-Plan.md)
- [Implementation Plan](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Implementing-Plan.md)
- [MVP PRD](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/PRD.md)
- [API Contract](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/API-Contract.md)
- [Environment Variables](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Environment.md)
- [Security Notes](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Security.md)
- [Operations Runbook](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Operations-Runbook.md)

## MVP Scope

Included:

- Chat UI with Thai/English questions.
- RAG answer generation with citations, confidence, and active document version.
- PDF upload and indexing portal for admins.
- Document version metadata and archive flow.
- Basic checklist generation.
- Feedback collection on AI answers.

Deferred:

- Separate FastAPI backend.
- Docker/Nginx intranet deployment.
- ITSM integration.
- SSO/Active Directory integration.
- Real-time monitoring system integration.
- Advanced analytics dashboard.

