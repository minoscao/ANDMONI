# ANDMONI v4 verification record

Date: 2026-10-12. Targeted real-browser review was performed on preview.3 in cloud desktop Chrome. The release homepage has the same application code and assets; only preview indexing/version metadata changed. Independent source review and inspection of the captured browser images found no remaining blocker within the checked desktop scope.

## Actually verified in the desktop browser

- Native wheel progression through chapters 1 → 2 → 3 → 4 → 5 → 6, then reverse 6 → 5 → 4 → 3 → 2.
- Moss, Rose and Chalk selection, followed by each hero: complete sock silhouette within the frame, with the A behind it rather than obscuring the product.
- The hero scroll cue is visible over the footer strip.
- Palette Open → Replay, with product labels, control row and disclaimer occupying separate areas.
- Toe selection immediately produces the single matching detail lens. The zoom slider's ArrowRight changes value from 180 to 185, displayed as 1.9×. Continued native scrolling, later chapters and the reverse path preserve correct viewport placement.
- Read-only browser checks found stage and every scene panel scrollTop equal to 0 after the keyboard/scroll sequence. This specifically closes the previously observed 111px internal-stage focus scroll.
- Final notebook and selected-product columns remain separated. Fit note expansion, Tab → Enter opening its full text, and closing the text view were exercised.
- Pause exposes six ordinary-flow sections. A Chalk product dialog opens and closes. Enable restores cinematic motion.

## Passed static and simulated-DOM checks

- JS syntax and referenced local assets; no external service requests, payment endpoints or font-dependent arrow glyphs.
- Original commerce regressions: product/size/price selection, bag quantity/totals/removal/cap, local storage, demo checkout and modal/focus logic.
- Six reversible timeline states; active/inert layer handling; Shop/Details/Replay scroll targets; selected SKU continuity; normalized magnification anchors.
- Shared vector-path boundary coordinates; conservative complete hero-image bounds over four desktop sizes; one actual-header inset for stage position and height.
- Immediate manual region/zoom control, current-visit persistence and reset after leaving the detail chapter.
- Paused/reduced-motion/manual-toggle state transitions and mobile/short-window normal-flow state logic.
- Stage-level scroll cue and non-scrollable cinematic clipping contract.

The final root candidate, including its retained preview tree, passes the existing `npm test` command and `npm run build`. These automated checks do not establish real layout or accessibility behavior beyond the browser scope above.

## Not browser-verified

- Real mobile/phone rendering or touch interaction.
- OS reduced-motion setting changes.
- Complete keyboard traversal, screen-reader semantics or a full accessibility audit.
- The full shopping-bag/checkout path. No add-to-bag transaction, payment or order was performed during this review; the application remains a non-transactional demo.
- Every SKU × detail region × zoom endpoint combination, or complete light/dark transparent-edge quality at maximum enlargement. Minor colored edge pixels remain a known concept-image quality limitation.

No claim of universal responsiveness, full accessibility, manufacturing quality or real-product performance is made. Publishing success and the final homepage URL must be confirmed separately from this verification record.
