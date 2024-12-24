---
sidebar_position: 1
---

# Schema.org Standard

Schema.org provides the foundation for describing Metaverse assets with widely-supported, standardized vocabulary. This guide covers the core Schema.org types and properties most relevant for Metaverse metadata.

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
