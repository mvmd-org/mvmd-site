---
sidebar_position: 2
---

# Metadata Profiles

Metadata profiles provide standardized templates for common Metaverse asset types.

## Available Profiles

### 3D Object Profile
Basic profile for 3D models and objects.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Required: Asset name",
  "description": "Required: Asset description",
  "contentUrl": "Required: URL to the 3D model file",
  "fileFormat": "Required: File format (e.g., 'model/gltf+json')",
  "creator": "Optional: Creator information",
  "dateCreated": "Optional: Creation date",
  "license": "Optional: License information",
  "gltf:material": "Optional: Material properties",
  "gltf:scale": "Optional: Scale information"
}
```

### Avatar Profile
Profile for avatar assets and characteristics.

```json
{
  "@context": "https://schema.org/",
  "@type": "VirtualCharacter",
  "name": "Required: Avatar name",
  "description": "Required: Avatar description",
  "contentUrl": "Required: URL to avatar data",
  "characteristics": {
    "height": "Optional: Avatar height",
    "bodyType": "Optional: Avatar body type",
    "animations": "Optional: Available animations"
  }
}
```

### Environment Profile
Profile for virtual environments and spaces.

```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Required: Environment name",
  "description": "Required: Environment description",
  "contentUrl": "Required: URL to environment data",
  "spatialCoverage": {
    "type": "BoundingBox",
    "coordinates": "Required: Spatial boundaries"
  },
  "capacity": "Optional: Maximum number of users",
  "interactionMode": "Optional: Supported interaction modes"
}
