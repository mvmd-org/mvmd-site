---
sidebar_position: 1
---

# Describe 3D Models

This guide explains how to create detailed metadata for 3D models using MVMD. It covers essential properties, technical specifications, and specialized attributes for different types of 3D assets.

## Essential Properties for 3D Models

Every 3D model should include these core properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Model Name",
  "description": "A comprehensive description of the 3D model, including its purpose, style, and notable features.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "model-2024-001"
  },
  "creator": {
    "@type": "Person",
    "name": "Creator Name",
    "url": "https://example.com/profile"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/models/detailed-model.glb",
  "encodingFormat": "model/gltf-binary"
}
```

## Technical Specifications

Include technical details to help users understand the complexity and requirements of your model:

```json
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "propertyID": "polyCount",
    "name": "Polygon Count",
    "value": 15000
  },
  {
    "@type": "PropertyValue",
    "propertyID": "vertexCount",
    "name": "Vertex Count",
    "value": 18500
  },
  {
    "@type": "PropertyValue",
    "propertyID": "textureCount",
    "name": "Texture Count",
    "value": 6
  },
  {
    "@type": "PropertyValue",
    "propertyID": "maxTextureResolution",
    "name": "Maximum Texture Resolution",
    "value": "2048x2048"
  },
  {
    "@type": "PropertyValue",
    "propertyID": "triangleCount",
    "name": "Triangle Count",
    "value": 28560
  },
  {
    "@type": "PropertyValue",
    "propertyID": "dimensions",
    "name": "Dimensions",
    "value": "1.5m x 2.0m x 3.0m"
  },
  {
    "@type": "PropertyValue",
    "propertyID": "scale",
    "name": "Scale",
    "value": "1:1"
  }
]
```

## Format-Specific Properties

### glTF Properties

For glTF models, include format-specific information:

```json
"gltf:asset": {
  "version": "2.0",
  "generator": "3D Modeling Software 4.2",
  "copyright": "© 2024 Creator Name"
},

"gltf:materials": [
  {
    "name": "Metal",
    "pbrMetallicRoughness": {
      "baseColorFactor": [0.8, 0.8, 0.8, 1.0],
      "metallicFactor": 1.0,
      "roughnessFactor": 0.4
    }
  },
  {
    "name": "Wood",
    "pbrMetallicRoughness": {
      "baseColorFactor": [0.65, 0.45, 0.2, 1.0],
      "metallicFactor": 0.0,
      "roughnessFactor": 0.8
    }
  }
]
```

## Associated Files

Document all related files such as textures, materials, and alternative formats:

```json
"associatedMedia": [
  {
    "@type": "ImageObject",
    "name": "Diffuse Map",
    "contentUrl": "https://example.com/textures/diffuse.jpg",
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "ImageObject",
    "name": "Normal Map",
    "contentUrl": "https://example.com/textures/normal.jpg",
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "ImageObject",
    "name": "Metallic Roughness Map",
    "contentUrl": "https://example.com/textures/metal-rough.jpg",
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "MediaObject",
    "name": "Alternative Format (FBX)",
    "contentUrl": "https://example.com/models/detailed-model.fbx",
    "encodingFormat": "model/fbx"
  }
]
```

## Preview Images

Include multiple preview images to showcase your model from different angles:

```json
"thumbnail": {
  "@type": "ImageObject",
  "contentUrl": "https://example.com/thumbnails/model-thumb.jpg",
  "width": 512,
  "height": 512
},

"image": [
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-front.jpg",
    "caption": "Front view"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-side.jpg",
    "caption": "Side view"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-back.jpg",
    "caption": "Back view"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-perspective.jpg",
    "caption": "Perspective view"
  }
]
```

## Animation Information

If your model includes animations, document them:

```json
"mvmd:animations": [
  {
    "name": "Idle",
    "durationSeconds": 5.0,
    "frameCount": 120,
    "looping": true
  },
  {
    "name": "Walk",
    "durationSeconds": 1.2,
    "frameCount": 30,
    "looping": true
  },
  {
    "name": "Action",
    "durationSeconds": 2.5,
    "frameCount": 60,
    "looping": false
  }
]
```

## Level of Detail (LOD) Information

If your model includes LOD variants, document them:

```json
"mvmd:levelOfDetail": [
  {
    "level": 0,
    "polyCount": 15000,
    "recommendedDistance": "near"
  },
  {
    "level": 1,
    "polyCount": 8000,
    "recommendedDistance": "medium"
  },
  {
    "level": 2,
    "polyCount": 2500,
    "recommendedDistance": "far"
  }
]
```

## Material Properties

Document the materials used in your model:

```json
"mvmd:materials": [
  {
    "name": "Metal Frame",
    "type": "PBR",
    "baseColor": "#CCCCCC",
    "metallicFactor": 1.0,
    "roughnessFactor": 0.3,
    "textureMap": "https://example.com/textures/metal.jpg"
  },
  {
    "name": "Fabric Seat",
    "type": "PBR",
    "baseColor": "#336699",
    "metallicFactor": 0.0,
    "roughnessFactor": 0.9,
    "textureMap": "https://example.com/textures/fabric.jpg"
  }
]
```

## Physics Properties

Include physics information if relevant:

```json
"mvmd:physics": {
  "collisionType": "mesh",
  "mass": 12.5,
  "centerOfMass": [0, 0.5, 0],
  "dynamicFriction": 0.5,
  "staticFriction": 0.7,
  "restitution": 0.3
}
```

## Complete Example

Here's a complete example bringing everything together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "description": "A detailed 3D model of an ergonomic office chair with adjustable height, armrests, and tilt mechanism. Features high-quality textures and materials, multiple LODs, and basic animations for configurability.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "chair-2024-001"
  },
  "creator": {
    "@type": "Person",
    "name": "3D Model Creator",
    "url": "https://example.com/creator"
  },
  "dateCreated": "2024-03-15",
  "dateModified": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/models/office-chair.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "4.7MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/chair-thumb.jpg",
    "width": 512,
    "height": 512
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/chair-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/chair-side.jpg",
      "caption": "Side view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/chair-back.jpg",
      "caption": "Back view"
    }
  ],
  
  "keywords": ["chair", "office", "furniture", "ergonomic", "3d model"],
  "category": "Furniture",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 24500
    },
    {
      "@type": "PropertyValue",
      "propertyID": "textureCount",
      "name": "Texture Count",
      "value": 8
    },
    {
      "@type": "PropertyValue",
      "propertyID": "dimensions",
      "name": "Dimensions",
      "value": "65cm x 70cm x 110cm"
    }
  ],
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Blender 3.6",
    "copyright": "© 2024 3D Model Creator"
  },
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Fabric Texture",
      "contentUrl": "https://example.com/textures/fabric.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "name": "Metal Texture",
      "contentUrl": "https://example.com/textures/metal.jpg",
      "encodingFormat": "image/jpeg"
    }
  ],
  
  "mvmd:animations": [
    {
      "name": "HeightAdjust",
      "durationSeconds": 1.5,
      "frameCount": 36,
      "looping": false
    },
    {
      "name": "Recline",
      "durationSeconds": 2.0,
      "frameCount": 48,
      "looping": false
    }
  ],
  
  "mvmd:levelOfDetail": [
    {
      "level": 0,
      "polyCount": 24500,
      "recommendedDistance": "near"
    },
    {
      "level": 1,
      "polyCount": 12000,
      "recommendedDistance": "medium"
    },
    {
      "level": 2,
      "polyCount": 5000,
      "recommendedDistance": "far"
    }
  ],
  
  "mvmd:materials": [
    {
      "name": "Fabric",
      "type": "PBR",
      "baseColor": "#336699",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.9
    },
    {
      "name": "Chrome",
      "type": "PBR",
      "baseColor": "#EEEEEE",
      "metallicFactor": 1.0,
      "roughnessFactor": 0.1
    },
    {
      "name": "Plastic",
      "type": "PBR",
      "baseColor": "#222222",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.7
    }
  ],
  
  "mvmd:compatibility": {
    "platforms": ["platform-a", "platform-b", "platform-c"],
    "minVersion": "1.2",
    "renderers": ["webgl", "webgpu", "vulkan"]
  }
}
```

## Best Practices

1. **Include All Essential Properties**: Always provide name, description, creator, license, and content URL.

2. **Be Specific with Technical Details**: Precise information helps users determine if the model meets their needs.

3. **Document Materials Thoroughly**: Material information is crucial for accurate rendering.

4. **Provide Multiple Preview Images**: Different angles help users understand the model's appearance.

5. **Organize Complex Information**: Use nested objects for clarity in complex properties.

6. **Follow Naming Conventions**: Use consistent terminology for properties.

7. **Include Format-Specific Information**: Add properties specific to the 3D format you're using.

## Next Steps

- [Add Thumbnails & Previews](add-thumbnails.md) - Learn how to create effective visual representations
- [Document Materials](document-materials.md) - Detailed guide for describing materials
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your metadata is correctly structured

