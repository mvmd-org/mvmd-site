# Metadata Fundamentals

Metadata is structured information that describes, explains, or locates virtual assets and experiences in the Metaverse. Well-structured metadata enables interoperability, discoverability, and management of digital assets across different platforms and environments.

## Required Elements

Every metadata object MUST include two fundamental elements:

### 1. Context (@context)

The `@context` must be provided as an object that defines the vocabulary and rules for interpreting metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
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
    "@vocab": "https://schema.org/"
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
  "name": "Digital Museum",
  "description": "Digital twin of physical museum",
  "maximumAttendeeCapacity": 500,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5009,
    "longitude": -0.1774
  }
}
```

## Complete Example

This comprehensive example shows all major metadata concepts working together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "ImageObject",
  "name": "Virtual Gallery Experience",
  "description": "Interactive virtual art gallery with multiple components",
  "encodingFormat": "image/png",
  "contentSize": "3.216 MB",
  "width": 4000,
  "height": 4000,
  "url": "https://path/to/image_thumbnail.png",
  "additionalType": "VirtualLocation",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",
      "name": "Maximum Attendee Capacity",
      "value": 100
    },
    {
      "@type": "PropertyValue",
      "propertyID": "lighting",
      "name": "Lighting System",
      "value": "dynamic"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "physics",
      "name": "Physics System",
      "value": "custom"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactivity",
      "name": "Interactivity Level",
      "value": "full"
    }
  ],
  "usd:environment": {
    "lighting": {
      "type": "dynamic",
      "shadows": true,
      "quality": "high"
    },
    "physics": {
      "type": "custom",
      "gravity": -9.81,
      "collisions": true
    },
    "interactivity": {
      "mode": "full",
      "gestures": ["grab", "point", "wave"]
    }
  },
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Main Gallery Hall",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/hall.glb",
      "gltf:transform": {
        "scale": [2.0, 1.0, 2.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0, 0]
      }
    },
    {
      "@type": "3DModel",
      "name": "Exhibition Wing A",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/wing_a.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0.707, 0, 0.707],
        "translation": [20, 0, 0]
      }
    },
    {
      "@type": "3DModel",
      "name": "Exhibition Wing B",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/wing_b.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, -0.707, 0, 0.707],
        "translation": [-20, 0, 0]
      }
    }
  ],
  "associatedMedia": [
    {
      "@type": "VideoObject",
      "name": "Gallery Walkthrough",
      "encodingFormat": "video/mp4",
      "contentUrl": "https://example.com/walkthrough.mp4"
    }
  ],
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Gallery Floor Plan",
      "encodingFormat": "image/png",
      "contentUrl": "https://example.com/floorplan.png"
    },
    {
      "@type": "TextObject",
      "name": "Visitor Guide",
      "encodingFormat": "text/markdown",
      "contentUrl": "https://example.com/guide.md"
    }
  ],
  "mainEntity": {
    "@type": "Place",
    "name": "Virtual Modern Art Gallery",
    "description": "A contemporary art space in the metaverse",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "curator",
        "name": "Gallery Curator",
        "value": "Virtual Arts Foundation"
      },
      {
        "@type": "PropertyValue",
        "propertyID": "exhibitions",
        "name": "Current Exhibitions",
        "value": ["Digital Realism", "NFT Showcase", "Interactive Installations"]
      }
    ]
  }
}
```

## Best Practices

1. **Type Selection**
    - Choose type based on needed properties
    - Consider Schema.org compatibility
    - Use additionalType for specialization
    - Verify property support for chosen type

2. **Property Organization**
    - Group related properties
    - Use clear property names
    - Maintain consistent structure
    - Document relationships clearly

3. **Value Handling**
    - Use appropriate value structure
    - Namespace complex objects
    - Maintain data type consistency
    - Follow Schema.org value types

4. **Relationship Definition**
    - Use appropriate relationship properties
    - Maintain clear hierarchies
    - Document dependencies
    - Consider relationship direction

5. **Namespace Usage**
    - Define all namespaces in @context
    - Use appropriate namespace prefixes
    - Keep namespace usage consistent
    - Document namespace purposes

6. **Metadata Validation**
    - Validate against Schema.org
    - Check namespace compliance
    - Verify property values
    - Test relationship integrity

## Common Patterns

1. **Base Type Selection**
   ```json
   {
     "@type": "CreativeWork",
     "additionalType": "VirtualLocation"
   }
   ```

2. **Property Value Structure**
   ```json
   "additionalProperty": [
     {
       "@type": "PropertyValue",
       "propertyID": "customField",
       "name": "Custom Field Name",
       "value": "custom value"
     }
   ]
   ```

3. **Namespaced Properties**
   ```json
   "gltf:transform": {
     "scale": [1.0, 1.0, 1.0]
   }
   ```

4. **Relationships**
   ```json
   "hasPart": [
     {
       "@type": "3DModel",
       "name": "Component"
     }
   ]
   ```

These patterns ensure maximum compatibility while enabling rich descriptions of virtual assets and experiences. When implementing metadata, always consider Schema.org compatibility, proper value handling, and clear relationship definition.
