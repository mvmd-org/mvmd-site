#!/usr/bin/env node

/**
 * Documentation Format Checker for MVMD
 * 
 * This script validates the format consistency of Markdown documentation:
 * 1. Frontmatter existence and consistency
 * 2. Header structure (H1 followed by H2, etc.)
 * 3. Code block format consistency
 * 4. Common style issues
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

// Base directory to scan
const DOCS_DIR = path.join(__dirname, '..', 'docs');

// Regular expressions for validation
const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---/;
const HEADER_REGEX = /^#{1,6}\s+(.+)$/gm;
const CODE_BLOCK_REGEX = /```(\w*)\n([\s\S]*?)```/g;
const FIRST_HEADER_REGEX = /# (.+)/;
const SIDEBAR_POSITION_REGEX = /sidebar_position:\s*(\d+)/;

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

function validateFrontmatter(content, filePath) {
  const issues = [];
  const frontmatterMatch = content.match(FRONTMATTER_REGEX);
  
  if (!frontmatterMatch) {
    issues.push('Missing frontmatter');
    return issues;
  }
  
  const frontmatter = frontmatterMatch[1];
  
  // Check for sidebar_position
  if (!SIDEBAR_POSITION_REGEX.test(frontmatter)) {
    issues.push('Missing sidebar_position in frontmatter');
  }
  
  return issues;
}

function validateHeaders(content, filePath) {
  const issues = [];
  const lines = content.split('\n');
  let inCodeBlock = false;
  let headers = [];
  
  // Extract all headers (excluding those in code blocks)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip headers in code blocks
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    if (!inCodeBlock && line.startsWith('#')) {
      const level = line.match(/^(#+)/)[1].length;
      const text = line.replace(/^#+\s+/, '');
      headers.push({ level, text, lineNumber: i + 1 });
    }
  }
  
  // Check if document starts with H1
  if (headers.length > 0 && headers[0].level !== 1) {
    issues.push(`First header should be H1, found H${headers[0].level} at line ${headers[0].lineNumber}`);
  }
  
  // Check header hierarchy (no skipping levels)
  for (let i = 1; i < headers.length; i++) {
    const prev = headers[i - 1];
    const curr = headers[i];
    
    if (curr.level > prev.level && curr.level > prev.level + 1) {
      issues.push(`Header hierarchy skips a level from H${prev.level} to H${curr.level} at line ${curr.lineNumber}`);
    }
  }
  
  // Check first H1 matches filename
  if (headers.length > 0 && headers[0].level === 1) {
    const filename = path.basename(filePath, '.md');
    const h1Text = headers[0].text;
    const normalizedFilename = filename.replace(/-/g, ' ').toLowerCase();
    const normalizedH1 = h1Text.toLowerCase();
    
    // Skip for index files
    if (filename !== 'index' && !normalizedH1.includes(normalizedFilename) && !normalizedFilename.includes(normalizedH1)) {
      issues.push(`H1 "${h1Text}" doesn't match filename "${filename}"`);
    }
  }
  
  return issues;
}

function validateCodeBlocks(content, filePath) {
  const issues = [];
  let match;
  
  while ((match = CODE_BLOCK_REGEX.exec(content)) !== null) {
    const language = match[1];
    const code = match[2];
    
    if (language === 'json') {
      try {
        JSON.parse(code);
      } catch (e) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        issues.push(`Invalid JSON in code block at around line ${lineNumber}: ${e.message}`);
      }
    }
    
    if (language === '') {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push(`Code block at line ${lineNumber} is missing language specification`);
    }
  }
  
  return issues;
}

function validateStyleConsistency(content, filePath) {
  const issues = [];
  const lines = content.split('\n');
  let inCodeBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Toggle code block state
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    // Skip checks inside code blocks
    if (inCodeBlock) continue;
    
    // Check for trailing whitespace
    if (line.endsWith(' ')) {
      issues.push(`Line ${i + 1} has trailing whitespace`);
    }
    
    // Check for tabs instead of spaces
    if (line.includes('\t')) {
      issues.push(`Line ${i + 1} contains tabs instead of spaces`);
    }
    
    // Check for inconsistent list markers
    if (/^[ ]*\*\s/.test(line) && /^[ ]*-\s/.test(lines[i - 1] || '')) {
      issues.push(`Line ${i + 1} uses * for list item while previous uses -`);
    }
    
    // Check for URL without descriptive text
    if (/\[https?:\/\/[^\]]+\]\(https?:\/\//.test(line)) {
      issues.push(`Line ${i + 1} has a link with URL as the text`);
    }
  }
  
  return issues;
}

async function checkDocFormatting() {
  console.log('Finding all Markdown files...');
  const markdownFiles = await getAllMarkdownFiles(DOCS_DIR);
  console.log(`Found ${markdownFiles.length} Markdown files.`);
  
  let totalIssues = 0;
  const fileIssues = {};
  
  for (const file of markdownFiles) {
    const content = await readFile(file, 'utf8');
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    
    const issues = [
      ...validateFrontmatter(content, file),
      ...validateHeaders(content, file),
      ...validateCodeBlocks(content, file),
      ...validateStyleConsistency(content, file),
    ];
    
    if (issues.length > 0) {
      fileIssues[relativePath] = issues;
      totalIssues += issues.length;
    }
  }
  
  // Report results
  console.log('\nFormatting check complete.');
  
  if (totalIssues > 0) {
    console.log(`Found ${totalIssues} issues in ${Object.keys(fileIssues).length} files:`);
    
    for (const [file, issues] of Object.entries(fileIssues)) {
      console.log(`\n${file}:`);
      issues.forEach(issue => console.log(`  - ${issue}`));
    }
    
    process.exit(1);
  } else {
    console.log('No formatting issues found!');
    process.exit(0);
  }
}

checkDocFormatting().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
}); 