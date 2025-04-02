---
sidebar_position: 2
---

# Metadata Fundamentals

Metadata is structured information that describes, explains, and locates digital assets, making them easier to discover, use, and manage across metaverse platforms.

## Purpose

Metadata serves as the foundation for asset interoperability in the metaverse. It provides a standardized way to communicate essential information about digital assets, enabling consistent representation across different platforms, ensuring proper attribution, and supporting discovery and integration.

## Key Principles

- **Standardization**: Using established schemas and vocabularies ensures consistency and interoperability
- **Extensibility**: The metadata model can be extended with domain-specific properties while maintaining compatibility
- **Semantic Clarity**: Clear meaning of properties allows for proper interpretation across systems
- **Verification**: Metadata supports content authenticity and provenance verification
- **Discoverability**: Well-structured metadata enables efficient search and filtering

## How It Works

MVMD builds on JSON-LD and Schema.org to create a flexible, interoperable metadata framework for metaverse assets.

### JSON-LD Structure

JSON-LD (JavaScript Object Notation for Linked Data) provides the syntax and structure for MVMD metadata:

- **@context**: Defines the vocabulary/namespaces used in the metadata
- **@type**: Specifies the kind of item being described
- **Properties**: Key-value pairs describing aspects of the item
- **Nested Objects**: Allow for rich, structured descriptions
- **IRIs**: Use web identifiers to link to external resources

### Schema.org Foundation

Schema.org provides a core vocabulary that's widely understood and adopted:

- **Types**: CreativeWork, MediaObject, 3DModel, etc.
- **Properties**: name, description, creator, contentUrl, etc.
- **Extensions**: Additional properties beyond the core Schema.org set

### Namespaces and Extensions

Namespaces allow for domain-specific extensions:

- **Standard Namespaces**: Reference established technical standards (glTF, USD, etc.)
- **Custom Namespaces**: Define application-specific properties
- **Context Declaration**: Map namespace prefixes to formal definitions

## Example

A basic metadata example showing fundamental structure:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.io/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Modern Chair",
  "description": "A sleek modern chair design",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "url": "https://example.com/jane"
  },
  "contentUrl": "https://assets.example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "gltf:asset": {
    "version": "2.0",
    "generator": "ExampleStudio Exporter 2.0"
  }
}
```

## Best Practices

- Include all required properties for your asset type
- Use the most specific type possible for your asset
- Validate your metadata against the appropriate schema
- Keep metadata concise while including essential information
- Use established vocabularies before creating custom properties
- Include licensing and attribution information
- Reference external resources with stable, persistent URLs

## Common Mistakes

- **Inconsistent Property Names**: Using variant spellings or custom properties that duplicate standard ones
- **Missing Context**: Omitting the @context that defines vocabularies and namespaces
- **Incorrect Types**: Using inappropriate types for the asset being described
- **Shallow Metadata**: Including only basic properties without domain-specific details
- **Invalid JSON-LD**: Creating metadata that doesn't follow JSON-LD syntax rules

## Related Concepts

- [Types of Assets](./types-of-assets.md): Understanding different asset types and their specific requirements
- [Linking vs Embedding](./linking-vs-embedding.md): Strategies for referencing related assets
- [Structural Organization](./structural-organization.md): Principles for organizing complex metadata

## Implementation References

- [Getting Started](../implementation/getting-started.md): Implementing your first metadata
- [Schema.org Standard](../standards/schema-org.md): Core vocabulary implementation
- [Validation Tools](../reference/validator.md): Tools for validating your metadata 