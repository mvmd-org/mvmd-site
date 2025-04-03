---
sidebar_position: 1
---

# Implementation Overview

This section provides practical guidance for implementing MVMD in real-world applications. You'll find workflow-based implementation guides organized by use cases to help you integrate metadata effectively.

## Use Case-Based Implementation

We've organized our implementation guides based on common use cases, making it easier to find relevant guidance for your specific requirements:

### Basic Asset Implementation

Every implementation starts with properly structured metadata for your digital assets:

- Define clear type declarations with Schema.org vocabulary
- Include required properties for discoverability
- Add specialized properties for specific use cases
- Set up proper relationships between components

[Learn about Basic Asset Implementation](./assets.md)

### Cross-Platform Assets

When implementing assets that need to work across multiple platforms:

- Provide format variations for different platform requirements
- Define technical specifications for each platform
- Implement fallback behaviors for unsupported features
- Ensure visual and functional consistency

[Explore Cross-Platform Implementation](./cross-platform-assets.md)

### Interactive Assets

For implementing assets that respond to user interaction:

- Define interaction points and behaviors
- Create state transitions based on user actions
- Link interactions to animations and feedback
- Establish connections between interactive components

[Discover Interactive Asset Implementation](./interactive-assets.md)

### Discovery and Search Optimization

To make your assets easily discoverable:

- Optimize core metadata for search visibility
- Add rich media for visual discovery
- Create semantic relationships with related content
- Enhance marketplace presence with specialized properties

[Learn about Discovery Optimization](./discovery-optimization.md)

### NFT Metadata

For blockchain-connected assets, MVMD provides standards-compliant approaches:

- Maintain compatibility with ERC-721/ERC-1155 standards
- Enhance NFT metadata with rich structured data
- Support multi-platform NFT discoverability
- Enable verifiable authenticity and provenance

[Explore NFT Implementation](./nfts.md)

### Composable Systems

For complex, multi-component assets:

- Implement structural relationships between components
- Define assembly patterns and constraints
- Create flexible, extensible component systems
- Support cross-platform composition

[Discover Composable Implementation](./composable.md)

## Implementation Workflow

The general workflow for implementing MVMD metadata follows these steps:

1. **Identify Your Use Case**: Determine which implementation guide best fits your needs
2. **Select Relevant Profiles**: Choose the appropriate [integration profiles](../integration-profiles/overview.md)
3. **Incorporate Technical Standards**: Add necessary [standard-specific properties](../standards/overview.md)
4. **Implement Required Properties**: Ensure all required properties are included
5. **Add Optional Properties**: Enhance with optional properties as needed
6. **Validate Your Metadata**: Use our [validation tools](../tools/validator.md)
7. **Test Cross-Platform**: Verify functionality across target platforms

## Implementation Examples by Asset Type

| Asset Type | Primary Profile | Key Implementation Guide | Related Standards |
|------------|-----------------|--------------------------|-------------------|
| Wearable Items | [Attachable](../integration-profiles/attachable.md) | [Cross-Platform Assets](./cross-platform-assets.md) | [glTF](../standards/gltf.md), [VRM](../standards/vrm.md) |
| Equipment | [Attachable](../integration-profiles/attachable.md) | [Interactive Assets](./interactive-assets.md) | [glTF](../standards/gltf.md), [OpenXR](../standards/openxr.md) |
| Avatars | [Avatar](../integration-profiles/avatar.md) | [Cross-Platform Assets](./cross-platform-assets.md) | [VRM](../standards/vrm.md), [glTF](../standards/gltf.md) |
| Virtual Spaces | [Scene](../integration-profiles/scene.md) | [Composable](./composable.md) | [USD](../standards/usd.md), [glTF](../standards/gltf.md) |
| Collectibles | [Composable 3D NFT](../integration-profiles/composable-3d-nft.md) | [NFT Metadata](./nfts.md) | [glTF](../standards/gltf.md), [C2PA](../standards/c2pa.md) |
| Digital Twins | [Digital Twin](../integration-profiles/digital-twin.md) | [Discovery Optimization](./discovery-optimization.md) | [USD](../standards/usd.md), [CityJSON](../standards/cityjson.md) |

## Implementation Best Practices

Regardless of your specific use case, follow these principles:

- **Consistency**: Use standardized naming and structure patterns
- **Precision**: Include only necessary data at the appropriate level
- **Scalability**: Design for future expansion and additions
- **Interoperability**: Ensure compatibility across platforms
- **Validation**: Regularly validate against schema requirements

[Review Implementation Best Practices](./best-practices.md)

## Getting Started

1. Start with the [Getting Started](./getting-started.md) guide
2. Choose the appropriate use case for your implementation needs
3. Use our [templates](../templates/) for consistent implementation
4. Validate your implementation with our [schema validation tools](../tools/validator.md)

## Related Resources

### Concepts
- [Metadata Fundamentals](../concepts/metadata-fundamentals.md): Core principles
- [Types of Assets](../concepts/types-of-assets.md): Schema.org types to use
- [Linking vs Embedding](../concepts/linking-vs-embedding.md): Reference patterns

### Profiles
- [Integration Profiles Overview](../integration-profiles/overview.md): Ready-to-use patterns
- [Basic Profile](../integration-profiles/basic.md): Foundation for all implementations
- [Attachable Profile](../integration-profiles/attachable.md): For wearable and equipable items

### Standards
- [Schema.org](../standards/schema-org.md): Core vocabulary for implementation
- [glTF](../standards/gltf.md): Implementation patterns for glTF assets
- [USD](../standards/usd.md): Implementation patterns for USD assets

### Validation
- [Schema Validation](../tools/validator.md): Validating your implementation
