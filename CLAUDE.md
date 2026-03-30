# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RoastFlow landing page — marketing site for roast-flow.app. Single HTML file with inline CSS/JS, deployed on Vercel via GitHub auto-deploy.

## Repository
- **GitHub:** `tjisole/roastflow-landing`
- **Branch:** `main`
- **Local path:** `C:\Users\Thomas Isole\desktop\roastflow-landing`

## Structure
```
roastflow-landing/
├── index.html    — entire landing page (HTML + CSS + JS)
├── logo.png      — RoastFlow logo (used in nav + footer)
└── api/          — Netlify/Vercel serverless functions (if any)
```

## Tech Stack
- Single HTML file — no framework, no build step
- Google Fonts: Playfair Display, DM Sans, DM Mono
- Inline CSS with CSS variables
- Scroll reveal animations via IntersectionObserver
- Responsive: mobile-first with breakpoints at 768px

## Key Sections (in order)
1. **Nav** — logo + Pricing link + Apply link + Sign In button
2. **Hero** — "Your Roaster. Your Hands. Your Data." + timer mockup
3. **Roast Logging** — one-tap logging, voice prompts, roast comparison, multi-batch
4. **No Automation Required** — "During the Roast" + "After the Roast" cards
5. **Business Operations** — 6 cards: AI Invoice Import, Inventory, Production, Pricing, Team, Reports
6. **Quote** — "You didn't get into roasting to stare at spreadsheets."
7. **CTA / Pricing** (`id="pricing"`) — Artisan Roaster $55/mo card + Master Roaster coming soon
8. **Waitlist Questionnaire** — beta application form
9. **Footer** — logo + roast-flow.app link

## Links
- Sign In → `https://www.roast-flow.app`
- Pricing nav → `#pricing` (scrolls to CTA section)
- Apply → `#waitlist` (scrolls to questionnaire)

## Deploy
Push to `main` → Vercel auto-deploys. No build step needed.

## Design
- Dark espresso background (`#1A0E08`)
- Cream text (`#FAF6F0`)
- Amber/gold accent (`#C8932A`)
- Playfair Display for headings, DM Sans for body

## Related Projects
- **Main app:** `tjisole/roastflow` (roast-flow.app) — React Native + Expo
- **Settle It:** `C:\Users\Thomas Isole\desktop\Settle_it` — AI arbitration app
