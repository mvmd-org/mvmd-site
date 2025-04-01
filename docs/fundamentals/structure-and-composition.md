---
sidebar_position: 5
---

# Structure & Composition

Asset structure and composition define how different types of content relate to each other within MVMD metadata. Understanding these relationships is crucial for creating well-structured, maintainable metadata for complex assets.

## Types of Relationships

MVMD uses several key relationship properties from Schema.org to model connections between assets:

### Primary Entity (mainEntity)

The `mainEntity` property identifies the primary subject or focus of a metadata object. This is particularly useful when one object serves to describe or represent another.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Character Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "thumbnail": "https://example.com/preview-thumb.jpg",
  "mainEntity": {
    "@type": "3DModel",
    "name": "Hero Character",
    "contentUrl": "https://example.com/character.glb",
    "encodingFormat": "model/gltf-binary"
  }
}
```

**Common Use Cases:**
- Preview images describing 3D models
- Documentation describing an asset
- Thumbnail representing a larger work
- Landing page for a virtual location

### Component Parts (hasPart)

The `hasPart` property defines direct components or pieces that make up a larger asset. This is crucial for describing modular or composite assets.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Modular Vehicle",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Chassis",
      "contentUrl": "https://example.com/chassis.glb",
      "position": "base"
    },
    {
      "@type": "3DModel",
      "name": "Body",
      "contentUrl": "https://example.com/body.glb",
      "position": "attachment"
    }
  ]
}
```

Components can also be nested for more complex hierarchies:

```json
{
  "@type": "CreativeWork",
  "name": "Complex Assembly",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Main Module",
      "hasPart": [
        {
          "@type": "3DModel",
          "name": "Base Component",
          "contentUrl": "https://example.com/base.glb"
        },
        {
          "@type": "3DModel",
          "name": "Top Component",
          "contentUrl": "https://example.com/top.glb"
        }
      ]
    }
  ]
}
```

**Common Use Cases:**
- Modular assets
- Complex assemblies
- Multi-part environments
- Composite objects

### Associated Media (associatedMedia)

The `associatedMedia` property links to related media assets that support or enhance the main asset.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Display",
  "contentUrl": "https://example.com/display.glb",
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Atlas",
      "contentUrl": "https://example.com/textures.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "VideoObject",
      "name": "Usage Tutorial",
      "contentUrl": "https://example.com/tutorial.mp4",
      "encodingFormat": "video/mp4"
    },
    {
      "@type": "AudioObject",
      "name": "Sound Effects",
      "contentUrl": "https://example.com/sounds.mp3",
      "encodingFormat": "audio/mpeg"
    }
  ]
}
```

**Common Use Cases:**
- Textures and materials
- Supplementary media
- Tutorial content
- Preview content

### Embedded Content (encodesCreativeWork)

The `encodesCreativeWork` property indicates content that is embedded within or encoded by the main asset.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Information Kiosk",
  "contentUrl": "https://example.com/kiosk.glb",
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Screen Content",
      "contentUrl": "https://example.com/screen.jpg"
    },
    {
      "@type": "TextObject",
      "name": "Display Text",
      "contentUrl": "https://example.com/text.txt"
    }
  ]
}
```

**Common Use Cases:**
- Screen content in 3D models
- Embedded documents
- Internal textures
- Bundled resources

### Related Documentation (subjectOf)

The `subjectOf` property links to documentation, descriptions, or other content about the asset.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Complex Machinery",
  "contentUrl": "https://example.com/machine.glb",
  "subjectOf": [
    {
      "@type": "DigitalDocument",
      "name": "Technical Documentation",
      "url": "https://example.com/docs/technical.pdf",
      "encodingFormat": "application/pdf"
    },
    {
      "@type": "VideoObject",
      "name": "Assembly Guide",
      "contentUrl": "https://example.com/guides/assembly.mp4",
      "encodingFormat": "video/mp4"
    }
  ]
}
```

**Common Use Cases:**
- Technical documentation
- User guides
- Assembly instructions
- Educational content

## Composition Patterns

Different types of assets and use cases require different composition patterns:

### Flat Composition

Simple assets with few components can use a flat structure:

```json
{
  "@type": "CreativeWork",
  "name": "Simple Asset",
  "hasPart": [
    { "@type": "3DModel", "name": "Component 1" },
    { "@type": "3DModel", "name": "Component 2" }
  ]
}
```

### Hierarchical Composition

Complex assets with nested components benefit from a hierarchical structure:

```json
{
  "@type": "CreativeWork",
  "name": "Complex Asset",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Module A",
      "hasPart": [
        { "@type": "3DModel", "name": "Subcomponent A1" },
        { "@type": "3DModel", "name": "Subcomponent A2" }
      ]
    },
    {
      "@type": "CreativeWork",
      "name": "Module B",
      "hasPart": [
        { "@type": "3DModel", "name": "Subcomponent B1" },
        { "@type": "3DModel", "name": "Subcomponent B2" }
      ]
    }
  ]
}
```

### Multiple Relationship Types

Most complex assets use several relationship types together:

```json
{
  "@type": "3DModel",
  "name": "Main Asset",
  "hasPart": [
    { "@type": "3DModel", "name": "Component" }
  ],
  "associatedMedia": [
    { "@type": "ImageObject", "name": "Texture" }
  ],
  "subjectOf": [
    { "@type": "DigitalDocument", "name": "Documentation" }
  ]
}
```

## Complete Composition Example

Here's an example showing all composition types working together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Virtual Vehicle Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "thumbnail":  "https://example.com/preview-thumb.jpg",
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Modular Vehicle",
    "hasPart": [
      {
        "@type": "3DModel",
        "name": "Chassis Base",
        "contentUrl": "https://example.com/chassis.glb",
        "associatedMedia": [
          {
            "@type": "ImageObject",
            "name": "Metal Texture",
            "contentUrl": "https://example.com/metal.jpg"
          }
        ]
      },
      {
        "@type": "3DModel",
        "name": "Interactive Dashboard",
        "contentUrl": "https://example.com/dashboard.glb",
        "encodesCreativeWork": [
          {
            "@type": "ImageObject",
            "name": "Display Graphics",
            "contentUrl": "https://example.com/display.jpg"
          }
        ]
      }
    ],
    "subjectOf": [
      {
        "@type": "DigitalDocument",
        "name": "User Manual",
        "url": "https://example.com/manual.pdf"
      }
    ]
  }
}
```

## Best Practices

1. **Clear Hierarchy**
   - Use `mainEntity` for the primary subject
   - Keep component hierarchies logical
   - Group related media appropriately
   - Document relationships clearly

2. **Relationship Management**
   - Choose appropriate relationship types
   - Avoid circular references
   - Maintain clear ownership
   - Document dependencies

3. **Resource Organization**
   - Group related resources
   - Use consistent naming
   - Maintain clear structure
   - Plan for updates

4. **Documentation**
   - Document all relationships
   - Explain complex structures
   - Provide usage guides
   - Maintain version history

## When to Use Each Relationship Type

| Relationship Type | When to Use |
|-------------------|-------------|
| `mainEntity` | When one object describes or represents another |
| `hasPart` | For components that make up a larger asset |
| `associatedMedia` | For supporting media that enhances the main asset |
| `encodesCreativeWork` | For content embedded within or encoded by the main asset |
| `subjectOf` | For documentation or content about the asset |

## Next Steps

Now that you understand the basics of structure and composition, you can:

- Explore how to [create metadata](../guides/basic/create-metadata.md) for your assets
- Learn about [reference vs embedding](./reference-vs-embedding.md) approaches
- Understand how to [combine standards](./standards-compatibility.md) within your metadata
