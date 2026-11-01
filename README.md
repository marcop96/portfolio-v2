# marcopianaroli.com

My personal site. It exists for one job: convincing someone in Berlin to give me
an IT support or systems administrator role.

The old version of this repo was a Vue front-end portfolio. It argued that I love
building beautiful websites, while what I actually do is run all the IT for a
25-person company on my own. This one argues the truth.

## What it is

A single static page. Seven sections, each one a claim with its proof:

1. **Hero** — the headline, and next to it a readout of the homelab that has been
   up for months.
2. **Letter** — signed, in the first person, with the facts a recruiter in Germany
   actually needs (where I am, languages, right to work).
3. **Service record** — jobs and projects as a ledger. Native `<details>`, no JS.
4. **It runs on a laptop** — four interface fragments built in HTML (`docker ps`,
   Cloudflare tunnel ingress, PocketBase collections, Grafana) and a working
   Pi-hole DNS simulator: type a hostname, see which regex rule blocks it and why.
5. **The toolbelt** — each tool with where I actually used it.
6. **Contact** — a full yellow field.
7. **Footer** — one line.

Design notes live in `docs/superpowers/specs/`. Open work lives in `docs/PENDING.md`.

## Stack

[Astro](https://astro.build) with zero framework runtime, and
[Jost](https://fonts.google.com/specimen/Jost) self-hosted through `@fontsource`.
No Tailwind, no CSS framework, no client-side router. The only JavaScript shipped
is two small modules: the DNS simulator and a section-entrance observer.

Total payload: about 7.5 KB of HTML and 4.4 KB of CSS, gzipped.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
```

**Node 26 is required** (Astro 7 needs at least 22.23.4, and Vercel's Node 20 image
is discontinued). It is declared in `engines` and in `.nvmrc`.

## Deploying

Vercel, static output, no adapter. If a build fails with a Node version message,
set the project's Node.js Version to **26.x** in Vercel's Project Settings; the
`engines` field in `package.json` asks for the same thing.

## Credits

Art direction, palettes and the measuring harness came from the
`design-taste-frontend` and `frontend-design` agent skills. Every number on the
page was read off the actual machine, not estimated.
