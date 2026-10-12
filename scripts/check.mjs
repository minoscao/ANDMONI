import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../public/',import.meta.url));
const html=await readFile(root+'index.html','utf8'),js=html.match(/<script>([\s\S]*?)<\/script>/)[1];new Function(js);
for(const [,asset] of html.matchAll(/(?:src|href)="(assets\/[^\"]+)"/g))if(!asset.includes('${'))await access(root+asset);
for(const [,asset] of html.matchAll(/image:'([^']+)'/g))await access(root+'assets/'+asset);
assert(!/fetch\(|XMLHttpRequest|<script[^>]+src=/.test(html));
assert(!/addEventListener\(['"]wheel/.test(js));assert(!js.includes('paletteOverride'));
assert(html.includes('data-select="pace"')&&html.includes('id="inspectionZoom"'));
assert(!js.includes('textile-macro.webp')&&!js.includes('textile-moss.webp'));
assert(html.includes('NOT A PHOTO OF THE COLLECTION'));
console.log('PASS: complete syntax, local assets, single selection controls, no permanent palette override, no unrelated texture in product code, honest campaign label and no external API/wheel capture.');

// Regression: navigation/replay icons must not depend on installed glyph coverage.
assert(!/[\u2190-\u21ff]/u.test(html), "Use font-independent paths for arrow icons");
const arrowIcons=[...html.matchAll(/<svg class="ui-arrow"[^>]*>[\s\S]*?<\/svg>/g)].map(x=>x[0]);
assert.equal(arrowIcons.length,14);
for(const icon of arrowIcons){assert(icon.includes('aria-hidden="true"')&&icon.includes('focusable="false"'));assert(icon.includes('stroke="currentColor"')&&icon.includes('<path d="'));assert(!icon.includes('<text'));}
console.log("PASS: 14 decorative SVG arrows, no font-dependent arrow glyphs, hidden from assistive technology.");
