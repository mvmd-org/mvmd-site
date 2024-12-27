---
sidebar_position: 1
---

# Schema.org Standard

Schema.org provides a robust, extensible vocabulary for describing digital assets and experiences. As an open-source collaborative project, Schema.org continuously evolves to meet emerging needs across industries and use cases. Its flexible structure allows for rich descriptions of any type of digital content, while its standardized format ensures consistent interpretation across platforms. The vocabulary's regular updates and community-driven development make it an ideal foundation for future-proof metadata implementations, particularly in rapidly evolving spaces like the Metaverse.

For detailed information, you can refer to the official Schema.org website: [Schema.org](https://schema.org/)


## Fundamental Concepts

### Context (@context)

The `@context` field defines the vocabulary and rules for interpreting metadata. It can be specified in two ways:

#### 1. String Format
The simplest form, using Schema.org as the sole vocabulary:
```json
"@context": "https://schema.org/",
```

#### 2. Object Format
A more detailed form that allows multiple namespaces:
```json
"@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
},
```

The object format is particularly useful when combining Schema.org with other standards or adding custom vocabularies.

### Type Declaration (@type)

The `@type` field defines what the asset is within the Schema.org vocabulary. Every metadata object must have a valid Schema.org type.

#### Key Points About Types
- Must be a valid type defined in Schema.org
- Determines which properties are valid for the object
- Some types have restrictions on their property usage
- Different types support different relationship patterns

#### Common Types for Metaverse Assets

1. **CreativeWork**
    - Most versatile base type
    - Supports rich relationships and descriptions
    - Ideal for complex digital assets

2. **MediaObject and Subtypes**
    - **3DModel**: Three-dimensional representations
    - **AudioObject**: Sound files and audio content
    - **DataDownload**: Downloadable data files
    - **ImageObject**: Image files and visual content
    - **MusicVideoObject**: Musical video content
    - **TextObject**: Text-based content
    - **VideoObject**: Video content and animations

3. **VirtualLocation**
    - Specific to virtual environments
    - Describes locations in digital spaces
    - Suitable for metaverse environments

4. **SoftwareApplication**
    - Applications and tools
    - Interactive experiences
    - Digital utilities

5. **DigitalDocument**
    - Documentation
    - Digital files
    - Text-based resources

6. **LearningResource**
    - **Course**: Educational courses
    - **Quiz**: Assessment materials
    - **Syllabus**: Learning plans


## Core Types for Metaverse Assets

### 3DModel
Use for individual 3D objects and models.

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Detailed Chair",
  "description": "Ergonomic office chair with adjustable features",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  },
  "contentUrl": "https://example.com/models/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "dateCreated": "2024-03-15",
  "thumbnailUrl": "https://example.com/thumbnails/chair.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Place
Use for virtual environments and spaces.

```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Conference Hall",
  "description": "Large virtual conference space with stage and seating",
  "maximumAttendeeCapacity": 500,
  "publicAccess": true,
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Stage",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "SeatingCapacity",
      "value": 400
    }
  ],
  "contentUrl": "https://example.com/spaces/conference-hall.usd"
}
```

### CreativeWork Subtypes
Use for various asset types and content.

```json
{
  "@context": "https://schema.org/",
  "@type": "DigitalDocument",
  "name": "Virtual Space Guidelines",
  "description": "Usage guidelines and rules for the conference space",
  "encodingFormat": "application/pdf",
  "contentUrl": "https://example.com/docs/guidelines.pdf",
  "associatedMedia": {
    "@type": "3DModel",
    "name": "Space Layout",
    "contentUrl": "https://example.com/models/layout.glb"
  }
}
```

## Essential Properties

### Basic Information
- `name`: Asset title
- `description`: Detailed description
- `identifier`: Unique identifier
- `url`: Web reference
- `contentUrl`: Direct asset access
- `thumbnailUrl`: Preview image

### Creation and Authorship
- `creator`: Asset creator
- `dateCreated`: Creation date
- `dateModified`: Last modification
- `contributor`: Additional contributors
- `publisher`: Publishing entity

### Rights and Licensing
- `license`: Usage license
- `copyrightHolder`: Rights owner
- `copyrightYear`: Copyright year
- `permissionType`: Usage permissions

### Technical Details
- `encodingFormat`: File format
- `fileFormat`: Alternative format specification
- `contentSize`: File size
- `width`, `height`, `depth`: Dimensions

## Advanced Properties

### Relationships
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Office Furniture Collection"
  },
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Chair Base"
    },
    {
      "@type": "3DModel",
      "name": "Chair Back"
    }
  ],
  "exampleOfWork": {
    "@type": "CreativeWork",
    "name": "Standard Office Equipment"
  }
}
```

### Accessibility
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Accessible Conference Room",
  "accessibilityFeature": [
    "highContrastDisplay",
    "audioDescription",
    "alternativeText"
  ],
  "accessibilityHazard": "noFlashingHazard",
  "accessMode": ["visual", "textual", "auditory"]
}
```

### Interactions
```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Interactive Kiosk",
  "potentialAction": {
    "@type": "ViewAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/kiosk/{id}/view"
    }
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/ViewAction",
    "userInteractionCount": 5000
  }
}
```

## Best Practices

### 1. Use Specific Types
- Choose the most specific applicable type
- Use multiple types when appropriate
- Consider future extensibility

### 2. Property Selection
- Include all essential properties
- Add relevant optional properties
- Maintain consistency across assets

### 3. Structured Data
- Use nested objects for complex data
- Include proper context
- Follow JSON-LD formatting

### 4. Content Quality
- Write clear descriptions
- Use precise measurements
- Include relevant links

## Common Patterns

### Asset Collections
```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "name": "Office Environment Pack",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Office Desk",
      "contentUrl": "https://example.com/models/desk.glb"
    },
    {
      "@type": "3DModel",
      "name": "Office Chair",
      "contentUrl": "https://example.com/models/chair.glb"
    }
  ],
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  }
}
```

### Asset Variations
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Customizable Chair",
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Blue Variant",
      "contentUrl": "https://example.com/models/chair-blue.glb"
    },
    {
      "@type": "3DModel",
      "name": "Red Variant",
      "contentUrl": "https://example.com/models/chair-red.glb"
    }
  ]
}
```

## Next Steps

- Review [JSON-LD Integration](./json-ld.md) for linking data
- See [Combining Standards](/combining-standards.md) for integration with other standards
- Check [Best Practices](..//implementation/best-practices.md) for implementation guidance
