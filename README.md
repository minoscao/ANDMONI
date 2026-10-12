# ANDMONI — The Movement Edit

A feminine, international sports-sock brand concept. The website follows the same anatomically shaped sock through three spatial chapters: a floating pair, an interactive shape study, and a styling scene with live color selection linked to the product flow.

Native scrolling controls a layered pseudo-3D scene. Mouse movement adds eased perspective. Visitors can jump between chapters, pause motion, explore sock details, switch concept colors, filter the collection, select a size and use a browser-local demo bag. System reduced-motion settings and phone layouts have dedicated behavior.

## Cloudflare Pages

Connect this repository in Cloudflare Pages:

- Production branch: `main`
- Framework preset: **None**
- Build command: `exit 0`
- Build output directory: `public`
- Root directory: repository root
- Environment variables / secrets: none

Only `public/` is published. No source archive, tests or image master files are included in that directory.

After a successful Pages deployment, add the desired custom subdomain through the Cloudflare dashboard. No custom domain is configured or claimed as deployed by this repository. DNS and account linking are separate steps.

Official references: [Static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) and [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## Cloudflare Workers alternative

`wrangler.jsonc` is a credential-free static-assets configuration pointing at `public/`. After the owner configures authenticated Cloudflare tooling, `wrangler deploy` can deploy it as a static Worker. Do not deploy both alternatives unintentionally. This repository contains no account IDs, routes, tokens or custom-domain bindings.

Official reference: [Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

## Local development

The site is plain HTML/CSS/JavaScript with no runtime packages. Edit `public/index.html` and the files under `public/assets/`.

- Open `public/index.html` in a modern browser for a local preview.
- `npm test` runs syntax, asset and simulated-DOM logic tests using Node.js 20+.
- `npm run build` verifies the existing static output. No compilation is necessary.

## Verification

Executed successfully against this revision:

- Full script syntax and asset existence
- Product filters, detail state, size selection
- Bag quantity, remove, subtotal, quantity cap and storage serialization
- All three scene states, progress and inactive chapter accessibility
- Sock detail hotspots, photo-plane reveal and color-to-product mapping
- Motion toggle and chapter navigation logic
- No wheel-event interception or network API calls

These are static and simulated-DOM checks. Real-browser rendering, screenshots and end-to-end motion QA are still pending: local Chromium was blocked by the execution environment's socket restriction, and the available cloud browser could not open local files. An accessible preview deployment is needed for that final visual pass. Tests do not imply browser compatibility certification.

## Demo boundaries

This is a design prototype, not a functioning shop. Prices, sizing, names, colors and product imagery are illustrative. Materials, construction and performance have not been validated. There are no real orders, payments, accounts, email collection, analytics or external checkout services. The bag is stored only in browser storage when available.

The campaign and transparent sock images are original AI-generated concepts, not real ANDMONI product photography. The sock color variants are illustrative treatments of the same image. See `ASSETS.md` for provenance.

Before commercial launch: confirm brand rights, final products, imagery, product claims, stock, final prices, sizing, customer policies, accessibility and fulfillment/payment integration.
