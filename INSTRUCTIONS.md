# Cursor AI Instructions for MVMD Documentation Restructuring

This file contains instructions for Cursor AI assistants working on restructuring the MVMD documentation.

## Overview

We are restructuring the documentation for the Metaverse Metadata Directory (MVMD) project. All strategy and planning documents are located in the `/strategy` directory. Please read these documents before working on any restructuring tasks.

## Key Documents

- **[Restructuring Plan](./strategy/RESTRUCTURING_PLAN.md)** - Start here. This document outlines the overall plan, current status, and next steps.

- **[AI Guide](./strategy/AI_GUIDE.md)** - This is your primary reference as an AI assistant. It explains how to approach the restructuring and the purpose of all other documents.

- **[Document Standards](./strategy/DOCUMENT_STANDARDS.md)** - This defines the standards and templates for each content type. Use this when editing or creating content.

- **[Cursor Workflow](./strategy/CURSOR_WORKFLOW.md)** - This provides specific instructions for working within the Cursor environment.

- **[Audit Log](./iteration/audit_log_v1.md)** - This contains the results of our content audit and identifies issues to address.

- **[Presentation Script](./strategy/presentation-script.md)** - Contains the presentation script for the restructuring project.

## Current Step

We have completed the content audit and finalized the structure design. We are now ready for Step 5 from the RESTRUCTURING_PLAN.md: "Implement New Structure" by creating the new directory structure and moving files.

## Working Process

1. Always work on the `restructuring` branch
2. Follow the steps in the RESTRUCTURING_PLAN.md
3. Apply the standards in DOCUMENT_STANDARDS.md
4. Make incremental changes and commit logically grouped modifications
5. Wait for user approval before making significant changes

## File Structure

The new documentation structure follows this pattern:

```
docs/
├── fundamentals/              # Conceptual content
├── guides/                    # Task-oriented instructions
├── integration-profiles/      # Formal specifications
├── reference/                 # Technical details
├── examples/                  # Code examples
├── community/                 # Community information
└── tools/                     # Tools documentation
```

## Important Notes

- Do not delete content; move it to the appropriate location
- Add cross-references between related content
- Ensure all internal links are updated when files are moved
- Always provide clear explanations of proposed changes 