/**
 * Documentation Validation Script
 * 
 * This script validates MVMD documentation files against the style guide rules.
 * It scans Markdown files and checks for common issues like:
 * - Missing or incorrect front matter
 * - Heading structure problems
 * - Terminology inconsistencies
 * - Link validity
 * - Code block formatting
 * 
 * Usage: node validate-docs.js [directory]
 * Example: node validate-docs.js ../docs
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const DOCS_DIR = process.argv[2] || '../docs';
const TERMINOLOGY_RULES = {
  'namespace': 'standard (when referring to technical standards)',
  'recipe': 'profile',
  'pattern': 'profile',
  'template': 'profile',
  'schema.org': 'Schema.org',
  'json-ld format': 'JSON-LD',
  'json+ld': 'JSON-LD',
  'integration': 'implementation (when referring to code)',
  'gltf': 'glTF',
  'GLTF': 'glTF',
  'GLB': 'glTF Binary',
  '3d': '3D',
  '3-D': '3D',
  'meta-data': 'metadata',
  'meta data': 'metadata'
};

// Validation trackers
let totalFiles = 0;
let passedFiles = 0;
let issuesFound = 0;
const issuesList = [];

// Main execution
console.log('MVMD Documentation Validator');
console.log('===========================');
console.log(`Scanning directory: ${DOCS_DIR}\n`);

validateDocumentation();

/**
 * Main validation function
 */
function validateDocumentation() {
  const files = glob.sync(`${DOCS_DIR}/**/*.md`);
  totalFiles = files.length;
  
  files.forEach(file => {
    const relativePath = path.relative(DOCS_DIR, file);
    console.log(`Validating: ${relativePath}`);
    
    const content = fs.readFileSync(file, 'utf8');
    let fileIssues = 0;
    
    // Run validation checks
    fileIssues += validateFileName(file);
    fileIssues += validateFrontMatter(content, file);
    fileIssues += validateHeadingStructure(content, file);
    fileIssues += validateTerminology(content, file);
    fileIssues += validateCodeBlocks(content, file);
    fileIssues += validateLinks(content, file);
    
    if (fileIssues === 0) {
      console.log(`✅ ${relativePath} passed all checks`);
      passedFiles++;
    } else {
      console.log(`❌ ${relativePath} has ${fileIssues} issues`);
      issuesFound += fileIssues;
    }
    console.log('---');
  });
  
  // Print summary
  console.log('\nValidation Summary');
  console.log('=================');
  console.log(`Total files scanned: ${totalFiles}`);
  console.log(`Files passed: ${passedFiles} (${Math.round(passedFiles/totalFiles*100)}%)`);
  console.log(`Total issues found: ${issuesFound}`);
  
  if (issuesFound > 0) {
    console.log('\nIssues Summary:');
    issuesList.forEach(issue => {
      console.log(`- ${issue}`);
    });
  }
}

/**
 * Validates file name follows kebab-case convention
 */
function validateFileName(filePath) {
  const fileName = path.basename(filePath);
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Check for kebab-case (lowercase with hyphens)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*\.md$/.test(fileName)) {
    const issue = `${relativePath}: File name should use kebab-case (lowercase with hyphens)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  return issues;
}

/**
 * Validates front matter is present and properly formatted
 */
function validateFrontMatter(content, filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Check if front matter exists
  if (!content.startsWith('---')) {
    const issue = `${relativePath}: Missing front matter`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
    return issues;
  }
  
  // Check if front matter is properly closed
  const secondDashes = content.indexOf('---', 3);
  if (secondDashes === -1) {
    const issue = `${relativePath}: Front matter is not properly closed`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
    return issues;
  }
  
  // Check if sidebar_position exists in front matter
  const frontMatter = content.substring(3, secondDashes);
  if (!frontMatter.includes('sidebar_position:')) {
    const issue = `${relativePath}: Front matter is missing sidebar_position`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  return issues;
}

/**
 * Validates heading structure follows the style guide
 */
function validateHeadingStructure(content, filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Skip front matter for heading analysis
  let contentWithoutFrontMatter = content;
  if (content.startsWith('---')) {
    const secondDashes = content.indexOf('---', 3);
    if (secondDashes !== -1) {
      contentWithoutFrontMatter = content.substring(secondDashes + 3);
    }
  }
  
  // Get all headings
  const headingMatches = [...contentWithoutFrontMatter.matchAll(/^(#{1,6})\s+(.+)$/gm)];
  
  if (headingMatches.length === 0) {
    const issue = `${relativePath}: No headings found in document`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
    return issues;
  }
  
  // Check for H1
  const h1Count = headingMatches.filter(match => match[1] === '#').length;
  if (h1Count === 0) {
    const issue = `${relativePath}: Missing H1 (top-level heading)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  } else if (h1Count > 1) {
    const issue = `${relativePath}: Multiple H1 headings found (should have only one)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  // Check for heading hierarchy
  let previousLevel = 1;
  let lineNumber = 1;
  for (const line of contentWithoutFrontMatter.split('\n')) {
    if (/^#{1,6}\s+/.test(line)) {
      const level = line.match(/^(#{1,6})/)[0].length;
      
      // Check if heading level jumps more than one level
      if (level > previousLevel + 1) {
        const issue = `${relativePath}:${lineNumber}: Heading skips a level (from H${previousLevel} to H${level})`;
        issuesList.push(issue);
        console.log(`  - ${issue}`);
        issues++;
      }
      
      previousLevel = level;
    }
    lineNumber++;
  }
  
  return issues;
}

/**
 * Validates terminology consistency according to style guide
 */
function validateTerminology(content, filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Check each term in the terminology rules
  for (const [incorrect, correct] of Object.entries(TERMINOLOGY_RULES)) {
    // Create a case-insensitive regex from the term
    const regex = new RegExp(`\\b${incorrect}\\b`, 'gi');
    const matches = content.match(regex);
    
    if (matches && matches.length > 0) {
      const issue = `${relativePath}: Use "${correct}" instead of "${incorrect}" (${matches.length} instances)`;
      issuesList.push(issue);
      console.log(`  - ${issue}`);
      issues++;
    }
  }
  
  return issues;
}

/**
 * Validates code blocks are properly formatted
 */
function validateCodeBlocks(content, filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Check for code blocks without language specification
  const codeBlockMatches = [...content.matchAll(/```(?!\w+)([^`]+)```/gs)];
  if (codeBlockMatches.length > 0) {
    const issue = `${relativePath}: Code blocks without language specification (${codeBlockMatches.length} instances)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  // Check JSON blocks for valid JSON
  const jsonBlockMatches = [...content.matchAll(/```(?:json|JSON)\n([^`]+)```/gs)];
  jsonBlockMatches.forEach((match, index) => {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      const issue = `${relativePath}: Invalid JSON in code block #${index + 1}`;
      issuesList.push(issue);
      console.log(`  - ${issue}`);
      issues++;
    }
  });
  
  return issues;
}

/**
 * Validates links are properly formatted
 */
function validateLinks(content, filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  let issues = 0;
  
  // Check for empty link text
  const emptyLinkMatches = [...content.matchAll(/\[(\s*)\]\(([^)]+)\)/g)];
  if (emptyLinkMatches.length > 0) {
    const issue = `${relativePath}: Links with empty text (${emptyLinkMatches.length} instances)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  // Check for "click here" type links
  const clickHereMatches = [...content.matchAll(/\[(click here|here|this link)\]\(([^)]+)\)/gi)];
  if (clickHereMatches.length > 0) {
    const issue = `${relativePath}: Non-descriptive link text like "click here" (${clickHereMatches.length} instances)`;
    issuesList.push(issue);
    console.log(`  - ${issue}`);
    issues++;
  }
  
  // Check for relative internal links that might be broken
  const relativeLinks = [...content.matchAll(/\[([^\]]+)\]\((?!https?:\/\/)([^)]+)\)/g)];
  for (const match of relativeLinks) {
    const linkTarget = match[2];
    if (linkTarget.startsWith('../') || linkTarget.startsWith('./')) {
      // Convert relative link to absolute path
      const absolutePath = path.resolve(path.dirname(filePath), linkTarget);
      
      // Check if the file exists
      if (!fs.existsSync(absolutePath) && !linkTarget.includes('#')) {
        const issue = `${relativePath}: Potentially broken relative link: ${linkTarget}`;
        issuesList.push(issue);
        console.log(`  - ${issue}`);
        issues++;
      }
    }
  }
  
  return issues;
} 