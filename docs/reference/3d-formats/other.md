---
sidebar_position: 4
---

# Other 3D Formats

This reference documents how MVMD metadata can be integrated with additional 3D file formats beyond those with dedicated documentation pages. This includes lesser-used but important formats for metaverse assets.

## Overview of Compatible 3D Formats

While glTF, USD, and VRM are the primary recommended formats for metaverse assets with dedicated MVMD integration documentation, the following formats can also be used with varying levels of MVMD support:

| Format | File Extensions | Type | Recommended Use Cases | MVMD Support Level |
|--------|----------------|------|---------------------|-------------------|
| FBX | .fbx | Binary/ASCII | Content creation, animation transfer | Medium |
| OBJ | .obj, .mtl | ASCII | Static meshes, basic material exchange | Medium |
| COLLADA | .dae | XML | Scene interchange, animation | Medium |
| STL | .stl | Binary/ASCII | Simple meshes, 3D printing models | Basic |
| PLY | .ply | Binary/ASCII | Point clouds, color data | Basic |
| X3D | .x3d | XML | Web3D content | Medium |
| 3DS | .3ds | Binary | Legacy content | Basic |
| BLEND | .blend | Binary | Blender scenes | Basic |
| USDZ | .usdz | Binary package | AR content (see [USD Integration](usd.md)) | High |
| glTF/GLB | .gltf, .glb | JSON/Binary | Standard for Web3D (see [glTF Integration](gltf.md)) | High |

## Integration Approaches

For formats not specifically covered by dedicated documentation, three general approaches can be used to integrate MVMD metadata:

### 1. External Sidecar File

Create a separate JSON-LD file with the same base name as the 3D file:

```
model.fbx         # Original 3D model
model.mvmd.json   # MVMD metadata sidecar file
```

**Example Sidecar File:**

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Industrial Robot Arm",
  "description": "Articulated industrial robot arm with 6 degrees of freedom",
  "creator": {
    "@type": "Person",
    "name": "Industrial Designer",
    "url": "https://example.com/designer"
  },
  "dateCreated": "2023-06-15",
  "mvmd:category": "mechanical",
  "mvmd:subcategory": "robot",
  "mvmd:polyCount": 24680,
  "mvmd:textureResolution": "2048x2048",
  "mvmd:materialCount": 5,
  "mvmd:sourceFormat": "fbx",
  "mvmd:originalScale": "meters",
  "mvmd:animations": [
    {
      "name": "idle",
      "duration": 3.5,
      "frameRate": 30
    },
    {
      "name": "pick_and_place",
      "duration": 8.2,
      "frameRate": 30
    }
  ],
  "mvmd:fileInfo": {
    "version": "FBX 2020",
    "units": "meters",
    "upAxis": "Y",
    "fileSize": 12580642
  },
  "mvmd:conversionNotes": "For WebGL use, convert to glTF with Blender or FBX2glTF"
}
```

### 2. Embedded Metadata (when format supports)

Some formats support embedding metadata or custom properties directly:

#### FBX Custom Properties

FBX files can store custom properties on objects. MVMD metadata can be stored as a JSON string in a custom property named "MVMD_metadata".

```python
# Python example using FBX SDK
from fbx import *

def add_mvmd_metadata_to_fbx(scene, metadata_json):
    # Create a new property on the scene
    mvmd_prop = FbxProperty.Create(scene, FbxStringDT, "MVMD_metadata")
    mvmd_prop.Set(metadata_json)
    mvmd_prop.ModifyFlag(FbxPropertyFlags.eUserDefined, True)
    return True
```

#### OBJ Comments

OBJ files can include metadata as comments, though this is not an ideal solution:

```
# MVMD_metadata: {"@context":{"@vocab":"https://schema.org/","mvmd":"https://mvmd.org/v1/"},"@type":"DigitalDocument","name":"Simple Cube","mvmd:category":"primitive"}
```

#### COLLADA Extra Data

COLLADA files can include extra data in the `<extra>` element:

```xml
<extra id="MVMD_metadata">
  <technique profile="MVMD">
    <metadata>
      {"@context":{"@vocab":"https://schema.org/","mvmd":"https://mvmd.org/v1/"},"@type":"DigitalDocument","name":"Character Model","mvmd:category":"character"}
    </metadata>
  </technique>
</extra>
```

### 3. Conversion to Supported Format

The most robust approach is to convert unsupported formats to one of the primary supported formats (glTF, USD, VRM) and then use the standard integration methods for those formats.

## Format-Specific Guidelines

### FBX Format

FBX (Filmbox) is a proprietary file format owned by Autodesk, widely used in the 3D content creation pipeline.

#### MVMD Integration for FBX

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Animated Character",
    "mvmd:category": "character",
    "mvmd:fbxVersion": "FBX 2020",
    "mvmd:fbxASCIIFormat": false,
    "mvmd:unitScale": "centimeter",
    "mvmd:upAxis": "Y",
    "mvmd:animationTakes": [
      {
        "name": "Walk",
        "startFrame": 1,
        "endFrame": 30,
        "frameRate": 30
      },
      {
        "name": "Run",
        "startFrame": 31,
        "endFrame": 50,
        "frameRate": 30
      }
    ],
    "mvmd:conversionNotes": "When converting to glTF, ensure animations are properly baked",
    "mvmd:skeletonInfo": {
      "rootBone": "Root",
      "boneCount": 86,
      "ikSetups": ["LeftFoot", "RightFoot", "LeftHand", "RightHand"]
    }
  }
}
```

#### FBX Workflow Best Practices

1. Always specify the FBX version in metadata
2. Document the coordinate system and unit scale
3. List all animation takes with frame ranges
4. Store MVMD metadata in a side-car file with `.mvmd.json` extension
5. If converting to a web-friendly format, include conversion notes

### OBJ Format

OBJ (Wavefront Object) is a simple, open file format that represents 3D geometry.

#### MVMD Integration for OBJ

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Architectural Element",
    "mvmd:category": "architecture",
    "mvmd:subcategory": "column",
    "mvmd:objInfo": {
      "vertices": 2458,
      "faces": 2304,
      "normals": true,
      "uvs": true,
      "mtlFile": "column.mtl"
    },
    "mvmd:materials": [
      {
        "name": "marble",
        "diffuseMap": "marble_diffuse.jpg",
        "normalMap": "marble_normal.jpg",
        "specularMap": "marble_specular.jpg"
      },
      {
        "name": "metal",
        "diffuseMap": "metal_diffuse.jpg",
        "normalMap": "metal_normal.jpg",
        "specularMap": "metal_specular.jpg"
      }
    ],
    "mvmd:unitScale": "meter",
    "mvmd:renderingNotes": "Material setup requires PBR shader with normal mapping support"
  }
}
```

#### OBJ Workflow Best Practices

1. Document all associated MTL and texture files
2. Include vertex and face counts for performance estimation
3. Specify whether normal and texture coordinate data is included
4. Document material properties that may be lost in the simple MTL format
5. Include scaling information as OBJ has no native units

### COLLADA Format

COLLADA (.dae) is an XML-based interchange format for 3D applications.

#### MVMD Integration for COLLADA

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Game Environment",
    "mvmd:category": "environment",
    "mvmd:colladaInfo": {
      "version": "1.5.0",
      "authoringTool": "Maya 2023",
      "upAxis": "Y_UP",
      "units": "meters"
    },
    "mvmd:sceneHierarchy": {
      "nodeCount": 42,
      "maxDepth": 5,
      "instancedGeometry": true
    },
    "mvmd:visualTechniques": [
      "common", "phong", "lambert"
    ],
    "mvmd:animationClips": [
      {
        "name": "door_open",
        "duration": 2.5,
        "affects": ["door_left", "door_right"]
      },
      {
        "name": "lights_flicker",
        "duration": 4.0,
        "affects": ["ceiling_light_1", "ceiling_light_2"]
      }
    ],
    "mvmd:extraData": {
      "gameEngine": "Unity",
      "LODLevels": 3,
      "collisionMeshes": true
    }
  }
}
```

#### COLLADA Workflow Best Practices

1. Document the COLLADA version used
2. Specify the coordinate system and unit scale
3. List all physics elements, if present
4. Document animation clips with timing information
5. Include information on rendering techniques used

### STL Format

STL (Stereolithography) is a simple format that represents only triangulated surfaces without color, texture, or other attributes.

#### MVMD Integration for STL

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Mechanical Part",
    "mvmd:category": "mechanical",
    "mvmd:stlInfo": {
      "format": "binary",
      "triangleCount": 42680,
      "withNormals": true
    },
    "mvmd:manufacturingInfo": {
      "designedFor3DPrinting": true,
      "recommendedMaterial": "PLA",
      "wallThickness": 2.5,
      "printResolution": "0.2mm"
    },
    "mvmd:dimensions": {
      "x": 120.5,
      "y": 85.3,
      "z": 45.2,
      "units": "mm"
    },
    "mvmd:renderingSuggestions": {
      "suggestedColor": "#7A8B99",
      "suggestedMaterial": "plastic",
      "roughness": 0.7,
      "metallic": 0.0
    }
  }
}
```

#### STL Workflow Best Practices

1. Specify whether the file is binary or ASCII STL
2. Include triangle count for performance estimation
3. Add material suggestions since STL lacks this information
4. Include dimensional information and units
5. For 3D printing models, include manufacturing-specific metadata

### X3D Format

X3D (Extensible 3D) is an ISO standard XML-based file format for representing 3D scenes.

#### MVMD Integration for X3D

Since X3D is XML-based, metadata can be included directly in the file:

```xml
<X3D profile="Immersive" version="3.3">
  <head>
    <meta name="MVMD_metadata" content="{
      &quot;@context&quot;: {
        &quot;@vocab&quot;: &quot;https://schema.org/&quot;,
        &quot;mvmd&quot;: &quot;https://mvmd.org/v1/&quot;
      },
      &quot;@type&quot;: &quot;DigitalDocument&quot;,
      &quot;name&quot;: &quot;Web3D Scene&quot;,
      &quot;mvmd:category&quot;: &quot;environment&quot;,
      &quot;mvmd:interactiveElements&quot;: [
        {
          &quot;name&quot;: &quot;door&quot;, 
          &quot;type&quot;: &quot;clickable&quot;,
          &quot;action&quot;: &quot;open_close&quot;
        }
      ]
    }"/>
  </head>
  <Scene>
    <!-- X3D content here -->
  </Scene>
</X3D>
```

A sidecar file can also be used for more complex metadata.

#### X3D Workflow Best Practices

1. Use inline metadata for simple cases
2. For complex metadata, use a sidecar file
3. Document interactive elements and behaviors
4. Specify X3D profile and components used
5. Include rendering information for non-X3D-compliant engines

## Conversion Workflows

When working with formats that don't directly support MVMD metadata, conversion to a supported format is often the best approach:

### FBX to glTF Conversion

```javascript
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

function convertFBXToGLTFWithMetadata(fbxPath, mvmdPath, outputPath) {
  // Step 1: Convert FBX to glTF (using FBX2glTF or similar tool)
  const command = `FBX2glTF -i "${fbxPath}" -o "${outputPath}"`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error converting FBX to glTF: ${error}`);
      return;
    }
    
    const gltfPath = path.join(outputPath, path.basename(fbxPath, '.fbx') + '.gltf');
    
    // Step 2: Read the generated glTF
    const gltf = JSON.parse(fs.readFileSync(gltfPath, 'utf8'));
    
    // Step 3: Read MVMD metadata
    const mvmdMetadata = JSON.parse(fs.readFileSync(mvmdPath, 'utf8'));
    
    // Step 4: Add MVMD metadata to glTF
    gltf.extensionsUsed = gltf.extensionsUsed || [];
    if (!gltf.extensionsUsed.includes('MVMD_metadata')) {
      gltf.extensionsUsed.push('MVMD_metadata');
    }
    
    gltf.extensions = gltf.extensions || {};
    gltf.extensions.MVMD_metadata = mvmdMetadata;
    
    // Step 5: Save the updated glTF
    fs.writeFileSync(gltfPath, JSON.stringify(gltf, null, 2));
    console.log(`Added MVMD metadata to converted glTF at ${gltfPath}`);
  });
}

// Example usage
convertFBXToGLTFWithMetadata('model.fbx', 'model.mvmd.json', './output');
```

### OBJ to USD Conversion

```python
import json
import os
from pxr import Usd, UsdGeom, Sdf

def convert_obj_to_usd_with_metadata(obj_path, mvmd_path, output_path):
    # Step 1: Convert OBJ to USD
    command = f'usdcat --in=obj --out=usda "{obj_path}" -o "{output_path}"'
    os.system(command)
    
    # Step 2: Read MVMD metadata
    with open(mvmd_path, 'r') as f:
        mvmd_metadata = json.load(f)
    
    # Step 3: Add metadata to USD
    stage = Usd.Stage.Open(output_path)
    root_prim = stage.GetPseudoRoot()
    
    # Add metadata as custom layer data
    layer = stage.GetRootLayer()
    layer.customLayerData = {
        'MVMD_metadata': mvmd_metadata
    }
    
    # Save the updated USD
    stage.Save()
    print(f"Added MVMD metadata to converted USD at {output_path}")

# Example usage
convert_obj_to_usd_with_metadata('model.obj', 'model.mvmd.json', 'model.usda')
```

## Asset Registries and Databases

For organizations managing large collections of 3D assets in various formats, an asset registry approach is recommended:

1. Maintain a central database of assets with MVMD metadata
2. Use unique identifiers (UUIDs) to link 3D files to their metadata
3. For web deployment, generate the appropriate format with embedded metadata
4. For file exchange, include sidecar files with consistent naming conventions

### Sample Asset Registry Schema

```json
{
  "assetRegistry": {
    "assets": [
      {
        "id": "a8f5b120-2f0a-4e3c-9d8e-6f0c7b3e2a1d",
        "files": [
          {
            "path": "assets/models/chair.fbx",
            "format": "fbx",
            "role": "source",
            "lastModified": "2023-05-15T10:30:45Z"
          },
          {
            "path": "assets/models/chair.glb",
            "format": "glb",
            "role": "web",
            "lastModified": "2023-05-15T10:45:12Z"
          },
          {
            "path": "assets/models/chair.usdz",
            "format": "usdz",
            "role": "ar",
            "lastModified": "2023-05-15T10:50:20Z"
          }
        ],
        "thumbnails": [
          {
            "path": "assets/thumbnails/chair_256.jpg",
            "resolution": "256x256",
            "role": "thumbnail"
          },
          {
            "path": "assets/thumbnails/chair_1024.jpg",
            "resolution": "1024x1024",
            "role": "preview"
          }
        ],
        "metadata": {
          "@context": {
            "@vocab": "https://schema.org/",
            "mvmd": "https://mvmd.org/v1/"
          },
          "@type": "DigitalDocument",
          "name": "Modern Office Chair",
          "description": "Ergonomic office chair with adjustable height and armrests",
          "mvmd:category": "furniture",
          "mvmd:subcategory": "seating",
          "mvmd:polyCount": 24680,
          "mvmd:materialCount": 4,
          "mvmd:dimensions": {
            "height": 95,
            "width": 65,
            "depth": 68,
            "units": "cm"
          },
          "mvmd:interactable": true,
          "mvmd:interactionType": ["sit", "adjust"],
          "mvmd:variantGroup": "office-furniture-set-a"
        }
      }
    ]
  }
}
```

## Best Practices for Other Formats

1. **Prefer standard formats when possible**: Convert to glTF, USD, or VRM for best compatibility.
2. **Use consistent naming conventions**: Keep sidecar files with clear naming relationships to the 3D files.
3. **Document format-specific limitations**: Include notes about what information may be lost in certain formats.
4. **Include conversion guidance**: Add notes about recommended tools and settings for format conversion.
5. **Validate metadata after conversion**: Ensure all important metadata is preserved through conversion pipelines.
6. **Embed when possible, link when necessary**: Embed metadata in the format when supported, use sidecar files when not.
7. **Include technical specifications**: Document polycount, material count, animation details and other technical aspects.
8. **Add platform compatibility notes**: Specify which platforms support each format and any special requirements.
9. **Document scale and dimensions**: Many formats have ambiguous or missing scale information.
10. **Include authoring tool information**: Note which tools were used to create the asset and recommended tools for editing.

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Lost metadata during conversion | Use a pipeline that preserves or reapplies metadata after conversion |
| Format-specific limitations | Document what capabilities are lost in simpler formats |
| Inconsistent scaling | Always include explicit scale information in metadata |
| Material incompatibilities | Include detailed material definitions for reconstruction |
| Missing animation data | Document animation parameters separately from the 3D file |
| Performance considerations | Include performance metrics for different formats |

## Related Resources

- [Khronos glTF Tools](https://github.com/KhronosGroup/glTF-Tutorials)
- [FBX SDK](https://www.autodesk.com/developer-network/platform-technologies/fbx-sdk-2020-0)
- [USD Documentation](https://graphics.pixar.com/usd/docs/index.html)
- [Blender Importers/Exporters](https://docs.blender.org/manual/en/latest/files/import_export/index.html)
- [Asset Management Best Practices](https://www.khronos.org/blog/asset-creation-guidelines)

## Related Documentation

- [glTF Integration](gltf.md): Primary recommended format for web and metaverse
- [USD Integration](usd.md): Advanced format for complex scenes
- [VRM Integration](vrm.md): Specialized format for avatars and characters

