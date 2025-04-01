---
sidebar_position: 3
---

# Integration Profiles

Integration Profiles provide standardized templates for implementing metadata for common metaverse asset types. These profiles combine multiple standards and best practices to ensure interoperability and consistency across platforms.

## What Are Integration Profiles?

Integration Profiles are pre-configured metadata templates that:

1. **Combine Multiple Standards**: Each profile integrates Schema.org with specialized standards for specific asset types
2. **Define Required Properties**: Specify which properties are required for each asset type
3. **Standardize Relationships**: Establish consistent patterns for component relationships
4. **Ensure Compatibility**: Guarantee that assets following these profiles work across platforms
5. **Simplify Implementation**: Provide clear templates to follow, reducing development time

## Basic Profile

The Basic Profile is the foundation for all MVMD assets, providing essential metadata that should be included for any asset type.

### Required Properties

- `@context` with Schema.org
- `@type` appropriate for the asset
- `name`
- `description`
- `creator`
- `dateCreated`
- `license`
- `contentUrl` (or equivalent resource reference)

### Example

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Basic Asset",
  "description": "A simple example of the Basic Profile",
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/model.glb",
  "encodingFormat": "model/gltf-binary"
}
```

## 3D Model Profile

The 3D Model Profile extends the Basic Profile with properties specific to 3D assets, integrating glTF and other 3D standards.

### Required Properties

All Basic Profile properties, plus:
- `encodingFormat` (typically "model/gltf-binary" or similar)
- `thumbnail`
- At least one technical property (polyCount, textureResolution, etc.)

### Recommended Properties

- `associatedMedia` for textures and related files
- `hasPart` for component models (if applicable)
- `additionalProperty` for technical specifications

### Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Model",
  "description": "A detailed 3D model following the 3D Model Profile",
  "creator": {
    "@type": "Person",
    "name": "3D Artist"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/detailed-model.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/model.jpg",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 15000
    },
    {
      "@type": "PropertyValue",
      "propertyID": "textureResolution",
      "name": "Texture Resolution",
      "value": "2048x2048"
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Diffuse Map",
      "contentUrl": "https://example.com/textures/diffuse.jpg"
    },
    {
      "@type": "ImageObject",
      "name": "Normal Map",
      "contentUrl": "https://example.com/textures/normal.jpg"
    }
  ],
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "3D Modeling Software 4.2"
  }
}
```

## Avatar Profile

The Avatar Profile is specialized for humanoid character models, integrating Schema.org with VRM and other avatar standards.

### Required Properties

All Basic Profile properties, plus:
- `encodingFormat` (typically "model/vrm" or similar)
- `thumbnail`
- Avatar-specific properties (bodyType, etc.)

### Recommended Properties

- `associatedMedia` for textures and sound files
- `hasPart` for component models
- `additionalProperty` for technical specifications and avatar capabilities

### Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/vrm/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Customizable Avatar",
  "description": "A fully rigged humanoid avatar with customizable features",
  "creator": {
    "@type": "Person",
    "name": "Avatar Creator"
  },
  "dateCreated": "2024-02-20",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "contentUrl": "https://example.com/avatars/character.vrm",
  "encodingFormat": "model/vrm",
  "thumbnail": "https://example.com/thumbnails/avatar.jpg",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "bodyType",
      "name": "Body Type",
      "value": "humanoid"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationCount",
      "name": "Animation Count",
      "value": 24
    }
  ],
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 },
      "chest": { "node": 3 },
      "head": { "node": 8 }
    }
  },
  
  "vrm:meta": {
    "title": "Character Name",
    "version": "1.0",
    "author": "Avatar Creator",
    "allowedUserName": "Everyone"
  },
  
  "mvmd:avatarCapabilities": {
    "lipSync": true,
    "eyeBlink": true,
    "expressions": ["happy", "sad", "angry", "surprised"],
    "handPoses": true
  }
}
```

## Wearable Profile

The Wearable Profile is designed for clothing, accessories, and equipment that can be worn by avatars.

### Required Properties

All Basic Profile properties, plus:
- `encodingFormat`
- `thumbnail`
- Wearable-specific properties (bodyPart, fitType, etc.)

### Recommended Properties

- `associatedMedia` for textures and materials
- `additionalProperty` for technical specifications
- Compatibility information

### Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Fantasy Helmet",
  "description": "A detailed fantasy helmet wearable for avatars",
  "creator": {
    "@type": "Organization",
    "name": "Wearables Studio"
  },
  "dateCreated": "2024-01-10",
  "license": "https://example.com/licenses/commercial",
  "contentUrl": "https://example.com/wearables/helmet.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/helmet.jpg",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "bodyPart",
      "name": "Body Part",
      "value": "head"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "fitType",
      "name": "Fit Type",
      "value": "humanoid-standard"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 8500
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Metal Texture",
      "contentUrl": "https://example.com/textures/metal.jpg"
    }
  ],
  
  "mvmd:compatibility": {
    "avatarStandards": ["vrm-0.x", "vrm-1.0", "ready-player-me"],
    "platforms": ["platform-a", "platform-b", "platform-c"]
  }
}
```

## Scene Profile

The Scene Profile is designed for virtual environments, rooms, and locations that users can visit and interact with.

### Required Properties

All Basic Profile properties, plus:
- `encodingFormat` (typically USD, glTF, or similar)
- `thumbnail`
- Scene-specific properties (capacity, dimensions, etc.)

### Recommended Properties

- `hasPart` for component models
- `associatedMedia` for textures and related assets
- Technical properties for rendering and navigation

### Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": ["3DModel", "Place"],
  "name": "Fantasy Tavern",
  "description": "A cozy medieval tavern environment with interactive elements",
  "creator": {
    "@type": "Organization",
    "name": "Environment Studio"
  },
  "dateCreated": "2024-02-05",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/scenes/tavern.usd",
  "encodingFormat": "model/vnd.usd",
  "thumbnail": "https://example.com/thumbnails/tavern.jpg",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",
      "name": "User Capacity",
      "value": 20
    },
    {
      "@type": "PropertyValue",
      "propertyID": "dimensions",
      "name": "Dimensions",
      "value": "15m x 12m x 5m"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "lighting",
      "name": "Lighting Type",
      "value": "baked"
    }
  ],
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Bar Counter",
      "contentUrl": "https://example.com/components/bar.glb"
    },
    {
      "@type": "3DModel",
      "name": "Seating Area",
      "contentUrl": "https://example.com/components/seating.glb"
    },
    {
      "@type": "3DModel",
      "name": "Fireplace",
      "contentUrl": "https://example.com/components/fireplace.glb"
    }
  ],
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  
  "mvmd:interactivity": {
    "interactiveElements": ["door", "chairs", "fireplace"],
    "soundZones": ["music", "ambient"],
    "navigation": "free"
  }
}
```

## NFT Profile

The NFT Profile extends metadata for tokenized assets, integrating blockchain standards with Schema.org.

### Required Properties

All Basic Profile properties, plus:
- `encodingFormat`
- `thumbnail`
- Token-specific properties (tokenId, contract, blockchain, etc.)

### Recommended Properties

- Provenance information
- Ownership history
- Technical specifications

### Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "erc721": "https://eips.ethereum.org/EIPS/eip-721#",
    "c2pa": "https://c2pa.org/specifications/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Cosmic Artifact #42",
  "description": "A rare digital artifact from the Cosmic Collection",
  "creator": {
    "@type": "Person",
    "name": "Digital Artist",
    "url": "https://example.com/artist"
  },
  "dateCreated": "2024-01-15",
  "license": "https://example.com/licenses/nft-ownership",
  "contentUrl": "https://example.com/nfts/artifact.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/artifact.jpg",
  
  "erc721:tokenId": "42",
  "erc721:contract": "0x765df6da33c1ec1f83be42db171d7ee334a46df5",
  "erc721:blockchain": "ethereum",
  
  "c2pa:contentCredentials": {
    "signatureInfo": {
      "creator": "Digital Artist",
      "date": "2024-01-15T14:30:00Z"
    }
  },
  
  "mvmd:ownership": {
    "minted": "2024-01-15T14:30:00Z",
    "editions": 1,
    "editionNumber": 1
  },
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "rarity",
      "name": "Rarity",
      "value": "Legendary"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "collection",
      "name": "Collection",
      "value": "Cosmic Artifacts"
    }
  ],
  
  "potentialAction": {
    "@type": "ViewAction",
    "name": "View in Gallery",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/gallery/artifact/42"
    }
  }
}
```

## Custom Profile Development

Organizations can develop custom Integration Profiles for specific use cases by:

1. Starting with a relevant base profile
2. Adding domain-specific properties and relationships
3. Integrating additional standards as needed
4. Documenting required and recommended properties
5. Creating validation rules for the profile
6. Publishing the profile specification

## Integration Profile Selection Guide

| Asset Type | Recommended Profile | Key Considerations |
|------------|---------------------|---------------------|
| Simple 3D Objects | Basic or 3D Model | Optimize for file size and compatibility |
| Characters | Avatar | Include rigging and animation capabilities |
| Clothing/Accessories | Wearable | Ensure proper attachment points and compatibility |
| Environments | Scene | Focus on navigation and interaction points |
| Digital Collectibles | NFT | Include ownership and authenticity information |

## Next Steps

- Explore [How-To Guides](../guides/basic/create-metadata.md) for implementing these profiles
- Review [Examples](../examples/) for complete implementations
- Use the [MVMD Validator](../guides/basic/validate-metadata.md) to verify profile compliance 