---
sidebar_position: 3
---

# Schema.org Reference

Schema.org provides the foundation for MVMD's metadata structure. This reference explains how MVMD leverages Schema.org's vocabulary, which types and properties to use, and best practices for implementation.

## What is Schema.org?

[Schema.org](https://schema.org) is a collaborative, community-driven initiative founded by Google, Microsoft, Yahoo, and Yandex to create, maintain, and promote structured data schemas for the internet. It provides a shared vocabulary that webmasters can use to mark up their pages in ways that can be understood by major search engines and other applications.

## Why MVMD Uses Schema.org

MVMD builds on Schema.org for several reasons:

1. **Widespread adoption**: Schema.org is the most widely used structured data vocabulary on the web
2. **Search engine compatibility**: Major search engines understand and index Schema.org metadata
3. **Rich vocabulary**: Schema.org already defines many concepts useful for digital asset metadata
4. **Extensibility**: Schema.org's design allows for domain-specific extensions like MVMD
5. **Active maintenance**: Schema.org is actively maintained and continuously improved

## Core Schema.org Types in MVMD

MVMD recommends these Schema.org types as the foundation for metaverse asset metadata:

### DigitalDocument

The primary type for most metaverse assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Explorer Ship",
  "description": "A detailed 3D model of a futuristic space exploration vessel.",
  "encodingFormat": "model/gltf-binary"
}
```

`DigitalDocument` is preferred because:
- It represents a digital file (as opposed to physical objects)
- It supports rich metadata properties like author, creation date, etc.
- It can have associated media, thumbnails, and encodings

### CreativeWork

A more general type that can be used for assets that don't fit the document metaphor:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Fantasy World Environment",
  "creator": {
    "@type": "Person",
    "name": "WorldBuilders Inc.",
    "url": "https://worldbuilders.example.com"
  }
}
```

### MediaObject and Subtypes

For specific media formats, use appropriate MediaObject subtypes:

- **3DModel** (for 3D assets)
- **ImageObject** (for images)
- **AudioObject** (for audio)
- **VideoObject** (for video)

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Detailed Character Model",
  "contentUrl": "https://example.com/models/character.glb",
  "encodingFormat": "model/gltf-binary"
}
```

### SoftwareApplication

For functional metaverse applications or scripts:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "SoftwareApplication",
  "name": "Physics Simulator",
  "applicationCategory": "Metaverse Component",
  "operatingSystem": "Cross-platform"
}
```

### Collection

For grouped assets or collections:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Collection",
  "name": "Sci-Fi Assets Pack",
  "description": "A collection of sci-fi themed 3D models and textures.",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Sci-Fi Door",
      "contentUrl": "https://example.com/models/scifi-door.glb"
    },
    {
      "@type": "3DModel",
      "name": "Sci-Fi Panel",
      "contentUrl": "https://example.com/models/scifi-panel.glb"
    }
  ]
}
```

## Essential Schema.org Properties

MVMD recommends these core Schema.org properties:

### Basic Information

- **name**: The name of the asset (required)
- **description**: A description of the asset (recommended)
- **alternateName**: Alternative names for the asset
- **identifier**: Unique identifiers for the asset

Example:
```json
{
  "@type": "DigitalDocument",
  "name": "Sci-Fi Helmet",
  "description": "A detailed futuristic helmet with display elements.",
  "alternateName": "Mark VII Neural Interface",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "SKU",
    "value": "SF-HLM-007"
  }
}
```

### Media and Content

- **contentUrl**: URL to the asset content
- **encodingFormat**: MIME type of the asset
- **contentSize**: Size of the asset file
- **thumbnail**: Thumbnail image of the asset

Example:
```json
{
  "@type": "DigitalDocument",
  "contentUrl": "https://example.com/models/helmet.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "2.5MB",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/helmet.jpg",
    "width": 512,
    "height": 512
  }
}
```

### Attribution and Licensing

- **creator**: The creator of the asset
- **contributor**: Contributors to the asset
- **dateCreated**: When the asset was created
- **dateModified**: When the asset was last modified
- **license**: License under which the asset is released
- **copyrightHolder**: Entity holding copyright
- **copyrightYear**: Year of copyright

Example:
```json
{
  "@type": "DigitalDocument",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "url": "https://janedesigner.com"
  },
  "contributor": {
    "@type": "Person",
    "name": "Alex Texture Artist"
  },
  "dateCreated": "2023-06-15",
  "dateModified": "2023-08-22",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Creative Studios Inc."
  },
  "copyrightYear": 2023
}
```

### Categorization and Keywords

- **keywords**: Keywords that describe the asset
- **category**: Category of the asset
- **about**: The subject matter of the asset

Example:
```json
{
  "@type": "DigitalDocument",
  "keywords": "sci-fi, helmet, futuristic, wearable, armor",
  "category": "3D Models",
  "about": {
    "@type": "Thing",
    "name": "Space Combat Equipment"
  }
}
```

## Schema.org Person and Organization

For creator and contributor information:

```json
{
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "creator": {
    "@type": "Person",
    "name": "Jane Creator",
    "url": "https://janecreator.example.com",
    "email": "jane@example.com",
    "memberOf": {
      "@type": "Organization",
      "name": "Creative Studio",
      "url": "https://creativestudio.example.com"
    }
  }
}
```

For organizational attribution:

```json
{
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "creator": {
    "@type": "Organization",
    "name": "Metaverse Designs Inc.",
    "url": "https://metaversedesigns.example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://metaversedesigns.example.com/logo.png"
    }
  }
}
```

## Schema.org for Structured Data

Use Schema.org's structured data types for consistent values:

### Dates and Times

Use ISO 8601 date format:

```json
{
  "dateCreated": "2023-08-15",
  "dateModified": "2023-08-22T14:30:00Z"
}
```

### Measurements and Dimensions

Use structured quantitative values:

```json
{
  "width": {
    "@type": "QuantitativeValue",
    "value": 2.5,
    "unitCode": "MTR"
  }
}
```

### Web Links

Use URL properties consistently:

```json
{
  "url": "https://example.com/asset-page",
  "sameAs": [
    "https://alternate-site.com/same-asset",
    "https://marketplace.com/asset-listing"
  ]
}
```

## Extending Schema.org in MVMD

MVMD extends Schema.org by:

1. **Using existing properties** when they match MVMD's needs
2. **Adding MVMD-specific properties** when Schema.org lacks equivalent terms
3. **Maintaining compatibility** with Schema.org's data model

Example of combined approach:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Sci-Fi Helmet",             // Schema.org property
  "description": "...",                // Schema.org property
  "encodingFormat": "model/gltf-binary", // Schema.org property
  "mvmd:category": "wearable",         // MVMD-specific property
  "mvmd:polyCount": 24500,             // MVMD-specific property
  "mvmd:attachmentPoint": "head"       // MVMD-specific property
}
```

## When to Use Schema.org vs. MVMD Properties

**Use Schema.org properties for:**
- Basic metadata (name, description, creator)
- Dates and times
- Licensing and rights information
- General categorization
- Standard media properties

**Use MVMD properties for:**
- Metaverse-specific attributes
- 3D technical specifications
- Platform compatibility information
- Interactive properties
- Virtual world positioning

## Schema.org Best Practices in MVMD

1. **Use the correct type**: Choose the most specific Schema.org type that applies to your asset.

2. **Include required properties**: Always include at minimum:
   - `@type`
   - `name`
   - Either `description` or appropriate content-describing properties

3. **Be consistent with values**: Follow Schema.org's expected formats for:
   - Dates (ISO 8601)
   - URLs (valid, absolute URLs)
   - Enumerated values (use recommended values)

4. **Link entities properly**: Use nested objects with `@type` for entities like Person, Organization, etc.

5. **Use structured values**: When a property has structured data, use appropriate Schema.org types rather than simple strings.

6. **Validate your Schema.org usage**: Test with Schema.org validators to ensure correct implementation.

7. **Stay current**: Check Schema.org periodically for new or updated types and properties relevant to MVMD.

## Common Schema.org Patterns in MVMD

### Basic Asset Pattern

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "description": "Detailed description of the asset.",
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  },
  "dateCreated": "2023-08-15"
}
```

### Media Asset Pattern

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Asset Name",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnail.jpg"
  }
}
```

### Licensed Asset Pattern

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Copyright Owner"
  },
  "copyrightYear": 2023,
  "copyrightNotice": "© 2023 Copyright Owner. All rights reserved."
}
```

## Resources

- [Schema.org Full Documentation](https://schema.org/docs/full.html)
- [Schema.org Tools and Resources](https://schema.org/docs/tools.html)
- [Google Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Related Documentation

- [JSON-LD Reference](json-ld.md) - How MVMD uses JSON-LD
- [MVMD Context Reference](context.md) - The MVMD context
- [Schema Reference](../schema-reference.md) - Complete reference of MVMD terms

