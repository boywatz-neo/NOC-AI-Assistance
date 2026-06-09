# Release Plan

Release strategy for moving the MVP from specification to demo and production.

## Release Stages

### R0: Specification Baseline

Purpose:

- Confirm MVP scope, architecture, stack, and PM plan.

Deliverables:

- Product and technical specs.
- PM artifacts.
- Deployment plan.

Gate:

- Stakeholders agree MVP scope is sufficient.

### R1: Technical Foundation

Purpose:

- Establish the application scaffold and deployment pipeline.

Deliverables:

- Next.js app shell.
- Vercel preview deployment.
- Test tooling.
- Environment validation.

Gate:

- Vercel preview build passes.
- Static checks pass.

### R2: Seeded RAG Demo

Purpose:

- Demonstrate RAG chat using seeded content before real ingestion.

Deliverables:

- `/api/chat`.
- Seeded chunks.
- Chat UI with citations and confidence.

Gate:

- Demo questions return grounded cited answers.

### R3: Document Ingestion Demo

Purpose:

- Demonstrate PDF upload, indexing, and retrieval from real uploaded content.

Deliverables:

- Admin upload.
- Blob storage integration.
- PDF extraction, chunking, embedding.
- Indexing status.

Gate:

- Uploaded document can be queried through chat.

### R4: Workflow Complete MVP

Purpose:

- Complete operator/admin workflows.

Deliverables:

- Release activation.
- Checklist generation.
- Feedback submission.
- Admin feedback review.

Gate:

- Playwright smoke tests pass for critical workflows.

### R5: Staging Release Candidate

Purpose:

- Validate MVP quality and security before production.

Deliverables:

- Staging deployment.
- Admin protection.
- RAG evaluation.
- Smoke test results.
- Rollback validation.

Gate:

- Acceptance criteria in `Acceptance-Criteria.md` pass or deviations are approved.

## Branching Recommendation

- Use feature branches for implementation.
- Use preview deployments for feature validation.
- Use a release branch only when preparing a staged release candidate.
- Merge to `main` after approval.

## Release Notes Template

```text
Release:
Date:
Environment:

Included:
- 

Known Limitations:
- 

Validation:
- Typecheck:
- Unit tests:
- API tests:
- Playwright:
- RAG evaluation:

Rollback:
- Previous Vercel deployment:
- Previous active document release:
```

