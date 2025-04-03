---
title: Contributing to MVMD
sidebar_label: Contributing
---

# Contributing to MVMD

## Overview

The Metaverse Metadata Directory (MVMD) is an open, collaborative project. We welcome contributions from individuals, organizations, and standards bodies to help improve the framework, documentation, and tools.

*The initial MVMD concept and versions were authored by Grig Bilham from [SumSetTech](./supporters/sumset-tech).*

## Ways to Contribute

You can contribute in various ways:

* **Documentation**: Improve clarity, add examples, fix errors, translate content, or suggest new sections.
* **Integration Profiles**: Propose new profiles, enhance existing ones, or identify gaps.
* **Technical Contributions**: Develop validation tools, create examples, fix bugs, add features, or improve tests.
* **Community Engagement**: Participate in discussions, share experiences, help others, organize workshops, or write articles.

## Contribution Process

1.  **Identify Contribution**: Check existing issues or discussions on GitHub to avoid duplication.
2.  **Prepare**:
    * *Code/Docs*: Fork the repository, create a branch, make changes following guidelines below.
    * *New Profiles/Ideas*: Create a detailed proposal or GitHub issue first.
3.  **Submit**:
    * Use GitHub Issues for bug reports and feature requests.
    * Use Pull Requests for code and documentation changes.
    * Use community forums/Discord for discussion.
4.  **Review**: The team will review your submission and provide feedback. Approved contributions will be merged.

## Development Guidelines

* **Code**: Follow existing style, include tests, update relevant docs, keep commits focused.
* **Profiles**: Start with a clear use case, define relationships/rules, provide examples.

## Documentation Style Guide

Adhering to this style guide ensures consistency and clarity.

### Document Naming & Structure

* **Files**: Use `kebab-case-with-hyphens.md`. No spaces or special characters.
* **Titles**: Use Title Case (e.g., "Integration Profiles Overview").
* **Front Matter**: All pages need `sidebar_position`.
    ```md
    ---
    sidebar_position: 1
    ---
    ```
* **Headings**: Single H1 (`#`) per page matching title. Use `##` (H2), `###` (H3), `####` (H4) sequentially. Don't skip levels.
* **Standard Sections**: Follow consistent section orders for Concepts, Standards, Profiles, and Implementation Guides (refer to original `style-guide.md` for specific orders if needed).

### Writing Style

* **Voice/Tone**: Use clear, direct language (active voice, present tense, address reader as "you"). Neutral, instructional tone.
* **Terminology**: Be consistent. Key terms:
    * Use "**standard**" when referring to technical standards (like glTF, USD). Avoid "namespace" in this context.
    * Use "**profile**" for MVMD's asset templates. Avoid "recipe", "pattern".
    * Capitalize correctly: **Schema.org**, **JSON-LD**, **glTF**, **USD**, **VRM**, **C2PA**, **WebXR**.
    * Use "**3D**" (not "3d" or "3-D").
    * Use "**metadata**" (not "meta-data").
* **Acronyms**: Define on first use (e.g., "Universal Scene Description (USD)").

### Code Examples

* **Format**: Use triple backticks with language identifier (e.g., ```json, ```javascript). Use single backticks for inline code (`likeThis`).
* **JSON-LD**: Format with 2-space indentation. Include `@context`. Add comments `// like this` for clarity where needed.
    ```json
    {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/" // MVMD namespace
      },
      "@type": "3DModel", // Asset type
      "name": "Example Model"
      // Required properties...
    }
    ```
* **Structure**: For complex topics, consider Basic, Standard, and Complete examples.

### References and Links

* **Internal**: Use relative paths (e.g., `../concepts/overview.md`). Use descriptive link text: `[Core Concepts](../concepts/overview.md)` NOT `[click here](../concepts/overview.md)`. Check links work.
* **External**: Use full URLs. Indicate third-party sites if appropriate.

### Visual Elements (Tables, Lists)

* Use Markdown tables for structured data (with headers).
* Use bulleted (`*`, `-`) or numbered (`1.`) lists appropriately. Keep list items parallel.

### Common Style Corrections

* **Standard vs. Namespace**: Replace `namespace` with `standard` when talking about glTF, USD, etc.
* **Capitalization**: Fix `schema.org` -> `Schema.org`, `gltf` -> `glTF`, `3d` -> `3D`.
* **Code Blocks**: Ensure language identifiers (e.g., ```json`) are present.
* **JSON Validity**: Check for missing commas, incorrect brackets/braces.
* **Headings**: Ensure single H1, no skipped levels (H2 -> H4).
* **Links**: Use descriptive text, fix broken relative paths.

### Validation & Other

* **Checklist**: Before submitting, check links, example validity, terminology, front matter, headings, spelling/grammar.
* **SEO**: Use key terms in titles/headings.
* **Accessibility**: Use proper headings, consider alt text for images (if any).

## Getting Started Contributing

1.  **Setup**: Fork/clone the MVMD repository.
2.  **First Task**: Pick a small task (fix typo, improve docs, add example).
3.  **Engage**: Join community discussions (GitHub, Discord) to ask questions and get feedback.

## Support and Resources

* **GitHub Issues**: For bug reports and feature requests.
* **Community Forums/Discord**: For discussions and questions.
* **Documentation**: For guides and references.
* **Email**: For direct communication.

We appreciate your help in making MVMD a robust standard for the metaverse! 