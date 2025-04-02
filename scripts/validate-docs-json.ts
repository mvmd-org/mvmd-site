const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { performValidation } = require('../src/lib/validationLogic'); // Adjust path if needed

const workspaceRoot = path.resolve(__dirname, '..'); // Assumes script is in root/scripts
const docsDir = path.join(workspaceRoot, 'docs');
const reportPath = path.join(workspaceRoot, 'static', 'docs-validation-report.html');

// Regex to find JSON code blocks
const jsonCodeBlockRegex = /```json\r?\n([\s\S]*?)\r?\n```/g;
const headingRegex = /^(#{1,6})\s+(.*)/; // Regex to find markdown headings

interface ValidationIssue {
  file: string;
  relativePath: string; // Added relative path for reporting
  blockIndex: number;
  message: string;
  type: 'error' | 'warning';
  headingAnchor?: string; // Added heading anchor ID
}

// --- Helper function to generate Docusaurus link ---
function getDocusaurusPath(relativePath: string): string {
  // Remove 'docs/' prefix
  let urlPath = relativePath.startsWith('docs/') ? relativePath.substring(5) : relativePath;
  // Remove '.md' suffix
  urlPath = urlPath.endsWith('.md') ? urlPath.slice(0, -3) : urlPath;
  // Handle index files (e.g., concepts/index -> /concepts)
  if (urlPath.endsWith('/index')) {
    urlPath = urlPath.slice(0, -6) || '/'; // Keep root slash if it was index.md
  }
  // Ensure leading slash
  return urlPath.startsWith('/') ? urlPath : '/' + urlPath;
}

// --- Helper function to generate heading anchor ID ---
function generateAnchorId(headingText: string): string {
  return headingText
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-alphanumeric chars except space/hyphen
    .replace(/\s+/g, '-')    // Replace spaces with hyphens
    .replace(/-+/g, '-');    // Collapse multiple hyphens
}
// --- End Helpers ---

async function validateJsonInFile(filePath: string): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  const relativePath = path.relative(workspaceRoot, filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    let currentJsonBlock = '';
    let isInsideJsonBlock = false;
    let blockIndex = 0;
    let lastHeadingText = '';
    let lastHeadingAnchor = '';

    for (const line of lines) {
      if (line.trim().startsWith('```json')) {
        isInsideJsonBlock = true;
        currentJsonBlock = ''; // Start accumulating new block
        blockIndex++;
        continue; // Move to next line
      }

      if (line.trim() === '```' && isInsideJsonBlock) {
        isInsideJsonBlock = false;
        // Process the completed JSON block
        if (currentJsonBlock.trim()) {
          try {
            const result = performValidation(currentJsonBlock);
            if (!result.isValid) {
              result.errors.forEach(error => {
                issues.push({
                  file: filePath,
                  relativePath,
                  blockIndex,
                  message: error,
                  type: 'error',
                  headingAnchor: lastHeadingAnchor // Store anchor found *before* this block
                });
              });
            }
            // Reset for next potential block under same heading
            // lastHeadingAnchor = ''; 
          } catch (validationError) {
            issues.push({
              file: filePath,
              relativePath,
              blockIndex,
              message: `Validation function error: ${(validationError as Error).message}`,
              type: 'error',
              headingAnchor: lastHeadingAnchor
            });
          }
        }
        continue; // Move to next line after processing block
      }

      if (isInsideJsonBlock) {
        currentJsonBlock += line + '\n';
      } else {
        // Look for headings outside code blocks
        const headingMatch = line.match(headingRegex);
        if (headingMatch) {
          lastHeadingText = headingMatch[2].trim();
          lastHeadingAnchor = generateAnchorId(lastHeadingText);
        }
      }
    }

  } catch (readError) {
    console.error(`Error reading file ${relativePath}:`, readError);
  }
  return issues;
}

// --- Main Validation Runner ---
async function runValidation() {
  console.log('Starting documentation JSON validation...');
  const allIssues: ValidationIssue[] = [];
  const mdFiles = await glob(`${docsDir}/**/*.md`, { ignore: 'node_modules/**' });
  const allFilesScannedPaths: string[] = []; // Keep track of all files scanned

  console.log(`Found ${mdFiles.length} markdown files to scan.`);

  for (const file of mdFiles) {
    const absolutePath = path.resolve(file); // Ensure absolute path for consistency
    allFilesScannedPaths.push(absolutePath);
    const fileIssues = await validateJsonInFile(absolutePath);
    allIssues.push(...fileIssues);
  }

  console.log(`Validation complete. Found ${allIssues.length} total issues.`);

  // Generate the HTML report
  console.log('Generating HTML report...');
  const reportHtmlContent = generateHtmlReport(allIssues, allFilesScannedPaths);

  // Write the report to the static directory
  try {
    fs.writeFileSync(reportPath, reportHtmlContent, 'utf8');
    console.log(`HTML report successfully generated at: ${reportPath}`);
  } catch (writeError) {
    console.error(`Error writing HTML report to ${reportPath}:`, writeError);
  }
}
// --- End Main Validation Runner ---

function generateHtmlReport(allIssues: ValidationIssue[], allFilesScannedPaths: string[]): string {
  const issuesByFile = new Map<string, ValidationIssue[]>();
  allIssues.forEach(issue => {
    if (!issuesByFile.has(issue.relativePath)) {
      issuesByFile.set(issue.relativePath, []);
    }
    issuesByFile.get(issue.relativePath)!.push(issue);
  });

  let reportHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation JSON Validation Report</title>
  <style>
    body { font-family: sans-serif; line-height: 1.5; padding: 20px; background-color: #f8f8f8; color: #333; }
    h1 { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0; margin-bottom: 20px; }
    .summary { background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #eee; margin-bottom: 20px; }
    details { background-color: #fff; padding: 10px 15px; border-radius: 5px; border: 1px solid #eee; margin-bottom: 10px; }
    summary {
      cursor: pointer;
      font-weight: bold;
      display: flex; /* Use flexbox for alignment */
      justify-content: space-between; /* Push status to the right */
      align-items: center;
    }
    summary code { font-weight: bold; }
    summary::-webkit-details-marker { display: none; } /* Hide default marker */
    summary::before {
      content: '▶'; /* Collapsed state marker */
      margin-right: 8px;
      font-size: 0.8em;
      display: inline-block;
      transition: transform 0.2s;
    }
    details[open] summary::before {
      transform: rotate(90deg); /* Expanded state marker */
    }
    .file-link { text-decoration: none; color: #0056b3; }
    .file-link:hover { text-decoration: underline; }
    .status { margin-left: 15px; padding: 3px 8px; border-radius: 4px; font-size: 0.9em; }
    .status-ok { background-color: #dff0d8; border: 1px solid #d6e9c6; color: #3c763d; }
    .status-error { background-color: #f2dede; border: 1px solid #ebccd1; color: #a94442; }
    ul { list-style: none; padding: 10px 0 0 25px; margin: 10px 0 0 0; border-top: 1px dotted #eee; }
    li { padding: 5px 0; }
    .error { color: #d9534f; }
    .warning { color: #f0ad4e; }
    code { background-color: #eef; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
    .no-issues { padding: 10px 0 0 25px; color: #3c763d; font-style: italic; }
    .issue-link { color: inherit; text-decoration: none; }
    .issue-link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Documentation JSON Validation Report</h1>
  <div class="summary">
    Scanned ${allFilesScannedPaths.length} markdown files.<br>
    Found ${allIssues.length} total validation errors in JSON examples.
  </div>
`;

  allFilesScannedPaths.sort().forEach(absolutePath => {
    const relativePath = path.relative(workspaceRoot, absolutePath);
    const fileIssues = issuesByFile.get(relativePath) || [];
    const docusaurusPath = getDocusaurusPath(relativePath);
    const hasErrors = fileIssues.length > 0;

    // Group issues by heading and block index for this file
    const issuesByHeadingAndBlock = new Map<string, Map<number, ValidationIssue[]>>();
    if (hasErrors) {
      fileIssues.forEach(issue => {
        const headingKey = issue.headingAnchor || '_noheading_'; // Use placeholder if no heading
        if (!issuesByHeadingAndBlock.has(headingKey)) {
          issuesByHeadingAndBlock.set(headingKey, new Map<number, ValidationIssue[]>());
        }
        const issuesByBlock = issuesByHeadingAndBlock.get(headingKey)!;
        if (!issuesByBlock.has(issue.blockIndex)) {
          issuesByBlock.set(issue.blockIndex, []);
        }
        issuesByBlock.get(issue.blockIndex)!.push(issue);
      });
    }

    reportHtml += `
  <details ${hasErrors ? 'open' : ''}>
    <summary>
      <span><a href="${docusaurusPath}" class="file-link" target="_blank"><code>${relativePath}</code></a></span>
      <span class="status ${hasErrors ? 'status-error' : 'status-ok'}">${hasErrors ? fileIssues.length + ' Errors' : '✅ OK'}</span>
    </summary>
`;
    if (hasErrors) {
      reportHtml += `    <ul class="block-list">\n`; // Changed to block-list class

      // Iterate through headings (or no heading)
      issuesByHeadingAndBlock.forEach((issuesByBlock, headingKey) => {
        // Iterate through blocks within this heading
        issuesByBlock.forEach((blockIssues, blockIndex) => {
          const headingAnchor = (headingKey === '_noheading_') ? '' : headingKey;
          const errorMessages = blockIssues.map(issue => `${issue.type.toUpperCase()}: ${issue.message}`);
          const encodedErrors = encodeURIComponent(JSON.stringify(errorMessages));
          const primaryAnchor = headingAnchor || `block-${blockIndex}`; // Fallback anchor if no heading
          const linkHref = `${docusaurusPath}#${primaryAnchor}&validationBlock=${blockIndex}&validationErrors=${encodedErrors}`;
          const linkText = `[Block ${blockIndex}]`;

          reportHtml += `      <li class="block-item">\n`;
          reportHtml += `        <a href="${linkHref}" target="_blank" class="issue-link block-link">${linkText}</a>`;
          if (headingAnchor) {
            reportHtml += ` <span class="heading-info">(under <a href="${docusaurusPath}#${headingAnchor}" target="_blank">#${headingAnchor}</a>)</span>`;
          }
          reportHtml += `        <ul class="error-list">\n`;
          blockIssues.forEach(issue => {
            reportHtml += `          <li><span class="${issue.type}">${issue.type.toUpperCase()}</span>: ${escapeHtml(issue.message)}</li>\n`;
          });
          reportHtml += `        </ul>\n`;
          reportHtml += `      </li>\n`; // End block-item
        });
      });

      reportHtml += `    </ul>\n`; // End block-list
    } else {
      reportHtml += `    <div class="no-issues">No issues found in this file.</div>\n`;
    }
    reportHtml += `  </details>
`;
  });

  reportHtml += `
</body>
</html>
`;

  return reportHtml;
}

function escapeHtml(unsafe: string): string {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

// --- Execute the validation ---
runValidation().catch(error => {
  console.error('An unexpected error occurred during validation:', error);
  process.exit(1);
});
