# MVMD Documentation Validation Tools

This directory contains tools for validating MVMD documentation against the style guide.

## Setup

To use the validation tools, first install the necessary dependencies:

```bash
cd scripts
npm install
```

## Validating Documentation

### Using NPM Script

The simplest way to validate all documentation:

```bash
npm run validate
```

This will scan all Markdown files in the `../docs` directory and report any issues found.

### Custom Directory

To validate a specific directory:

```bash
node validate-docs.js ../docs/implementation
```

## Understanding Validation Results

The validation script checks for:

1. **File naming conventions**: Files should use kebab-case (lowercase with hyphens)
2. **Front matter**: Each file should have proper front matter with sidebar_position
3. **Heading structure**: H1 -> H2 -> H3 hierarchy without skipping levels
4. **Terminology consistency**: Terms follow the style guide's preferred terminology
5. **Code blocks**: All code blocks have a language specified and JSON is valid
6. **Links**: All links have descriptive text and internal links are valid

The output includes:
- Individual issues found in each file
- A summary of total files scanned and issues found
- Detailed list of all issues for easy reference

## Fixing Common Issues

### File Names
- Rename files to use kebab-case: `example-file-name.md`

### Front Matter
- Ensure each file has front matter with sidebar_position:
  ```md
  ---
  sidebar_position: 1
  ---
  ```

### Heading Structure
- Include exactly one H1 (`#`) at the top of the file
- Don't skip heading levels (e.g., H1 -> H3)
- Follow the structure in the style guide

### Terminology
- Use consistent terminology as defined in the style guide
- Pay attention to capitalization (e.g., "Schema.org" not "schema.org")

### Code Blocks
- Always specify a language for code blocks:
  ```md
  ```json
  { "example": "code" }
  ```
  ```
- Ensure JSON examples are valid

### Links
- Use descriptive link text: ✅ `[Avatar Profile](../profiles/avatar.md)`
- Avoid non-descriptive text: ❌ `[click here](../profiles/avatar.md)`
- Check that internal links point to existing files

## Style Guide Reference

For complete documentation standards, refer to [../docs/contributing/style-guide.md](../docs/contributing/style-guide.md) 