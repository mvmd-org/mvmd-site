---
sidebar_position: 1
---

# Integration Profiles Overview

## Purpose of Integration Profiles

Integration profiles provide standardized metadata schemas for specific asset types and use cases. Each profile defines:

- Required properties
- Optional properties
- Validation rules
- Implementation patterns

Profiles ensure consistent metadata across platforms while addressing domain-specific requirements.

## Available Profiles

MVMD includes the following integration profiles:

| Profile | Purpose | Status |
|---------|---------|--------|
| [Basic](./basic.md) | Core metadata for all assets | Stable |
| [Avatar](./avatar.md) | Virtual character metadata | Stable |
| [Attachable](./attachable.md) | Items that can be attached to avatars (wearables, equipment) | Stable |
| [Scene](./scene.md) | Virtual environment metadata | Stable |
| [Vehicle](./vehicle.md) | Vehicle asset metadata | Proposed |
| [Composable 3D NFT](./composable-3d-nft.md) | Composable NFT metadata | Proposed |
| [Digital Twin](./digital-twin.md) | Physical-digital representation | Proposed |
| [Identity](./identity.md) | Identity information | Proposed |
| [Interactable](./interactable.md) | Interactive object metadata | Proposed |
| [Royalty](./royalty.md) | Revenue and rights metadata | Proposed |
| [Future Profiles](./future.md) | Planned developments | In planning |

## Profile Structure

Each integration profile follows a consistent structure:

1. **Purpose and Use Cases**: Description and intended applications
2. **Profile Overview**: General description of what the profile covers
3. **Required Properties**: Essential metadata properties
4. **Optional Properties**: Additional metadata enhancements
5. **Standards Integration**: How the profile works with technical standards
6. **Examples**: Basic, standard, and complete examples showing usage
7. **Validation**: How to validate against profile requirements
8. **Implementation Considerations**: Best practices and tips
9. **Common Issues**: Troubleshooting guidance
10. **Related Profiles**: Links to related profiles

## Schema Validation

Each profile has a corresponding JSON Schema validation file that can be used to validate your metadata:

- [Schema Validation Documentation](../validation/schema-validation.md)
- [Available Schema Files](../validation/schema-validation.md#available-schema-files)

## Implementation Approach

When implementing integration profiles:

1. Start with the [Basic Profile](./basic.md)
2. Add domain-specific profiles as needed
3. Validate against profile schema files
4. Focus on required properties first
5. Add optional properties based on your specific needs

## Use Case-Based Selection

Select profiles based on your specific use cases:

- **Avatar Customization**: [Avatar](./avatar.md) + [Attachable](./attachable.md)
- **Virtual Stores**: [Basic](./basic.md) + [Attachable](./attachable.md) + [Royalty](./royalty.md)
- **Interactive Environments**: [Scene](./scene.md) + [Interactable](./interactable.md)
- **Virtual Items with Utility**: [Attachable](./attachable.md) + [Interactable](./interactable.md)
- **Digital Ownership**: [Basic](./basic.md) + [Composable 3D NFT](./composable-3d-nft.md)

## Cross-References to Implementation Guides

For practical implementation guidance, see these related resources:

- [Cross-Platform Assets Implementation](../implementation/cross-platform-assets.md)
- [Interactive Assets Implementation](../implementation/interactive-assets.md)
- [Discovery Optimization](../implementation/discovery-optimization.md)

## Next Steps

- Review the [Basic Profile](./basic.md) for fundamental implementation
- Identify the profiles most relevant to your assets
- Implement the minimum required properties
- Extend with optional properties as needed
- Validate your implementation using the [Schema Validation Tools](../validation/schema-validation.md)

## Related Standards

Profiles integrate with these technical standards:

- [Schema.org](../standards/schema-org.md): Core vocabulary for all profiles
- [glTF](../standards/gltf.md): 3D model format for visual assets
- [USD](../standards/usd.md): Universal Scene Description for complex assets
- [OpenXR](../standards/openxr.md): XR-specific implementation patterns
- [C2PA](../standards/c2pa.md): Authentication and verification

## Contributing

The MVMD community welcomes contributions to existing profiles and proposals for new profiles:

1. Fork our GitHub repository
2. Create a new branch for your profile changes
3. Follow the standard profile structure
4. Include examples and validation rules
5. Submit a pull request

## Related Resources

- [Types of Assets](../concepts/types-of-assets.md): Core asset classifications
- [Namespaces](../standards/overview.md): Standard-specific metadata properties
- [Implementation Best Practices](../implementation/best-practices.md): General metadata guidance

## Related Namespaces

- [Schema.org](../standards/schema-org.md): Core vocabulary for integration profiles
- [3D Standards](../standards/overview.md): Implementation patterns for 3D assets
- [Geospatial Standards](../standards/overview.md): Location data patterns
- [Trust & Provenance](../standards/overview.md): Authentication and verification
- [OpenXR Standards](../standards/openxr.md): XR-specific implementation patterns
