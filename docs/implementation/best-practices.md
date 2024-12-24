<!-- Path: /docs/implementation/best-practices.md -->
---
sidebar_position: 3
---

# Best Practices

This guide outlines practical guidelines for implementing high-quality Metaverse metadata. Following these practices ensures your metadata is discoverable, maintainable, and interoperable.

## Metadata Structure

### Use Clear Organization

✅ **Do**: Group related properties logically
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  
  "name": "Office Chair",
  "description": "Ergonomic office chair with adjustable height",
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://example.com/virtual-furnishings"
  },
  
  "contentUrl": "https://example.com/models/chair.glb",
  "encodingFormat": "model/gltf-binary",
  
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "dateCreated": "2024-03-15"
}
```

❌ **Don't**: Mix unrelated properties randomly
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "contentUrl": "https://example.com/models/chair.glb",
  "creator": {"@type": "Organization"},
  "dateCreated": "2024-03-15",
  "name": "Office Chair",
  "encodingFormat": "model/gltf-binary"
}
```

### Use Proper Namespacing

✅ **Do**: Clearly separate different standards
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
  }
}
```

❌ **Don't**: Mix standards without namespacing
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "scale": [1.0, 1.0, 1.0],
  "rotation": [0, 0, 0, 1]
}
```

## Content Quality

### Write Clear Descriptions

✅ **Do**: Provide detailed, specific descriptions
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "description": "High-backed office chair with adjustable height, tilt mechanism, and lumbar support. Suitable for professional office environments. Available in blue and black variants.",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "seatHeight",
      "value": "45-60cm",
      "unitCode": "CMT"
    }
  ]
}
```

❌ **Don't**: Use vague or minimal descriptions
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Chair",
  "description": "An office chair"
}
```

### Include Technical Details

✅ **Do**: Specify precise technical information
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "contentSize": "2048576",
  "encodingFormat": "model/gltf-binary",
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

❌ **Don't**: Omit or provide imprecise technical details
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentSize": "2MB",
  "encodingFormat": "glb"
}
```

## Asset Relationships

### Define Clear Hierarchies

✅ **Do**: Use explicit relationships
```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "name": "Office Furniture Set",
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "https://example.com/models/chair",
      "name": "Office Chair"
    },
    {
      "@type": "3DModel",
      "@id": "https://example.com/models/desk",
      "name": "Office Desk"
    }
  ]
}
```

❌ **Don't**: Use ambiguous relationships
```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "name": "Office Set",
  "related": [
    "chair",
    "desk"
  ]
}
```

### Reference Resources Properly

✅ **Do**: Use full, resolvable URLs
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "https://example.com/models/chair.glb",
  "thumbnailUrl": "https://example.com/thumbnails/chair.jpg",
  "sameAs": [
    "https://other-platform.com/models/chair-123",
    "ipfs://QmXaXa1XaX..."
  ]
}
```

❌ **Don't**: Use relative or incomplete references
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "/models/chair.glb",
  "thumbnailUrl": "chair.jpg"
}
```

## Version Management

### Track Changes Clearly

✅ **Do**: Include version information
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "version": "2.1.0",
  "dateModified": "2024-03-15",
  "previousVersion": {
    "@id": "https://example.com/models/chair/2.0.0",
    "version": "2.0.0",
    "dateModified": "2024-02-01"
  }
}
```

❌ **Don't**: Omit version tracking
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "dateModified": "2024-03-15"
}
```

## Rights Management

### Specify Clear Licensing

✅ **Do**: Include detailed rights information
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://example.com/license/chair",
  "creditText": "Created by Virtual Furnishings Inc.",
  "copyrightNotice": "© 2024 Virtual Furnishings Inc. All rights reserved.",
  "usageTerms": "Attribution required. Commercial use allowed."
}
```

❌ **Don't**: Use vague licensing terms
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "license": "free for use"
}
```

## Implementation Guidelines

1. **Start Simple**
    - Begin with basic Schema.org properties
    - Add technical details gradually
    - Validate at each step

2. **Maintain Consistency**
    - Use consistent property names
    - Follow standard date formats
    - Apply consistent naming conventions

3. **Plan for Evolution**
    - Design for extensibility
    - Document changes clearly
    - Maintain backwards compatibility

4. **Optimize for Discovery**
    - Use descriptive names
    - Include relevant keywords
    - Add proper categorization

5. **Regular Validation**
    - Check required properties
    - Verify format compliance
    - Test references

## Next Steps

- Review [Metadata Profiles](/metadata-profiles/basic-profile.md) for structure templates
- Check [Validation Tools](../tools/validation.md) for compliance testing
- Explore [Standards](/standards/overview.md) for advanced features
