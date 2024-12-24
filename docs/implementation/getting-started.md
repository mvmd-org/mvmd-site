---
sidebar_position: 1
---

# Getting Started

## Prerequisites
- Basic understanding of JSON and metadata concepts
- Familiarity with web technologies
- Development environment setup

## Quick Start Guide

### 1. Choose a Standard
Select the appropriate metadata standard based on your use case:
- General metadata: Schema.org
- 3D assets: glTF
- Geospatial data: CityGML

### 2. Implement Basic Metadata
Start with the core metadata fields:
```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  "name": "Asset Name",
  "description": "Asset Description",
  "contentUrl": "https://example.com/asset.glb"
}
```

### 3. Validate Your Implementation
Use our validation tools to ensure compliance with the chosen standard.
