---
sidebar_position: 3
---

# VRM Format Integration

VRM is an extension of glTF 2.0, focused on representing humanoid avatars for VR applications. This reference explains how to integrate MVMD metadata with VRM files for metaverse-ready avatars and characters.

## What is VRM?

[VRM](https://vrm.dev/en/) is a file format for handling 3D humanoid avatar data, designed for VR applications and the metaverse. It extends the glTF 2.0 format to add features specific to humanoid characters, including:

- Humanoid bone structure definitions
- Facial expressions and blendshapes
- Look-at controls (eye movement)
- Spring bone physics for hair and clothing
- First-person rendering settings
- Material property extensions
- Rights management information

VRM allows creators to build 3D avatar models that can be used across multiple platforms while maintaining consistent appearance, animations, and behaviors. The format is widely adopted in VR chat applications, metaverse platforms, and VTuber software.

## VRM Versions and Specifications

There are two primary versions of the VRM specification:

### VRM 0.x

The original specification, widely supported across many applications:

- **Initial release**: VRM 0.0 (2018)
- **Current stable version**: VRM 0.x (final version in 0.x series)
- **Defining features**: Basic humanoid definitions, blendshapes, physics, first-person view settings

### VRM 1.0

The newer specification with improved features and compatibility:

- **Released**: 2022
- **Notable improvements**: 
  - Better expression definitions
  - Enhanced physics settings
  - More accurate spring bone system
  - Improved UV coordinates support
  - Better compatibility with glTF
  - Support for DRACO compression

## Core VRM Components

Understanding these core components helps when integrating MVMD with VRM:

| Component | Description | Purpose |
|-----------|-------------|---------|
| `humanoid` | Bone mapping information | Maps model bones to standard humanoid skeleton |
| `blendShape` | Facial expression definitions | Controls facial expressions and mouth movements |
| `firstPerson` | First-person view settings | Controls how avatar appears in first-person view |
| `lookAt` | Eye control parameters | Defines eye movement behavior |
| `material` | Material property overrides | Special material settings for avatars |
| `springBone` | Physics settings for appendages | Controls movement of hair, clothing, accessories |
| `meta` | Avatar metadata | Title, author, license information |

## MVMD Integration with VRM

MVMD metadata can be integrated with VRM files in several ways:

### 1. VRM Meta Extension

The simplest approach is to extend the existing VRM meta section with MVMD properties:

```json
{
  "extensions": {
    "VRM": {
      "meta": {
        "title": "Cyber Samurai",
        "version": "1.0",
        "author": "AvatarArtist",
        "contactInformation": "artist@example.com",
        "reference": "https://example.com/reference",
        "allowedUserName": "Everyone",
        "violentUssageName": "Allow",
        "sexualUssageName": "Allow",
        "commercialUssageName": "Allow",
        "otherPermissionUrl": "https://example.com/license",
        "licenseName": "CC_BY",
        "MVMD_metadata": {
          "@context": {
            "@vocab": "https://schema.org/",
            "mvmd": "https://mvmd.org/v1/"
          },
          "@type": "DigitalDocument",
          "name": "Cyber Samurai Avatar",
          "description": "Futuristic samurai character with cybernetic enhancements",
          "creator": {
            "@type": "Person",
            "name": "AvatarArtist",
            "url": "https://metaverse-artist.example"
          },
          "mvmd:category": "avatar",
          "mvmd:avatarType": "humanoid",
          "mvmd:avatarStyle": "stylized",
          "mvmd:polyCount": 32450,
          "mvmd:rigType": "humanoid",
          "mvmd:boneCount": 65,
          "mvmd:expressionCount": 16,
          "mvmd:platformCompatibility": [
            "VRChat", "Mozilla Hubs", "Hyperfy", "Ready Player Me"
          ],
          "mvmd:supportedInteractions": [
            "full-body-tracking", "face-tracking", "hand-gestures"
          ]
        }
      }
    }
  }
}
```

### 2. Separate MVMD Extension

For more comprehensive metadata or better separation, use a dedicated MVMD extension at the root level:

```json
{
  "asset": {
    "version": "2.0",
    "generator": "MVMD Avatar Creator"
  },
  "extensions": {
    "VRM": {
      // Standard VRM data...
    },
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "DigitalDocument",
      "name": "Corporate Executive Avatar",
      "description": "Professional business avatar with formal attire and accessories",
      "creator": {
        "@type": "Organization",
        "name": "MetaFashion Studios"
      },
      "mvmd:category": "avatar",
      "mvmd:subcategory": "professional",
      "mvmd:avatarType": "humanoid",
      "mvmd:gender": "female",
      "mvmd:heightRange": [155, 175],
      "mvmd:bodyType": "realistic",
      "mvmd:clothingStyle": "formal business",
      "mvmd:clothingParts": [
        {
          "name": "blazer",
          "color": "#1a2b3c",
          "material": "fabric",
          "removable": true
        },
        {
          "name": "blouse",
          "color": "#ffffff",
          "material": "silk",
          "removable": true
        },
        {
          "name": "skirt",
          "color": "#1a2b3c",
          "material": "fabric",
          "removable": true
        }
      ],
      "mvmd:accessories": [
        {
          "name": "glasses",
          "attachmentPoint": "head",
          "removable": true
        },
        {
          "name": "watch",
          "attachmentPoint": "leftWrist",
          "removable": true
        }
      ],
      "mvmd:expressionList": [
        "neutral", "smile", "angry", "surprised", 
        "sad", "thoughtful", "confident", "presentation"
      ],
      "mvmd:animationSet": "business",
      "mvmd:voiceType": "professional"
    }
  }
}
```

### 3. Node-Specific Metadata

For attaching metadata to specific parts of the avatar:

```json
{
  "nodes": [
    // Other nodes...
    {
      "name": "head",
      "mesh": 3,
      "children": [5, 6, 7],
      "extensions": {
        "MVMD_metadata": {
          "mvmd:category": "avatarPart",
          "mvmd:partType": "head",
          "mvmd:morphTargets": ["smile", "frown", "blink"],
          "mvmd:faceTrackingCompatible": true,
          "mvmd:detachable": false
        }
      }
    },
    {
      "name": "accessory_hat",
      "mesh": 12,
      "extensions": {
        "MVMD_metadata": {
          "mvmd:category": "avatarAccessory",
          "mvmd:accessoryType": "headwear",
          "mvmd:attachmentPoint": "head",
          "mvmd:detachable": true,
          "mvmd:physicsEnabled": true,
          "mvmd:alternateVersions": [
            {"name": "hat_red", "materialVariant": "red"},
            {"name": "hat_blue", "materialVariant": "blue"}
          ]
        }
      }
    }
    // Other nodes...
  ]
}
```

## VRM-Specific MVMD Properties

MVMD includes specific properties for VRM integration:

| MVMD Property | Description | Example Value |
|--------------|-------------|---------------|
| `mvmd:avatarType` | Type of avatar | `"humanoid"`, `"stylized"`, `"animal"` |
| `mvmd:expressionCount` | Number of facial expressions | `15` |
| `mvmd:expressionList` | List of available expressions | `["happy", "sad", "angry"]` |
| `mvmd:lipSyncType` | Type of lip synchronization | `"viseme"`, `"blendshape"` |
| `mvmd:eyeTrackingType` | Type of eye tracking | `"bone"`, `"blendshape"` |
| `mvmd:rigComplexity` | Complexity of the character rig | `"simple"`, `"advanced"` |
| `mvmd:handPose` | Supported hand poses | `["fist", "open", "point", "victory"]` |
| `mvmd:heightRange` | Valid avatar height range in cm | `[150, 190]` |
| `mvmd:bodyType` | Body structure description | `"athletic"`, `"slender"` |
| `mvmd:trackingProfile` | Supported tracking systems | `"full-body"`, `"upper-body-only"` |

## Mapping between VRM and MVMD Properties

Here's how to map between VRM's native metadata and MVMD properties:

| VRM Property | MVMD Property | Notes |
|--------------|---------------|-------|
| `meta.title` | `name` | Direct mapping |
| `meta.version` | `version` | Direct mapping |
| `meta.author` | `creator.name` | In Schema.org format |
| `meta.contactInformation` | `creator.email` | In Schema.org format |
| `meta.reference` | `sameAs` | URLs for related resources |
| `meta.allowedUserName` | `mvmd:usageRestrictions.allowedUsers` | Convert to standard vocabulary |
| `meta.violentUssageName` | `mvmd:usageRestrictions.violentContent` | Convert to boolean or enum |
| `meta.sexualUssageName` | `mvmd:usageRestrictions.adultContent` | Convert to boolean or enum |
| `meta.commercialUssageName` | `mvmd:usageRestrictions.commercialUse` | Convert to boolean or enum |
| `meta.licenseName` | `license` | Use full license URL when possible |
| `humanoid.humanBones` | `mvmd:rigStructure` | Map bone structure |
| `blendShape.preset` | `mvmd:expressionList` | Map expression names |

## VRM Avatar Types in MVMD

MVMD provides properties to describe different types of VRM avatars:

### Humanoid Avatars

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Realistic Human Avatar",
    "mvmd:category": "avatar",
    "mvmd:avatarType": "humanoid",
    "mvmd:avatarStyle": "realistic",
    "mvmd:gender": "male",
    "mvmd:age": "adult",
    "mvmd:bodyType": "athletic",
    "mvmd:heightRange": [175, 185],
    "mvmd:bodyProportions": "realistic",
    "mvmd:skinTone": "#e5c298",
    "mvmd:skinShader": "PBR",
    "mvmd:customizableFeatures": [
      "hair", "skin", "clothing", "accessories"
    ]
  }
}
```

### Stylized Characters

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Anime Style Character",
    "mvmd:category": "avatar",
    "mvmd:avatarType": "humanoid",
    "mvmd:avatarStyle": "anime",
    "mvmd:stylizationLevel": "high",
    "mvmd:artStyle": "cel-shaded",
    "mvmd:characterType": "fantasy",
    "mvmd:species": "elf",
    "mvmd:expressionStyle": "exaggerated",
    "mvmd:visualInfluences": [
      "Japanese anime", "fantasy RPGs"
    ]
  }
}
```

### Non-Humanoid Characters

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Robot Companion",
    "mvmd:category": "avatar",
    "mvmd:avatarType": "non-humanoid",
    "mvmd:avatarStyle": "mechanical",
    "mvmd:species": "robot",
    "mvmd:bodyStructure": "bipedal",
    "mvmd:proportions": "stylized",
    "mvmd:primaryMaterials": ["metal", "glass", "emissive"],
    "mvmd:movementType": "robotic",
    "mvmd:soundProfile": "mechanical",
    "mvmd:specialFeatures": [
      "emissive parts", "animated displays", "mechanical joints"
    ]
  }
}
```

## VRM Animation and Expression Metadata

MVMD can document animation and expression capabilities:

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "name": "Social VR Avatar",
    "mvmd:category": "avatar",
    "mvmd:expressionSystem": {
      "type": "blendShape",
      "preset": "VRM",
      "expressions": [
        {
          "name": "happy",
          "category": "emotion",
          "blendShapeGroups": ["joy", "smile"],
          "intensity": [0, 1],
          "triggerable": true
        },
        {
          "name": "angry",
          "category": "emotion",
          "blendShapeGroups": ["angry", "eyebrows_angry"],
          "intensity": [0, 1],
          "triggerable": true
        },
        {
          "name": "surprised",
          "category": "emotion",
          "blendShapeGroups": ["surprise", "eyebrows_raised"],
          "intensity": [0, 1],
          "triggerable": true
        }
      ],
      "visemeSupport": true,
      "visemeType": "ARKit",
      "emoteSupport": true,
      "emotes": [
        {
          "name": "wave",
          "animationClip": "animations/wave.anim",
          "triggerType": "gesture",
          "handType": "either"
        },
        {
          "name": "dance",
          "animationClip": "animations/dance.anim",
          "triggerType": "emote",
          "duration": 4.2
        }
      ]
    }
  }
}
```

## VRM Physics in MVMD

MVMD can describe physics capabilities:

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "name": "Dynamic Character",
    "mvmd:category": "avatar",
    "mvmd:physicsSystem": {
      "enabled": true,
      "type": "springBone",
      "version": "VRM 1.0",
      "dynamicElements": [
        {
          "name": "hair",
          "boneGroups": ["hair_01", "hair_02", "hair_03"],
          "stiffness": 0.8,
          "gravity": 0.2,
          "dragForce": 0.4,
          "colliders": true
        },
        {
          "name": "clothing",
          "boneGroups": ["skirt_01", "jacket_01"],
          "stiffness": 0.6,
          "gravity": 0.5,
          "dragForce": 0.3,
          "colliders": true
        },
        {
          "name": "accessories",
          "boneGroups": ["earring_L", "earring_R", "necklace"],
          "stiffness": 0.9,
          "gravity": 0.1,
          "dragForce": 0.2,
          "colliders": false
        }
      ],
      "colliderGroups": [
        {
          "name": "head",
          "colliders": [
            {"type": "sphere", "offset": [0, 0, 0], "radius": 0.1}
          ]
        },
        {
          "name": "shoulders",
          "colliders": [
            {"type": "sphere", "offset": [-0.05, 0, 0], "radius": 0.05},
            {"type": "sphere", "offset": [0.05, 0, 0], "radius": 0.05}
          ]
        }
      ]
    }
  }
}
```

## VRM Material Properties in MVMD

MVMD can document material specifics:

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "name": "Fantasy Character",
    "mvmd:category": "avatar",
    "mvmd:materials": [
      {
        "name": "skin",
        "type": "MToon",
        "shader": "VRM/MToon",
        "renderType": "Opaque",
        "cullMode": "Back",
        "baseProperties": {
          "mainTexture": "textures/skin.png",
          "mainTextureResolution": "2048x2048",
          "diffuseColor": "#e8c4b8",
          "shadeColor": "#c9a79e"
        },
        "advancedProperties": {
          "rimColor": "#ffffff",
          "rimFresnelPower": 5,
          "outlineWidth": 0.1,
          "outlineColor": "#402e29"
        },
        "customizableProperties": [
          "mainTexture", "diffuseColor"
        ]
      },
      {
        "name": "hair",
        "type": "MToon",
        "shader": "VRM/MToon",
        "renderType": "Opaque",
        "cullMode": "Back",
        "baseProperties": {
          "mainTexture": "textures/hair.png",
          "mainTextureResolution": "2048x2048",
          "diffuseColor": "#744f3b",
          "shadeColor": "#4d3425"
        },
        "advancedProperties": {
          "rimColor": "#ffffff",
          "rimFresnelPower": 4,
          "outlineWidth": 0.2,
          "outlineColor": "#1a1410"
        },
        "customizableProperties": [
          "diffuseColor"
        ]
      }
    ]
  }
}
```

## Cross-Platform Compatibility Metadata

MVMD can document compatibility across platforms:

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "name": "Cross-Platform Avatar",
    "mvmd:category": "avatar",
    "mvmd:platformCompatibility": [
      {
        "platform": "VRChat",
        "version": "VRChat Avatar 3.0",
        "supportLevel": "full",
        "features": [
          "full-body-tracking", "expressions", "gestures", "dynamics"
        ],
        "restrictions": [
          "polygon limit: 70,000", "bone limit: 256"
        ],
        "verifiedOn": "2023-05-20"
      },
      {
        "platform": "Mozilla Hubs",
        "version": "1.0",
        "supportLevel": "partial",
        "features": [
          "basic-animations", "basic-expressions"
        ],
        "restrictions": [
          "no physics", "limited expressions"
        ],
        "notes": "Use simplified version for better performance",
        "verifiedOn": "2023-05-22"
      },
      {
        "platform": "Ready Player Me",
        "version": "4.0",
        "supportLevel": "compatible",
        "features": [
          "expressions", "basic-physics"
        ],
        "conversionNotes": "Use RPM converter tool for best results",
        "verifiedOn": "2023-05-25"
      }
    ]
  }
}
```

## Tools for Working with VRM and MVMD

Tools that support VRM and MVMD integration:

- **[VRM SDK](https://github.com/vrm-c/UniVRM)**: Official Unity implementation for VRM
- **[Three-VRM](https://github.com/pixiv/three-vrm)**: VRM loader for three.js
- **[Blender VRM Add-on](https://github.com/saturday06/VRM_Addon_for_Blender)**: VRM support for Blender
- **[VRoid Studio](https://vroid.com/en/studio)**: Character creation software with VRM export
- **[MVMD VRM Tools](https://mvmd.org/tools/vrm)**: Tools for adding MVMD metadata to VRM

## Sample Code

### Adding MVMD Metadata to a VRM File (Node.js)

```javascript
const fs = require('fs');

function addMVMDMetadataToVRM(vrmPath, outputPath, mvmdMetadata) {
  // Read the VRM file (glTF format)
  const vrm = JSON.parse(fs.readFileSync(vrmPath, 'utf8'));
  
  // Make sure extensionsUsed includes MVMD_metadata
  vrm.extensionsUsed = vrm.extensionsUsed || [];
  if (!vrm.extensionsUsed.includes('MVMD_metadata')) {
    vrm.extensionsUsed.push('MVMD_metadata');
  }
  
  // Add MVMD metadata as an extension
  vrm.extensions = vrm.extensions || {};
  vrm.extensions.MVMD_metadata = mvmdMetadata;
  
  // Save the updated VRM
  fs.writeFileSync(outputPath, JSON.stringify(vrm, null, 2));
  console.log(`Added MVMD metadata to VRM at ${outputPath}`);
}

// Example usage
const mvmdMetadata = {
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Fantasy Warrior",
  "description": "Detailed fantasy warrior character with armor and weapons",
  "creator": {
    "@type": "Person",
    "name": "Character Artist",
    "url": "https://character-artist.example"
  },
  "mvmd:category": "avatar",
  "mvmd:avatarType": "humanoid",
  "mvmd:avatarStyle": "stylized",
  "mvmd:polyCount": 32000,
  "mvmd:rigType": "humanoid",
  "mvmd:expressionCount": 8,
  "mvmd:platformCompatibility": [
    "VRChat", "Mozilla Hubs", "Hyperfy"
  ]
};

addMVMDMetadataToVRM('character.vrm', 'character-with-mvmd.vrm', mvmdMetadata);
```

### Extracting and Displaying VRM Avatar Information with MVMD

```javascript
const fs = require('fs');
const { VRM, VRMSchema } = require('@pixiv/three-vrm');
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');
const THREE = require('three');

async function extractVRMInfo(vrmPath) {
  // Set up a minimal Three.js environment
  const scene = new THREE.Scene();
  const loader = new GLTFLoader();
  
  return new Promise((resolve, reject) => {
    loader.load(
      vrmPath,
      (gltf) => {
        // Extract VRM from loaded glTF
        VRM.from(gltf).then((vrm) => {
          const info = {
            // Basic VRM metadata
            title: vrm.meta.title,
            author: vrm.meta.author,
            version: vrm.meta.version,
            
            // Extract bone structure
            humanoid: {
              boneCount: Object.keys(vrm.humanoid.humanBones).length,
              hasFeet: !!vrm.humanoid.humanBones[VRMSchema.HumanoidBoneName.LeftFoot],
              hasHands: !!vrm.humanoid.humanBones[VRMSchema.HumanoidBoneName.LeftHand]
            },
            
            // Extract expression info
            expressions: {
              count: vrm.expressionManager ? 
                Object.keys(vrm.expressionManager.expressions).length : 0,
              types: vrm.expressionManager ? 
                Object.keys(vrm.expressionManager.expressions) : []
            },
            
            // Extract physics info
            physics: {
              enabled: vrm.springBoneManager ? true : false,
              groupCount: vrm.springBoneManager ? 
                vrm.springBoneManager.springBoneGroups.length : 0
            },
            
            // Extract MVMD metadata if present
            mvmdMetadata: gltf.parser.json.extensions?.MVMD_metadata || 
                          gltf.parser.json.extensions?.VRM?.meta?.MVMD_metadata
          };
          
          resolve(info);
        });
      },
      undefined,
      reject
    );
  });
}

// Example usage
async function displayVRMInfo(vrmPath) {
  try {
    const info = await extractVRMInfo(vrmPath);
    console.log('VRM Avatar Information:');
    console.log(`Title: ${info.title}`);
    console.log(`Author: ${info.author}`);
    console.log(`Version: ${info.version}`);
    console.log(`Bones: ${info.humanoid.boneCount}`);
    console.log(`Expressions: ${info.expressions.count}`);
    console.log(`Physics enabled: ${info.physics.enabled}`);
    
    if (info.mvmdMetadata) {
      console.log('\nMVMD Metadata:');
      console.log(`Name: ${info.mvmdMetadata.name}`);
      console.log(`Category: ${info.mvmdMetadata['mvmd:category']}`);
      console.log(`Avatar Type: ${info.mvmdMetadata['mvmd:avatarType']}`);
      console.log(`Style: ${info.mvmdMetadata['mvmd:avatarStyle']}`);
      console.log(`Poly Count: ${info.mvmdMetadata['mvmd:polyCount']}`);
      console.log(`Platform Compatibility: ${info.mvmdMetadata['mvmd:platformCompatibility'].join(', ')}`);
    } else {
      console.log('\nNo MVMD metadata found');
    }
  } catch (error) {
    console.error('Error extracting VRM info:', error);
  }
}

displayVRMInfo('character.vrm');
```

## Best Practices for VRM with MVMD

1. **Include avatar purpose**: Document the intended use cases for the avatar.
2. **Document limitations**: Include limitations like minimum platform versions or feature requirements.
3. **Add platform-specific details**: Include specific information for major platforms like VRChat, Mozilla Hubs, etc.
4. **Specify tracking requirements**: Document what tracking is needed (e.g., full body vs. head only).
5. **Detail customization options**: Describe what aspects of the avatar can be customized.
6. **Document performance characteristics**: Include polygon counts, texture sizes, and bone counts.
7. **Include animation information**: List supported animations and expressions.
8. **Detail physics behavior**: Document which parts have physics and how they behave.
9. **Add creator attribution**: Always include proper attribution and rights information.
10. **Specify shader requirements**: Document any special shader requirements for proper rendering.

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Cross-platform compatibility | Document platform-specific limitations in MVMD metadata |
| Expression mapping differences | Include expression equivalents for different platforms |
| Physics behavior variations | Document physics parameters and expected behavior |
| Material rendering differences | Specify shader types and fallback options |
| Texture resolution limits | Include different texture resolution options for different platforms |

## Future Directions

The integration of MVMD with VRM is evolving with:

- Standardized avatar compatibility profiles
- Improved expression mapping across platforms
- Enhanced physics description standards
- Better cross-platform material descriptions
- Standardized avatar animation libraries
- Enhanced avatar performance metrics

## Related Resources

- [VRM Specification](https://github.com/vrm-c/vrm-specification/tree/master/specification)
- [VRM Consortium](https://vrm-consortium.org/)
- [UniVRM GitHub](https://github.com/vrm-c/UniVRM)
- [VRM Community Hub](https://vrmchat.forum)

## Related Documentation

- [glTF Format Integration](gltf.md): How MVMD integrates with glTF, the base format for VRM
- [MVMD Avatar Properties](../schema/mvmd-terms.md#avatar-properties): MVMD properties specific to avatars and characters
- [Animation Properties](../schema/mvmd-terms.md#animation-properties): MVMD properties for animations

