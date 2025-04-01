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

### Trust and Authentication
- **C2PA**: Content authentication and provenance tracking

## Integration Patterns

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

For complex standards, link to external files:

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

## Best Practices for Standards Compatibility

1. **Research Standard Requirements**: Understand each standard's requirements before integration
2. **Use Consistent Namespacing**: Maintain clear separation between standards
3. **Prioritize Essential Standards**: Focus on standards that directly impact your use case
4. **Document Implementation Decisions**: Record why specific standards were chosen
5. **Validate Against Each Standard**: Ensure compliance with each individual standard
6. **Stay Updated**: Monitor changes to standards that may affect compatibility

## Integration Profiles

MVMD provides pre-configured Integration Profiles for common combinations of standards:

- **Basic Profile**: Essential Schema.org metadata
- **3D Asset Profile**: Schema.org + glTF/USD for 3D models
- **Avatar Profile**: Schema.org + VRM for avatars
- **Geospatial Profile**: Schema.org + 3D Tiles/CityJSON for geospatial assets

These profiles provide tested templates for combining standards effectively.

## The Future of Standards Compatibility

The standards landscape continues to evolve, with new standards emerging to address specialized needs. MVMD's architecture is designed to accommodate new standards through:

- **Extensible namespacing**: Easy addition of new standard vocabularies
- **Modular composition**: Flexible integration of new components
- **Community-driven registry**: Collaborative maintenance of compatibility guidelines

As you implement MVMD, you're contributing to an ecosystem of interoperable standards that powers the metaverse. 