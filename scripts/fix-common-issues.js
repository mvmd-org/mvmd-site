#!/usr/bin/env node

/**
 * Documentation Issue Fixer for MVMD
 * 
 * This script automatically fixes common issues found in the audit:
 * 1. Adds missing frontmatter to Markdown files
 * 2. Removes trailing whitespace
 * 3. Adds language specification to code blocks
 * 4. Updates broken links based on a mapping
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);

// Base directory to scan
const DOCS_DIR = path.join(__dirname, '..', 'docs');

// Link mapping (old path -> new path)
const LINK_MAPPING = {
  '/implementation/best-practices.md': '../guides/advanced/best-practices.md',
  '/metadata-profiles/basic-profile.md': '../reference/profiles/basic-profile.md',
  '/standards/overview.md': '../reference/standards-overview.md',
  '../tools/validation.md': '../tools/validator.md',
  './environment-profile.md': '../reference/profiles/environment-profile.md',
  './avatar-profile.md': '../reference/profiles/avatar-profile.md',
  '../embedding/tools/validation.md': '../tools/validator.md',
};

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

async function fixTrailingWhitespace(filePath) {
  let content = await readFile(filePath, 'utf8');
  const originalContent = content;
  
  // Fix trailing whitespace
  content = content.replace(/[ \t]+$/gm, '');
  
  if (content !== originalContent) {
    await writeFile(filePath, content, 'utf8');
    return true;
  }
  return false;
}

async function fixMissingFrontmatter(filePath) {
  let content = await readFile(filePath, 'utf8');
  const originalContent = content;
  
  // Check if frontmatter exists
  if (!content.startsWith('---\n')) {
    // Get filename and derive sidebar position
    const filename = path.basename(filePath, '.md');
    const relativePath = path.relative(DOCS_DIR, filePath);
    const parentDir = path.dirname(relativePath);
    
    // Generate a sidebar position based on filename alphabetically
    // This is a simple approach - manual adjustment may be needed
    const sidebarPosition = 1;
    
    // Create title from filename (convert-case to Title Case)
    const title = filename
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Add frontmatter
    content = `---
sidebar_position: ${sidebarPosition}
---

# ${title}

${content}`;
    
    await writeFile(filePath, content, 'utf8');
    return true;
  }
  return false;
}

async function fixMissingCodeBlockLanguages(filePath) {
  let content = await readFile(filePath, 'utf8');
  const originalContent = content;
  
  // Find code blocks without language specification
  const codeBlockRegex = /```\n/g;
  content = content.replace(codeBlockRegex, '```text\n');
  
  if (content !== originalContent) {
    await writeFile(filePath, content, 'utf8');
    return true;
  }
  return false;
}

async function fixBrokenLinks(filePath) {
  let content = await readFile(filePath, 'utf8');
  const originalContent = content;
  
  // Replace known broken links
  for (const [oldPath, newPath] of Object.entries(LINK_MAPPING)) {
    const linkRegex = new RegExp(`\\[([^\\]]+)\\]\\(${oldPath.replace(/\//g, '\\/')}(#[^)]+)?\\)`, 'g');
    content = content.replace(linkRegex, `[$1](${newPath}$2)`);
  }
  
  if (content !== originalContent) {
    await writeFile(filePath, content, 'utf8');
    return true;
  }
  return false;
}

async function fixIssues() {
  console.log('Finding all Markdown files...');
  const markdownFiles = await getAllMarkdownFiles(DOCS_DIR);
  console.log(`Found ${markdownFiles.length} Markdown files.`);
  
  let fixedWhitespace = 0;
  let fixedFrontmatter = 0;
  let fixedCodeBlocks = 0;
  let fixedLinks = 0;
  
  for (const file of markdownFiles) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    
    try {
      // Fix trailing whitespace
      if (await fixTrailingWhitespace(file)) {
        fixedWhitespace++;
        console.log(`Fixed trailing whitespace in ${relativePath}`);
      }
      
      // Fix missing frontmatter
      if (await fixMissingFrontmatter(file)) {
        fixedFrontmatter++;
        console.log(`Added frontmatter to ${relativePath}`);
      }
      
      // Fix missing code block language
      if (await fixMissingCodeBlockLanguages(file)) {
        fixedCodeBlocks++;
        console.log(`Fixed code blocks in ${relativePath}`);
      }
      
      // Fix broken links
      if (await fixBrokenLinks(file)) {
        fixedLinks++;
        console.log(`Fixed links in ${relativePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${relativePath}:`, error);
    }
  }
  
  // Summary
  console.log('\nFixes applied:');
  console.log(`- Trailing whitespace: ${fixedWhitespace} files`);
  console.log(`- Missing frontmatter: ${fixedFrontmatter} files`);
  console.log(`- Code blocks without language: ${fixedCodeBlocks} files`);
  console.log(`- Broken links: ${fixedLinks} files`);
  
  console.log('\nNext steps:');
  console.log('1. Run validation scripts to check for remaining issues');
  console.log('2. Manually review the changes made by this script');
  console.log('3. Consider adding more link mappings to fix additional broken links');
}

fixIssues().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
}); 