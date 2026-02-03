
import fs from 'node:fs';
import path from 'node:path';

const CJS_FILE = './dist/cjs/qre.cjs';
const MJS_FILE = './dist/esm/qre.mjs';
const CJS_FROM = 'exports.default = qre';
const CJS_TO = 'module.exports  = qre';
const BROWSER_FILES = [ './dist/browser/qre.min.js', './dist/browser/qre.js' ];
const BROWSER_FROM = 'GtEa1M6';
const BROWSER_TO = '{ qre }';

for (let dest of [CJS_FILE, MJS_FILE]) {
    let src = dest.replace(path.extname(dest), '.js');
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        fs.rmSync(src);
    }
}

let text = fs.readFileSync(CJS_FILE, 'utf8');
let text2 = text.replace(CJS_FROM, CJS_TO);
if (text2 === text) {
    if (text.indexOf(CJS_TO) < 0) throw new Error('Missing "exports.default"');
} else {
    fs.writeFileSync(CJS_FILE, text2);
}

for (let file of BROWSER_FILES) {
    text = fs.readFileSync(file, 'utf8');
    text2 = text.replace(BROWSER_FROM, BROWSER_TO);
    if (text2 === text) {
        if (text.indexOf(BROWSER_TO) < 0) throw new Error('Missing esbuild global name.');
    } else {
        fs.writeFileSync(file, text2);
    }
}
