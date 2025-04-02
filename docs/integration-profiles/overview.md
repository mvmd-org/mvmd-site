---
sidebar_position: 1
---

# Integration Profiles Overview

Integration Profiles provide standardized metadata templates for common metaverse asset types and use cases. These profiles combine Schema.org, MVMD, and domain-specific standards into ready-to-use patterns that ensure interoperability across platforms.

## Purpose of Integration Profiles

Integration Profiles serve several key purposes:

- **Standardization**: Define consistent metadata structures for specific asset types and use cases
- **Interoperability**: Ensure assets work reliably across different platforms and environments
- **Completeness**: Provide all necessary metadata properties for functional implementation
- **Validation**: Enable automated verification of metadata quality and compliance
- **Simplification**: Reduce implementation complexity through tested patterns

## Profile Structure

Each Integration Profile follows a consistent structure:

1. **Purpose and Use Cases**: The specific scenarios and applications the profile addresses
2. **Required Properties**: Essential properties that must be included for basic functionality
3. **Optional Properties**: Additional properties that enhance functionality in specific contexts
4. **Validation Rules**: Requirements for property values, relationships, and structure
5. **Complete Example**: A comprehensive reference implementation of the profile
6. **Implementation Considerations**: Guidance for effective implementation across platforms

## Available Profiles

The following Integration Profiles are currently available:

| Profile | Description | Key Applications |
|---------|-------------|------------------|
| [Basic](./basic.md) | Foundation profile with essential metadata | All metaverse assets |
| [Avatar](./avatar.md) | Virtual character metadata with customization | User representations |
| [Wearable](./wearable.md) | Digital fashion and equipment | Avatar accessories |
| [Composable 3D NFT](./composable-3d-nft.md) | Component-based 3D assets | Modular collectibles |
| [Vehicle](./vehicle.md) | Transportation-related asset metadata | Drivable vehicles |
| [Scene](./scene.md) | Virtual environment metadata | Spaces and environments |
| [Digital Twin](./digital-twin.md) | Physical-digital representation | Industrial metaverse |
| [Identity](./identity.md) | Cross-platform user identity | User accounts |
| [Equipable](./equipable.md) | Items that can be equipped or used | Interactive items |
| [Interactable](./interactable.md) | Interactive object behaviors | Interactive objects |
| [Royalty](./royalty.md) | Revenue distribution metadata | Creator economy |

Additional profiles are under development for other important use cases. See [Future Profiles](./future.md) for roadmap details.

## Implementation Approach

When implementing Integration Profiles:

1. **Start with the Basic Profile** as the foundation for all assets
2. **Add the appropriate specialized profile** based on your asset type or use case
3. **Include all required properties** to ensure core functionality
4. **Add optional properties** as needed for your specific application
5. **Validate your implementation** against the profile's validation rules
6. **Test across platforms** to verify compatibility and functionality

## Contributing

The MVMD community welcomes contributions to existing profiles and proposals for new profiles:

1. Fork our GitHub repository
2. Create a new branch for your profile changes
3. Follow the standard profile structure
4. Include examples and validation rules
5. Submit a pull request

## Related Resources

- [Types of Assets](../concepts/types-of-assets.md): Core asset classifications
- [Namespaces](../namespaces/overview.md): Standard-specific metadata properties
- [Implementation Best Practices](../implementation/best-practices.md): General metadata guidance
