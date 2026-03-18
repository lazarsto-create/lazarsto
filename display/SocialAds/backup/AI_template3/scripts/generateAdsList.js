#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function generateAdsList() {
  try {
    const projectRoot = path.resolve(__dirname, '..');
    const adsDir  = path.join(projectRoot, 'ads');
    const listFile = path.join(adsDir, 'list.json');

    const entries = await fs.readdir(adsDir, { withFileTypes: true });

    // Keep only directories that contain an index.html
    const adFolders = [];
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      try {
        await fs.access(path.join(adsDir, entry.name, 'index.html'));
        adFolders.push(entry.name);
      } catch {
        // no index.html — skip
      }
    }

    adFolders.sort();

    await fs.writeFile(listFile, JSON.stringify(adFolders, null, 2) + '\n', 'utf8');

    console.log(`✅ Generated ${listFile} with ${adFolders.length} ad(s):`);
    adFolders.forEach(f => console.log(`  - ${f}`));

  } catch (err) {
    console.error('❌ Error generating ads list:', err.message);
    process.exit(1);
  }
}

generateAdsList();
