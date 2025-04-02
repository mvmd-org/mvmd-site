/**
 * Script to check for broken internal links in Markdown documentation
 * Run with: node scripts/check-broken-links.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;
const MD_FILE_PATTERN = '**/*.md';
const MDX_FILE_PATTERN = '**/*.mdx';
const IGNORED_PATHS = [
  'http://', 
  'https://', 
  'mailto:', 
  '#',  // Anchor links
  'tel:'
];

// Helper functions
function isInternalLink(link) {
  return !IGNORED_PATHS.some(prefix => link.startsWith(prefix));
}

function isValidPath(filePath, basePath) {
  if (filePath.startsWith('/')) {
    // Absolute path within the docs
    const fullPath = path.join(DOCS_DIR, filePath.replace(/^\/docs\//, ''));
    return fs.existsSync(fullPath) || fs.existsSync(`${fullPath}.md`) || fs.existsSync(`${fullPath}.mdx`);
  } else {
    // Relative path
    const dirName = path.dirname(basePath);
    const fullPath = path.resolve(dirName, filePath);
    return fs.existsSync(fullPath) || fs.existsSync(`${fullPath}.md`) || fs.existsSync(`${fullPath}.mdx`);
  }
}

// Main function
async function checkBrokenLinks() {
  // Get all markdown files
  const mdFiles = glob.sync(path.join(DOCS_DIR, MD_FILE_PATTERN));
  const mdxFiles = glob.sync(path.join(DOCS_DIR, MDX_FILE_PATTERN));
  const allFiles = [...mdFiles, ...mdxFiles];
  
  let brokenLinks = 0;
  
  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = [...content.matchAll(LINK_REGEX)];
    
    for (const match of matches) {
      const [_, linkText, linkPath] = match;
      
      // Skip external links and anchors
      if (!isInternalLink(linkPath)) {
        continue;
      }
      
      // Remove anchor part if present
      const pathWithoutAnchor = linkPath.split('#')[0];
      
      // Skip if path is empty after removing anchor
      if (!pathWithoutAnchor) {
        continue;
      }
      
      if (!isValidPath(pathWithoutAnchor, file)) {
        console.error(`Broken link in ${file}:`);
        console.error(`  Text: "${linkText}"`);
        console.error(`  Link: ${linkPath}`);
        console.error('');
        brokenLinks++;
      }
    }
  }
  
  if (brokenLinks === 0) {
    console.log('No broken links found! 🎉');
  } else {
    console.error(`Found ${brokenLinks} broken links.`);
    process.exit(1);
  }
}

// Run the check
checkBrokenLinks().catch(error => {
  console.error('Error checking links:', error);
  process.exit(1);
}); 