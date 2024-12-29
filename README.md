# Metaverse Metadata Directory

Welcome to the Metaverse Metadata Directory repository! This project is built using Docusaurus 2, a modern static site generator.
Table of Contents

- Overview
- Prerequisites
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
