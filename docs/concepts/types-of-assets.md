---
sidebar_position: 3
---

# Types of Assets

MVMD uses Schema.org types to describe different kinds of metaverse assets. This guide covers the most important types and when to use them.

## Core Types

### CreativeWork

[CreativeWork](https://schema.org/CreativeWork) is the most versatile base type for digital assets. Use it for:
- Complex assets with multiple components
- Collections of assets
- Multi-part creations
- Assets that don't fit a more specific type

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Digital Asset",
  "creator": {
    "@type": "Organization",
    "name": "Digital Studio"
  }
}
```

### MediaObject Types

#### 3DModel

[3DModel](https://schema.org/3DModel) is the primary type for three-dimensional assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary"
}
```

Use for:
- Virtual objects
- Character models
- Environmental elements
- Interactive props

#### ImageObject

[ImageObject](https://schema.org/ImageObject) is used for images, textures, and previews:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "width": "1024",
  "height": "1024"
}
```

Use for:
- Asset previews
- Thumbnails
- Textures
- Marketing images

#### Other Media Types

- **[AudioObject](https://schema.org/AudioObject)**: For sound effects, music, and voice
- **[VideoObject](https://schema.org/VideoObject)**: For video content and animations

## Location Types

### Place

[Place](https://schema.org/Place) is used for digital twins of physical locations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Place",
  "name": "Digital Museum Twin",
  "description": "Digital twin of the Metropolitan Museum",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7794,
    "longitude": -73.9632
  }
}
```

Use for:
- Digital twins of real buildings
- Virtual representations of physical spaces
- Location-based experiences

### VirtualLocation

[VirtualLocation](https://schema.org/VirtualLocation) is used for purely virtual spaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "VirtualLocation",
  "name": "Fantasy Arena",
  "description": "A floating combat arena in the metaverse",
  "potentialAction": {
    "@type": "JoinAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://meta.example.com/arena"
    }
  }
}
```

Use for:
- Virtual meeting spaces
- Game environments
- Fantasy locations
- Abstract spaces

## Experience Types

### Event

[Event](https://schema.org/Event) describes activities happening at a certain time:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Event",
  "name": "Virtual Concert",
  "startDate": "2023-08-15T19:00:00-07:00",
  "endDate": "2023-08-15T22:00:00-07:00",
  "location": {
    "@type": "VirtualLocation",
    "name": "Concert Arena",
    "url": "https://meta.example.com/concert"
  }
}
```

Use for:
- Timed experiences
- Virtual performances
- Scheduled activities
- Limited-time offers

### SoftwareApplication

[SoftwareApplication](https://schema.org/SoftwareApplication) is for interactive applications:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "SoftwareApplication",
  "name": "Interactive Experience",
  "applicationCategory": "Game",
  "operatingSystem": "WebXR"
}
```

Use for:
- Games and applications
- Interactive experiences
- Tools and utilities
- Educational simulations

## Type Selection Guidelines

1. **Specificity**: Choose the most specific type that fits your asset
2. **Purpose**: Consider how the asset will be used and discovered
3. **Properties**: Select types that support the properties you need
4. **Relationships**: Consider how the type relates to other assets

## Combined Types

You can use `additionalType` to indicate an asset belongs to multiple categories:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "additionalType": "VirtualLocation",
  "name": "Interactive Gallery Experience",
  "description": "Both a creative work and a virtual location"
}
```

## Related Concepts

- [Metadata Fundamentals](./metadata-fundamentals.md): Core principles of metadata structure
- [Linking vs Embedding](./linking-vs-embedding.md): How to reference and embed content
- [Structural Organization](./structural-organization.md): Best practices for organization 