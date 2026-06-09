# Change Control

Process for managing changes to scope, architecture, schedule, and release criteria.

## When A Change Request Is Required

Create a change request when a proposed change affects:

- MVP scope.
- Architecture.
- Tech stack.
- API contract.
- Database schema.
- Deployment model.
- Security posture.
- Timeline or milestone exit criteria.

## Change Request Template

```text
Change ID:
Title:
Requester:
Date:

Summary:

Reason:

Impacted specs:
- 

Impacted epics/stories/tasks:
- 

Impact:
- Scope:
- Timeline:
- Cost:
- Risk:
- Security:

Decision:
- Approved / Rejected / Deferred

Approver:
Decision date:
```

## Review Rules

- Product scope changes require PM approval.
- Architecture, database, API, and deployment changes require Tech Lead approval.
- Security-impacting changes require IT Security review.
- Changes to Azure OpenAI, data retention, or network exposure require IT owner review.
- Approved changes must update the relevant spec and PM artifact in the same change set.

## Versioning

- Keep change IDs stable.
- Link change requests to commits, pull requests, or issue tracker items when available.
- Do not silently change acceptance criteria after implementation has started.

