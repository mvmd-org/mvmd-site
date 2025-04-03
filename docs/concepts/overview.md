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

### Asset Types

MVMD supports various Schema.org types to describe different kinds of assets:

- **CreativeWork**: The most versatile base type for complex assets
- **MediaObject**: For specific media types (3DModel, ImageObject, etc.)
- **Place/VirtualLocation**: For physical and virtual locations
- **Event**: For timed experiences and activities

[Learn about Asset Types](./metadata/types-of-assets.md)

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

## Standards as Namespaces

MVMD uses technical standards as namespaces to integrate specialized vocabulary:

- Each standard has its own namespace identifier in the `@context`
- Properties from specific standards are prefixed with the namespace
- Standards integration enables detailed technical information
- Multiple standards can be combined in a single metadata document

[Explore Standards Integration](../standards/overview.md)

## User Journey Map

Based on your role and goals, we recommend different paths through the documentation:

### For Developers New to Metadata
1. Start with [Metadata Fundamentals](./metadata-fundamentals.md)
2. Review [Types of Assets](./types-of-assets.md)
3. Explore [Basic Implementation](../implementation/assets.md)
4. Learn about [Basic Profile](../integration-profiles/basic.md)
5. Review [Validation](../tools/validator.md)

### For 3D Content Creators
1. Start with [Integration Profiles Overview](../integration-profiles/overview.md)
2. Review the [Attachable Profile](../integration-profiles/attachable.md) for wearables/equipment
3. Explore [Avatar Profile](../integration-profiles/avatar.md) for character assets
4. Learn about [glTF Standard Integration](../standards/gltf.md)
5. Use [Schema Validation](../tools/validator.md) to verify metadata

### For Platform Developers
1. Start with [Implementation Overview](../implementation/overview.md)
2. Review [Cross-Platform Assets](../implementation/cross-platform-assets.md)
3. Explore [Standards Overview](../standards/overview.md)
4. Learn about [Schema Validation](../tools/validator.md)
5. Implement [Best Practices](../implementation/best-practices.md)

## Related Resources

- [Implementation Guides](../implementation/overview.md): Practical how-to guidance
- [Integration Profiles](../integration-profiles/overview.md): Ready-to-use patterns
- [Technical Standards](../standards/overview.md): Standard-specific integration
- [Validation](../tools/validator.md): Ensuring compliance and quality
- [Quickstart](../quickstart.md): Fast implementation guide
