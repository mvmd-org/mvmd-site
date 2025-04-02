---
sidebar_position: 5
---

# VRM Standard

VRM Standard Overview

VRM is a platform-independent 3D avatar file format designed to enable interoperability in the metaverse era. Originating from Japan, VRM is based on the glTF 2.0 standard and is tailored for handling humanoid 3D avatar data in virtual reality (VR) applications. It allows for the seamless use of 3D avatars across various platforms and applications, promoting a consistent and versatile user experience.
Khronos Group

For detailed information, you can refer to the official VRM documentation: [VRM Documentation](https://vrm.dev/)

## Core Properties

### Avatar Information

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://github.com/vrm-c/vrm-specification/tree/282edef7b8de6044d782afdab12b14bd8ccf0630/specification/VRMC_vrm-1.0"
  },
  "@type": "ImageObject",
  "name": "Humanoid Avatar",
  
  "vrm:meta": {
    "@type": "vrm:Meta",
    "title": "Custom Avatar",
    "version": "1.0",
    "author": "Virtual Character Studio",
    "allowedUserName": "Everyone",
    "violentUssage": "Disallow",
    "sexualUssage": "Disallow",
    "commercialUssage": "Allow",
    "otherPermissionUrl": "https://example.com/license"
  }
}
```

### Humanoid Configuration

```json
{
  "vrm:humanoid": {
    "@type": "vrm:Humanoid",
    "humanBones": {
      "hips": {
        "node": 1,
        "useDefaultValues": true
      },
      "spine": {
        "node": 2,
        "useDefaultValues": true
      }
    },
    "armStretch": 0.05,
    "legStretch": 0.05,
    "upperArmTwist": 0.5,
    "lowerArmTwist": 0.5,
    "upperLegTwist": 0.5,
    "lowerLegTwist": 0.5,
    "feetSpacing": 0
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://github.com/vrm-c/vrm-specification/tree/282edef7b8de6044d782afdab12b14bd8ccf0630/specification/VRMC_vrm-1.0"
  },
  "@type": "ImageObject",
  "name": "Custom VRM Avatar",
  "description": "Fully rigged humanoid avatar with expressions",
  "contentUrl": "https://example.com/images/avatar-preview.jpg",
  
  "vrm:meta": {
    "@type": "vrm:Meta",
    "title": "Custom Avatar",
    "version": "1.0",
    "author": "Virtual Character Studio",
    "contactInformation": "contact@example.com",
    "reference": "https://example.com/avatar-reference",
    "allowedUserName": "Everyone",
    "violentUssage": "Disallow",
    "sexualUssage": "Disallow",
    "commercialUssage": "Allow",
    "otherPermissionUrl": "https://example.com/license",
    "licenseName": "CC BY 4.0",
    "otherLicenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  
  "vrm:humanoid": {
    "@type": "vrm:Humanoid",
    "humanBones": {
      "hips": {
        "node": 1,
        "useDefaultValues": true
      },
      "spine": {
        "node": 2,
        "useDefaultValues": true
      },
      "chest": {
        "node": 3,
        "useDefaultValues": true
      },
      "head": {
        "node": 4,
        "useDefaultValues": true
      }
    },
    "armStretch": 0.05,
    "legStretch": 0.05,
    "upperArmTwist": 0.5,
    "lowerArmTwist": 0.5,
    "upperLegTwist": 0.5,
    "lowerLegTwist": 0.5,
    "feetSpacing": 0
  },
  
  "vrm:expressions": {
    "@type": "vrm:Expressions",
    "preset": {
      "happy": {
        "isBinary": false,
        "morphTargetBinds": [
          {
            "node": 4,
            "index": 0,
            "weight": 1.0
          }
        ]
      },
      "angry": {
        "isBinary": false,
        "morphTargetBinds": [
          {
            "node": 4,
            "index": 1,
            "weight": 1.0
          }
        ]
      }
    }
  },
  
  "vrm:lookAt": {
    "@type": "vrm:LookAt",
    "offsetFromHeadBone": [0, 0.06, 0],
    "type": "bone",
    "rangeMapHorizontalInner": {
      "inputMaxValue": 90,
      "outputScale": 10
    },
    "rangeMapHorizontalOuter": {
      "inputMaxValue": 90,
      "outputScale": 10
    },
    "rangeMapVerticalDown": {
      "inputMaxValue": 90,
      "outputScale": 10
    },
    "rangeMapVerticalUp": {
      "inputMaxValue": 90,
      "outputScale": 10
    }
  },
  
  "vrm:firstPerson": {
    "@type": "vrm:FirstPerson",
    "firstPersonBone": 4,
    "firstPersonBoneOffset": [0, 0.06, 0],
    "meshAnnotations": [
      {
        "node": 5,
        "type": "both"
      }
    ]
  },
  
  "vrm:springBone": {
    "@type": "vrm:SpringBone",
    "boneGroups": [
      {
        "comment": "Hair",
        "stiffiness": 1.0,
        "gravityPower": 0.1,
        "gravityDir": [0, -1, 0],
        "dragForce": 0.4,
        "center": -1,
        "hitRadius": 0.02,
        "bones": [6, 7, 8],
        "colliderGroups": [0]
      }
    ]
  }
}
```

## Property Guidelines

### Meta Properties
- Include complete licensing
- Specify usage rights
- Provide contact info
- Document version
- Include references

### Humanoid Properties
- Define bone structure
- Set proper ranges
- Configure twists
- Adjust proportions
- Validate hierarchy

### Expression Properties
- Define clear presets
- Configure morphs
- Set proper weights
- Include animations
- Document triggers

## Best Practices

1. **Avatar Setup**
    - Use standard bone names
    - Configure expressions
    - Set up look-at
    - Define first person
    - Test movements

2. **Expression Configuration**
    - Create clear presets
    - Test combinations
    - Validate ranges
    - Document triggers
    - Check performance

3. **Physics Setup**
    - Configure spring bones
    - Set colliders
    - Adjust gravity
    - Test dynamics
    - Validate stability

4. **Optimization**
    - Control bone count
    - Optimize meshes
    - Manage LODs
    - Check performance
    - Validate export

## Next Steps

- Review [Avatar Profiles](../avatar-profile.md)
- See [Animation Standards](./animation.md)
- Check [Validation](../../reference/validator.md)
