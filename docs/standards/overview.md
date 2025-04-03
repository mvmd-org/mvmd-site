---
sidebar_position: 1
---

# Overview

This section covers the technical standards that integrate with MVMD through namespaces. Each standard has dedicated documentation on how to properly incorporate it into your metadata.

## Understanding Technical Standards in MVMD

MVMD uses specific technical standards as namespaces, allowing you to:

- Include specialized properties from established standards
- Maintain compatibility with existing tools and ecosystems
- Provide detailed technical information in a structured format
- Ensure semantic clarity through proper contextualization

## Standards as Namespaces

In MVMD, technical standards are incorporated through namespaces in the `@context` object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "gltf:materials": [
    {
      "name": "Skin",
      "pbrMetallicRoughness": {
        "baseColorFactor": [1.0, 0.8, 0.7, 1.0]
      }
    }
  ]
}
```

## Supported Technical Standards

MVMD provides detailed integration guidance for these technical standards:

### 3D Standards

- [glTF](./gltf.md): The "JPEG of 3D" for efficient transmission of 3D assets
- [USD](./usd.md): Universal Scene Description for complex scenes and compositions
- [VRM](./vrm.md): Humanoid avatar format with specialized metadata
- [FBX](./fbx.md): Industry standard for 3D content creation workflows
- [USDZ](./usdz.md): Compressed USD format for AR experiences

### Interaction & Experience Standards

- [OpenXR](./openxr.md): Cross-platform standard for virtual and augmented reality

### Geospatial Standards

- [CityJSON](./cityjson.md): Lightweight city model format
- [3D Tiles](./3d-tiles.md): Streaming and rendering massive 3D geospatial content

### Trust & Provenance

- [C2PA](./c2pa.md): Content authenticity and provenance verification

### Core Vocabulary

- [Schema.org](./schema-org.md): Foundation for all MVMD metadata

## Implementation Guidance

Each standard document includes:

1. **Namespace Declaration**: How to properly reference the standard
2. **Key Properties**: Most important properties from the standard to include
3. **Integration Examples**: Complete JSON-LD examples showing proper usage
4. **Validation**: How to validate against the standard's requirements
5. **Best Practices**: Recommendations for effective integration

## Choosing Standards

When deciding which standards to integrate:

- **Start with Schema.org**: Always use Schema.org as your foundation
- **Add format-specific standards**: Include standards relevant to your file formats
- **Consider specialized domains**: Add domain-specific standards when needed
- **Balance comprehensiveness with simplicity**: Only include what's necessary

## Cross-References to Implementation Guides

For practical implementation guidance, see these related resources:

- [Cross-Platform Assets Implementation](../implementation/cross-platform-assets.md)
- [Interactive Assets Implementation](../implementation/interactive-assets.md)
- [Discovery Optimization](../implementation/discovery-optimization.md)

## Related Resources

- [Schema.org Standard](./schema-org.md)
- [Schema Validation](../tools/validator.md)
- [Integration Profiles](../integration-profiles/overview.md)

## Getting Started

1. Review the standard-specific documentation for your implementation
2. Integrate relevant properties using the appropriate namespace
3. Validate your metadata using our [validation tools](../tools/validator.md)

## Next Steps

After reviewing the standards documentation:

1. Examine the [integration profiles](../integration-profiles/overview.md) that apply to your assets
2. Follow the [implementation guides](../implementation/overview.md) for your use case
3. Validate your metadata using our [validation tools](../tools/validator.md) 