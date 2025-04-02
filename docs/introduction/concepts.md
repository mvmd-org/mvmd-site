---
sidebar_position: 2
---

# Core Concepts

This guide introduces the fundamental concepts of metadata in the Metaverse context and explains how different standards work together to create interoperable virtual experiences.

## Metadata Fundamentals

### What is Metadata?
Metadata is structured information that describes, explains, or locates virtual assets and experiences. In the Metaverse context, metadata helps systems understand:
- What an asset is
- How it can be used
- Where it came from
- How it relates to other assets
- What it represents in virtual space

### JSON-LD Context
The `@context` field defines the vocabulary and rules for interpreting metadata. It allows different systems to understand and process the metadata correctly.

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Simple Cube"
}
```

### Identifiers
Unique identifiers help track and reference assets across different platforms and systems:
- `@id`: Globally unique identifier for the metadata record
- `identifier`: Platform-specific identifiers
- `sameAs`: Links to the same asset in different systems

## Asset Types

### 3D Models
Individual 3D objects with their associated properties:
- Geometry
- Materials
- Textures
- Animations
- Physics properties

### Avatars
Digital representations of users with:
- Appearance characteristics
- Animation capabilities
- Customization options
- Identity information

### Virtual Environments
Spaces where interactions occur, including:
- Scene composition
- Spatial layout
- Interactive elements
- Environmental properties

### Media Assets
Supporting content such as:
- Textures
- Audio
- Video
- Documents

## Spatial Concepts

### Coordinate Systems
Methods for positioning assets in virtual space:
- Local coordinates
- World coordinates
- Geographic coordinates

### Scale and Units
Standardized measurements for consistent representation:
- Real-world scale
- Virtual units
- Unit conversion rules

### Boundaries
Definitions of spatial limits and regions:
- Bounding boxes
- Collision volumes
- Interaction zones

## Relationships

### Asset References
Ways assets can relate to each other:
- Parent-child relationships
- Compositional relationships
- Functional relationships

### Dependencies
Requirements for proper asset function:
- Required resources
- Compatible platforms
- Technical prerequisites

### Variants
Different versions or states of assets:
- Level of detail variations
- Platform-specific versions
- State variations

## Authentication and Rights

### Content Verification
Methods for ensuring content authenticity:
- Digital signatures
- Provenance tracking
- Modification history

### Licensing
Rights management information:
- Usage permissions
- Attribution requirements
- Commercial terms

### Ownership
Asset ownership and control:
- Creator information
- Rights holders
- Transfer history

## Standards Integration

### Core Standards
Fundamental metadata standards:
- Schema.org: Basic descriptive metadata
- JSON-LD: Linked data format

### Domain Standards
Specialized standards for specific purposes:
- glTF: 3D model delivery
- USD: Scene composition
- CityGML: Urban environments
- C2PA: Content authenticity

### Extensibility
Methods for extending standard metadata:
- Custom properties
- Extension mechanisms
- Profile definitions

## Profiles

### What is a Profile?
A profile is a predefined set of metadata fields and rules for specific use cases:
- Required fields
- Optional fields
- Validation rules
- Usage guidelines

### Profile Types
Common metadata profiles:
- Basic Asset Profile
- 3D Object Profile
- Avatar Profile
- Environment Profile

### Profile Compliance
Meeting profile requirements:
- Mandatory elements
- Recommended elements
- Validation methods

## Interoperability

### Cross-Platform Compatibility
Ensuring assets work across different systems:
- Common formats
- Standard protocols
- Universal identifiers

### Version Management
Handling different versions of:
- Assets
- Metadata
- Standards
- Profiles

### Data Exchange
Methods for sharing metadata:
- API formats
- Export formats
- Exchange protocols

## Next Steps

After understanding these concepts, you can:
1. Review specific [Standards](/standards/overview.md)
2. Explore [Implementation Guides](/implementation/getting-started.md)
3. Learn about [Validation Tools](../reference/validator.md)
