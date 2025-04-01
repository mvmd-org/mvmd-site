---
sidebar_position: 3
---

# Metadata Foundations

Metadata is structured information that describes, explains, or locates virtual assets and experiences in the Metaverse. Well-structured metadata enables interoperability, discoverability, and management of digital assets across different platforms and environments.

## Required Elements

Every metadata object MUST include two fundamental elements:

### 1. Context (@context)

The `@context` must be provided as an object that defines the vocabulary and rules for interpreting metadata. All MVMD metadata MUST include the MVMD namespace to reference this documentation and implementation version:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

Additional namespaces can be included as needed for specific standards:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  }
}
```

### 2. Type (@type)

The `@type` must be a valid Schema.org type. For maximum compatibility and functionality, consider using these base types:

- **CreativeWork**: Most versatile base type
    - Supports rich relationships (`hasPart`, `associatedMedia`)
    - Ideal for complex virtual assets
    - Can be specialized using `additionalType`
- **MediaObject** and subtypes:
    - 3DModel: Three-dimensional representations
    - AudioObject: Sound files
    - ImageObject: Image files
    - VideoObject: Video content
- **Place**: Physical location representations
- **SoftwareApplication**: Interactive applications
- **DigitalDocument**: Documentation and text
- **LearningResource**: Educational content

## Property Value Handling

### Simple Values
For basic properties, use direct values:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Simple Asset",
  "description": "Basic asset example"
}
```

### Additional Properties
When adding custom properties, use PropertyValue structure:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Complex Asset",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",
      "name": "Maximum Capacity",
      "value": 100
    },
    {
      "@type": "PropertyValue",
      "propertyID": "renderQuality",
      "name": "Render Quality",
      "value": "high"
    }
  ]
}
```

### Complex Values
For complex data structures, use namespaced properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "CreativeWork",
  "name": "Asset with Complex Properties",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "quality",
      "name": "Quality Settings",
      "value": "high-performance"
    }
  ],
  "usd:renderSettings": {
    "quality": "high",
    "shadows": "enabled",
    "reflections": "realtime"
  }
}
```

## Relationship Properties

Schema.org provides several ways to define relationships between content:

### hasPart
Used to indicate components or pieces that make up the whole. Example showing multiple components using consistent namespacing:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "CreativeWork",
  "name": "Complex Asset",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Main Component",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/main.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 1, 0]
      }
    },
    {
      "@type": "3DModel",
      "name": "Secondary Component",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/secondary.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0.707, 0, 0.707],
        "translation": [1, 0, 0]
      }
    }
  ]
}
```

### associatedMedia
Used to reference related media content:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Asset with Media",
  "associatedMedia": [
    {
      "@type": "VideoObject",
      "name": "Asset Preview",
      "encodingFormat": "video/mp4",
      "contentUrl": "https://example.com/preview.mp4"
    },
    {
      "@type": "ImageObject",
      "name": "Asset Thumbnail",
      "encodingFormat": "image/png",
      "contentUrl": "https://example.com/thumbnail.png"
    }
  ]
}
```

### encodesCreativeWork
Used to reference creative works encoded in this object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Asset Container",
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Concept Art",
      "encodingFormat": "image/png",
      "contentUrl": "https://example.com/concept.png"
    },
    {
      "@type": "TextObject",
      "name": "Background Story",
      "encodingFormat": "text/markdown",
      "contentUrl": "https://example.com/story.md"
    }
  ]
}
```

### mainEntity
Used to indicate the primary entity described by the creative work:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Character Profile",
  "mainEntity": {
    "@type": "Person",
    "name": "Character Name",
    "description": "Character background and story",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "class",
        "name": "Character Class",
        "value": "Warrior"
      }
    ]
  }
}
```

## Location Types

### Virtual-Only Locations
For purely virtual spaces, use CreativeWork with additionalType:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "CreativeWork",
  "name": "Fantasy Arena",
  "additionalType": "VirtualLocation",
  "description": "Floating combat arena",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",
      "name": "Maximum Attendee Capacity",
      "value": 100
    }
  ]
}
```

### Digital Twins
For digital representations of real places, use Place:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Place",
  "name": "Virtual Gallery",
  "description": "Digital twin of the Example Art Gallery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Example City",
    "addressRegion": "EX",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}
```

## Complete Example

Here's a complete example showing a complex asset with multiple components and relationships:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "CreativeWork",
  "name": "Virtual Showroom",
  "description": "Interactive virtual showroom with multiple exhibits",
  "creator": {
    "@type": "Organization",
    "name": "Example Studio",
    "url": "https://example.com"
  },
  "dateCreated": "2022-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/showroom.usd",
  "encodingFormat": "model/vnd.usd",
  
  "usd:environment": {
    "lighting": "studio",
    "background": "neutral"
  },
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Display Stand",
      "contentUrl": "https://example.com/stand.glb",
      "encodingFormat": "model/gltf-binary",
      "gltf:transform": {
        "translation": [0, 0, 0]
      }
    },
    {
      "@type": "3DModel",
      "name": "Product Showcase",
      "contentUrl": "https://example.com/product.glb",
      "encodingFormat": "model/gltf-binary",
      "gltf:transform": {
        "translation": [0, 1, 0]
      },
      "potentialAction": {
        "@type": "ViewAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://example.com/product-details"
        }
      }
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Showroom Thumbnail",
      "contentUrl": "https://example.com/thumbnail.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "VideoObject",
      "name": "Showroom Tour",
      "contentUrl": "https://example.com/tour.mp4",
      "encodingFormat": "video/mp4",
      "thumbnail": "https://example.com/tour-thumb.jpg"
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "maxUsers",
      "name": "Maximum Users",
      "value": 20
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactionMode",
      "name": "Interaction Mode",
      "value": "guided"
    }
  ]
}
```

## Best Practices

1. **Use Proper @type Declarations**: Always specify the most specific type, and ensure all objects in arrays have proper @type declarations.

2. **Maintain Consistent Namespacing**: When using properties from external standards like glTF or USD, maintain consistent namespace prefixes.

3. **Structure Complex Properties**: Use nested objects for complex properties and arrays for multiple related items.

4. **Reference External Resources**: Use contentUrl for main assets and associatedMedia for supporting materials.

5. **Include Essential Metadata**: Always include name, description, creator, dateCreated, and license for better discoverability.

6. **Validate Your Metadata**: Use the MVMD Validator to ensure your metadata follows best practices and is correctly formatted.

## Common Patterns

1. **Asset Library Pattern**: Group related assets under a CreativeWork with multiple hasPart relationships.

2. **Nested Component Pattern**: Create hierarchical structures with components that have their own components.

3. **Reference vs. Embedding**: Choose between referencing external files (contentUrl) and embedding content directly in JSON-LD.

4. **Custom Attribute Pattern**: Use additionalProperty consistently for domain-specific attributes.

5. **Action Pattern**: Attach potentialAction to enable interactive behaviors.

These patterns provide a foundation for building rich, interoperable metadata for Metaverse assets. For implementation details, see the [Implementation](../guides/basic/create-metadata.md) section.
