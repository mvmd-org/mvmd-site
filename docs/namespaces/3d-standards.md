---
sidebar_position: 3
---

# 3D Standards Namespaces

This page provides an overview of 3D standards and their integration with MVMD through namespaces. For detailed documentation on each standard, please refer to the dedicated namespace pages.

## Supported 3D Standards

MVMD supports integration with the following 3D standards:

- [glTF](/docs/namespaces/gltf) - GL Transmission Format for efficient 3D asset delivery
- [USD](/docs/namespaces/usd) - Universal Scene Description for complex scenes and environments
- VRM - 3D humanoid avatars with standardized rigging
- USDZ - AR-optimized USD format for Apple platforms
- FBX - Widely-used exchange format for 3D content
- OBJ/MTL - Simple mesh and material format
- 3D Tiles - For massive geospatial and BIM datasets

Each standard has been extracted into its own dedicated namespace documentation with complete JSON Schema validation and examples.

## Namespace Structure

All 3D standard namespaces follow a consistent structure:

1. **Overview** - Introduction to the standard and its purpose
2. **Core Concepts** - Key features and components relevant to metadata
3. **Implementation** - How to use the namespace in MVMD
   - Namespace declaration
   - External reference pattern
   - Embedding pattern
4. **Use Cases** - Common applications and scenarios
5. **Implementation Examples** - Complete JSON examples
6. **Schema Validation** - JSON Schema for validating implementation
7. **JSON-LD Context** - Semantic mapping for the namespace
8. **Implementation Considerations** - Best practices and guidelines

## Integration Approach

When integrating 3D standards with MVMD, consider the following approaches:

### Reference vs. Embedding

You can choose between referencing 3D assets externally or embedding metadata directly:

- **Reference Pattern**: Links to external 3D assets with minimal metadata
- **Embedding Pattern**: Includes detailed 3D standard properties within the MVMD metadata

### Common Best Practices

Regardless of the 3D standard used, follow these best practices:

1. **Format Selection**:
   - Choose the appropriate format for your use case
   - Consider platform compatibility
   - Evaluate size and performance requirements
   - Assess feature needs (e.g., animations, materials)

2. **Asset Optimization**:
   - Compress textures appropriately
   - Optimize geometry complexity
   - Use level of detail (LOD) where appropriate
   - Balance quality and performance

3. **Metadata Integration**:
   - Keep metadata concise and relevant
   - Include licensing information
   - Document format-specific features
   - Maintain version information

4. **Quality Assurance**:
   - Test on target platforms
   - Validate format compliance
   - Check material rendering
   - Verify animation playback

### Troubleshooting Common Issues

1. **Format Compatibility**:
   - Verify format version support
   - Check extension compatibility
   - Test cross-platform behavior
   - Validate material conversions

2. **Performance Issues**:
   - Optimize asset size
   - Check texture resolution
   - Monitor memory usage
   - Profile loading times

3. **Integration Problems**:
   - Verify namespace declarations
   - Check property references
   - Validate JSON-LD syntax
   - Test format-specific features

## Related Resources

- [3D Asset Profiles](/docs/profiles/3d-asset)
- [Asset Implementation Guide](/docs/implementation/asset-implementation)
- [Standards Implementation](/docs/implementation/standards-implementation) 