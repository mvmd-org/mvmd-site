---
sidebar_position: 3
---

# Attachable Profile

Digital items that can be attached to or equipped by avatars across metaverse platforms with consistent behavior, appearance, and interaction capabilities.

## Purpose and Use Cases

The Attachable profile provides metadata for digital items that can be attached to avatars, including wearables, tools, weapons, and interactive objects. This unified profile ensures consistent representation, behavior, and interaction capabilities across platforms.

- Avatar customization with digital fashion and accessories
- Cross-platform inventory compatibility for interactive items
- Virtual marketplaces for wearables and equipment
- Digital identity expression through attached items
- Brand extension into the digital realm
- Interactive tools and equipment for avatar functionality

## Profile Overview

The Attachable profile combines and extends the previous Wearable and Equipable profiles into a single comprehensive solution. It covers attachment points, compatibility specifications, technical requirements, visual representation, and interaction capabilities. This profile follows Schema.org patterns while adding metaverse-specific properties.

## Required Properties

| Property | Type | Description |
|----------|------|-------------|
| `@type` | String | Must be "ImageObject" or "3DModel" based on implementation |
| `name` | String | Name of the attachable item |
| `contentUrl` | URL | URL to the item's content (image preview or 3D model) |
| `encodingFormat` | String | MIME type of the content |
| `additionalProperty` | Array | Must include at least one property with propertyID "attachmentPoint" |

## Optional Properties

| Property | Type | Description |
|----------|------|-------------|
| `identifier` | PropertyValue | Unique ID for the item |
| `description` | String | Detailed description of the item |
| `creator` | Person/Organization | Creator information |
| `license` | URL | License information for usage rights |
| `thumbnail` | ImageObject | Preview image |
| `category` | String | Type of attachable (headwear, weapon, tool, etc.) |
| `handedness` | String | How item is held (left, right, both, none) |
| `attachmentPoints` | Object | Detailed attachment configuration |
| `physics` | Object | Physical properties for the item |
| `interactions` | Object | Available interactions for the item |
| `customization` | Object | Customization options |

## Standards Integration

This profile integrates the following standards:

- **Schema.org**: Core vocabulary and structure
- **glTF**: 3D model format for the asset
- **JSON-LD**: Linked data format for semantic metadata
- **Avatar Standards**: References to attachment points and compatibility

## Examples

### Basic Wearable Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Simple Digital Hat",
  "description": "A basic digital hat wearable",
  "contentUrl": "https://example.com/preview/simple_hat.jpg",
  "encodingFormat": "image/jpeg",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "attachable-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Digital Fashion Studio",
    "url": "https://example.com/studio"
  },

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "category",
      "name": "Attachable Category",
      "value": "headwear"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "attachmentPoint",
      "name": "Attachment Point",
      "value": "head"
    }
  ],

  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Hat 3D Model",
      "contentUrl": "https://example.com/models/hat.glb",
      "encodingFormat": "model/gltf-binary"
    }
  ]
}
```

### Basic Equipable Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Magic Staff",
  "description": "Interactive staff with particle effects and animations",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "attachable-2024-002"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Artifacts Inc.",
    "url": "https://example.com/virtual-artifacts"
  },
  
  "contentUrl": "https://example.com/equipables/magic-staff.glb",
  "encodingFormat": "model/gltf-binary",
  
  "category": "tool",
  "handedness": "both",
  
  "attachmentPoints": {
    "primary": {
      "name": "right_hand",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1]
    }
  },
  
  "interactions": {
    "primary": {
      "name": "cast",
      "type": "trigger",
      "animation": "cast_spell"
    }
  }
}
```

### Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Arcane Staff",
  "description": "Powerful magical staff with multiple spell effects",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "attachable-2024-003"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Artifacts Inc.",
    "url": "https://example.com/virtual-artifacts"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/equipables/arcane-staff.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/arcane-staff.jpg",
    "encodingFormat": "image/jpeg",
    "width": 256,
    "height": 256
  },
  
  "category": "tool",
  "handedness": "both",
  
  "attachmentPoints": {
    "primary": {
      "name": "right_hand",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1],
      "boneMapping": "right_hand_grip"
    },
    "secondary": {
      "name": "left_hand",
      "position": [0, 0.4, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1],
      "boneMapping": "left_hand_grip"
    }
  },
  
  "physics": {
    "weight": 2.0,
    "centerOfMass": [0, 0.3, 0],
    "collisionMesh": "staff_collision",
    "properties": {
      "rigid": true,
      "material": "wood",
      "friction": 0.5
    }
  },
  
  "interactions": {
    "primary": {
      "name": "fireball",
      "type": "trigger",
      "animation": "cast_fireball",
      "effects": [
        {
          "name": "fire_particles",
          "type": "particle",
          "duration": 2.0,
          "color": [1.0, 0.5, 0.0]
        }
      ],
      "cooldown": 2.0
    },
    "secondary": {
      "name": "shield",
      "type": "hold",
      "animation": "cast_shield"
    }
  }
}
```

## Validation

To validate against this profile, ensure:

1. All required properties are present
2. Properties have the correct types and formats
3. At least one attachment point is properly defined
4. For interactive items, ensure interactions are properly structured
5. Files referenced in contentUrl and other URLs are accessible

## Implementation Considerations

- Consider platform compatibility when designing attachment points
- Test across different avatar systems to ensure proper attachment
- Optimize 3D models for performance across different devices
- For wearables, ensure proper scaling for different avatar body types
- For equipable items, balance visual effects with performance considerations
- Use standard bone names when possible for wider compatibility

## Common Issues

- Attachment point misalignment between platforms
- Scale inconsistencies across different avatar systems
- Interaction trigger conflicts with platform-specific controls
- Visual effects that don't render correctly on all platforms
- Physics properties that behave differently across physics engines

## Related Profiles

- [Avatar Profile]: Defines the structure for avatars that can use attachable items
- [Composable Profile]: For creating complex multi-component attachable items
- [Interactive Profile]: For more complex interaction capabilities 