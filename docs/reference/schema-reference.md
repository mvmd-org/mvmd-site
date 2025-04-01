---
sidebar_position: 1
---

# Schema Reference

The MVMD Schema defines a structured format for describing metaverse assets using JSON-LD. This reference provides an overview of the schema structure and guides you to more detailed documentation on each component.

## Schema Overview

MVMD metadata is expressed using JSON-LD with a combination of:

1. **Schema.org vocabulary** - For general metadata properties
2. **MVMD-specific terms** - For metaverse-specific properties
3. **JSON-LD context** - For providing namespace definitions

Together, these components create a flexible, extensible, and interoperable metadata standard for metaverse assets.

## Basic Structure

Every MVMD metadata document follows this basic structure:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "description": "Asset description...",
  
  // Standard Schema.org properties
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  },
  
  // MVMD-specific properties
  "mvmd:category": "wearable",
  "mvmd:polyCount": 15000
}
```

## Core Components

The schema reference is divided into the following sections:

### [JSON-LD](schema/json-ld.md)

Learn how MVMD uses JSON-LD to structure metadata, including:
- Basic JSON-LD syntax
- How to format MVMD metadata as JSON-LD
- Nesting objects and arrays
- JSON-LD features used in MVMD

### [Schema.org Reference](schema/schema-org.md)

Details on how MVMD leverages Schema.org vocabulary:
- Core Schema.org types used in MVMD
- Essential Schema.org properties
- Structured data patterns
- Best practices for Schema.org usage

### [MVMD Context](schema/context.md)

Information about the MVMD JSON-LD context:
- Context structure
- Namespace definitions
- Context versioning
- Multiple context handling

### [MVMD-Specific Terms](schema/mvmd-terms.md)

Complete reference of MVMD-specific terms:
- 3D model properties
- Virtual world properties
- Avatar and wearable properties
- Technical specifications
- NFT and blockchain properties
- Interactive and physics properties

## Data Types

MVMD properties use the following data types:

| Type | Description | Example |
|------|-------------|---------|
| String | Text value | `"name": "Space Helmet"` |
| Number | Numeric value | `"mvmd:polyCount": 15000` |
| Boolean | True/false value | `"mvmd:rigged": true` |
| Object | Nested JSON object | `"creator": { "@type": "Person", "name": "Creator" }` |
| Array | List of values | `"keywords": ["sci-fi", "helmet", "space"]` |
| URL | Web address | `"contentUrl": "https://example.com/model.glb"` |
| Date | ISO 8601 date format | `"dateCreated": "2023-08-15"` |

## Validation

MVMD metadata can be validated using:

1. **JSON-LD Validators** - Verify your JSON-LD syntax
2. **Schema.org Validators** - Check Schema.org property usage
3. **MVMD Validators** - Ensure MVMD-specific terms are used correctly

## Schema Versioning

The MVMD schema uses semantic versioning:

- **Major version** (`v1`, `v2`) - Incompatible changes
- **Minor version** (`v1.1`, `v1.2`) - Backwards-compatible additions
- **Patch version** (`v1.1.1`) - Backwards-compatible fixes

The context URL includes the major version: `https://mvmd.org/v1/`

## Common Patterns

MVMD follows common patterns for different asset types:

### 3D Model

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Sci-Fi Helmet",
  "contentUrl": "https://example.com/helmet.glb",
  "encodingFormat": "model/gltf-binary",
  "mvmd:category": "wearable",
  "mvmd:polyCount": 15000
}
```

### Virtual World Scene

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Fantasy Forest",
  "mvmd:category": "environment",
  "mvmd:sceneScale": "1:1",
  "mvmd:boundingBox": {
    "min": [-50, 0, -50],
    "max": [50, 30, 50]
  }
}
```

### NFT Asset

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Legendary Sword",
  "mvmd:blockchain": "ethereum",
  "mvmd:contractAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "mvmd:tokenId": "42"
}
```

## Best Practices

For consistent and effective MVMD metadata:

1. **Use appropriate types** - Choose the most specific Schema.org type
2. **Include required properties** - Always include essential properties
3. **Be consistent with terms** - Use properties consistently across assets
4. **Add sufficient detail** - Include details relevant to your asset type
5. **Follow naming conventions** - Use standard property names
6. **Validate your metadata** - Test your metadata against schemas

## Extensions

MVMD can be extended for specific platforms or use cases:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "platform": "https://platform-specific.example.com/terms/"
  },
  "@type": "DigitalDocument",
  "name": "Custom Asset",
  "mvmd:category": "wearable",
  "platform:customProperty": "Custom value"
}
```

## Related Documentation

- [Fundamentals: Schema and JSON-LD](../fundamentals/schema-and-json-ld.md)
- [Guides: Create Basic Metadata](../guides/basic/create-metadata.md)
- [Terms Glossary](terms-glossary.md) 