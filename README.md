# Metaverse Metadata Directory

Welcome to the Metaverse Metadata Directory repository! This project is built using Docusaurus 2, a modern static site generator.
Table of Contents

- Overview
- Prerequisites
- Validator
- Updating the Documentation
- Building and Deploying
- Custom Domain
- Troubleshooting
- Helpful Resources

## Overview

This repository powers the Metaverse Metadata Directory website: mvmd.org. It serves as a central hub for discovering and implementing metadata standards for Metaverse assets.
Prerequisites

Before making changes, ensure you have the following tools installed:

- Node.js (v16.x recommended)
- npm (comes with Node.js)
- Git

## Validator

The MVMD site includes a comprehensive JSON-LD schema validator that checks documentation against Schema.org standards. The validator consists of two main components:

1. **Interactive Validator** (`/validator`): A web-based tool for validating JSON-LD metadata in real-time
2. **Documentation Validator**: A script that validates all JSON code blocks in the documentation

### Running the Documentation Validator

To validate all JSON code blocks in the documentation:

```bash
npx ts-node scripts/validate-docs-json.ts
```

This will:
1. Scan all markdown files in the `docs/` directory
2. Extract JSON code blocks
3. Validate them against Schema.org standards
4. Generate a validation report at `static/docs-validation-report.html`

To view the validation report:
1. Start the development server: `npm run start`
2. Visit `http://localhost:3000/validation-report` or `http://localhost:3000/docs-validation-report.html`

### Schema.org Updates

The validator uses Schema.org definitions from `src/lib/schemaDefinitions.json`. To update these definitions:

1. Visit [Schema.org's latest definitions](https://schema.org/version/latest/schemaorg-current-https.jsonld)
2. Download the latest JSON-LD definitions
3. Update `src/lib/schemaDefinitions.json` with the new definitions

### Validation Rules

The validator checks for:
- Valid JSON-LD syntax
- Proper `@type` declarations
- Valid property types according to Schema.org
- Required properties for specific types
- Custom namespace handling (properties with `:` in their names)

### Troubleshooting Validation

If you encounter validation issues:
1. Check the validation report for specific error messages
2. Verify JSON-LD syntax in your code blocks
3. Ensure all required properties are present
4. Check property types against Schema.org definitions
5. Review custom namespace usage

## Updating the Documentation

#### Clone the repository:

    git clone https://github.com/mvmd-org/mvmd-site.git
    cd mvmd-site

#### Make changes to the documentation:

    Add or update files in the docs/ directory.
    Adjust the sidebar structure in sidebars.ts if necessary.

#### Test your changes locally:

    npm install
    npm run start

Open your browser to http://localhost:3000 to preview the changes.

## Building and Deploying

#### Deploy the site:
    npm run build
    npm run deploy

This command:
    Builds the site (if not already built).
    Pushes the build/ folder to the gh-pages branch of the repository.

Wait a few minutes for GitHub Pages to process the changes. The site will be live at mvmd.org.

## Custom Domain

The site uses a custom domain, mvmd.org. The custom domain is defined in the CNAME file located in the static/ folder. This file is automatically included in the build and deployed with the site.
Troubleshooting

#### Deployment Fails:
Ensure the GITHUB_TOKEN is correctly configured if deploying via GitHub Actions.
Run the deploy command with additional logging:

DEBUG=* npm run deploy

#### Changes Not Reflecting:
Verify the gh-pages branch has been updated.
Check the GitHub Pages settings to ensure the correct source branch is selected.

#### Custom Domain Issues:
- Ensure the DNS records for mvmd.org are correctly configured.
- Verify the CNAME file is present in the gh-pages branch.


If you have questions or encounter issues, please open an issue in this repository or contact the maintainers.
