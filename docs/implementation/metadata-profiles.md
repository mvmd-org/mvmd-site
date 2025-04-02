---
sidebar_position: 7
---

# Metadata Profiles

Metadata profiles provide standardized templates for common asset types, ensuring consistency and interoperability across platforms and applications.

## Using Metadata Profiles

Metadata profiles are pre-defined schema templates that:

- Include required properties for specific asset types
- Provide consistent naming and structure
- Ensure compatibility with MVMD standards
- Simplify implementation across platforms

## Core Profile Examples

### Basic 3D Model Profile

A foundational profile for 3D models with essential properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Example Model",
  "description": "Detailed description of the model",
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  },
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "dateCreated": "2024-01-15"
}
```

### Avatar Profile

A profile for avatar assets with customization options:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Customizable Avatar",
  "description": "Humanoid avatar with customization options",
  "creator": {
    "@type": "Organization",
    "name": "Avatar Studios"
  },
  "contentUrl": "https://example.com/avatar.glb",
  "encodingFormat": "model/gltf-binary",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "avatarProperties",
      "name": "Avatar Properties",
      "value": {
        "skeletonType": "humanoid",
        "height": 1.8,
        "customizableFeatures": ["hair", "face", "body", "clothing"],
        "animationSets": ["idle", "walk", "run", "jump"],
        "lod": {
          "levels": 3,
          "polycount": [20000, 10000, 5000]
        }
      }
    }
  ]
}
```

### Environment Profile

A profile for virtual environments and spaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Forest Environment",
  "description": "Interactive forest environment with dynamic lighting",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Environments Inc."
  },
  "contentUrl": "https://example.com/forest.zip",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Terrain",
      "contentUrl": "https://example.com/forest/terrain.glb"
    },
    {
      "@type": "3DModel", 
      "name": "Vegetation",
      "contentUrl": "https://example.com/forest/vegetation.glb"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "environmentProperties",
      "name": "Environment Properties",
      "value": {
        "scale": [100, 25, 100],
        "recommendedCapacity": 20,
        "lighting": "dynamic",
        "timeOfDay": "variable",
        "weatherEffects": ["rain", "fog", "sunshine"],
        "ambientAudio": "https://example.com/forest/ambient.mp3"
      }
    }
  ]
}
```

## Extended Profiles

### Game Asset Profile

A profile for game-ready assets with gameplay properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Treasure Chest",
  "description": "Interactive treasure chest that can be opened",
  "contentUrl": "https://example.com/chest.glb",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "gameProperties",
      "name": "Game Properties",
      "value": {
        "interactable": true,
        "interactions": ["open", "close", "destroy"],
        "hitPoints": 50,
        "collisionMesh": "chest_collision.obj",
        "lootTable": {
          "common": ["gold", "silver"],
          "rare": ["gem", "artifact"],
          "legendary": ["unique_item"]
        },
        "animations": {
          "idle": "chest_idle.anim",
          "open": "chest_open.anim",
          "destroy": "chest_destroy.anim"
        }
      }
    }
  ]
}
```

### Virtual Fashion Profile

A profile for wearable fashion items:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Product",
  "name": "Digital Fashion Jacket",
  "description": "Virtual leather jacket with customizable patches",
  "contentUrl": "https://example.com/jacket.glb",
  "offers": {
    "@type": "Offer",
    "price": 25.00,
    "priceCurrency": "USD"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "wearableProperties",
      "name": "Wearable Properties",
      "value": {
        "category": "outerwear",
        "fitType": "regular",
        "compatibleAvatars": ["humanoid", "custom-rig-1"],
        "supportedPlatforms": ["platform-a", "platform-b", "platform-c"],
        "customization": {
          "colors": ["#000000", "#A52A2A", "#0000FF"],
          "patches": [
            {
              "name": "Skull",
              "position": "back"
            },
            {
              "name": "Star",
              "position": "sleeve"
            }
          ]
        }
      }
    }
  ]
}
```

## Profile Implementation Guidelines

### Customizing Profiles

When adapting profiles for your own use:

1. **Start with the most relevant profile** for your asset type
2. **Keep all required properties** to maintain compatibility
3. **Add custom properties** using `additionalProperty` for specialized features
4. **Document any extensions** for users of your assets
5. **Validate the final metadata** against MVMD schemas

### Profile Compatibility

To ensure your customized profiles remain compatible:

- **Maintain the core structure** defined in the profile
- **Use proper data types** for all values
- **Follow naming conventions** for custom properties
- **Include version information** for your custom extensions
- **Test across platforms** that support the base profile

## Related Resources

- [Types of Assets](../concepts/types-of-assets.md): Understanding different asset categories
- [Integration Profiles](../integration-profiles/overview.md): Platform-specific integration guides
- [Validation Tools](../reference/validator.md): Tools for validating profile compliance
