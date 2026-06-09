# Tech Stack

Version check date: 2026-06-09.

## Official Version References

- Next.js latest from npm registry: `16.2.7` and requires Node.js `>=20.9.0` (`https://registry.npmjs.org/next/latest`).
- React latest from npm registry: `19.2.7` (`https://registry.npmjs.org/react/latest`).
- TypeScript latest from npm registry: `6.0.3` (`https://registry.npmjs.org/typescript/latest`).
- Tailwind CSS latest from npm registry: `4.3.0` (`npm view tailwindcss version` on 2026-06-09).
- Vercel Node.js runtime docs state new projects default to the latest Node.js LTS available on Vercel (`https://vercel.com/docs/functions/runtimes/node-js/node-js-versions`).
- Microsoft Foundry model catalog lists current Azure OpenAI families including GPT-5.4, GPT-5.3, GPT-5.2, GPT-5.1, GPT-5, GPT-4.1, GPT-4o, embeddings, image, audio, and video (`https://learn.microsoft.com/en-us/azure/ai-foundry/azure-openai-in-ai-foundry`).
- Azure model retirement docs show GPT-4o-era models are no longer the best default for a new build (`https://learn.microsoft.com/azure/ai-services/openai/concepts/model-retirements`).

## Recommended MVP Stack

| Area | Recommendation | Notes |
|---|---|---|
| Framework | Next.js `16.2.7` | App Router, Route Handlers, React Server Components. |
| UI Library | React `19.2.7` / React DOM `19.2.7` | Match Next.js peer range. |
| Language | TypeScript `6.0.3` | Use strict mode. Validate ecosystem compatibility during setup. |
| Runtime | Node.js latest LTS on Vercel, minimum `20.9.0` | Pin `engines.node` once project is scaffolded. |
| Styling | Tailwind CSS `4.3.0` | Use CSS-first configuration where possible. |
| Components | shadcn/ui, Radix UI primitives, lucide-react | Enterprise admin/chat UI with accessible primitives. |
| Validation | Zod latest stable | Request/response validation for all API routes. |
| ORM | Prisma latest stable or Drizzle latest stable | Prisma for team familiarity; Drizzle if serverless bundle size becomes a concern. |
| Database | Managed PostgreSQL with vector support | Neon, Supabase, Azure Database for PostgreSQL, or Vercel Marketplace provider. |
| Vector Search | PostgreSQL vector extension | MVP simplification; can migrate to Azure AI Search later. |
| File Storage | Vercel Blob or Azure Blob Storage | Azure Blob preferred when documents must stay near Azure enterprise controls. |
| LLM | Azure OpenAI `gpt-5.1` or newer available GA model | Confirm region availability before provisioning. |
| Embeddings | Azure OpenAI `text-embedding-3-large` | Strong multilingual retrieval; consider smaller model for cost-sensitive MVP. |
| PDF Parsing | `pdf-parse` or `unpdf` for text PDFs | Add OCR service later for scanned PDFs. |
| Testing | Vitest, React Testing Library, Playwright | Unit, integration, API, and browser E2E coverage. |
| Observability | Vercel logs, OpenTelemetry-compatible traces, structured app logs | Track latency, token usage, retrieval quality, errors. |

## Packages To Start With

```json
{
  "dependencies": {
    "@ai-sdk/azure": "latest",
    "@prisma/client": "latest",
    "next": "16.2.7",
    "react": "19.2.7",
    "react-dom": "19.2.7",
    "zod": "latest"
  },
  "devDependencies": {
    "@playwright/test": "latest",
    "@testing-library/react": "latest",
    "prisma": "latest",
    "tailwindcss": "4.3.0",
    "typescript": "6.0.3",
    "vitest": "latest"
  }
}
```

## Architecture Changes From Original PRD

| Original PRD | MVP Update |
|---|---|
| Next.js 14 | Next.js 16 App Router. |
| Separate FastAPI backend | Next.js Route Handlers as backend. |
| Docker + Nginx | Vercel deployment. |
| Azure AI Search required | PostgreSQL vector search for MVP. |
| GPT-4o default | Azure OpenAI GPT-5.1 or newer available GA model; fallback by region. |
| Azure Blob required | Azure Blob preferred, Vercel Blob acceptable for MVP depending on data policy. |

## Version Policy

- Pin exact framework/runtime-critical versions in `package.json`.
- Use `latest` only during initial scaffold; lock exact versions through lockfile.
- Re-check Azure model availability by region before production provisioning.
- Document model deployment names separately from model IDs because Azure uses deployment aliases in API calls.
