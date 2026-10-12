import { access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const output = fileURLToPath(new URL('../public/index.html', import.meta.url));
await access(output);
console.log('Static website is ready in public/. No compilation or dependencies required.');
