// inline.js
import fs from 'fs';
import path from 'path';

const dist = './build';
let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

// Inline JS
html = html.replace(
  /<script type="module" src="(.+?)"><\/script>/g,
  (_, src) => {
    const filePath = path.join(dist, src);
    const js = fs.readFileSync(filePath, 'utf-8');
    return `<script>${js}</script>`;
  }
);

// Inline CSS
html = html.replace(
  /<link rel="stylesheet" href="(.+?)">/g,
  (_, href) => {
    const filePath = path.join(dist, href);
    const css = fs.readFileSync(filePath, 'utf-8');
    return `<style>${css}</style>`;
  }
);

fs.writeFileSync(path.join(dist, 'final.html'), html);
