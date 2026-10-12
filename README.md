# ANDMONI v3.1 — A continuous design-to-selection journey

Release-ready static package for the already authorized ANDMONI target. The previously frozen source versions are preserved separately. This package does not by itself certify a deployed version or a browser visual pass; deployment status must be verified from the hosting result.

## Designer / creative-supervisor decisions

The previous experience asked visitors to choose a color in the hero, then hid those products inside a second palette discovery. That duplicated the main decision and made commerce slower. Several repeated motions added spectacle without new information. This candidate replaces that structure rather than adding another animation layer.

### One selection, carried through

- One-screen brand entry: a shaped product and a user-controlled presentation spotlight. This is lighting presentation, not a real 3D material simulation.
- The palette is the only color/SKU choice point. The selected design persists in browser storage and stays synchronized with the hero, inspection image, product dialog and return-to-selection action.
- Shop links and the final CTA go directly to the expanded selection state. They do not require watching the reveal.
- Only the sock image flies. Cards, names, prices and buttons remain stationary; information appears after the image lands.
- Open / Replay move the real page scroll position. There is no permanent animation override or intercepted wheel input.

### Each section does a different, useful job

1. **Look**: the short hero introduces the silhouette and lets the visitor move the presentation spotlight.
2. **Choose**: palette colors release into three actual product designs.
3. **Inspect**: cuff/heel/toe controls magnify the SAME selected SKU image. Per-SKU normalized anchors keep each target centered at minimum and maximum zoom.
4. **Feel the mood**: a stable running image uses restrained track-line drawing. The visible caption identifies it as a brand mood study, not a photo of this collection.
5. **Read**: the line motif becomes navigation through three design principles; each control changes the information.
6. **Open**: real semantic notebook disclosures reveal content on click, touch or keyboard. Covers do not obstruct shopping buttons.
7. **Return**: the final CTA returns to the selected design, already expanded.

The earlier independent textile macro artworks are not used as SKU details or product evidence. They are outside `public/` and absent from the release assets.

## Mobile and reduced motion

On phones: one large selected product, three visible 44px-plus choice controls, and a sticky selection bar. Changing color does not scroll those controls away. Main product information is 13px or larger; secondary labels are 11px or larger. No three-card miniaturization.

On short viewports and in reduced-motion mode: the selection becomes ordinary document flow without a long empty sticky stage. The OS preference sets the initial effective motion state. The manual toggle uses that same state for both CSS and JavaScript, including OS-reduce -> Enable -> Pause transitions.

## Checks performed

`npm test` and `npm run build` pass. Node.js 20+ is sufficient; no dependencies are needed.

Checks cover syntax, assets, one persistent selection, direct Shop/return targets, native-scroll Open/Replay, image-only flight, matching SKU detail sources, 9 part anchors at minimum/maximum zoom, principle controls, product/cart logic, modal focus restoration, mobile no-scroll color selection, short-screen flow, and effective reduced-motion state transitions.

A separate creative reviewer inspected the actual code and ran the tests. These are static and simulated-DOM checks, NOT browser layout/motion validation. The review boards are labeled design diagrams, not screenshots.

### Still pending

A real-browser desktop/phone pass needs an accessible authorized preview. Check rendered overlap, image flight timing, sticky selection offsets, focus during interrupted smooth scroll, and image edges at maximum zoom on light/dark backgrounds. Some generated cutout edge pixels have minor color fringe and need visual asset acceptance. No browser or responsive-layout pass is claimed.

## Run / hosting

- Open `public/index.html` locally in a modern browser.
- `npm test`
- `npm run build` (validates the already-static output)

Only `public/` is intended for hosting. Cloudflare Pages can use main / None / `exit 0` / `public`. `wrangler.jsonc` retains the credential-free Workers static-assets alternative. The package does not change domain routing, accounts or credentials.

## Commercial boundary

All products, prices and sizes are design examples. No actual fiber, manufacturing, fit or performance claims are established by the images. No real orders, payments, accounts, newsletters or analytics are connected. The demo bag and design selection are browser-local. Physical samples, product facts, brand clearance, stock, policies and commercial integrations must be confirmed before sales.
