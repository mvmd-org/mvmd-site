---
sidebar_position: 4
---

# Cross-Platform Asset Implementation

This guide covers implementing assets that work consistently across multiple metaverse platforms, with a focus on practical workflows rather than specific standards.

## Use Cases

Cross-platform asset implementation addresses these common scenarios:

- Creating 3D assets that render correctly across multiple engines and platforms
- Ensuring consistent behavior of interactive elements in different environments
- Managing variations and fallbacks for platforms with different capabilities
- Implementing platform-specific optimizations while maintaining a single source of truth
- Supporting multiple file formats with consistent metadata

## Prerequisites

Before implementing cross-platform assets, ensure you have:

- A clear understanding of your target platforms' requirements and limitations
- Knowledge of supported file formats for each platform
- Familiarity with basic MVMD metadata structure
- Access to validation tools for each target platform

## Implementation Workflow

### 1. Define Platform Requirements

Start by documenting requirements for each target platform:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Cross-Platform Chair",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "platformCompatibility",
      "name": "Platform Compatibility",
      "value": {
        "platforms": [
          {
            "name": "platform-a",
            "minVersion": "2.0",
            "maxTextureSize": 2048,
            "maxPolyCount": 20000,
            "supportedFormats": ["glb", "usdz"],
            "features": ["pbr-materials", "animations"]
          },
          {
            "name": "platform-b",
            "minVersion": "1.5",
            "maxTextureSize": 1024,
            "maxPolyCount": 10000,
            "supportedFormats": ["glb"],
            "features": ["basic-materials"]
          },
          {
            "name": "platform-c",
            "minVersion": "3.0",
            "maxTextureSize": 4096,
            "maxPolyCount": 50000,
            "supportedFormats": ["usd", "glb"],
            "features": ["pbr-materials", "animations", "physics"]
          }
        ]
      }
    }
  ]
}
```

### 2. Create Format-Specific Variations

Provide multiple file formats to support different platforms:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Cross-Platform Chair",
  "description": "Ergonomic chair with consistent appearance across platforms",
  "encoding": [
    {
      "@type": "MediaObject",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://assets.example.com/chair.glb",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "targetPlatforms",
          "value": ["platform-a", "platform-b"]
        }
      ]
    },
    {
      "@type": "MediaObject",
      "encodingFormat": "model/vnd.usd+zip",
      "contentUrl": "https://assets.example.com/chair.usdz",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "targetPlatforms",
          "value": ["platform-a", "platform-c"]
        }
      ]
    }
  ]
}
```

### 3. Implement Level of Detail (LOD) Variations

Create different detail levels for various platform capabilities:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Cross-Platform Chair",
  "description": "Ergonomic chair with multiple detail levels",
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Chair - High Detail",
      "contentUrl": "https://assets.example.com/chair-high.glb",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "technicalDetails",
          "name": "Technical Details",
          "value": {
            "polyCount": 18000,
            "textureSize": 2048,
            "lod": 0,
            "targetPlatforms": ["platform-a", "platform-c"]
          }
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Chair - Medium Detail",
      "contentUrl": "https://assets.example.com/chair-medium.glb",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "technicalDetails",
          "name": "Technical Details",
          "value": {
            "polyCount": 8000,
            "textureSize": 1024,
            "lod": 1,
            "targetPlatforms": ["platform-b"]
          }
        }
      ]
    }
  ]
}
```

### 4. Define Feature Fallbacks

Specify alternative behaviors when features aren't supported:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Chair",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "interactivity",
      "name": "Interactive Features",
      "value": {
        "features": [
          {
            "name": "adjust-height",
            "type": "animation",
            "primaryImplementation": {
              "method": "keyframe-animation",
              "requires": ["animations"]
            },
            "fallback": {
              "method": "static-position",
              "description": "Fixed height on platforms without animation support"
            }
          },
          {
            "name": "physics-response",
            "type": "physics",
            "primaryImplementation": {
              "method": "rigid-body-physics",
              "requires": ["physics"]
            },
            "fallback": {
              "method": "none",
              "description": "No physical response on platforms without physics"
            }
          }
        ]
      }
    }
  ]
}
```

### 5. Ensure Consistent Visual Identity

Maintain visual consistency while accommodating platform differences:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Cross-Platform Chair",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "visualIdentity",
      "name": "Visual Identity",
      "value": {
        "brandColors": {
          "primary": "#003366",
          "secondary": "#CC9900",
          "accent": "#FFFFFF"
        },
        "materialMapping": [
          {
            "name": "fabric",
            "pbr": {
              "baseColor": "#003366",
              "metallic": 0,
              "roughness": 0.8
            },
            "basic": {
              "diffuse": "#003366"
            }
          },
          {
            "name": "metal",
            "pbr": {
              "baseColor": "#EEEEEE",
              "metallic": 0.9,
              "roughness": 0.1
            },
            "basic": {
              "diffuse": "#CCCCCC",
              "specular": "#FFFFFF"
            }
          }
        ]
      }
    }
  ]
}
```

## Complete Example

A comprehensive cross-platform asset implementation:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/schemas/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "description": "Modern office chair with adjustable height and consistent cross-platform appearance",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://virtualfurnishings.example.com"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "image": "https://assets.example.com/chair-preview.jpg",
  
  "encoding": [
    {
      "@type": "MediaObject",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://assets.example.com/chair-high.glb",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "targetPlatforms",
          "value": ["platform-a", "platform-c"]
        }
      ]
    },
    {
      "@type": "MediaObject",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://assets.example.com/chair-medium.glb",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "targetPlatforms",
          "value": ["platform-b"]
        }
      ]
    },
    {
      "@type": "MediaObject",
      "encodingFormat": "model/vnd.usd+zip",
      "contentUrl": "https://assets.example.com/chair.usdz",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "targetPlatforms",
          "value": ["platform-a"]
        }
      ]
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "platformCompatibility",
      "name": "Platform Compatibility",
      "value": {
        "platforms": [
          {
            "name": "platform-a",
            "minVersion": "2.0",
            "maxTextureSize": 2048,
            "maxPolyCount": 20000,
            "supportedFormats": ["glb", "usdz"],
            "features": ["pbr-materials", "animations"]
          },
          {
            "name": "platform-b",
            "minVersion": "1.5",
            "maxTextureSize": 1024,
            "maxPolyCount": 10000,
            "supportedFormats": ["glb"],
            "features": ["basic-materials"]
          },
          {
            "name": "platform-c",
            "minVersion": "3.0",
            "maxTextureSize": 4096,
            "maxPolyCount": 50000,
            "supportedFormats": ["usd", "glb"],
            "features": ["pbr-materials", "animations", "physics"]
          }
        ]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactivity",
      "name": "Interactive Features",
      "value": {
        "features": [
          {
            "name": "adjust-height",
            "type": "animation",
            "primaryImplementation": {
              "method": "keyframe-animation",
              "requires": ["animations"]
            },
            "fallback": {
              "method": "static-position",
              "description": "Fixed height on platforms without animation support"
            }
          }
        ]
      }
    }
  ],
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Studio Modeler 2024"
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 0.01
  }
}
```

## Implementation Considerations

### Platform-Specific Challenges

- **Material Differences**: PBR materials may not translate consistently to platforms with basic material support
- **Animation Support**: Animation behaviors can vary significantly between platforms
- **Physics Implementation**: Physics systems have different constraints and behaviors
- **Performance Variations**: Similar assets can perform differently across platforms
- **Content Policies**: Some platforms have restrictions on certain content types

### Recommended Practices

- Test assets on each target platform before final deployment
- Create a visual style guide to ensure consistent representation
- Document platform-specific requirements in your metadata
- Validate assets against each platform's requirements
- Build progressive enhancement into your design approach
- Use MVMD namespaces specific to each format for detailed configuration

### Common Issues

- **Inconsistent lighting**: Different rendering engines handle materials differently
- **Animation timing**: Animation systems may run at different rates
- **Scale variations**: Units and scale might be interpreted differently
- **Missing features**: Not all platforms support the same feature set
- **Permission differences**: Access controls may vary between platforms

## Related Documentation

- [Basic Asset Implementation](./assets.md)
- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [glTF Standard](../standards/gltf.md)
- [USD Standard](../standards/usd.md)
- [Validation Tools](../tools/validator.md) 