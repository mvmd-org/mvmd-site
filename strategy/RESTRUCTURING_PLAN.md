# Documentation Restructuring and Refinement Plan

This document outlines the steps to restructure and refine the MVMD documentation for improved clarity, navigation, and user experience.

## Goal

To reorganize the documentation structure and revise content, making it easier for newcomers and experienced users to find the information they need by separating concepts, tasks, and technical references effectively.

## Strategy Overview

We will follow an iterative process involving restructuring the navigation, moving files, reviewing content for appropriate placement and focus, rewriting/editing content, and ensuring proper cross-linking.

## Steps

1.  **Branch Creation:** (Completed) Work is being done on the `restructuring` branch.
2.  **Initial Structure Definition:** (Completed) A new, logical structure has been proposed, separating documentation into:
    *   Introduction & Overview
    *   Fundamentals (Core Concepts)
    *   How-To Guides (Task-based)
    *   Integration Profiles (Pre-built patterns)
    *   Technical Reference (Standard details, specs)
    *   Examples (Code samples with explanations)
    *   Community
    *   Tools
3.  **Content Audit (Identify Misplaced Info):** (Completed)
    *   Review key files within the *current* structure (`Concepts`, `Implementation`, `Embedding`, etc.).
    *   Identify specific sections/paragraphs containing information that belongs in a different category under the *new* proposed structure.
    *   Document findings in `iteration/audit_log_v1.md`.
4.  **Final Structure Definition:** (Completed)
    *   Based on audit findings, finalize the new structure.
    *   Create documentation standards for each content type.
    *   Integrate embedding content rather than keeping it as a separate section.
    *   Clarify distinctions between different content types (especially integration profiles vs examples).
5.  **Implement New Structure:**
    *   Modify `sidebars.ts` to reflect the new navigation structure.
    *   Create necessary new directories based on the new structure.
    *   Move existing markdown files to their appropriate new locations in the filesystem. *Ensure Git tracks these moves correctly (`git mv` if necessary, though often handled automatically)*.
6.  **Content Refinement (Iterative):**
    *   **Goal:** Ensure each page follows the established document standards and focuses *only* on the purpose of its section.
    *   **Process:**
        *   Go through files in their new locations, section by section.
        *   **Edit/Rewrite:** Remove content that doesn't belong on the page and move it (or ensure it exists) on a more appropriate page.
        *   **Add Cross-Links:** Insert links pointing to related concepts, prerequisite tasks, or detailed references in other sections.
        *   **Apply Standards:** Ensure each file follows the document standards defined in `DOCUMENT_STANDARDS.md`.
        *   **Review/Approve:** The AI assistant proposes changes to a file/group of files. The User reviews, provides feedback, and approves. Repeat until satisfied.
7.  **Final Review:** Once all sections are refined, perform a final review of the navigation, links, and overall coherence.
8.  **Merge:** Merge the `restructuring` branch back into the main branch when complete.

## Final Documentation Structure

The final agreed-upon structure is:

```
docs/
│
├── introduction.md            # Overall introduction to MVMD
│
├── fundamentals/              # Conceptual, learning-oriented content
│   ├── overview.md            # Introduction to fundamentals section
│   ├── core-concepts.md       # Core concepts from fundamentals.md and metadata-fundamentals.md
│   ├── metadata-structure.md  # JSON-LD structure, context, and types
│   ├── types-of-things.md     # Schema.org types for metaverse assets
│   ├── relationships.md       # Composition, references, entity connections
│   ├── data-inclusion.md      # Conceptual overview of embedding vs. referencing
│   └── standards-overview.md  # Conceptual introduction to standards integration
│
├── guides/                    # Task-oriented, practical instructions
│   ├── overview.md            # Introduction to guides section
│   ├── getting-started.md     # First steps for implementation
│   ├── basic-implementation/  # Basic implementation guides
│   ├── 3d-assets/             # 3D asset implementation (with both embedding & referencing)
│   ├── advanced-patterns/     # Complex implementation patterns
│   ├── media-content/         # Media content implementation guides
│   ├── geospatial/            # Geospatial implementation guidance
│   └── trust-and-provenance/  # Trust and provenance implementation
│
├── integration-profiles/      # Formal specifications for implementation patterns
│   ├── overview.md            # Introduction to integration profiles
│   ├── composable-3d-nft.md   # Currently published profile
│   ├── avatar.md              # Avatar integration profile
│   ├── vehicle.md             # Vehicle integration profile
│   ├── digital-twin.md        # Digital twin integration profile
│   └── [other profiles]       # Additional integration profiles
│
├── reference/                 # Information-oriented technical details
│   ├── overview.md            # Introduction to reference section
│   ├── metadata-profiles/     # Standardized templates
│   ├── implementation/        # Technical implementation details
│   ├── schema-types/          # Schema.org type reference
│   └── standards/             # Technical standards reference
│
├── examples/                  # Code examples and implementations
│   ├── overview.md            # Introduction to examples section
│   ├── basic-examples/        # Simple example implementations
│   ├── advanced-examples/     # Complex implementation examples
│   └── integration-examples/  # Standards integration examples
│
├── community/                 # Community information
│   ├── overview.md            # Introduction to community section
│   ├── contributing.md        # How to contribute
│   ├── supporters.md          # Supporting organizations
│   ├── roadmap.md             # Future development plans
│   └── integration-profiles/  # Integration profiles community processes
│
└── tools/                     # Tools for working with metadata
    ├── overview.md            # Introduction to tools section
    └── validator.md           # Validation tool information
```

## Document Standards

We have established clear standards for each content type in `DOCUMENT_STANDARDS.md`, defining:

- Purpose and format requirements for each content type
- Standard structure templates
- Cross-linking standards
- File naming conventions
- Quality checklist for documentation

These standards will be applied during the content refinement phase to ensure consistency and clarity across the documentation.

## Iterative Review Process Notes

*   Changes will be proposed by the AI assistant.
*   User feedback is crucial at each step, especially during content refinement.
*   Focus on making minimal necessary changes first, then refine further if needed.
*   Refer back to this plan using prompts like "Let's proceed with Step X of the RESTRUCTURING_PLAN.md". 