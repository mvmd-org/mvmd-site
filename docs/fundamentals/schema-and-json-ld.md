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

## Why MVMD Uses These Technologies

The combination of Schema.org and JSON-LD provides MVMD with several critical advantages:

1. **Future-Proof Foundation**: Both technologies are well-established web standards with broad support.
2. **Extensibility**: The vocabulary can grow as metaverse technology evolves.
3. **Interoperability**: Content described with these standards can work across platforms.
4. **Discoverability**: Search engines and discovery tools already understand this format.
5. **Developer Familiarity**: Many developers already know these technologies.

## Essential JSON-LD Concepts for MVMD

### Context Declaration

The `@context` field defines the vocabulary and rules for interpreting metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/ns/"
  }
}
```

This context declaration:
- Sets Schema.org as the default vocabulary (`@vocab`)
- Adds the `gltf` namespace for glTF-specific properties
- Adds the `mvmd` namespace for MVMD-specific extensions

### Type Declaration

The `@type` field defines what the asset is within the Schema.org vocabulary:

```json
"@type": "3DModel"
```

You can also specify multiple types:

```json
"@type": ["3DModel", "CreativeWork"]
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

### Linked Data with JSON-LD

JSON-LD enables sophisticated relationships between objects:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Character Model",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "url": "https://example.com/jane"
  },
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Map",
      "contentUrl": "https://example.com/textures/main.jpg"
    }
  ]
}
```

## Common Schema.org Types for Metaverse Assets

MVMD primarily uses these Schema.org types:

1. **CreativeWork** - Most versatile base type for digital assets
   ```json
   {
     "@context": "https://schema.org/",
     "@type": "CreativeWork",
     "name": "Metaverse Asset Collection",
     "creator": "Metaverse Studios"
   }
   ```

2. **3DModel** - Specific type for 3D models and objects
   ```json
   {
     "@context": "https://schema.org/",
     "@type": "3DModel",
     "name": "Detailed Character",
     "contentUrl": "https://example.com/models/character.glb"
   }
   ```

3. **MediaObject** subtypes - For various media assets
   ```json
   {
     "@context": "https://schema.org/",
     "@type": "ImageObject",
     "name": "Skybox Texture",
     "contentUrl": "https://example.com/textures/skybox.jpg",
     "width": "2048px",
     "height": "2048px"
   }
   ```

4. **Place** - For virtual environments and spaces
   ```json
   {
     "@context": "https://schema.org/",
     "@type": "Place",
     "name": "Virtual Gallery",
     "description": "An immersive art gallery experience"
   }
   ```

5. **SoftwareApplication** - For interactive experiences
   ```json
   {
     "@context": "https://schema.org/",
     "@type": "SoftwareApplication",
     "name": "Interactive Experience",
     "applicationCategory": "VirtualWorld"
   }
   ```

## Multi-Standard Integration with JSON-LD

JSON-LD enables seamless integration of multiple standards within the same metadata object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "vrm": "https://vrm.dev/specifications/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "@id": "https://example.com/avatars/character-01",
  "name": "Customizable Avatar",
  
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Example Corp"
  },
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 }
    }
  },
  
  "mvmd:compatibility": {
    "platforms": ["platform-a", "platform-b"],
    "minVersion": "1.0"
  }
}
```

## Advanced JSON-LD Features

### Node References

JSON-LD allows referencing the same object multiple times:

```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "@id": "#asset-collection",
  "name": "Asset Collection",
  "hasPart": [
    {
      "@id": "#model1",
      "@type": "3DModel",
      "name": "Character"
    },
    {
      "@id": "#model2",
      "@type": "3DModel",
      "name": "Environment"
    }
  ],
  "creator": {
    "@id": "#creator",
    "@type": "Person",
    "name": "Jane Creator"
  },
  "publisher": {
    "@id": "#creator"
  }
}
```

### Compact and Expanded Forms

JSON-LD can be represented in different forms. MVMD typically uses the compact form, which is more human-friendly:

**Compact Form (Preferred for MVMD)**
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Simple Model"
}
```

**Expanded Form (More verbose but explicit)**
```json
[
  {
    "@id": "_:b0",
    "@type": ["https://schema.org/3DModel"],
    "https://schema.org/name": [
      {
        "@value": "Simple Model"
      }
    ]
  }
]
```

## Best Practices for MVMD

1. **Use Specific Types** - Choose the most specific applicable Schema.org type
2. **Maintain Clear Namespaces** - Keep standards clearly separated with proper namespacing
3. **Include Essential Properties** - Always include basic properties like name, description, and identifier
4. **Document Relationships** - Clearly express how assets relate to each other
5. **Use JSON-LD Features Appropriately** - Take advantage of JSON-LD's linking capabilities
6. **Validate Your Implementation** - Use MVMD validation tools to ensure proper structure

## Moving Forward

With a solid understanding of Schema.org and JSON-LD, you're ready to explore more advanced MVMD concepts:

- Learn about [Structure & Composition](./structure-and-composition.md) for complex assets
- Understand [Reference vs Embedding](./reference-vs-embedding.md) approaches
- Explore [Standards Compatibility](./standards-compatibility.md) for multi-standard integration 