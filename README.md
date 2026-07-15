# FixedGap — Go-To-Market Investor Deck

Standalone Next.js presentation summarizing the FixedGap 12–15 month go-to-market
strategy for a Venture Capital audience. Completely independent from the marketing
website and the game demo.

## Run

```bash
cd FixedGap_GTM_Deck
npm install
npm run dev
```

Opens on **http://localhost:4000** (dedicated port, no conflict with other projects).

## Navigation

- **→ / Space / PageDown** — next slide
- **← / PageUp** — previous slide
- **Home / End** — first / last slide
- **Click** left/right screen zones, or the dots at the bottom
- **Swipe** on touch devices

## Structure

```
src/app/
├── layout.tsx        Root layout (Plus Jakarta Sans, brand fonts)
├── globals.css       Tailwind v4 + FixedGap brand palette
├── page.tsx          Deck shell: navigation, progress, transitions
├── SlideChrome.tsx   Reusable slide primitives (Title, Kicker, lists...)
├── slideViews.tsx    The 13 individual slide components
└── slides.ts         Content data (phases, benchmarks, team, funds...)
```

## Deck contents (13 slides)

1. Cover — Harvard 2nd place, GTM title
2. Positioning — monitoring, not diagnosis
3. Roadmap — four phases at a glance
4–7. Phase detail (Months 1–3, 3–5, 6–8, 9–15)
8. Pilot benchmarks
9. Second site + commercial + pharma
10. Team & partners
11. Fund allocation
12. Key goals by Month 15
13. Closing — the decision point

Source: FixedGap Go-To-Market Strategy, June 2026.
