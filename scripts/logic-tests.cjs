// Lightweight in-process tests for demo state logic, independent of browser rendering.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(__dirname+'/../public/index.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1].split('// Journey v4')[0];
const elements=new Map(),listeners={},storage=new Map();let focusCalls=0;
function element(id){if(!elements.has(id))elements.set(id,{id,hidden:true,innerHTML:'',textContent:'',dataset:{},classList:{add(){},remove(){},toggle(){}},querySelector(){return {focus(){focusCalls++}}},querySelectorAll(){return []},addEventListener(){},focus(){}});return elements.get(id)}
const overlays=['productOverlay','cartOverlay','guideOverlay'].map(element);
const ctx={selectDesign(){},document:{activeElement:element('focus'),body:{classList:{add(){},remove(){}}},getElementById:element,querySelectorAll(sel){return sel==='.overlay'?overlays:[]},addEventListener(type,fn){listeners[type]=fn},contains(){return true}},localStorage:{getItem(k){return storage.get(k)||null},setItem(k,v){storage.set(k,v)}},setTimeout(){return 1},clearTimeout(){},window:{},console};
vm.createContext(ctx);vm.runInContext(script,ctx);const run=s=>vm.runInContext(s,ctx);const click=b=>listeners.click({target:{closest(){return {dataset:{},hasAttribute(){return false},...b}}},preventDefault(){}});
assert.equal((element('products').innerHTML.match(/class="product"/g)||[]).length,3);
run("filter='Run';renderProducts()");assert.equal((element('products').innerHTML.match(/class="product"/g)||[]).length,1);
run("product('form')");assert(element('productDetail').innerHTML.includes('Form Crew'));assert(!element('productOverlay').hidden);
click({dataset:{size:'L'}});assert.equal(run('selectedSize'),'L');click({id:'addToBag'});assert.equal(run('bag[0].size'),'L');assert.equal(element('bagCount').textContent,1);
click({dataset:{qty:'0',delta:'1'}});assert.equal(run('bag[0].qty'),2);assert(focusCalls>0,'Cart should restore focus after redraw');assert(element('cartBottom').innerHTML.includes('$48.00'));
run('guide("checkout")');assert(element('guideContent').innerHTML.includes('No order has been placed'));
assert.equal(JSON.parse(storage.get('andmoni-demo-bag'))[0].qty,2);
click({dataset:{remove:'0'}});assert.equal(run('bag.length'),0);assert(element('cartLines').innerHTML.includes('currently empty'));
run("product('pace')");click({id:'addToBag'});for(let i=0;i<25;i++)click({dataset:{qty:'0',delta:'1'}});assert.equal(run('bag[0].qty'),20);
run('closeOverlays()');assert(overlays.every(e=>e.hidden));
for(const filename of ['pace-moss.png','form-rose.png','daily-chalk.png','campaign-runner-terracotta.webp'])assert(fs.existsSync(__dirname+'/../public/assets/'+filename));
assert(!/<script[^>]+src|<link[^>]+href|fetch\(|XMLHttpRequest/.test(html));
const opener=element('outer-opener');opener.closest=()=>null;ctx.document.activeElement=opener;run("product('pace')");const nested=element('dialog-opener');nested.closest=()=>element('productOverlay');ctx.document.activeElement=nested;run("guide('fit')");assert.strictEqual(run('returnFocus'),opener,'Nested overlays must preserve outer opener');
console.log('PASS: syntax; initial 3 products; activity filter; product detail; size selection; bag add; quantity; subtotal; remove; quantity cap; storage serialization; demo checkout; modal close; assets exist; no external resource or network requests. Rendering and real browser behavior are separate checks.');
