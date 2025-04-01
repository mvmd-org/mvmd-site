---
sidebar_position: 2
---

# Schema Reference

This reference document provides detailed information about the Schema.org properties most commonly used in MVMD metadata. Use this as a technical reference when implementing metadata for your assets.

## Core Properties

These properties are fundamental to almost all MVMD metadata objects.

### name
**Description**: The name of the asset.  
**Type**: Text  
**Required**: Yes  
**Example**:
```json
"name": "Character Model"
```

### description
**Description**: A description of the asset.  
**Type**: Text  
**Required**: Recommended  
**Example**:
```json
"description": "A detailed humanoid character model designed for gaming environments."
```

### identifier
**Description**: A unique identifier for the asset.  
**Type**: Text or PropertyValue  
**Required**: Recommended  
**Example**:
```json
"identifier": "asset-2024-001"
```
Or with more detail:
```json
"identifier": {
  "@type": "PropertyValue",
  "propertyID": "UUID",
  "value": "550e8400-e29b-41d4-a716-446655440000"
}
```

### url
**Description**: The URL of the asset page.  
**Type**: URL  
**Required**: Optional  
**Example**:
```json
"url": "https://example.com/assets/character"
```

### creator
**Description**: The creator of the asset.  
**Type**: Person or Organization  
**Required**: Recommended  
**Example**:
```json
"creator": {
  "@type": "Person",
  "name": "Jane Creator"
}
```

### dateCreated
**Description**: The date the asset was created.  
**Type**: Date  
**Required**: Recommended  
**Example**:
```json
"dateCreated": "2024-04-01"
```

### dateModified
**Description**: The date the asset was last modified.  
**Type**: Date  
**Required**: Optional  
**Example**:
```json
"dateModified": "2024-04-15"
```

### license
**Description**: The license under which the asset is available.  
**Type**: URL or CreativeWork  
**Required**: Recommended  
**Example**:
```json
"license": "https://creativecommons.org/licenses/by/4.0/"
```

## Media Properties

These properties relate to media content and files.

### contentUrl
**Description**: The direct URL to download the asset file.  
**Type**: URL  
**Required**: Recommended  
**Example**:
```json
"contentUrl": "https://example.com/assets/model.glb"
```

### encodingFormat
**Description**: The MIME type of the asset file.  
**Type**: Text  
**Required**: Recommended when contentUrl is used  
**Example**:
```json
"encodingFormat": "model/gltf-binary"
```

### contentSize
**Description**: The size of the asset file.  
**Type**: Text  
**Required**: Optional  
**Example**:
```json
"contentSize": "2.5MB"
```

### thumbnail
**Description**: A thumbnail image representing the asset.  
**Type**: URL or ImageObject  
**Required**: Recommended  
**Example**:
```json
"thumbnail": "https://example.com/thumbnails/model.jpg"
```
Or with more detail:
```json
"thumbnail": {
  "@type": "ImageObject",
  "contentUrl": "https://example.com/thumbnails/model.jpg",
  "width": 256,
  "height": 256
}
```

### image
**Description**: Images related to the asset.  
**Type**: URL or ImageObject or array of these  
**Required**: Optional  
**Example**:
```json
"image": [
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/front.jpg",
    "caption": "Front view"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/side.jpg",
    "caption": "Side view"
  }
]
```

## Relationship Properties

These properties define relationships between assets and components.

### hasPart
**Description**: Components that are part of this asset.  
**Type**: CreativeWork or array of CreativeWork  
**Required**: Optional  
**Example**:
```json
"hasPart": [
  {
    "@type": "3DModel",
    "name": "Head Component",
    "contentUrl": "https://example.com/components/head.glb"
  },
  {
    "@type": "3DModel",
    "name": "Body Component",
    "contentUrl": "https://example.com/components/body.glb"
  }
]
```

### isPartOf
**Description**: Indicates that this asset is a component of another asset.  
**Type**: CreativeWork  
**Required**: Optional  
**Example**:
```json
"isPartOf": {
  "@type": "3DModel",
  "name": "Complete Character",
  "@id": "https://example.com/assets/full-character#asset"
}
```

### associatedMedia
**Description**: Media assets associated with this asset.  
**Type**: MediaObject or array of MediaObject  
**Required**: Optional  
**Example**:
```json
"associatedMedia": [
  {
    "@type": "ImageObject",
    "name": "Texture Map",
    "contentUrl": "https://example.com/textures/diffuse.jpg"
  },
  {
    "@type": "AudioObject",
    "name": "Ambient Sound",
    "contentUrl": "https://example.com/sounds/ambient.mp3"
  }
]
```

### encodesCreativeWork
**Description**: Creative works encoded or contained within this asset.  
**Type**: CreativeWork or array of CreativeWork  
**Required**: Optional  
**Example**:
```json
"encodesCreativeWork": {
  "@type": "TextObject",
  "name": "Character Story",
  "contentUrl": "https://example.com/stories/background.txt"
}
```

### mainEntity
**Description**: The primary entity described by this asset.  
**Type**: Thing  
**Required**: Optional  
**Example**:
```json
"mainEntity": {
  "@type": "Person",
  "name": "Character Name",
  "description": "A fictional character in the game world"
}
```

### subjectOf
**Description**: Creative works that have this asset as their subject.  
**Type**: CreativeWork or array of CreativeWork  
**Required**: Optional  
**Example**:
```json
"subjectOf": {
  "@type": "DigitalDocument",
  "name": "Technical Documentation",
  "contentUrl": "https://example.com/docs/technical.pdf"
}
```

## Classification Properties

These properties help categorize and classify assets.

### keywords
**Description**: Keywords or tags for the asset.  
**Type**: Text or array of Text  
**Required**: Recommended  
**Example**:
```json
"keywords": ["character", "humanoid", "3d model", "game asset"]
```

### category
**Description**: A category for the asset.  
**Type**: Text or array of Text  
**Required**: Optional  
**Example**:
```json
"category": "Character"
```
Or multiple categories:
```json
"category": ["Character", "Animated", "Humanoid"]
```

### additionalType
**Description**: Additional types that apply to the asset.  
**Type**: URL  
**Required**: Optional  
**Example**:
```json
"additionalType": "https://example.com/types/GameCharacter"
```

## Technical Properties

These properties provide technical details about the asset.

### additionalProperty
**Description**: Custom properties not defined in Schema.org.  
**Type**: PropertyValue or array of PropertyValue  
**Required**: Optional  
**Example**:
```json
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "propertyID": "polyCount",
    "name": "Polygon Count",
    "value": 12500
  },
  {
    "@type": "PropertyValue",
    "propertyID": "animationCount",
    "name": "Number of Animations",
    "value": 8
  }
]
```

### potentialAction
**Description**: Actions that can be performed on or with the asset.  
**Type**: Action  
**Required**: Optional  
**Example**:
```json
"potentialAction": {
  "@type": "ViewAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://example.com/viewer?model={model}"
  }
}
```

## Complete Example

Here's a comprehensive example showing many of these properties in use:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "@id": "https://example.com/assets/character-model",
  "name": "Advanced Character Model",
  "description": "A high-quality character model with multiple animations and customizable features.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "model-2024-042"
  },
  "creator": {
    "@type": "Person",
    "name": "Jane Creator",
    "url": "https://example.com/creators/jane"
  },
  "dateCreated": "2024-03-15",
  "dateModified": "2024-04-10",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/assets/character.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "15MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/character.jpg",
    "width": 512,
    "height": 512
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/character-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/character-side.jpg",
      "caption": "Side view"
    }
  ],
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Head Component",
      "contentUrl": "https://example.com/components/head.glb"
    },
    {
      "@type": "3DModel",
      "name": "Body Component",
      "contentUrl": "https://example.com/components/body.glb"
    },
    {
      "@type": "3DModel",
      "name": "Accessories",
      "contentUrl": "https://example.com/components/accessories.glb"
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Atlas",
      "contentUrl": "https://example.com/textures/atlas.jpg"
    },
    {
      "@type": "AudioObject",
      "name": "Voice Pack",
      "contentUrl": "https://example.com/audio/voice.mp3"
    }
  ],
  
  "mainEntity": {
    "@type": "Person",
    "name": "Hero Character",
    "description": "The main protagonist of the story"
  },
  
  "subjectOf": {
    "@type": "DigitalDocument",
    "name": "Character Guide",
    "contentUrl": "https://example.com/docs/character-guide.pdf"
  },
  
  "keywords": ["character", "protagonist", "humanoid", "animated", "customizable"],
  "category": ["Game Asset", "Character", "Hero"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 25000
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationCount",
      "name": "Number of Animations",
      "value": 12
    },
    {
      "@type": "PropertyValue",
      "propertyID": "textureResolution",
      "name": "Texture Resolution",
      "value": "4096x4096"
    }
  ],
  
  "potentialAction": {
    "@type": "ViewAction",
    "name": "View in 3D",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/viewer?model=character-model"
    }
  },
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Example Studio 2.0"
  },
  
  "mvmd:compatibility": {
    "platforms": ["platform-a", "platform-b", "platform-c"],
    "minVersion": "1.5"
  }
}
```

## Best Practices

1. **Always include essential properties**: At minimum, include `@context`, `@type`, and `name`.
2. **Use specific types**: Choose the most specific Schema.org type that applies to your asset.
3. **Validate properties**: Ensure property values match the expected type (Text, URL, etc.).
4. **Maintain relationships**: Use relationship properties to create clear connections between assets.
5. **Include technical details**: Use `additionalProperty` for domain-specific or technical information.
6. **Follow naming conventions**: Use camelCase for property names, matching Schema.org conventions.
7. **Be consistent**: Maintain consistent property usage across related assets.

## Related Resources

- [Schema.org Full Documentation](https://schema.org/docs/full.html)
- [JSON-LD Playground](https://json-ld.org/playground/)
- [MVMD Validator](../guides/basic/validate-metadata.md)
- [Create Basic Metadata Guide](../guides/basic/create-metadata.md) 