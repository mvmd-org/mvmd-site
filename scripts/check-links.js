#!/usr/bin/env node

/**
 * Link Checker Script for MVMD Documentation
 * 
 * This script validates internal links across the documentation by:
 * 1. Finding all Markdown files in the docs directory
 * 2. Extracting all internal links from these files
 * 3. Verifying that each target file exists
 * 4. Reporting any broken links
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

// Regular expression to match Markdown links
const LINK_REGEX = /\[(?:.*?)\]\((.*?)\)/g;
// Regular expression to match only local links (not external URLs)
const LOCAL_LINK_REGEX = /\[(?:.*?)\]\(((?!http)[^)]*\.md.*?)\)/g;

// Base directories to scan
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const ROOT_DIR = path.join(__dirname, '..');

async function getAllMarkdownFiles(dir, allFiles = []) {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await getAllMarkdownFiles(filePath, allFiles);
    } else if (file.endsWith('.md')) {
      allFiles.push(filePath);
    }
  }
  return allFiles;
}

function normalizePath(basePath, relativePath) {
  // Handle anchor links by removing them
  let cleanPath = relativePath.split('#')[0];
  
  // If it's already an absolute path, just return it
  if (path.isAbsolute(cleanPath)) {
    return cleanPath;
  }
  
  // Otherwise, resolve it relative to the containing file's directory
  return path.resolve(path.dirname(basePath), cleanPath);
}

async function checkLinks() {
  // Collect all markdown files
  console.log('Finding all Markdown files...');
  const markdownFiles = await getAllMarkdownFiles(DOCS_DIR);
  console.log(`Found ${markdownFiles.length} Markdown files.`);
  
  let brokenLinks = 0;
  let totalLinks = 0;
  const missingFiles = new Set();
  
  // Check each file for links
  for (const file of markdownFiles) {
    const content = await readFile(file, 'utf8');
    let match;
    
    // Find all local links in the file
    while ((match = LOCAL_LINK_REGEX.exec(content)) !== null) {
      totalLinks++;
      const link = match[1];
      let targetPath;
      
      // Handle links starting with ../ or ./
      if (link.startsWith('../') || link.startsWith('./')) {
        targetPath = normalizePath(file, link);
      } 
      // Handle absolute paths from project root
      else if (link.startsWith('/')) {
        targetPath = path.join(ROOT_DIR, link);
      }
      // Handle relative paths within same directory
      else {
        targetPath = normalizePath(file, link);
      }
      
      // Check if the file exists
      try {
        await stat(targetPath);
      } catch (error) {
        brokenLinks++;
        console.error(`Broken link in ${path.relative(ROOT_DIR, file)}: ${link} -> ${path.relative(ROOT_DIR, targetPath)}`);
        missingFiles.add(path.relative(ROOT_DIR, targetPath));
      }
    }
  }
  
  // Summary
  console.log(`\nLink checking complete.`);
  console.log(`Total links checked: ${totalLinks}`);
  
  if (brokenLinks > 0) {
    console.error(`Found ${brokenLinks} broken links to ${missingFiles.size} distinct files:`);
    missingFiles.forEach(file => console.error(`- ${file}`));
    process.exit(1);
  } else {
    console.log(`All links are valid!`);
    process.exit(0);
  }
}

checkLinks().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
}); 