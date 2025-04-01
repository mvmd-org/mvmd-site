---
sidebar_position: 7
---

# Standards Compatibility

## Working with Multiple Standards

A key benefit of MVMD is its ability to combine multiple standards within a single metadata implementation. This compatibility enables your assets to leverage the strengths of different standards while maintaining interoperability.

## Standards Integration Approach

MVMD takes a "standards-first" approach that:

- **Preserves original standards**: Each standard maintains its identity and capabilities
- **Uses proper namespacing**: Attributes are clearly associated with their source standard
- **Provides clear boundaries**: Standards are integrated but remain distinct
- **Maintains validation**: Original standard validation still applies to their components

## Why Standards Integration Matters

In the metaverse ecosystem, no single standard can address all needs. Different domains have developed specialized standards:

- **3D content** standards optimize for rendering performance
- **Semantic web** standards focus on meaning and discoverability
- **Geospatial** standards handle location and spatial relationships
- **E-commerce** standards address ownership and transactions
- **Authentication** standards verify content validity and provenance

MVMD brings these together to create comprehensive, interoperable asset descriptions that work across platforms and use cases.

## Compatible Standards Registry

MVMD maintains a registry of compatible standards that work well together. Here are some of the key standards and their roles:

### Schema.org
Provides the base vocabulary and structure for all metadata. This is the foundation of MVMD.

### File Format Standards
- **glTF**: 3D model format optimized for web and runtime environments
- **USD**: Universal Scene Description for complex scene composition
- **VRM**: Specialized format for humanoid avatars
- **FBX**: Industry standard for animation and rigging
- **COLLADA**: XML-based format for asset exchange
- **X3D**: ISO standard for web-based 3D graphics

### Geographic Standards
- **CityJSON**: JSON encoding of the CityGML data model for 3D city models
- **3D Tiles**: Open specification for streaming massive 3D geospatial datasets
- **GeoJSON**: Format for encoding geographic data structures

### Trust and Authentication
- **C2PA**: Content authentication and provenance tracking
- **DID**: Decentralized Identifiers for verifiable digital identities
- **Verifiable Credentials**: W3C standard for expressing verifiable claims

### Blockchain and Digital Assets
- **ERC-721**: Non-Fungible Token standard on Ethereum
- **ERC-1155**: Multi-Token standard on Ethereum
- **Metaplex**: NFT Standards for Solana

## Integration Techniques

### Namespacing in JSON-LD

Proper namespacing is essential for combining standards:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "vrm": "https://vrm.dev/vrm/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Avatar Model",
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "ExampleStudio 1.0"
  },
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 }
    }
  }
}
```

### Linking to External Standards Files

For complex standards integration, link to external files:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Complex Scene",
  "contentUrl": "https://example.com/scene.usd",
  "encodingFormat": "model/vnd.usd",
  
  "associatedMedia": [
    {
      "@type": "MediaObject",
      "contentUrl": "https://example.com/geospatial.3dtiles",
      "encodingFormat": "application/json+3dtiles"
    }
  ]
}
```

### Extended Types with additionalType

Use `additionalType` to indicate compliance with specific standards:

```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "additionalType": [
    "https://www.khronos.org/gltf/types/Asset",
    "https://vrm.dev/types/Humanoid"
  ],
  "name": "VRM Avatar",
  "contentUrl": "https://example.com/avatar.vrm"
}
```

### Shared Identifiers Across Standards

Maintain consistent identifiers across different standards:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "@id": "https://example.com/assets/model-123",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "UUID",
    "value": "550e8400-e29b-41d4-a716-446655440000"
  },
  "sameAs": [
    "ipfs://QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/asset.json",
    "ar://wG-44lFnruw5ODqRimx29Fs2msXvV9LEhEWUbAnmP5I"
  ]
}
```

## Standards Integration Examples

### 3D Avatar with VRM Standard

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/vrm/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Customizable Character",
  "contentUrl": "https://example.com/avatar.vrm",
  "encodingFormat": "model/vrm",
  
  "vrm:meta": {
    "title": "Example Avatar",
    "version": "1.0",
    "author": "Avatar Creator",
    "allowedUserName": "Everyone"
  },
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 },
      "head": { "node": 8 }
    }
  },
  
  "mvmd:compatibility": {
    "platforms": ["platform-a", "platform-b"],
    "minVersion": "1.0"
  }
}
```

### NFT Asset with Multiple Standards

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "erc721": "https://eips.ethereum.org/EIPS/eip-721#",
    "c2pa": "https://c2pa.org/specifications/",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Collectible Sculpture",
  "description": "Limited edition digital sculpture",
  "contentUrl": "https://example.com/sculpture.glb",
  
  "erc721:tokenId": "42",
  "erc721:contract": "0x765df6da33c1ec1f83be42db171d7ee334a46df5",
  "erc721:blockchain": "ethereum",
  
  "c2pa:contentCredentials": {
    "signatureInfo": {
      "creator": "Artist Studio",
      "date": "2024-04-01T12:00:00Z"
    },
    "assertionsInfo": {
      "assertionCount": 3,
      "contentAuthenticityURL": "https://example.com/verify/asset-42"
    }
  },
  
  "mvmd:ownership": {
    "minted": "2024-03-15T10:30:00Z",
    "editions": 10,
    "editionNumber": 3
  }
}
```

### Geospatial Asset with Multiple Standards

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "geo": "http://www.opengis.net/ont/geosparql#",
    "mvmd": "https://mvmd.org/ns/"
  },
  "@type": ["3DModel", "Place"],
  "name": "City Building",
  "contentUrl": "https://example.com/building.glb",
  
  "geo:asWKT": "POINT(-73.9857 40.7484)",
  "elevation": 10.5,
  "geo:sfWithin": "https://example.com/districts/midtown",
  
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 City Model Inc."
  },
  
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0, 0]
  },
  
  "mvmd:georeference": {
    "coordinateSystem": "WGS84",
    "northOffset": 0,
    "locationAccuracy": 5.0
  }
}
```

## Best Practices for Standards Compatibility

1. **Research Standard Requirements**: Understand each standard's requirements before integration
2. **Use Consistent Namespacing**: Maintain clear separation between standards
3. **Prioritize Essential Standards**: Focus on standards that directly impact your use case
4. **Document Implementation Decisions**: Record why specific standards were chosen
5. **Validate Against Each Standard**: Ensure compliance with each individual standard
6. **Stay Updated**: Monitor changes to standards that may affect compatibility
7. **Avoid Conflicting Properties**: When standards overlap, choose the most appropriate one
8. **Provide Fallbacks**: When using emerging standards, include basic Schema.org equivalents

## Integration Profiles

MVMD provides pre-configured Integration Profiles for common combinations of standards:

- **Basic Profile**: Essential Schema.org metadata
- **3D Asset Profile**: Schema.org + glTF/USD for 3D models
- **Avatar Profile**: Schema.org + VRM for avatars
- **Geospatial Profile**: Schema.org + 3D Tiles/CityJSON for geospatial assets
- **NFT Profile**: Schema.org + ERC-721/ERC-1155 for tokenized assets

These profiles provide tested templates for combining standards effectively.

## Resolving Standards Conflicts

When standards overlap or conflict, follow these guidelines:

1. **Namespace Properly**: Keep each standard's properties under its namespace
2. **Prioritize By Domain**: Use the standard most appropriate for the domain (e.g., VRM for avatars)
3. **Use Schema.org as Default**: When in doubt, include the Schema.org property as a fallback
4. **Document Decisions**: Note which standard was chosen and why
5. **Test Cross-Platform**: Verify that your choice works across target platforms

## The Future of Standards Compatibility

The standards landscape continues to evolve, with new standards emerging to address specialized needs. MVMD's architecture is designed to accommodate new standards through:

- **Extensible namespacing**: Easy addition of new standard vocabularies
- **Modular composition**: Flexible integration of new components
- **Community-driven registry**: Collaborative maintenance of compatibility guidelines

As you implement MVMD, you're contributing to an ecosystem of interoperable standards that powers the metaverse. By combining standards thoughtfully, you ensure your assets remain valuable and usable across the evolving metaverse landscape.

## Next Steps

- Explore [How-To Guides](../guides/basic/create-metadata.md) for practical implementation
- Review [Integration Profiles](../reference/integration-profiles.md) for standard templates
- Check the [Schema Reference](../reference/schema-reference.md) for detailed property information 