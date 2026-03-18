#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

/**
 * Generate CSV list JSON from /csv directory
 */
async function generateCsvList() {
  try {
    // Resolve project root (where package.json is)
    const projectRoot = path.resolve(__dirname, '..');
    const csvDir = path.join(projectRoot, 'csv');
    const listFile = path.join(csvDir, 'list.json');
    
    // Read csv directory
    const files = await fs.readdir(csvDir);
    
    // Filter CSV files
    const csvFiles = files
      .filter(file => file.endsWith('.csv'))
      .sort(); // Alphabetical sort for consistency
    
    // Write pretty JSON
    await fs.writeFile(
      listFile, 
      JSON.stringify(csvFiles, null, 2) + '\n',
      'utf8'
    );
    
    console.log(`✅ Generated ${listFile} with ${csvFiles.length} CSV files:`);
    csvFiles.forEach(file => console.log(`  - ${file}`));
    
  } catch (error) {
    console.error('❌ Error generating CSV list:');
    if (error.code === 'ENOENT') {
      console.error('  - csv/ directory not found. Create it first.');
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
}

generateCsvList();

