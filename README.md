# ANDMONI 4.0.0

Six-act, native-scroll brand and product concept. One reversible cinematic stage connects an intact sports sock, a color palette, a focused detail lens, a running mood, design principles and an opening notebook with the selected product.

## Build and hosting

- Static, buildless HTML with four local images. Node 20+; no dependencies.
- `npm test` checks source, assets, commerce and journey logic. `npm run build` checks the output directory.
- Existing Cloudflare configuration remains unchanged: output `public/`, build `exit 0` or the existing configured command. `wrangler.jsonc` still points to `./public`.
- `public/index.html` is the reviewed homepage release package. The existing `public/preview/v4/` route is retained with its preview version and noindex metadata. No preview files or current images are removed or rewritten by the promotion patch.
- Deployment must be verified by the publishing workflow. This package itself does not establish that the homepage is live.

## Interaction

Native page scrolling drives all scenes without wheel interception or autoplay. Chapter and navigation links move to real scroll positions. The current design is consistent across all scenes and the product dialog. Detail buttons and zoom immediately reveal the chosen part and retain manual control until that chapter is left.

The stage uses non-scrollable clipping, so focusing its controls should not scroll an internal viewport. The scroll cue and navigation controls have independent, readable layers. Widths <=760px, heights <=620px, paused motion and the initial OS reduced-motion setting use ordinary document flow. The user can override motion through one shared state.

## Verification boundaries

Static and simulated-DOM tests pass, including the original product/size/price/cart/focus checks, six reversible scenes, selected-product consistency, same-image magnification, shared-path boundary coordinates, safe hero bounds, real header geometry, manual detail control, motion-preference switching and mobile-state logic.

Preview.3 passed targeted real desktop-browser review on 2026-10-12: forward/reverse chapter navigation, all three complete hero silhouettes, palette layout and replay, immediate detail selection and keyboard zoom without internal stage scrolling, final notebook layout, a fit-note Tab/Enter path, Pause/Enable and a Chalk product-dialog open/close. See `QA.md` for the exact coverage. Real mobile rendering, OS reduced-motion behavior, a full keyboard/screen-reader audit and the complete shopping-bag flow were not browser-tested. Responsive/state tests are not device verification.

## Demonstration limits

All product designs, images, prices and sizes are illustrative concepts. No physical products, verified materials, customer reviews, performance claims or certifications are represented. Shopping bag data stays in local browser storage. Checkout is a non-transactional preview: no real payment, order, account, personal-data collection or analytics services are connected.
