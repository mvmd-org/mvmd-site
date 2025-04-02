---
sidebar_position: 1
---

# Namespaces Overview

This section explains how to use namespaces to incorporate standards into your metadata. Namespaces provide a way to declare, reference, and embed metadata from different standards without conflicts.

## What Are Namespaces?

Namespaces are identifiers that distinguish properties and types from different standards. They allow you to combine multiple standards in a single metadata object while maintaining clear attribution of where each property comes from.

## Core Namespace Concepts

- Namespace declaration in the `@context` object 
- Prefixing properties with namespaces
- Standard-specific data structures
- Resolving naming conflicts

## Available Namespace Standards

This section covers the following standards with both linking and embedding approaches:

- [Schema.org](./schema-org.md): Core vocabulary for general metadata
- [3D Standards](./3d-standards.md): Standards for 3D models and scenes (glTF, USD, VRM, etc.)
- [Geospatial Standards](./geospatial-standards.md): Standards for location and spatial data
- [Trust & Provenance](./trust-provenance.md): Standards for authentication and verification

## When to Use Namespaces

Use namespaces when:

- Combining multiple standards in a single metadata object
- Adding standard-specific properties to basic metadata
- Embedding data directly instead of using references
- Creating interoperable metadata for cross-platform assets

For guidance on when to link versus embed content, see the [Linking vs Embedding](../concepts/linking-vs-embedding.md) section in Core Concepts. 