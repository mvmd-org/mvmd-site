<!-- Path: /docs/introduction/quickstart.md -->
---
sidebar_position: 3
---

# Quickstart Guide

This guide helps you quickly implement basic metadata for your Metaverse assets using MVMD standards.

## Basic 3D Asset Example

Here's a complete example of metadata for a 3D model:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Modern Chair",
  "description": "A comfortable modern office chair with adjustable height",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://example.com/virtual-furnishings"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/models/modern-chair.glb",
  "thumbnailUrl": "https://example.com/thumbnails/modern-chair.jpg",
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Virtual Furnishings Inc."
  },
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.5, 0]
  },
  "gltf:materials": [{
    "name": "Chair_Fabric",
    "pbrMetallicRoughness": {
      "baseColorFactor": [0.2, 0.2, 0.8, 1.0],
      "metallicFactor": 0.0,
      "roughnessFactor": 0.8
    }
  }],
  "gltf:animations": [{
    "name": "ChairSpin",
    "type": "rotation",
    "duration": 2.0
  }]
}
```

## Step-by-Step Implementation

### 1. Choose Your Asset Type
Select the appropriate type for your asset:
- `3DModel` for individual 3D objects
- `VirtualCharacter` for avatars
- `Place` for environments

### 2. Add Basic Information
Include essential Schema.org properties:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset Name",
  "description": "Clear description of your asset",
  "creator": {
    "@type": "Organization",
    "name": "Your Organization"
  }
}
```

### 3. Add Technical Details
Include format and access information:
```json
{
  "contentUrl": "https://example.com/your-asset.glb",
  "encodingFormat": "model/gltf-binary",
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### 4. Add Standard-Specific Properties
Include properties from relevant standards:

```json
{
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Your Organization"
  }
}
```

### 5. Validate Your Metadata
Check your metadata using the MVMD Validator:
1. Visit [validator.mvmd.org](https://validator.mvmd.org)
2. Paste your metadata
3. Click "Validate"

## Common Asset Types

### Avatar
```json
{
  "@context": "https://schema.org/",
  "@type": "VirtualCharacter",
  "name": "Default Avatar",
  "description": "Basic humanoid avatar with standard animations",
  "contentUrl": "https://example.com/avatars/default.glb",
  "thumbnailUrl": "https://example.com/thumbnails/default-avatar.jpg",
  "additionalProperty": {
    "@type": "PropertyValue",
    "name": "avatarType",
    "value": "humanoid"
  }
}
```

### Environment
```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Town Square",
  "description": "Public virtual gathering space with seating and interactive displays",
  "contentUrl": "https://example.com/environments/town-square.usd",
  "thumbnailUrl": "https://example.com/thumbnails/town-square.jpg",
  "maximumAttendeeCapacity": 100
}
```

## Next Steps

After implementing basic metadata:

1. Add More Detail
    - Review full [standards documentation](/standards/overview.md)
    - Add standard-specific properties
    - Include authentication data

2. Implement Advanced Features
    - Add geospatial information
    - Include provenance data
    - Define interactions

3. Explore Tools
    - Try the validation API
    - Use metadata query tools
    - Implement automated validation

For more detailed information, see:
- [Metadata Profiles](/implementation/metadata-profiles/basic-profile.md)
- [Best Practices](/implementation/best-practices.md)
- [API Reference](../tools/api-reference.md)
