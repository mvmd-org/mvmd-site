---
sidebar_position: 1
---

# Core Concepts

This section introduces the fundamental principles needed to understand and implement MVMD. These concepts form the foundation for all metadata integration patterns and profiles.

## Essential Concepts

### JSON-LD and Schema.org

MVMD builds on JSON-LD and Schema.org to create a flexible, interoperable metadata framework:

- **JSON-LD** provides the syntax structure with support for namespaces and linked data
- **Schema.org** provides the core vocabulary that's widely understood and adopted

All MVMD metadata requires:
- A proper `@context` with Schema.org vocabulary
- Appropriate `@type` declarations
- Clear property relationships

[Learn more about Metadata Fundamentals](./metadata-fundamentals.md)

### Types of Assets

MVMD supports various Schema.org types to describe different kinds of assets:

- **CreativeWork**: The most versatile base type for complex assets
- **MediaObject**: For specific media types (3DModel, ImageObject, etc.)
- **Place/VirtualLocation**: For physical and virtual locations
- **Event**: For timed experiences and activities

[Learn about Types of Assets](./types-of-assets.md)

### Linking vs. Embedding

A key decision in metadata architecture is whether to:

- **Link to external resources** using URLs (ideal for large, shared components)
- **Embed data directly** in the metadata (ideal for essential, asset-specific data)

[Understand Linking vs Embedding](./linking-vs-embedding.md)

### Structural Organization

Proper organization of metadata ensures:

- Clear relationships between components
- Efficient loading strategies
- Consistent property naming
- Effective use of namespaces

[Learn about Structural Organization](./structural-organization.md)

## Getting Started

1. Start with [Metadata Fundamentals](./metadata-fundamentals.md) to understand the core JSON-LD approach
2. Learn about [Types of Assets](./types-of-assets.md) to choose the right type for your content
3. Understand [Linking vs Embedding](./linking-vs-embedding.md) to make proper architectural decisions
4. Review [Structural Organization](./structural-organization.md) for best practices in metadata structure
