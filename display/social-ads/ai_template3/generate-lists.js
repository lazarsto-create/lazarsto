/**
 * Generates list.json files for all dynamic folders.
 * Run before committing/pushing to GitHub:
 *   node generate-lists.js
 */

const fs   = require('fs');
const path = require('path');

const BASE = __dirname;

const configs = [
  {
    folder: 'csv',
    exts:   ['.csv'],
    out:    'csv/list.json',
  },
  {
    folder: 'header_images',
    exts:   ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'],
    out:    'header_images/list.json',
  },
  {
    folder: 'header_video',
    exts:   ['.mp4', '.webm'],
    out:    'header_video/list.json',
  },
  {
    folder: 'ads',
    type:   'dirs',
    regex:  /^\d+x\d+$/,
    out:    'ads/list.json',
  },
];

configs.forEach(cfg => {
  const dir     = path.join(BASE, cfg.folder);
  const outFile = path.join(BASE, cfg.out);

  if (!fs.existsSync(dir)) {
    console.warn(`  SKIP  ${cfg.folder}/ — folder not found`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let list = [];

  if (cfg.type === 'dirs') {
    list = entries
      .filter(e => e.isDirectory() && cfg.regex.test(e.name))
      .map(e => e.name)
      .sort((a, b) => {
        const [aw, ah] = a.split('x').map(Number);
        const [bw, bh] = b.split('x').map(Number);
        return (aw * ah) - (bw * bh);
      });
  } else {
    list = entries
      .filter(e => e.isFile() && cfg.exts.includes(path.extname(e.name).toLowerCase()))
      .map(e => e.name)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }

  fs.writeFileSync(outFile, JSON.stringify(list, null, 2));
  console.log(`  OK    ${cfg.out}  →  ${JSON.stringify(list)}`);
});

console.log('\nDone. Commit and push all list.json files.\n');
