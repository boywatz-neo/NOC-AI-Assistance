# RAID Log

RAID tracks risks, assumptions, issues, and dependencies for project governance.

## Risks

| ID | Risk | Impact | Probability | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| R-001 | Azure OpenAI target model is not available in the required region. | High | Medium | Confirm model availability before implementation; keep fallback model deployment documented. | IT Infra | open |
| R-002 | Vercel access model may not satisfy intranet-only requirement. | High | Medium | Decide between Vercel Firewall, Vercel Authentication, IP allowlist, or enterprise gateway. | IT Security | open |
| R-003 | Large PDFs exceed serverless processing limits. | High | Medium | Use queued ingestion, split processing, or external worker if required. | Tech Lead | open |
| R-004 | Scanned PDFs reduce extraction quality. | Medium | Medium | Validate vendor PDFs early; defer OCR-heavy support or add OCR service. | Document Owner | open |
| R-005 | RAG answers may cite weak chunks or miss required pages. | High | Medium | Use golden dataset evaluation and improve chunking/retrieval filters. | AI Engineer | open |
| R-006 | Token cost exceeds budget. | Medium | Medium | Track token usage, cap context size, evaluate embedding/model alternatives. | PM / Finance | open |

## Assumptions

| ID | Assumption | Validation Needed | Owner | Status |
|---|---|---|---|---|
| A-001 | Vendor PDFs have usable text layer for MVP. | Test extraction on representative files. | Document Owner | open |
| A-002 | Organization can provision Azure OpenAI. | Confirm subscription, region, quota, and model availability. | IT Infra | open |
| A-003 | Basic Auth, Vercel Authentication, or IP allowlist is acceptable for MVP admin access. | Security review. | IT Security | open |
| A-004 | PostgreSQL vector search is sufficient for MVP scale. | Retrieval and performance tests. | Tech Lead | open |
| A-005 | 25 concurrent users is enough for MVP validation. | Stakeholder confirmation. | PM | open |

## Issues

| ID | Issue | Impact | Owner | Status |
|---|---|---|---|---|
| I-001 | Final production access-control model is undecided. | Blocks production hardening. | IT Security | open |
| I-002 | Audit log retention period is undecided. | Blocks compliance configuration. | PM / IT Security | open |
| I-003 | PDF size and file count are undecided. | Blocks ingestion performance sizing. | Document Owner | open |

## Dependencies

| ID | Dependency | Needed By | Owner | Status |
|---|---|---|---|---|
| D-001 | Azure OpenAI endpoint, API version, chat deployment, embedding deployment. | Chat and checklist APIs. | IT Infra | open |
| D-002 | PostgreSQL database with vector extension. | Data model and retrieval. | Tech Lead / IT Infra | open |
| D-003 | Blob storage for original PDFs. | Document ingestion. | IT Infra | open |
| D-004 | Representative vendor PDF sample set. | Ingestion and RAG evaluation. | Document Owner | open |
| D-005 | Vercel project and deployment access. | Preview, staging, production. | DevOps | open |

