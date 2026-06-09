# NOC AI Assistant

Spec-driven MVP for a RAG-based chatbot web application used by NOC operators to search vendor PDF manuals, receive cited answers, and generate configuration checklists.

## Current Direction

This repository is being reshaped from the original split frontend/backend proposal into a Vercel-ready Next.js monolith:

- Next.js App Router for UI and server routes.
- Next.js Route Handlers under `/app/api/*` as the backend API.
- Azure OpenAI for chat and embeddings.
- Managed PostgreSQL with pgvector-compatible vector search for MVP simplicity.
- Vercel deployment target with environment-based configuration.

The original product requirements remain in [PRD.md](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/PRD.md). The MVP implementation specs live under [spec](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec). Project-management artifacts live under [spec/project-management](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management).

## Spec Index

Core product and technical specs:

- [Architecture](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Architecture.md)
- [Tech Stack](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Techstack.md)
- [Database](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Database.md)
- [Testing Plan](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Testing-Plan.md)
- [Implementation Plan](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/Implementing-Plan.md)
- [MVP PRD](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/PRD.md)

Support and operations:

- [API Contract](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/API-Contract.md)
- [Environment Variables](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Environment.md)
- [Security Notes](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Security.md)
- [Operations Runbook](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/support/Operations-Runbook.md)
- [Deployment](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/DEPLOYMENT.md)

Project management:

- [Project Management](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/README.md)
- [Epics](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Epic.md)
- [User Stories](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/User-Stories.md)
- [Tasks](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Tasks.md)
- [Milestones](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Milestones.md)
- [Acceptance Criteria](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Acceptance-Criteria.md)
- [RAID Log](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/RAID-Log.md)
- [RACI](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/RACI.md)
- [Release Plan](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Release-Plan.md)
- [Change Control](/Users/Thanawat/Workspace/workshop/Workshop#3-Team/NOC-AI-Assistance/spec/project-management/Change-Control.md)

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
