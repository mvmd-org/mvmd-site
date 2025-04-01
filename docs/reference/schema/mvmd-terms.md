---
sidebar_position: 4
---

# MVMD-Specific Terms

This reference documents the MVMD-specific terms and properties that extend Schema.org to provide comprehensive metadata for metaverse assets. These terms are organized by category and include usage examples.

## Overview

MVMD extends Schema.org with domain-specific terms using the `mvmd:` namespace prefix. All MVMD-specific terms are defined in the MVMD context (`https://mvmd.org/v1/`).

## Asset Categories

### Category Terms

Properties for categorizing metaverse assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:category` | String | Primary category of the asset (e.g., "wearable", "environment", "prop") |
| `mvmd:subcategory` | String | More specific category (e.g., "headwear", "indoor", "furniture") |
| `mvmd:assetType` | String | Type of asset file (e.g., "model", "material", "texture") |
| `mvmd:useCase` | String | Intended use case (e.g., "game", "social", "educational") |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Sci-Fi Helmet",
  "mvmd:category": "wearable",
  "mvmd:subcategory": "headwear",
  "mvmd:assetType": "model",
  "mvmd:useCase": "game"
}
```

## 3D Model Properties

Properties specific to 3D models:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:polyCount` | Number | Number of polygons in the model |
| `mvmd:vertexCount` | Number | Number of vertices in the model |
| `mvmd:triangleCount` | Number | Number of triangles in the model |
| `mvmd:materialCount` | Number | Number of materials used in the model |
| `mvmd:textureCount` | Number | Number of textures used in the model |
| `mvmd:lodLevels` | Number | Number of LOD (Level of Detail) variations |
| `mvmd:animationCount` | Number | Number of animations included with the model |
| `mvmd:rigged` | Boolean | Whether the model has a skeletal rig |
| `mvmd:uvChannels` | Number | Number of UV mapping channels |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "mvmd:polyCount": 15000,
  "mvmd:vertexCount": 18500,
  "mvmd:triangleCount": 28700,
  "mvmd:materialCount": 3,
  "mvmd:textureCount": 5,
  "mvmd:lodLevels": 3,
  "mvmd:animationCount": 8,
  "mvmd:rigged": true,
  "mvmd:uvChannels": 2
}
```

## Texture and Material Properties

Properties for describing textures and materials:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:textureType` | String | Type of texture (e.g., "diffuse", "normal", "roughness") |
| `mvmd:textureDimensions` | Array | Dimensions of the texture [width, height] |
| `mvmd:textureFormat` | String | Format of the texture (e.g., "png", "jpg", "ktx2") |
| `mvmd:materialType` | String | Type of material (e.g., "PBR", "unlit", "custom") |
| `mvmd:shaderType` | String | Type of shader used (e.g., "standard", "custom") |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Metal Material",
  "mvmd:materialType": "PBR",
  "mvmd:shaderType": "standard",
  "hasPart": [
    {
      "@type": "ImageObject",
      "name": "Base Color Map",
      "mvmd:textureType": "diffuse",
      "mvmd:textureDimensions": [2048, 2048],
      "mvmd:textureFormat": "png"
    },
    {
      "@type": "ImageObject",
      "name": "Normal Map",
      "mvmd:textureType": "normal",
      "mvmd:textureDimensions": [2048, 2048],
      "mvmd:textureFormat": "png"
    }
  ]
}
```

## Animation Properties

Properties for describing animations:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:animationName` | String | Name of the animation |
| `mvmd:animationDuration` | Number | Duration of animation in seconds |
| `mvmd:animationFPS` | Number | Frames per second |
| `mvmd:animationFrameCount` | Number | Total number of frames |
| `mvmd:animationLoop` | Boolean | Whether the animation can loop |
| `mvmd:animationType` | String | Type of animation (e.g., "skeletal", "morph", "procedural") |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Animated Character",
  "mvmd:rigged": true,
  "mvmd:animations": [
    {
      "mvmd:animationName": "Walk",
      "mvmd:animationDuration": 1.5,
      "mvmd:animationFPS": 30,
      "mvmd:animationFrameCount": 45,
      "mvmd:animationLoop": true,
      "mvmd:animationType": "skeletal"
    },
    {
      "mvmd:animationName": "Jump",
      "mvmd:animationDuration": 0.8,
      "mvmd:animationFPS": 30,
      "mvmd:animationFrameCount": 24,
      "mvmd:animationLoop": false,
      "mvmd:animationType": "skeletal"
    }
  ]
}
```

## Scene Properties

Properties for describing virtual scenes:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:sceneScale` | String | Scale of the scene (e.g., "1:1", "1:100") |
| `mvmd:sceneUnitScale` | String | Unit scale used (e.g., "meters", "centimeters") |
| `mvmd:sceneOrigin` | Object | Coordinates of the scene origin |
| `mvmd:upAxis` | String | Up axis used in the scene (e.g., "Y", "Z") |
| `mvmd:forwardAxis` | String | Forward axis used (e.g., "Z", "-Z") |
| `mvmd:boundingBox` | Object | 3D bounding box coordinates |
| `mvmd:sceneObjects` | Number | Number of objects in the scene |
| `mvmd:navMesh` | Boolean | Whether the scene includes a navigation mesh |
| `mvmd:lighting` | String | Lighting type (e.g., "baked", "realtime", "mixed") |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Forest Environment",
  "mvmd:category": "environment",
  "mvmd:sceneScale": "1:1",
  "mvmd:sceneUnitScale": "meters",
  "mvmd:upAxis": "Y",
  "mvmd:forwardAxis": "Z",
  "mvmd:boundingBox": {
    "min": [-50, 0, -50],
    "max": [50, 30, 50]
  },
  "mvmd:sceneObjects": 358,
  "mvmd:navMesh": true,
  "mvmd:lighting": "mixed"
}
```

## Wearable Properties

Properties specific to wearable assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:attachmentPoint` | String | Where the wearable attaches (e.g., "head", "right_hand") |
| `mvmd:bodyPart` | String | Body part the wearable is for (e.g., "head", "torso", "feet") |
| `mvmd:wearableType` | String | Type of wearable (e.g., "hat", "shirt", "shoes") |
| `mvmd:equipSlot` | String | Equipment slot it occupies (e.g., "helmet", "armor", "weapon") |
| `mvmd:compatibleGender` | Array | Compatible genders (e.g., ["male", "female", "neutral"]) |
| `mvmd:compatibleBodyType` | Array | Compatible body types (e.g., ["slim", "athletic", "heavy"]) |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Battle Helmet",
  "mvmd:category": "wearable",
  "mvmd:attachmentPoint": "head",
  "mvmd:bodyPart": "head",
  "mvmd:wearableType": "helmet",
  "mvmd:equipSlot": "helmet",
  "mvmd:compatibleGender": ["male", "female", "neutral"],
  "mvmd:compatibleBodyType": ["all"]
}
```

## Technical Requirements

Properties for technical requirements and compatibility:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:engineVersion` | String | Game/rendering engine version required |
| `mvmd:engineName` | String | Name of the compatible engine |
| `mvmd:minHardware` | Object | Minimum hardware requirements |
| `mvmd:recommendedHardware` | Object | Recommended hardware requirements |
| `mvmd:compatiblePlatforms` | Array | Compatible platforms (e.g., ["windows", "mac", "ios"]) |
| `mvmd:sdkVersion` | String | SDK version compatibility |
| `mvmd:softwareDependencies` | Array | Required software dependencies |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Detailed Environment",
  "mvmd:engineName": "Unity",
  "mvmd:engineVersion": "2022.1 or higher",
  "mvmd:minHardware": {
    "gpu": "GTX 1060 or equivalent",
    "memory": "8GB RAM",
    "storage": "500MB"
  },
  "mvmd:recommendedHardware": {
    "gpu": "RTX 2070 or equivalent",
    "memory": "16GB RAM",
    "storage": "500MB"
  },
  "mvmd:compatiblePlatforms": ["windows", "mac", "android", "ios"],
  "mvmd:sdkVersion": "MVMD SDK 1.2 or higher",
  "mvmd:softwareDependencies": ["Shader Graph 10.0+"]
}
```

## Interactive Properties

Properties for interactive assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:interactive` | Boolean | Whether the asset has interactive elements |
| `mvmd:interactionType` | Array | Types of interactions (e.g., ["click", "grab", "proximity"]) |
| `mvmd:triggers` | Array | Interaction triggers defined |
| `mvmd:interactionDistance` | Number | Distance at which interaction becomes available |
| `mvmd:interactionPrompt` | String | Prompt text for interaction |
| `mvmd:interactionPrerequisites` | Array | Prerequisites for interaction |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Door",
  "mvmd:category": "prop",
  "mvmd:interactive": true,
  "mvmd:interactionType": ["click", "proximity"],
  "mvmd:triggers": ["open", "close", "lock", "unlock"],
  "mvmd:interactionDistance": 2.5,
  "mvmd:interactionPrompt": "Press E to open door",
  "mvmd:interactionPrerequisites": ["hasKey"]
}
```

## Composability

Properties for composable assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:attachmentPoints` | Array | Points where other objects can attach |
| `mvmd:socketType` | String | Type of attachment socket |
| `mvmd:compatibleSockets` | Array | Compatible socket types |
| `mvmd:isAttachable` | Boolean | Whether this can be attached to other objects |
| `mvmd:hasAttachments` | Boolean | Whether this has attachment capabilities |
| `mvmd:composable` | Boolean | Whether designed for composable systems |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modular Weapon Handle",
  "mvmd:category": "prop",
  "mvmd:subcategory": "weapon",
  "mvmd:composable": true,
  "mvmd:isAttachable": true,
  "mvmd:hasAttachments": true,
  "mvmd:attachmentPoints": [
    {
      "name": "blade_socket",
      "position": [0, 0, 1.5],
      "rotation": [0, 0, 0],
      "mvmd:socketType": "weapon_blade"
    },
    {
      "name": "grip_socket",
      "position": [0, 0, -0.5],
      "rotation": [0, 0, 0],
      "mvmd:socketType": "weapon_grip"
    }
  ],
  "mvmd:compatibleSockets": ["character_hand_r", "character_hand_l", "weapon_rack"]
}
```

## Physics Properties

Properties for physical simulation:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:hasPhysics` | Boolean | Whether the asset has physics properties |
| `mvmd:physicsType` | String | Type of physics (e.g., "static", "dynamic", "kinematic") |
| `mvmd:mass` | Number | Mass in kg |
| `mvmd:centerOfMass` | Array | Center of mass coordinates [x, y, z] |
| `mvmd:colliderType` | String | Type of collider (e.g., "box", "sphere", "mesh") |
| `mvmd:physicalMaterial` | String | Physical material type (e.g., "metal", "wood", "fabric") |
| `mvmd:friction` | Number | Friction coefficient |
| `mvmd:restitution` | Number | Bounciness/restitution value |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Bouncy Ball",
  "mvmd:hasPhysics": true,
  "mvmd:physicsType": "dynamic",
  "mvmd:mass": 0.5,
  "mvmd:centerOfMass": [0, 0, 0],
  "mvmd:colliderType": "sphere",
  "mvmd:physicalMaterial": "rubber",
  "mvmd:friction": 0.8,
  "mvmd:restitution": 0.9
}
```

## Audio Properties

Properties for audio in metaverse assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:hasAudio` | Boolean | Whether the asset has audio |
| `mvmd:audioType` | String | Type of audio (e.g., "ambient", "interactive", "music") |
| `mvmd:audioTrigger` | String | What triggers the audio (e.g., "proximity", "interaction", "loop") |
| `mvmd:audioSpatial` | Boolean | Whether audio is spatial (3D) |
| `mvmd:audioRadius` | Number | Radius of audio source in meters |
| `mvmd:audioFalloff` | Number | Audio falloff rate |
| `mvmd:audioPriority` | Number | Priority level for audio mixing |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Fountain",
  "mvmd:hasAudio": true,
  "mvmd:audioType": "ambient",
  "mvmd:audioTrigger": "proximity",
  "mvmd:audioSpatial": true,
  "mvmd:audioRadius": 15,
  "mvmd:audioFalloff": 1.2,
  "mvmd:audioPriority": 3,
  "hasPart": {
    "@type": "AudioObject",
    "contentUrl": "https://example.com/sounds/fountain.mp3",
    "encodingFormat": "audio/mpeg"
  }
}
```

## NFT Properties

Properties for NFT assets:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:blockchain` | String | Blockchain the NFT is minted on |
| `mvmd:contractAddress` | String | Smart contract address |
| `mvmd:tokenId` | String | Token ID of the NFT |
| `mvmd:tokenStandard` | String | Token standard (e.g., "ERC-721", "ERC-1155") |
| `mvmd:mintDate` | String | Date the NFT was minted |
| `mvmd:totalSupply` | Number | Total supply for the token |
| `mvmd:tokenMetadataURI` | String | URI to the token metadata |
| `mvmd:royaltyInfo` | Object | Royalty information |
| `mvmd:salePrice` | Object | Sale price information |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Legendary Sword NFT",
  "mvmd:blockchain": "ethereum",
  "mvmd:contractAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "mvmd:tokenId": "42",
  "mvmd:tokenStandard": "ERC-721",
  "mvmd:mintDate": "2023-05-15T14:30:00Z",
  "mvmd:totalSupply": 1,
  "mvmd:tokenMetadataURI": "ipfs://QmXyZ123456789abcdef",
  "mvmd:royaltyInfo": {
    "percentage": 10,
    "paymentAddress": "0xabcdef1234567890abcdef1234567890abcdef12"
  },
  "mvmd:salePrice": {
    "amount": "0.5",
    "currency": "ETH"
  }
}
```

## Commerce Properties

Properties for marketplace and commerce:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:price` | Object | Price information |
| `mvmd:marketplaceURL` | String | URL to marketplace listing |
| `mvmd:purchasable` | Boolean | Whether the asset is available for purchase |
| `mvmd:inGamePurchase` | Boolean | Whether purchasable in-game |
| `mvmd:tradeable` | Boolean | Whether the asset can be traded |
| `mvmd:transferable` | Boolean | Whether the asset can be transferred |
| `mvmd:marketplaceCompatibility` | Array | Compatible marketplaces |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Rare Sword Skin",
  "mvmd:price": {
    "amount": 15.99,
    "currency": "USD"
  },
  "mvmd:marketplaceURL": "https://marketplace.example.com/items/rare-sword-skin",
  "mvmd:purchasable": true,
  "mvmd:inGamePurchase": true,
  "mvmd:tradeable": true,
  "mvmd:transferable": true,
  "mvmd:marketplaceCompatibility": [
    "Steam Marketplace",
    "Epic Game Store",
    "In-Game Shop"
  ]
}
```

## Platform-Specific Properties

Properties for platform integration:

| Term | Type | Description |
|------|------|-------------|
| `mvmd:platform` | String | Primary platform the asset is for |
| `mvmd:platformVersion` | String | Version of the platform |
| `mvmd:platformFeatures` | Array | Platform features utilized |
| `mvmd:platformRequirements` | Object | Specific platform requirements |
| `mvmd:platformId` | String | ID used on the platform |
| `mvmd:platformAssetType` | String | Asset type in platform terminology |

Example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Platform Exclusive Item",
  "mvmd:platform": "Decentraland",
  "mvmd:platformVersion": "SDK 7",
  "mvmd:platformFeatures": ["smart-wearable", "emotes"],
  "mvmd:platformRequirements": {
    "triangleLimit": 10000,
    "textureLimit": "1024x1024",
    "animationLimit": 8
  },
  "mvmd:platformId": "dcl://wearables/platform-exclusive-item",
  "mvmd:platformAssetType": "wearable"
}
```

## Usage Best Practices

When using MVMD-specific terms:

1. **Use the correct namespace**: Always include the `mvmd:` prefix for MVMD-specific terms.

2. **Combine with Schema.org terms**: Use MVMD terms to supplement Schema.org terms, not replace them.

3. **Use appropriate data types**: Follow the expected data type for each property.

4. **Group related properties**: Keep related MVMD properties together in your metadata.

5. **Document custom terms**: If you create custom extensions, document them clearly.

6. **Validate your metadata**: Test that your metadata with MVMD terms is valid JSON-LD.

7. **Stay current**: Check for updates to MVMD terms as the standard evolves.

## Related Documents

- [Schema.org Reference](schema-org.md) - How MVMD uses Schema.org
- [JSON-LD Reference](json-ld.md) - How MVMD uses JSON-LD format
- [MVMD Context Reference](context.md) - The MVMD context structure
- [Schema Reference](../schema-reference.md) - Complete reference of all terms 