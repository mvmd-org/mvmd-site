---
sidebar_position: 7
---

# Collada Standard

COLLADA (Collaborative Design Activity) is an open standard XML schema developed by the Khronos Group for exchanging digital assets among various graphics software applications. It facilitates the seamless interchange of 3D models, animations, textures, and physics simulations between different tools and platforms, enhancing workflow efficiency in 3D content creation. COLLADA documents are typically saved with a .dae (Digital Asset Exchange) file extension. The standard has been widely adopted across the industry and is recognized as ISO/PAS 17506:2012.

For more detailed information, you can access the full COLLADA 1.5 specification here: [COLLADA 1.5 Specification](http://www.collada.org/2008/03/COLLADASchema)
## Core Properties

### Asset Information

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "dae": "http://www.collada.org/2008/03/COLLADASchema"
  },
  "@type": "ImageObject",
  "name": "3D Scene Export",
  
  "dae:asset": {
    "@type": "dae:Asset",
    "contributor": {
      "author": "Digital Arts Studio",
      "authoring_tool": "Creator Suite 2024",
      "comments": "Exported for Metaverse use"
    },
    "created": "2024-03-15T10:30:00Z",
    "modified": "2024-03-15T14:20:00Z",
    "unit": {
      "name": "meter",
      "meter": 1.0
    },
    "up_axis": "Y_UP"
  }
}
```

### Geometry Structure

```json
{
  "dae:library_geometries": {
    "@type": "dae:GeometryLibrary",
    "geometry": [
      {
        "@type": "dae:Geometry",
        "id": "cube-mesh",
        "name": "Cube",
        "mesh": {
          "source": {
            "float_array": {
              "id": "positions",
              "count": 24,
              "stride": 3
            }
          },
          "vertices": {
            "input": {
              "semantic": "POSITION",
              "source": "#positions"
            }
          }
        }
      }
    ]
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "dae": "https://www.khronos.org/collada/ns/"
  },
  "@type": "ImageObject",
  "name": "Architectural Scene",
  "description": "Detailed architectural model with materials and lighting",
  "contentUrl": "https://example.com/images/architecture-preview.jpg",
  
  "dae:asset": {
    "@type": "dae:Asset",
    "contributor": {
      "author": "Digital Arts Studio",
      "authoring_tool": "Creator Suite 2024",
      "comments": "Architectural visualization export"
    },
    "created": "2024-03-15T10:30:00Z",
    "modified": "2024-03-15T14:20:00Z",
    "unit": {
      "name": "meter",
      "meter": 1.0
    },
    "up_axis": "Y_UP"
  },
  
  "dae:library_cameras": {
    "@type": "dae:CameraLibrary",
    "camera": [
      {
        "id": "main-camera",
        "name": "Main View",
        "optics": {
          "technique_common": {
            "perspective": {
              "xfov": 60,
              "aspect_ratio": 1.777,
              "znear": 0.1,
              "zfar": 1000.0
            }
          }
        }
      }
    ]
  },
  
  "dae:library_lights": {
    "@type": "dae:LightLibrary",
    "light": [
      {
        "id": "sun-light",
        "name": "Sun",
        "technique_common": {
          "directional": {
            "color": [1.0, 0.98, 0.92],
            "intensity": 1.0
          }
        }
      },
      {
        "id": "ambient-light",
        "name": "Ambient",
        "technique_common": {
          "ambient": {
            "color": [0.2, 0.2, 0.2]
          }
        }
      }
    ]
  },
  
  "dae:library_images": {
    "@type": "dae:ImageLibrary",
    "image": [
      {
        "id": "texture-1",
        "name": "WallTexture",
        "init_from": "textures/wall_diffuse.jpg"
      }
    ]
  },
  
  "dae:library_materials": {
    "@type": "dae:MaterialLibrary",
    "material": [
      {
        "id": "wall-material",
        "name": "Wall",
        "instance_effect": {
          "technique": {
            "phong": {
              "diffuse": {
                "texture": {
                  "texture": "texture-1",
                  "texcoord": "UVSET0"
                }
              },
              "specular": [0.2, 0.2, 0.2],
              "shininess": 20
            }
          }
        }
      }
    ]
  },
  
  "dae:library_geometries": {
    "@type": "dae:GeometryLibrary",
    "geometry": [
      {
        "@type": "dae:Geometry",
        "id": "wall-mesh",
        "name": "Wall",
        "mesh": {
          "source": [
            {
              "id": "positions",
              "float_array": {
                "count": 12,
                "stride": 3
              }
            },
            {
              "id": "normals",
              "float_array": {
                "count": 12,
                "stride": 3
              }
            },
            {
              "id": "texcoords",
              "float_array": {
                "count": 8,
                "stride": 2
              }
            }
          ],
          "vertices": {
            "input": [
              {
                "semantic": "POSITION",
                "source": "#positions"
              },
              {
                "semantic": "NORMAL",
                "source": "#normals"
              },
              {
                "semantic": "TEXCOORD",
                "source": "#texcoords"
              }
            ]
          }
        }
      }
    ]
  },
  
  "dae:library_visual_scenes": {
    "@type": "dae:VisualSceneLibrary",
    "visual_scene": {
      "id": "main-scene",
      "name": "Building",
      "node": [
        {
          "id": "wall-1",
          "name": "Front Wall",
          "translate": [0, 0, 0],
          "rotate": [0, 1, 0, 0],
          "scale": [1, 1, 1],
          "instance_geometry": {
            "url": "#wall-mesh",
            "bind_material": {
              "technique_common": {
                "instance_material": {
                  "symbol": "wall-material",
                  "target": "#wall-material"
                }
              }
            }
          }
        }
      ]
    }
  }
}
```

## Property Guidelines

### Asset Properties
- Include contributor info
- Set proper units
- Define coordinate system
- Track versions
- Document tools

### Library Properties
- Organize by type
- Use clear IDs
- Define relationships
- Track dependencies
- Document usage

### Scene Properties
- Create clear hierarchy
- Set transformations
- Link resources
- Define instances
- Track references

## Best Practices

1. **Asset Organization**
    - Group by type
    - Use clear naming
    - Track versions
    - Document sources
    - Manage dependencies

2. **Resource Management**
    - Organize libraries
    - Track references
    - Handle external files
    - Optimize reuse
    - Validate links

3. **Scene Structure**
    - Clear hierarchy
    - Logical grouping
    - Proper transforms
    - Efficient instances
    - Clean organization

4. **Material Setup**
    - Define clearly
    - Link textures
    - Set properties
    - Handle effects
    - Document usage

## Next Steps

- Review [Material Standards](../material-standards.md)
- See [Scene Composition](../scene-composition.md)
- Check [Validation](../../reference/validator.md)
