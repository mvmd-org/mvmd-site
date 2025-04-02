---
sidebar_position: 4
---

# Linking vs. Embedding

## Overview

MVMD supports two approaches for including metadata with digital assets:

1. **Linking**: References external resources with URIs
2. **Embedding**: Includes metadata directly within the asset or metadata file

Each approach has distinct advantages for different use cases.

## Linking Pattern

Linking uses URIs to reference external resources. This pattern creates a connection between your metadata and external resources without duplicating content.

### When to Use Linking

- Large assets that would be inefficient to embed
- Resources that need to be independently updated
- Assets used across multiple contexts
- Resources managed by different systems
- Public or widely shared content

### Advantages of Linking

- Reduced file size for the metadata document
- Independent update cycles for linked resources
- Shared resources can be referenced from multiple places
- Clear separation of concerns between systems

## Embedding Pattern

Embedding includes metadata directly within the asset or its associated metadata file. This pattern ensures that critical information stays with the asset.

### When to Use Embedding

- Critical metadata that must stay with the asset
- Self-contained assets that need to work offline
- Properties that rarely change
- Data that is small in size
- Core configuration details

### Advantages of Embedding

- Self-contained resources that work offline
- No dependency on external resource availability
- Simplified asset distribution and management
- Guaranteed data consistency with the asset

## Mixed Approach

Many implementations use both patterns, linking to external resources while embedding critical metadata directly. This hybrid approach balances flexibility with reliability.

## Decision Criteria

When deciding between linking and embedding, consider:

1. **File size**: Large data should be linked, small data can be embedded
2. **Update frequency**: Frequently changing data should be linked
3. **Distribution model**: Widely distributed assets benefit from embedding essential data
4. **Offline requirements**: Assets that need to work offline should embed critical metadata
5. **Dependency management**: Independent resources should be linked

## Implementation in Namespaces

Each [namespace](../standards/overview.md) supports both linking and embedding patterns with specific implementation details:

- [Schema.org](../standards/schema-org.md): Core vocabulary for both patterns
- [3D Standards](../standards/overview.md): 3D-specific implementation
- [Geospatial Standards](../standards/overview.md): Location data patterns
- [Trust & Provenance](../standards/overview.md): Authentication information
- [OpenXR Standards](../standards/openxr.md): XR-specific implementation

For detailed implementation examples and patterns for each standard, refer to the respective namespace documentation.
