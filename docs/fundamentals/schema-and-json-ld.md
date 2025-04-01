---
sidebar_position: 4
---

# Schema.org & JSON-LD

## The Foundation of Metaverse Metadata

MVMD uses Schema.org vocabulary and JSON-LD format as the foundation for all metadata implementations. Understanding these two standards is essential for working effectively with MVMD.

## What is Schema.org?

Schema.org provides a robust, extensible vocabulary for describing digital assets and experiences. As an open-source collaborative project, Schema.org continuously evolves to meet emerging needs across industries and use cases. Its flexible structure allows for rich descriptions of any type of digital content, while its standardized format ensures consistent interpretation across platforms.

### Key Benefits of Schema.org for MVMD

- **Widely adopted standard** used across the web
- **Extensive vocabulary** that covers most asset types and relationships
- **Regular updates** that address emerging needs
- **Compatible with search engines** for improved discoverability
- **Supports extensions** for specialized domains

## What is JSON-LD?

JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight, JSON-based format designed to serialize linked data. It enables the seamless integration of structured data into web applications, making it ideal for metaverse metadata.

### Key Benefits of JSON-LD for MVMD

- **Human-readable** format that's easy to work with
- **Supports namespacing** for combining multiple standards
- **Enables linked data** with cross-references between resources
- **Compatible with web technologies** for seamless integration
- **W3C Recommendation** status ensures stability and adoption

## Essential Concepts for MVMD Implementation

### Context Declaration

The `@context` field defines the vocabulary and rules for interpreting metadata:

```json
"@context": {
  "@vocab": "https://schema.org/",
  "gltf": "https://www.khronos.org/gltf/",
  "mvmd": "https://mvmd.org/ns/"
},
```

### Type Declaration

The `@type` field defines what the asset is within the Schema.org vocabulary:

```json
"@type": "3DModel",
```

or with multiple types:

```json
"@type": ["3DModel", "CreativeWork"],
```

### Identifiers

Use `@id` to create globally unique identifiers for assets:

```json
"@id": "https://example.com/assets/model-123",
"identifier": {
  "@type": "PropertyValue",
  "propertyID": "MVMD-ID",
  "value": "asset-2024-001"
}
```

### Common Types for Metaverse Assets

1. **CreativeWork** - Most versatile base type for digital assets
2. **3DModel** - Specific type for 3D models and objects
3. **MediaObject** - Base type for various media types
4. **Place** - For virtual environments and spaces
5. **SoftwareApplication** - For interactive experiences

## Multi-Standard Integration

JSON-LD enables seamless integration of multiple standards within the same metadata object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "citygml": "http://www.opengis.net/citygml/2.0"
  },
  "@type": "3DModel",
  "@id": "https://example.com/buildings/tower-01",
  "name": "Office Tower",
  
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Example Corp"
  },
  
  "citygml:building": {
    "function": "office",
    "height": 45.5,
    "storeysAboveGround": 15
  }
}
```

## Best Practices for MVMD

1. **Use Specific Types** - Choose the most specific applicable Schema.org type
2. **Maintain Clear Namespaces** - Keep standards clearly separated with proper namespacing
3. **Include Essential Properties** - Always include basic properties like name, description, and identifier
4. **Document Relationships** - Clearly express how assets relate to each other
5. **Validate Your Implementation** - Use MVMD validation tools to ensure proper structure

## Moving Forward

With a solid understanding of Schema.org and JSON-LD, you're ready to explore more advanced MVMD concepts and implementation patterns. Next, we'll look at how to structure and compose complex metadata for metaverse assets. 