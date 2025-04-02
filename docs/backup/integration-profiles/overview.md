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
| [Wearable](./wearable.md) | Wearable item metadata | Stable |
| [Scene](./scene.md) | Virtual environment metadata | Stable |
| [Vehicle](./vehicle.md) | Vehicle asset metadata | Proposed |
| [Composable 3D NFT](./composable-3d-nft.md) | Composable NFT metadata | Proposed |
| [Digital Twin](./digital-twin.md) | Physical-digital representation | Proposed |
| [Identity](./identity.md) | Identity information | Proposed |
| [Equipable](./equipable.md) | Equipment system metadata | Proposed |
| [Interactable](./interactable.md) | Interactive object metadata | Proposed |
| [Royalty](./royalty.md) | Revenue and rights metadata | Proposed |
| [Future Profiles](./future.md) | Planned developments | In planning |

## Profile Structure

Each integration profile follows a consistent structure:

1. **Purpose and Use Cases**: Description and intended applications
2. **Required Properties**: Essential metadata properties
3. **Optional Properties**: Additional metadata enhancements
4. **Validation Rules**: Constraints and requirements
5. **Implementation Examples**: Complete examples showing usage

## Implementation Approach

When implementing integration profiles:

1. Start with the [Basic Profile](./basic.md)
2. Add domain-specific profiles as needed
3. Validate against profile specifications
4. Focus on required properties first
5. Add optional properties based on your specific needs

## Next Steps

- Review the [Basic Profile](./basic.md) for fundamental implementation
- Identify the profiles most relevant to your assets
- Implement the minimum required properties
- Extend with optional properties as needed
- Validate your implementation using the [Validation Tools](../reference/validator.md)

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
