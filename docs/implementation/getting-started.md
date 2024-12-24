---
sidebar_position: 1
---

# Getting Started with MVMD

This guide provides practical steps for implementing Metaverse metadata for your first assets.

## Prerequisites

Before starting, ensure you have:
- Basic understanding of JSON
- Your assets ready for metadata tagging
- Access to the MVMD validation tool

## Basic Implementation Steps

### 1. Choose Your Asset Type

Select the appropriate base type for your asset:

**3D Model** (individual objects)
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "description": "Ergonomic office chair with adjustable height"
}
```

**Avatar** (character models)
```json
{
  "@context": "https://schema.org/",
  "@type": "VirtualCharacter",
  "name": "Default Avatar",
  "description": "Standard humanoid avatar with basic animations"
}
```

**Environment** (spaces and scenes)
```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  "name": "Meeting Room",
  "description": "Virtual conference room for team meetings"
}
```

### 2. Add Essential Properties

Add required properties for your asset type:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "description": "Ergonomic office chair with adjustable height",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  },
  "contentUrl": "https://example.com/models/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### 3. Add Technical Properties

Include properties specific to your asset type:

**3D Model Example**
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.45, 0]
  },
  "gltf:materials": [{
    "name": "Fabric",
    "pbrMetallicRoughness": {
      "baseColorFactor": [0.2, 0.2, 0.8, 1.0],
      "metallicFactor": 0.0,
      "roughnessFactor": 0.8
    }
  }]
}
```

**Environment Example**
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  "name": "Meeting Room",
  "maximumAttendeeCapacity": 20,
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:composition": {
    "defaultPrim": "MeetingRoom",
    "layers": [
      {
        "name": "base",
        "path": "/Room/Base"
      },
      {
        "name": "furniture",
        "path": "/Room/Furniture"
      }
    ]
  }
}
```

## Common Implementation Patterns

### Asset with Multiple Formats

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "encoding": [
    {
      "@type": "MediaObject",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/models/chair.glb"
    },
    {
      "@type": "MediaObject",
      "encodingFormat": "model/usd",
      "contentUrl": "https://example.com/models/chair.usd"
    }
  ]
}
```

### Asset with Variations

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Office Chair - Blue",
      "contentUrl": "https://example.com/models/chair-blue.glb"
    },
    {
      "@type": "3DModel",
      "name": "Office Chair - Red",
      "contentUrl": "https://example.com/models/chair-red.glb"
    }
  ]
}
```

### Asset Collection

```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "name": "Office Furniture Set",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Office Chair",
      "contentUrl": "https://example.com/models/chair.glb"
    },
    {
      "@type": "3DModel",
      "name": "Office Desk",
      "contentUrl": "https://example.com/models/desk.glb"
    }
  ]
}
```

## Implementation Checklist

### Essential Steps
1. ✓ Choose appropriate base type
2. ✓ Add required properties
3. ✓ Include technical metadata
4. ✓ Add licensing information
5. ✓ Validate metadata

### Quality Checks
1. ✓ Descriptive name and description
2. ✓ Accurate technical properties
3. ✓ Valid content URLs
4. ✓ Complete creator information
5. ✓ Clear licensing terms

## Next Steps

After implementing basic metadata:

1. **Add Advanced Properties**
    - Review [Metadata Profiles](/metadata-profiles/basic-profile.md)
    - Add standard-specific properties
    - Include additional descriptive metadata

2. **Validate Your Implementation**
    - Use the [Validation Tools](../tools/validation.md)
    - Check for required properties
    - Verify standard compliance

3. **Consider Advanced Features**
    - Add authentication data
    - Include provenance information
    - Define relationships between assets

## Common Issues and Solutions

### Missing Required Properties
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair"
  // Missing required description and contentUrl
}
```
Solution: Always include name, description, and contentUrl.

### Invalid Format Specifications
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "encodingFormat": "glb"  // Incorrect format specification
}
```
Solution: Use proper MIME types (e.g., "model/gltf-binary").

### Incorrect Property Types
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "dateCreated": "March 15, 2024"  // Incorrect date format
}
```
Solution: Use ISO 8601 date format (e.g., "2024-03-15").
