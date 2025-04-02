---
sidebar_position: 4
---

# Style Guide Corrections Examples

This document provides examples of how to correct common issues found by the documentation validation script.

## Terminology Corrections

### Use "standard" instead of "namespace"

When referring to technical standards, use the term "standard" rather than "namespace".

**Before:**
```md
The glTF namespace allows you to include 3D model properties directly in your metadata.
```

**After:**
```md
The glTF standard allows you to include 3D model properties directly in your metadata.
```

### Use "Schema.org" instead of "schema.org"

Always capitalize "Schema.org" correctly.

**Before:**
```md
All MVMD metadata builds on schema.org vocabulary.
```

**After:**
```md
All MVMD metadata builds on Schema.org vocabulary.
```

### Use "glTF" instead of "gltf" or "GLTF"

Maintain proper capitalization for technical standards.

**Before:**
```md
You can reference gltf properties in your metadata.
```

**After:**
```md
You can reference glTF properties in your metadata.
```

### Use "3D" instead of "3d" or "3-D"

Always write "3D" with capital "D".

**Before:**
```md
This profile helps with 3d asset implementation.
```

**After:**
```md
This profile helps with 3D asset implementation.
```

## Code Block Corrections

### Add Language Specifier to Code Blocks

Always specify the language for code blocks.

**Before:**
```
{
  "@context": {
    "@vocab": "https://schema.org/"
  }
}
```

**After:**
```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  }
}
```

### Ensure JSON is Valid

Fix syntax errors in JSON examples.

**Before:**
```json
{
  "name": "Example Asset"
  "description": "An example asset"
}
```

**After:**
```json
{
  "name": "Example Asset",
  "description": "An example asset"
}
```

## Front Matter Corrections

Always include proper front matter with sidebar position.

**Before:**
```md
# Document Title

Content starts here...
```

**After:**
```md
---
sidebar_position: 1
---

# Document Title

Content starts here...
```

## Heading Structure Corrections

### Ensure Single H1

Each document should have exactly one H1 (top-level heading).

**Before:**
```md
# First Title

Content...

# Second Title

More content...
```

**After:**
```md
# Document Title

## First Section

Content...

## Second Section

More content...
```

### Don't Skip Heading Levels

Don't jump from H2 to H4 without an H3 in between.

**Before:**
```md
## Section

#### Subsection (skipping H3)
```

**After:**
```md
## Section

### Subsection

#### Sub-subsection
```

## Link Corrections

### Use Descriptive Link Text

Links should have meaningful text that describes the destination.

**Before:**
```md
For more information, [click here](../standards/gltf.md).
```

**After:**
```md
For more information, see the [glTF Standard documentation](../standards/gltf.md).
```

### Fix Broken Internal Links

Ensure all internal links point to valid locations.

**Before:**
```md
See the [implementation guide](../implementation/gltf-implementation.md).
```

**After:**
```md
See the [implementation guide](../implementation/cross-platform-assets.md#gltf-implementation).
```

## Document Structure Corrections

### Follow Standard Section Order

Arrange document sections according to the standard pattern for the document type.

**For profiles:**
1. Purpose and Use Cases
2. Profile Overview
3. Required Properties
4. Optional Properties
5. Standards Integration
6. Examples
7. Validation
8. Implementation Considerations
9. Common Issues
10. Related Profiles

**For implementation guides:**
1. Purpose and Use Cases
2. Prerequisites
3. Implementation Steps
4. Complete Example
5. Variations
6. Implementation Considerations
7. Common Issues
8. Related Documentation
9. Next Steps

## Batch Fixing with Search and Replace

Many terminology issues can be fixed with search and replace. Here are common patterns to fix:

| Search | Replace |
|--------|---------|
| `\bnamespace\b` | `standard` |
| `\bschema\.org\b` | `Schema.org` |
| `\bgltf\b` | `glTF` |
| `\bGLTF\b` | `glTF` |
| `\b3d\b` | `3D` |
| `\b3-D\b` | `3D` |

## Using the Validation Script

Always run the validation script after making changes to ensure all issues are resolved:

```bash
cd scripts
node validate-docs.js ../docs/path/to/your/file.md
``` 