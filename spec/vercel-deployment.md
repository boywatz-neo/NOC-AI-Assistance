# Vercel Deployment Notes

## Why Vercel for the prototype

The PRD recommends Next.js for the frontend. A Vercel deployment is the fastest way to publish a clickable prototype while keeping the codebase compatible with later backend extraction.

## Current deployment model

- Build target: standard Next.js application
- Hosting: Vercel
- Runtime constraints: no private Azure resources required for the mock prototype

## Required environment variables for future integration

See `.env.example`.

## Important gap against the PRD

The PRD requires intranet-only access. A default Vercel deployment is public unless protected. For a real production rollout, choose one of these paths:

1. Keep Vercel only for design/prototype review and run production inside the intranet.
2. Use Vercel only if paired with private networking, access controls, and an internally reachable backend that satisfies security review.

## Deploy checklist

1. Install dependencies with `npm install`.
2. Verify the app builds with `npm run build`.
3. Import into Vercel and accept the Next.js preset.
4. Add environment variables only when connecting real services.
