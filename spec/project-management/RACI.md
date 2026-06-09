# RACI

RACI defines accountability for MVP delivery. Role names can be mapped to real people once the team is confirmed.

Legend:

- R: Responsible
- A: Accountable
- C: Consulted
- I: Informed

| Activity | PM | Tech Lead | Frontend Engineer | Backend/RAG Engineer | AI Engineer | DevOps | IT Security | Document Owner | NOC Supervisor |
|---|---|---|---|---|---|---|---|---|---|
| MVP scope approval | A | C | I | I | C | I | C | C | C |
| Architecture decisions | C | A | C | R | C | C | C | I | I |
| Next.js scaffold | I | A | R | C | I | C | I | I | I |
| Database schema | I | A | I | R | C | C | C | I | I |
| RAG retrieval design | I | A | I | C | R | I | C | C | C |
| Chat UI | I | C | R | C | C | I | I | I | C |
| Document upload flow | C | A | R | R | C | C | C | C | I |
| Release activation flow | C | A | C | R | C | I | C | C | C |
| Checklist generation | C | A | R | C | R | I | C | C | C |
| Feedback review flow | C | A | R | R | C | I | I | I | R |
| Test strategy | A | R | C | C | C | I | C | I | I |
| Security review | C | C | I | I | C | C | A | I | I |
| Vercel deployment | I | C | I | I | I | A/R | C | I | I |
| Production release approval | A | C | I | I | C | C | C | I | C |

