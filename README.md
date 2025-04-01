# Metaverse Metadata Directory

This repository powers the Metaverse Metadata Directory website: mvmd.org. It serves as a central hub for discovering and implementing metadata standards for Metaverse assets.

> **Note:** This repository is currently undergoing a documentation restructuring process. See the [Documentation Restructuring](#documentation-restructuring) section below.

## Repository Information

### Prerequisites

Before making changes, ensure you have the following tools installed:

- Node.js (v16.x recommended)
- npm (comes with Node.js)
- Git

### Updating the Documentation

#### Clone the repository:

```bash
git clone https://github.com/mvmd-org/mvmd-site.git
cd mvmd-site
```

#### Make changes to the documentation:

- Add or update files in the docs/ directory.
- Adjust the sidebar structure in sidebars.ts if necessary.

#### Test your changes locally:

```bash
npm install
npm run start
```

Open your browser to http://localhost:3000 to preview the changes.

### Building and Deploying

#### Deploy the site:
```bash
npm run build
npm run deploy
```

This command:
- Builds the site (if not already built).
- Pushes the build/ folder to the gh-pages branch of the repository.

Wait a few minutes for GitHub Pages to process the changes. The site will be live at mvmd.org.

### Custom Domain

The site uses a custom domain, mvmd.org. The custom domain is defined in the CNAME file located in the static/ folder. This file is automatically included in the build and deployed with the site.

### Troubleshooting

#### Deployment Fails:
Ensure the GITHUB_TOKEN is correctly configured if deploying via GitHub Actions.
Run the deploy command with additional logging:

```bash
DEBUG=* npm run deploy
```

#### Changes Not Reflecting:
- Verify the gh-pages branch has been updated.
- Check the GitHub Pages settings to ensure the correct source branch is selected.

#### Custom Domain Issues:
- Ensure the DNS records for mvmd.org are correctly configured.
- Verify the CNAME file is present in the gh-pages branch.

If you have questions or encounter issues, please open an issue in this repository or contact the maintainers.

---

## Documentation Restructuring

We are currently restructuring the MVMD documentation to improve organization, clarity, and user experience.

### Strategy Documents

All planning and guidance documents for this restructuring effort are located in the `/strategy` directory:

- [Restructuring Plan](./strategy/RESTRUCTURING_PLAN.md) - Overall plan, goals, and current status
- [Document Standards](./strategy/DOCUMENT_STANDARDS.md) - Standards and templates for each content type
- [AI Guide](./strategy/AI_GUIDE.md) - Guide for AI assistants working on the project
- [Cursor Workflow](./strategy/CURSOR_WORKFLOW.md) - Specific instructions for working in Cursor

### Current Status

We have completed the content audit and finalized the structure design. The next step is implementing the new structure by creating directories and moving files according to the plan.

### New Documentation Structure

The documentation is being reorganized according to the Diátaxis framework, with these main sections:

1. **Fundamentals** - Conceptual, learning-oriented content
2. **Guides** - Task-oriented, practical instructions
3. **Integration Profiles** - Formal specifications for implementation patterns
4. **Reference** - Information-oriented technical details
5. **Examples** - Code examples and implementations
6. **Community** - Community information and contribution guidelines
7. **Tools** - Tools for working with metadata

### Contributing to Restructuring

If you're a contributor (human or AI) working on this restructuring project:

1. Always work on the `restructuring` branch
2. Read the [Restructuring Plan](./strategy/RESTRUCTURING_PLAN.md) first
3. Follow the document standards in [Document Standards](./strategy/DOCUMENT_STANDARDS.md)
4. Use the proper workflows described in [Cursor Workflow](./strategy/CURSOR_WORKFLOW.md)
5. Make incremental changes and commit logically grouped modifications
