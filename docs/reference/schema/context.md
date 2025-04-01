---
sidebar_position: 2
---

# MVMD Context Reference

The MVMD context is a crucial part of every MVMD metadata document, establishing the vocabulary and semantics for all properties. This reference explains the structure and purpose of the MVMD context and how to implement it correctly.

## What is the MVMD Context?

In JSON-LD, the `@context` defines the vocabulary that maps properties to specific meanings. The MVMD context combines standard Schema.org terms with specialized MVMD-specific terms to create a comprehensive metadata vocabulary for metaverse assets.

## Standard MVMD Context

The standard MVMD context looks like this:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

This context establishes two key things:
1. The default vocabulary is Schema.org (`@vocab`)
2. MVMD-specific terms use the `mvmd:` prefix

## How the Context Works

When you use this context, you're telling processing systems:

- Unprefixed terms (like `name`, `description`, `contentUrl`) come from Schema.org
- Terms prefixed with `mvmd:` (like `mvmd:category`, `mvmd:polyCount`) come from the MVMD vocabulary

This dual approach allows MVMD to leverage widely-understood Schema.org terms while adding specialized metaverse-related terms.

## Context Versioning

The MVMD context includes versioning to ensure stability as the standard evolves:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

The `v1` in the URL indicates version 1 of the MVMD vocabulary. Future versions may be released (e.g., `https://mvmd.org/v2/`), but each version will remain stable to ensure compatibility.

## Extended Context for Advanced Use Cases

For advanced use cases, MVMD supports extended contexts:

```json
{
  "@context": [
    "https://mvmd.org/contexts/v1/base-context.jsonld",
    {
      "game": "https://example-game.com/vocabulary/"
    }
  ]
}
```

Here, we reference the MVMD context by URL and add a game-specific namespace. This approach:

1. Makes documents more concise by referencing an external context file
2. Allows integration with domain-specific vocabularies
3. Enables applications to extend MVMD with their own terms

## Using Multiple Namespaces

MVMD can work alongside other vocabularies:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://registry.khronos.org/glTF/vocabulary/",
    "geospatial": "https://purl.org/geojson/vocab#"
  },
  "@type": "DigitalDocument",
  "name": "City Building",
  "mvmd:category": "architecture",
  "gltf:asset": {
    "version": "2.0"
  },
  "geospatial:location": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  }
}
```

This example combines MVMD terms with terms from glTF and a geospatial vocabulary.

## Context Structure Details

The full MVMD context definition includes:

1. **Term definitions**: Maps short terms to full IRIs
2. **Type coercion**: Specifies data types for values
3. **Property scoping**: Defines which properties apply to which types
4. **Aliasing**: Provides alternative names for compatibility

## Context Expansion

When processed, the compact MVMD document expands based on context:

**Compact (what you write):**
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Virtual Sculpture",
  "mvmd:category": "art",
  "mvmd:polyCount": 25000
}
```

**Expanded (what machines process):**
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": ["https://schema.org/DigitalDocument"],
  "https://schema.org/name": [{"@value": "Virtual Sculpture"}],
  "https://mvmd.org/v1/category": [{"@value": "art"}],
  "https://mvmd.org/v1/polyCount": [{"@value": 25000}]
}
```

## Retrieving the MVMD Context

Applications can retrieve the full MVMD context from:

```
https://mvmd.org/contexts/v1/base-context.jsonld
```

This URL provides the canonical JSON-LD context document for processing MVMD metadata.

## Including the Context in Different Formats

The MVMD context can be included in different ways:

### In a JSON-LD File

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Fighter"
}
```

### Embedded in HTML

```html
<script type="application/ld+json">
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Fighter"
}
</script>
```

### In a glTF Extension

```json
{
  "extensions": {
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "DigitalDocument",
      "name": "Space Fighter"
    }
  }
}
```

### In a Linked Data File (.jsonld)

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Fighter"
}
```

## Context Validation

To validate your use of the MVMD context:

1. Ensure the context declaration is at the top level of your JSON document
2. Verify you're using the correct URL: `https://mvmd.org/v1/`
3. Confirm that all MVMD-specific properties use the `mvmd:` prefix
4. Use standard Schema.org properties without prefixes
5. Make sure your document is valid JSON-LD (use a validator)

## Common Context Patterns

### Basic Asset

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "description": "Asset description."
}
```

### 3D Model with Technical Specifications

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "mvmd:category": "3d-model",
  "mvmd:polyCount": 25000,
  "mvmd:textureResolution": "2K"
}
```

### NFT Asset

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "crypto": "https://w3id.org/crypto#"
  },
  "@type": "DigitalDocument",
  "name": "Asset Name",
  "mvmd:category": "collectible",
  "crypto:blockchain": "ethereum",
  "crypto:contract": "0x1234..."
}
```

## Best Practices for the MVMD Context

1. **Always include the full context**: Every MVMD document should have the complete context declaration.

2. **Maintain the context at the top level**: The `@context` should be the first property in your JSON-LD document.

3. **Use the correct version**: Currently `https://mvmd.org/v1/` is the stable version to use.

4. **Prefix consistency**: Always use `mvmd:` for MVMD-specific terms, and no prefix for Schema.org terms.

5. **Don't modify core terms**: Don't redefine terms in the core MVMD vocabulary.

6. **Cache the context**: Applications processing many MVMD documents should cache the context to improve performance.

7. **Consider embedding**: For standalone files, embed the context directly rather than referencing by URL.

8. **Extend don't override**: When adding terms, extend the context rather than replacing it.

## Troubleshooting Context Issues

Common issues with the MVMD context include:

- **Missing context**: Ensure every document includes the `@context` property
- **Incorrect versioning**: Check that you're using the correct URL with version
- **Missing prefixes**: Verify MVMD-specific terms use the `mvmd:` prefix
- **Invalid JSON-LD**: Validate your complete document with a JSON-LD validator
- **Namespace conflicts**: If using multiple vocabularies, ensure there are no term conflicts

## Context FAQs

**Q: Can I create my own extension to the MVMD context?**  
A: Yes, you can add application-specific terms by extending the context with your own namespace.

**Q: Should I host a copy of the MVMD context on my server?**  
A: For production systems, it's recommended to cache or host a copy to ensure availability.

**Q: What happens if the MVMD context changes?**  
A: Each versioned context URL (e.g., `v1`) will remain stable. Breaking changes will be introduced in new versions.

**Q: Can I use MVMD with other metadata standards?**  
A: Yes, MVMD is designed to work alongside other vocabularies in a single JSON-LD document.

**Q: Is the full MVMD vocabulary documented?**  
A: Yes, see the [Schema Reference](../schema-reference.md) for documentation of all MVMD terms.

## Related Documentation

- [JSON-LD Reference](json-ld.md) - Comprehensive guide to JSON-LD in MVMD
- [Schema.org Reference](schema-org.md) - How MVMD uses Schema.org
- [Schema Reference](../schema-reference.md) - Complete reference of MVMD terms

