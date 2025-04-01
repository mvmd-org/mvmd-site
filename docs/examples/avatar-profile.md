---
sidebar_position: 2
---

# Avatar Profile Example

This example demonstrates a complete implementation of metadata for a humanoid avatar following the Avatar Profile. It integrates Schema.org with VRM and other avatar-specific standards.

## Complete Metadata Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/vrm/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "@id": "https://example.com/avatars/fantasy-knight",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AvatarID",
    "value": "avatar-2024-107"
  },
  "name": "Fantasy Knight Avatar",
  "description": "A fully-rigged humanoid knight character with customizable armor and weapons. This avatar features a complete set of expressions, detailed armor pieces, and a full range of animations for combat and social interaction.",
  "creator": {
    "@type": "Organization",
    "name": "Avatar Studios",
    "url": "https://example.com/studios/avatar"
  },
  "dateCreated": "2024-02-15",
  "dateModified": "2024-03-25",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  
  "contentUrl": "https://example.com/avatars/knight.vrm",
  "encodingFormat": "model/vrm",
  "contentSize": "12.5MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/knight.jpg",
    "width": 512,
    "height": 512
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/knight-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/knight-side.jpg",
      "caption": "Side view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/knight-action.jpg",
      "caption": "Action pose"
    }
  ],
  
  "keywords": ["avatar", "knight", "medieval", "fantasy", "humanoid", "warrior"],
  "category": ["Avatar", "Character", "Fantasy"],
  
  "mainEntity": {
    "@type": "Person",
    "name": "Sir Valorian",
    "description": "A valiant knight from the kingdom of Eldoria, sworn to protect the realm from dark forces.",
    "gender": "male"
  },
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Knight Helmet",
      "contentUrl": "https://example.com/parts/helmet.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "slotType",
          "name": "Slot Type",
          "value": "head"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Knight Sword",
      "contentUrl": "https://example.com/parts/sword.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "slotType",
          "name": "Slot Type",
          "value": "rightHand"
        }
      ]
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Skin Texture",
      "contentUrl": "https://example.com/textures/skin.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "name": "Armor Texture",
      "contentUrl": "https://example.com/textures/armor.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "AudioObject",
      "name": "Voice Pack",
      "contentUrl": "https://example.com/audio/knight-voice.mp3",
      "encodingFormat": "audio/mpeg"
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 32000
    },
    {
      "@type": "PropertyValue",
      "propertyID": "boneCount",
      "name": "Bone Count",
      "value": 65
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationCount",
      "name": "Animation Count",
      "value": 42
    },
    {
      "@type": "PropertyValue",
      "propertyID": "bodyType",
      "name": "Body Type",
      "value": "humanoid-athletic"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "height",
      "name": "Avatar Height",
      "value": "180cm"
    }
  ],
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 },
      "chest": { "node": 3 },
      "upperChest": { "node": 4 },
      "neck": { "node": 7 },
      "head": { "node": 8 },
      "leftEye": { "node": 9 },
      "rightEye": { "node": 10 },
      "leftShoulder": { "node": 11 },
      "leftUpperArm": { "node": 12 },
      "leftLowerArm": { "node": 13 },
      "leftHand": { "node": 14 },
      "rightShoulder": { "node": 17 },
      "rightUpperArm": { "node": 18 },
      "rightLowerArm": { "node": 19 },
      "rightHand": { "node": 20 },
      "leftUpperLeg": { "node": 23 },
      "leftLowerLeg": { "node": 24 },
      "leftFoot": { "node": 25 },
      "rightUpperLeg": { "node": 26 },
      "rightLowerLeg": { "node": 27 },
      "rightFoot": { "node": 28 }
    }
  },
  
  "vrm:blendShape": {
    "preset": {
      "happy": { "node": 50, "index": 0 },
      "angry": { "node": 50, "index": 1 },
      "sad": { "node": 50, "index": 2 },
      "relaxed": { "node": 50, "index": 3 },
      "surprised": { "node": 50, "index": 4 },
      "blink": { "node": 51, "index": 0 }
    },
    "custom": [
      { "name": "battle_cry", "node": 52, "index": 0 },
      { "name": "determined", "node": 52, "index": 1 }
    ]
  },
  
  "vrm:meta": {
    "title": "Fantasy Knight",
    "version": "1.2",
    "author": "Avatar Studios",
    "allowedUserName": "Everyone",
    "violentUssage": "Allowed",
    "sexualUssage": "None",
    "commercialUssage": "PersonalNonProfit"
  },
  
  "mvmd:avatarCapabilities": {
    "lipSync": true,
    "eyeBlink": true,
    "lookAt": true,
    "expressions": [
      "happy", "angry", "sad", "relaxed", "surprised",
      "battle_cry", "determined"
    ],
    "handPoses": true,
    "ikRig": true
  },
  
  "mvmd:compatibility": {
    "avatarStandards": ["vrm-0.x", "vrm-1.0"],
    "platforms": [
      "platform-a", 
      "platform-b", 
      "platform-c", 
      "platform-d"
    ],
    "minVersion": "2.0"
  },
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "AvatarCreator Pro 3.0"
  },
  
  "potentialAction": [
    {
      "@type": "ViewAction",
      "name": "Preview in 3D Viewer",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/viewer?model=fantasy-knight"
      }
    },
    {
      "@type": "CustomizeAction",
      "name": "Customize Avatar",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/customize?avatar=fantasy-knight"
      }
    }
  ]
}
```

## Explanation By Section

### Core Identity Properties

```json
"@context": {
  "@vocab": "https://schema.org/",
  "vrm": "https://vrm.dev/vrm/",
  "gltf": "https://www.khronos.org/gltf/",
  "mvmd": "https://mvmd.org/ns/"
},
"@type": "3DModel",
"@id": "https://example.com/avatars/fantasy-knight",
"identifier": {
  "@type": "PropertyValue",
  "propertyID": "AvatarID",
  "value": "avatar-2024-107"
},
"name": "Fantasy Knight Avatar",
"description": "A fully-rigged humanoid knight character with customizable armor and weapons. This avatar features a complete set of expressions, detailed armor pieces, and a full range of animations for combat and social interaction."
```

This section establishes:
- **Context**: Sets Schema.org as the default vocabulary and adds VRM, glTF, and MVMD namespaces
- **Type**: Defines this as a 3D model
- **Identifier**: Provides a unique, persistent identifier for the avatar
- **Name and Description**: Gives a clear title and detailed description of the avatar's features

### Character Information

```json
"mainEntity": {
  "@type": "Person",
  "name": "Sir Valorian",
  "description": "A valiant knight from the kingdom of Eldoria, sworn to protect the realm from dark forces.",
  "gender": "male"
}
```

This section provides:
- **Character Details**: Information about the character the avatar represents
- **Narrative Context**: Story elements that define the character's background
- **Physical Attributes**: Gender and other character traits

### Asset Components

```json
"hasPart": [
  {
    "@type": "3DModel",
    "name": "Knight Helmet",
    "contentUrl": "https://example.com/parts/helmet.glb",
    "encodingFormat": "model/gltf-binary",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "slotType",
        "name": "Slot Type",
        "value": "head"
      }
    ]
  },
  {
    "@type": "3DModel",
    "name": "Knight Sword",
    "contentUrl": "https://example.com/parts/sword.glb",
    "encodingFormat": "model/gltf-binary",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "slotType",
        "name": "Slot Type",
        "value": "rightHand"
      }
    ]
  }
]
```

This section defines:
- **Modular Components**: Individual parts that make up the avatar
- **Attachment Points**: Where each component connects to the avatar
- **Component Files**: Links to the actual component model files

### VRM-Specific Properties

```json
"vrm:humanoid": {
  "humanBones": {
    "hips": { "node": 1 },
    "spine": { "node": 2 },
    // ... other bones ...
  }
},

"vrm:blendShape": {
  "preset": {
    "happy": { "node": 50, "index": 0 },
    // ... other expressions ...
  },
  "custom": [
    { "name": "battle_cry", "node": 52, "index": 0 },
    { "name": "determined", "node": 52, "index": 1 }
  ]
},

"vrm:meta": {
  "title": "Fantasy Knight",
  "version": "1.2",
  "author": "Avatar Studios",
  "allowedUserName": "Everyone",
  "violentUssage": "Allowed",
  "sexualUssage": "None",
  "commercialUssage": "PersonalNonProfit"
}
```

This section provides:
- **Skeletal Structure**: Detailed bone mapping for animation
- **Facial Expressions**: Standard and custom blend shapes for expressions
- **Usage Permissions**: Clear guidelines on how the avatar can be used

### MVMD Avatar Capabilities

```json
"mvmd:avatarCapabilities": {
  "lipSync": true,
  "eyeBlink": true,
  "lookAt": true,
  "expressions": [
    "happy", "angry", "sad", "relaxed", "surprised",
    "battle_cry", "determined"
  ],
  "handPoses": true,
  "ikRig": true
},

"mvmd:compatibility": {
  "avatarStandards": ["vrm-0.x", "vrm-1.0"],
  "platforms": [
    "platform-a", 
    "platform-b", 
    "platform-c", 
    "platform-d"
  ],
  "minVersion": "2.0"
}
```

This section details:
- **Interactive Features**: Capabilities like lip sync and eye tracking
- **Available Expressions**: All possible facial expressions
- **Platform Compatibility**: Which platforms and standards this avatar works with

### Associated Media

```json
"associatedMedia": [
  {
    "@type": "ImageObject",
    "name": "Skin Texture",
    "contentUrl": "https://example.com/textures/skin.jpg",
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "ImageObject",
    "name": "Armor Texture",
    "contentUrl": "https://example.com/textures/armor.jpg",
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "AudioObject",
    "name": "Voice Pack",
    "contentUrl": "https://example.com/audio/knight-voice.mp3",
    "encodingFormat": "audio/mpeg"
  }
]
```

This section includes:
- **Textures**: Image files for skin and armor
- **Audio**: Voice clips for the character
- **Additional Media**: Other associated files

### Interactive Actions

```json
"potentialAction": [
  {
    "@type": "ViewAction",
    "name": "Preview in 3D Viewer",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/viewer?model=fantasy-knight"
    }
  },
  {
    "@type": "CustomizeAction",
    "name": "Customize Avatar",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/customize?avatar=fantasy-knight"
    }
  }
]
```

This section provides:
- **Interactive Functions**: Ways users can interact with the avatar
- **Customization Tools**: Links to tools for modifying the avatar
- **Preview Options**: Ways to view the avatar before use

## Implementation Notes

### Avatar Integration

When implementing avatars with this metadata:

1. **Ensure Rig Compatibility**: The bone structure should match standard humanoid rigs
2. **Test Expressions**: Verify that all blend shapes work correctly
3. **Optimize Performance**: Balance detail with performance requirements
4. **Check Platform Requirements**: Some platforms may have specific size or polygon limits

### Avatar Customization

This metadata supports several customization approaches:

1. **Component Replacement**: Swapping modular parts like the helmet or sword
2. **Texture Customization**: Changing textures for different appearances
3. **Expression Customization**: Adding or modifying expressions
4. **Animation Retargeting**: Using different animation sets with the same avatar

### Usage Rights

The VRM metadata includes important usage rights information:

- **allowedUserName**: Who can use this avatar
- **violentUssage**: Whether violent contexts are permitted
- **sexualUssage**: Whether sexual contexts are permitted
- **commercialUssage**: Rules for commercial use

## Next Steps

After implementing avatar metadata:

- Test your avatar across different platforms to ensure compatibility
- Create documentation for users explaining customization options
- Consider creating variants with different equipment or appearances
- Implement animations that showcase the avatar's capabilities

For other complex examples, see:
- [Basic Asset Example](./basic-asset.md)
- [Virtual Environment Example](./virtual-environment.md)
- [Wearable Item Example](./wearable-item.md) 