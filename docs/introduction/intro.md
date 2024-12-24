---
sidebar_position: 1
---

# Introduction to MVMD

The Metaverse Metadata Directory (MVMD) is your guide to implementing interoperable metadata for the Metaverse. This documentation helps you understand and implement metadata standards that enable seamless asset sharing and discovery across virtual environments.

## What is MVMD?

MVMD provides:
- A curated registry of metadata standards relevant to the Metaverse
- Clear implementation guidelines for each standard
- Profiles for common use cases
- Tools for validation and integration

## Why Use MVMD?

### For Developers
- Clear guidance on metadata implementation
- Standard profiles for common asset types
- Tools for validating metadata compliance
- Examples of multi-standard integration

### For Platform Owners
- Frameworks for asset interoperability
- Standards for content verification
- Scalable metadata architectures
- Cross-platform compatibility

### For Content Creators
- Guidelines for asset description
- Tools for metadata generation
- Standards for rights management
- Discoverability best practices

## Core Standards

MVMD focuses on four key areas:

1. **General Metadata Standards**
    - Schema.org for basic asset description
    - JSON-LD for linked data

2. **3D Standards**
    - glTF for 3D models
    - USD for scene composition
    - X3D for web integration

3. **Geospatial Standards**
    - CityGML for urban environments
    - 3D Tiles for large-scale data

4. **Media Standards**
    - C2PA for content authenticity
    - MPEG-4 for multimedia integration

## Getting Started

### 1. Explore Standards
Start with our [Standards Overview](/standards/overview.md) to understand available standards and their purposes.

### 2. Choose Profiles
Review our [Metadata Profiles](/implementation/metadata-profiles/basic-profile.md) to find templates for your use case.

### 3. Implement
Follow our [Getting Started Guide](/implementation/getting-started.md) for step-by-step implementation instructions.

### 4. Validate
Use our [Validation Tools](./tools/validation.md) to ensure your metadata meets MVMD standards.

## Example: Basic Asset Metadata

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Example Asset",
  "description": "A simple example of MVMD metadata",
  "creator": {
    "@type": "Organization",
    "name": "Example Studio"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/model.glb"
}
```

## Next Steps

1. Read about [Core Concepts](./introduction/concepts.md) to understand MVMD fundamentals
2. Follow our [Quickstart Guide](./introduction/quickstart.md) for rapid implementation
3. Explore [Standards](/standards/overview.md) for detailed technical information

## Contributing

MVMD is an open initiative. Visit our [GitHub repository](https://github.com/mvmd-org/mvmd-site) to:
- Report issues
- Suggest improvements
- Contribute documentation
- Share implementation examples
