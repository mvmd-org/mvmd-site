---
sidebar_position: 2
---

# Core Concepts

This guide covers the essential concepts needed to understand metadata for Metaverse assets. MVMD builds upon Schema.org's vocabulary and JSON-LD's syntax to create a standardized way to describe digital assets in the metaverse ecosystem.

## What is MVMD?

The Metaverse Metadata Directory (MVMD) is an integration framework that brings together existing metadata standards to create interoperable, rich descriptions of digital assets. MVMD is not a new competing standard – it's a bridge that connects existing standards, providing a cohesive way to implement multiple standards together.

## Key Principles

MVMD follows several core principles:

1. **Standards-First Approach**: Build on existing standards rather than replacing them
2. **Interoperability**: Ensure metadata works across different platforms and environments
3. **Flexibility**: Support various asset types and use cases
4. **Discoverability**: Make assets easily discoverable through rich metadata
5. **Composition**: Enable complex relationships between assets and components

## Foundation Technologies

MVMD relies on two primary technologies:

### Schema.org Foundation

[Schema.org](https://schema.org/) is a collaborative, community-driven effort to create and maintain a shared vocabulary for structured data. It provides:

- A standardized vocabulary for describing digital content
- Well-defined types and properties
- Regular updates and improvements
- Broad industry adoption

MVMD uses Schema.org as its foundation because:

- It's widely supported across platforms
- It has a rich vocabulary for digital assets
- It's extensible for specialized needs
- It integrates well with search engines and data systems

### JSON-LD Format

[JSON-LD](https://json-ld.org/) (JavaScript Object Notation for Linked Data) is our chosen format because it:

- Is easy to read and write
- Supports namespacing and context
- Enables linked data connections
- Supports complex references to avoid repeating data
- Maintains compatibility with regular JSON

Basic JSON-LD structure:

```json
{
  "@context": "https://schema.org/",
  "@type": "Thing",
  "name": "Example Object"
}
```

## Core Metadata Components

Every MVMD metadata object includes several key components:

### Context Declaration

The context defines the vocabulary and rules for interpreting the metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

- **Schema.org (@vocab)**: The base vocabulary for all metadata properties
- **MVMD Version (mvmd)**: Indicates compliance with MVMD standards and version

### Type Declaration

The `@type` property defines what kind of object is being described:

```json
{
  "@type": "3DModel"
}
```

The choice of type determines what properties and relationships are available. `CreativeWork` and its subtypes are used as the primary entry points for most metaverse assets.

### Basic Properties

Essential descriptive properties for any asset:

```json
{
  "name": "Asset Name",
  "description": "Detailed description of the asset",
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  },
  "dateCreated": "2023-04-15"
}
```

### Resource References

Links to the actual asset files and related resources:

```json
{
  "contentUrl": "https://example.com/assets/model.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/assets/thumbnail.jpg"
}
```

## Metadata Composition

MVMD supports complex relationships between assets through various composition patterns:

### Parent-Child Relationships

Using `hasPart` to define component hierarchies:

```json
{
  "@type": "3DModel",
  "name": "Vehicle Model",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Wheel Component"
    },
    {
      "@type": "3DModel",
      "name": "Body Component"
    }
  ]
}
```

### Associated Resources

Using `associatedMedia` to link related files:

```json
{
  "@type": "3DModel",
  "name": "Character Model",
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Map",
      "contentUrl": "https://example.com/textures/character.jpg"
    },
    {
      "@type": "AudioObject",
      "name": "Character Voice",
      "contentUrl": "https://example.com/audio/voice.mp3"
    }
  ]
}
```

## Extension Mechanisms

MVMD provides standard ways to extend metadata:

### Standard Extensions

Using properly defined namespaces for standard-specific properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "gltf:asset": {
    "version": "2.0",
    "generator": "Example Studio"
  }
}
```

### Custom Properties

Using `additionalProperty` for custom data:

```json
{
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 12450
    }
  ]
}
```

## Integration Profiles

MVMD provides Integration Profiles for common asset types, which are pre-configured templates that combine multiple standards:

- **Basic Profile**: Essential Schema.org metadata
- **Avatar Profile**: Schema.org + VRM for avatars
- **Wearable Profile**: Schema.org + glTF for wearable items
- **Scene Profile**: Schema.org + glTF/USD for environments

These profiles ensure consistency and interoperability across different implementations.

## What's Next

These core concepts provide the foundation for understanding MVMD. From here, you can:

- Learn about metadata foundations in [Metadata Foundations](./metadata-foundations.md)
- Understand JSON-LD in more detail in [Schema.org & JSON-LD](./schema-and-json-ld.md)
- Explore structure and composition in [Structure & Composition](./structure-and-composition.md)
- Learn about external references in [Reference vs Embedding](./reference-vs-embedding.md)

Remember: The concepts covered here are universal to all MVMD implementations. More specific patterns and implementations are covered in the How-To Guides section.
