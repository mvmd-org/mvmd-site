# Documentation Content Audit Log (v1 - Initial Review)

**Date:** $(date +%Y-%m-%d)

**Goal:** Identify content within the current documentation structure (pre-restructuring) that is misplaced according to the target structure defined in `RESTRUCTURING_PLAN.md`. This focuses on separating Concepts (Fundamentals), Tasks (How-To Guides), and Reference information.

**Methodology:** Review key markdown files, noting sections/paragraphs containing information that should ideally reside in a different category (Fundamentals, How-To Guides, Technical Reference).

## Findings

### `docs/concepts/fundamentals.md`

*   **Overall:** This page provides a good conceptual foundation for Schema.org, JSON-LD, and basic MVMD context requirements. It mostly stays within the scope of "Fundamentals".
*   **Minor Misplacement/Forward Reference:**
    *   The sections "Additional Contexts" and "Namespaces" introduce *examples* using `gltf` and `usd`. While the concept of adding contexts is fundamental, these specific examples are borderline and heavily rely on understanding embedding, which belongs more in `Technical Reference`. The existing links to the Embedding section are good, but perhaps the examples could be simplified or moved entirely.
    *   The section "Proper Value Handling" (Simple, Structured, Multiple) demonstrates *how* to structure JSON-LD for different values. This feels slightly like implementation detail, potentially suitable for a "Getting Started" guide in `How-To Guides`, but it's closely tied to the fundamental JSON-LD syntax, so it might be acceptable here if kept concise.
    *   The "Extension Points" (`additionalProperty`) section is a fundamental concept but the example provided is quite basic. More detailed examples of *how* to use extensions might fit better in `How-To Guides` or `Technical Reference` depending on complexity.

### `docs/concepts/composition.md`

*   **Overall:** This page explains the *concepts* of how assets relate using Schema.org properties (`mainEntity`, `hasPart`, `associatedMedia`, `encodesCreativeWork`, `subjectOf`). It primarily focuses on the "what" and "why" of these relationships.
*   **Potential Overlap/Misplacement:**
    *   The definition and examples for `hasPart` are fundamental concepts of composition. However, the text explicitly mentions: "Component parts are mentioned in further detail in the [composable](/implementation/composable.md) page of the [implementation](/implementation/composable) section." This confirms an overlap. The *concept* of `hasPart` belongs here in `Fundamentals`. The *specific implementation patterns and advanced usage* for building composable assets should reside in the `How-To Guides` (`Implementing Composable Assets`) or potentially `Technical Reference` if detailing complex constraints.
    *   The extensive JSON examples, especially the "Complete Composition Example", while illustrating the concepts, lean towards showing *how* to implement them. They could potentially be simplified here, with links pointing to more detailed, task-oriented examples in `How-To Guides`.
    *   The "Best Practices" section at the end (Clear Hierarchy, Relationship Management, etc.) feels more like implementation guidance and might be better suited for an `Implementation Best Practices` page within `Technical Reference` or integrated into relevant `How-To Guides`.

### `docs/concepts/uris-vs-embedding.md`

*   **Overall:** Clearly explains the *concept* of referencing external content vs. embedding it directly. Discusses the pros and cons (When to Use Each).
*   **Potential Misplacement:**
    *   The "Reference Types" section (Direct URL, Thumbnail, URL Array, URL Object, etc.) shows specific JSON structures for *how* to implement references. This feels like reference material or potentially part of a "Getting Started" guide (`How-To Guides`). The *concept* is linking externally, the specific syntax is reference/implementation.
    *   The embedded content example using `gltf` is a concrete implementation detail, suitable for `Technical Reference` or potentially a `How-To Guide` on embedding glTF, rather than illustrating the core concept of embedding itself.
    *   The "Best Practices" section (URL Management, Embedding Management) is implementation guidance, better suited for `Technical Reference` or `How-To Guides`.

### `docs/concepts/file-organization.md`

*   **Overall:** Aims to discuss structuring metadata files, particularly focusing on namespace/type declarations and component relationships.
*   **Significant Misplacement/Overlap:**
    *   The title "File Organization" is slightly misleading. The content heavily focuses on **JSON-LD structure**, specifically the correct usage of `@type`, `@context`, and namespacing within the JSON object itself, rather than how to organize `.jsonld` *files* in a project filesystem.
    *   The core concepts of `@type` and `@context` are fundamental and partially overlap with `docs/concepts/fundamentals.md`. This page dives deeper into the *necessity* and *correct implementation* of `@type` in nested objects and arrays.
    *   The examples demonstrating `gltf:transform` and `gltf:materials` are specific implementation details belonging in `Technical Reference` or a glTF-specific `How-To Guide`.
    *   The "Core Organization Patterns" (Root Asset Structure, Component Relationships) use complex examples that demonstrate *how* to implement specific structures (like a vehicle), blurring the line between concept and implementation example/recipe.
    *   The "Complete Example" is essentially a mini-recipe or complex implementation pattern, better suited for `Integration Profiles` or `How-To Guides`.
    *   "Best Practices" and "Common Issues and Solutions" are clearly implementation/troubleshooting guidance, belonging in `How-To Guides` or `Technical Reference`.
    *   **Recommendation:** This page needs significant refactoring. The core concepts about JSON-LD structure (`@type`, `@context`, namespacing) should be merged/clarified within the `Fundamentals` section. The implementation patterns and examples should move to `How-To Guides` or `Technical Reference`.

### `docs/concepts/metadata-fundamentals.md`

*   **Overall:** This page appears to be another attempt at covering fundamentals, significantly overlapping with `docs/concepts/fundamentals.md`.
*   **Significant Overlap/Redundancy:**
    *   Covers `@context`, `@type`, Property Value Handling (`Simple`, `Additional`, `Complex`), Relationship Properties (`hasPart`, `associatedMedia`, etc.), Location Types, and Best Practices – nearly all topics are also present in `fundamentals.md`, `composition.md`, or `types-of-things.md`.
    *   The examples provided are often more complex and implementation-focused (e.g., detailed `gltf:transform`, `usd:environment`) than those in `fundamentals.md`.
    *   The "Complete Example" is another complex implementation pattern.
    *   The "Best Practices" and "Common Patterns" sections are implementation guidance.
    *   **Recommendation:** This page seems largely redundant. Its useful conceptual content should be merged into the primary `Fundamentals` pages (once consolidated). The implementation examples and best practices should be moved to `How-To Guides` or `Technical Reference`.

### `docs/concepts/references.md`

*   **Overall:** Focuses on the *concept* of how different Schema.org properties (`image`, `thumbnail`, `mainEntity`, `sameAs`, `associatedMedia`, `encodesCreativeWork`) create references between resources.
*   **Minor Misplacement:**
    *   The examples show the specific JSON structure for each reference type. While illustrating the concept, the focus on syntax leans towards reference material. Simpler conceptual explanations with links to `Technical Reference` for exact syntax might be better.
    *   The "Reference Best Practices" section belongs in `Technical Reference` or `How-To Guides`.

### `docs/concepts/types-of-things.md`

*   **Overall:** Introduces the relevant Schema.org types (`CreativeWork`, `MediaObject`, `ImageObject`, `3DModel`, `Place`, `VirtualLocation`, `Event`, `SoftwareApplication`, `DigitalDocument`) used in MVMD. This fits well conceptually.
*   **Minor Misplacement:**
    *   The examples for each type show basic implementation syntax. This is acceptable for illustrating the type but should avoid excessive complexity.
    *   The sections on "Type Relationships" (Inheritance, Composition, References) briefly recap concepts covered in more detail on other pages (`composition.md`, `references.md`), which is good practice for context.
    *   The "Best Practices" (Type Selection, Property Usage, etc.) section is implementation advice, better suited for `Technical Reference` or `How-To Guides`.

### `docs/implementation/getting-started.md`

*   **Overall:** This is a task-oriented guide that walks through the steps of implementing metadata for assets. It fits well in the `How-To Guides` section.
*   **Minor Misplacement:**
    *   The "Prerequisites" section could potentially be moved to a higher-level "Getting Started" guide or the introduction, as it's more about preparation than implementation.
    *   The "Common Issues and Solutions" section is more troubleshooting guidance, which could be moved to a dedicated troubleshooting guide or `Technical Reference`.
    *   The "Next Steps" section contains links to other sections, which is good, but some of the advanced features mentioned (authentication, provenance) might need their own dedicated guides.

### `docs/implementation/composable.md`

*   **Overall:** This is a task-oriented guide focused on implementing composable assets, building on concepts from earlier sections. It fits well in `How-To Guides`.
*   **Minor Misplacement:**
    *   The "Key Benefits" section is more conceptual and could potentially be moved to the `Fundamentals` section, specifically in the `composition.md` page where it discusses the benefits of using `hasPart` and other composition properties.
    *   The "Validation Requirements" section (Physical and Logical) is more of a reference for what needs to be validated, potentially better suited for `Technical Reference`.
    *   The "Best Practices" section, while implementation-focused, could be expanded into a dedicated "Implementation Best Practices" guide in `Technical Reference` or split into specific task-oriented guides for component design, assembly implementation, and performance optimization.

### `docs/implementation/standards-implementation.md`

*   **Overall:** This is a task-oriented guide for standards organizations to implement their standards within MVMD. It fits well in `How-To Guides`.
*   **Minor Misplacement:**
    *   The "Introduction" section is more conceptual and could potentially be moved to a higher-level overview or the `Fundamentals` section.
    *   The "Validation Requirements" section is more of a reference for what needs to be validated, potentially better suited for `Technical Reference`.
    *   The "Governance Participation" section is more about organizational involvement than implementation, potentially better suited for a separate governance guide or the introduction.

### `docs/implementation/metadata-profiles.md`

*   **Overall:** This is a reference document providing standardized templates for common asset types. It fits well in `Technical Reference`.
*   **Minor Misplacement:**
    *   The introduction paragraph is more conceptual and could be moved to the `Fundamentals` section.
    *   The examples could potentially be expanded into task-oriented guides in `How-To Guides` for implementing each profile type.

### `docs/implementation/assets.md`

*   **Overall:** This is a task-oriented guide for implementing metadata for different asset types. It fits well in `How-To Guides`.
*   **Minor Misplacement:**
    *   The "Storage Strategies" section (Centralized vs. Decentralized) is more conceptual and could be moved to the `Fundamentals` section.
    *   The "Implementation Features" section with JSON examples is more of a reference for available features, potentially better suited for `Technical Reference`.
    *   The "Best Practices" section could be expanded into a dedicated "Implementation Best Practices" guide in `Technical Reference` or split into specific task-oriented guides.

### `docs/implementation/nfts.md`

*   **Overall:** This is a task-oriented guide for implementing metadata for NFT assets. It fits well in `How-To Guides`.
*   **Minor Misplacement:**
    *   The "Modern NFT Capabilities" section is more conceptual and could be moved to the `Fundamentals` section.
    *   The "ERC-721 Metadata Standard" section is more of a reference for the standard, potentially better suited for `Technical Reference`.
    *   The "Best Practices" section could be expanded into a dedicated "NFT Implementation Best Practices" guide in `Technical Reference` or split into specific task-oriented guides.

### `docs/implementation/overview.md`

*   **Overall:** This is a high-level overview of the implementation section. It fits well as an introduction to the `How-To Guides` section.
*   **Minor Misplacement:**
    *   The "Core Topics" section briefly describes each topic, which is good for navigation but could potentially be expanded into a more detailed conceptual overview in the `Fundamentals` section.

### `docs/implementation/best-practices.md`

*   **Overall:** This is a comprehensive guide of best practices for implementing metadata. It fits well in `Technical Reference`.
*   **Minor Misplacement:**
    *   The "General" section at the beginning is more conceptual and could be moved to the `Fundamentals` section.
    *   The "Implementation Guidelines" section is more task-oriented and could be split into specific guides in `How-To Guides`.
    *   The "Next Steps" section contains links to other sections, which is good, but some of the advanced features mentioned might need their own dedicated guides.

### `docs/implementation/composable/concepts.md`

*   **Overall:** This is a conceptual overview of composable assets, focusing on the vision, concepts, and benefits. It would fit better in the `Fundamentals` section rather than under `Implementation`.
*   **Significant Misplacement:**
    *   The entire file feels conceptual rather than implementation-focused. It discusses "Component-Based Architecture", "Key Benefits", "Composable Characters in Practice", etc., all of which are core concepts rather than implementation details.
    *   The "Technical Considerations" section briefly touches on implementation concepts but still at a high conceptual level.
    *   The "Best Practices" section contains general design principles rather than specific implementation guidelines.
    *   **Recommendation:** This file should be moved to the `Fundamentals` section, potentially merged with relevant parts of `docs/concepts/composition.md`.

### `docs/implementation/composable/schema-parts.md`

*   **Overall:** This is a task-oriented guide on using Schema.org's `hasPart` property for component relationships. It fits well in `How-To Guides`.
*   **Minor Misplacement:**
    *   Some of the basic "Component Relationships" information overlaps with conceptual content in `docs/concepts/composition.md`.
    *   The "Validation Requirements" section is more of a reference and could be better suited for `Technical Reference`.
    *   The "Best Practices" section could potentially be consolidated with other best practices sections in a comprehensive guide.

### `docs/implementation/composable/assembly-patterns.md`

*   **Overall:** This file describes different patterns for assembling components, with both conceptual explanations and implementation examples. Parts fit in `Fundamentals` while others fit in `How-To Guides`.
*   **Mixed Content:**
    *   The "Core Assembly Patterns" section describes concepts (Linear, Hierarchical, Socket-Based, Constraint-Based) at a high level, which belongs in `Fundamentals`.
    *   The JSON examples showing implementation of these patterns fit better in `How-To Guides`.
    *   The "Implementation Examples" (Modular Building System, Vehicle Assembly) are specific use cases that fit well in `How-To Guides`.
    *   The "Validation Requirements" and "Best Practices" sections are more reference material for `Technical Reference`.
    *   **Recommendation:** Split this file, moving conceptual explanations to `Fundamentals` and the implementation examples to `How-To Guides`.

### `docs/implementation/nft/concepts.md`

*   **Overall:** This file outlines approaches to integrating Schema.org metadata with NFT standards. The title "concepts" is misleading as it's mostly implementation-focused content.
*   **Minor Misplacement:**
    *   The "Overview" and "Integration Approaches" sections are conceptual and would fit better in `Fundamentals`.
    *   The "Implementation Methods" sections with JSON examples are clearly implementation-focused and fit well in `How-To Guides`.
    *   The "Best Practices" and "Validation Rules" sections belong in `Technical Reference`.
    *   **Recommendation:** Rename the file to better reflect its implementation focus, and potentially split the conceptual content into the `Fundamentals` section.

### `docs/implementation/nft/examples.md`

*   **Overall:** This file provides concrete examples of NFT metadata structures. It fits well in `How-To Guides` or potentially `Technical Reference` as example code.
*   **Minor Misplacement:**
    *   The "Evolution of NFT Capabilities" section is conceptual and would fit better in `Fundamentals` or merged with relevant content in `docs/implementation/nfts.md`.
    *   The examples themselves are very implementation-focused and are appropriate where they are, though they could potentially be organized into a dedicated "Examples" section within `Technical Reference`.

### `docs/integration-profiles/overview.md`

*   **Overall:** This is a high-level overview of the integration profiles section, explaining what they are and listing available and planned profiles. It fits well as an introduction to the `Integration Profiles` section.
*   **Minor Misplacement:**
    *   The "Contributing New Integration Profiles" section contains information that might be better suited for a general contributing guide in the community section.
    *   The "Next Steps" section contains links to future profiles that don't seem to exist yet (reference to `future.md`), potentially causing confusion.

### `docs/embedding/overview.md`

*   **Overall:** This is a high-level overview of the embedding section, explaining its purpose and listing available standards. It fits well as an introduction to the `Embedding` section.
*   **Minor Issues:**
    *   The page contains links to subcategories like `schema/schema-org.md` that may not exist or follow the proper path pattern, potentially causing broken links.
    *   There's a reference to reviewing the "URIs vs Embedding" section in Core Concepts, which is appropriate conceptual cross-linking.

## Summary of Content Audit Findings

After reviewing the documentation across multiple sections, several consistent patterns emerge:

1. **Content Categorization Issues:**
   * Conceptual content (fundamentals, principles, visions) frequently appears in implementation-focused sections
   * Implementation details (how-to steps, code examples) sometimes appear in concept-focused sections
   * Best practices and reference material are scattered throughout rather than consolidated

2. **Content Overlap and Redundancy:**
   * Significant overlap between files like `fundamentals.md` and `metadata-fundamentals.md`
   * Similar concepts explained differently across multiple files
   * Repeated examples and code snippets with slight variations

3. **Navigation and Organization Challenges:**
   * Documents reference other sections that may not exist yet or use inconsistent naming
   * Unclear progression from concepts to implementation to reference
   * Subdivision of topics into separate files creates fragmentation

4. **Recommendations for Restructuring:**
   * **Fundamentals Section:** Consolidate all conceptual content into cohesive, progressive topics
   * **How-To Guides Section:** Focus on task-oriented, step-by-step implementation guides
   * **Technical Reference Section:** Move all specifications, field definitions, and best practices
   * **Examples Section:** Create a dedicated area for comprehensive examples

**Next Steps for Restructuring:**
1. Begin consolidating overlapping content in the concepts section
2. Separate conceptual content from implementation details
3. Create a clear separation between tutorials/how-tos and reference material
4. Ensure consistent navigation and cross-references between sections

---

Now I'll check if there are any directories in the `docs/` folder that haven't been reviewed yet.

--- 