---
sidebar_position: 2
---

# Validate Your Metadata

Validating your metadata is a critical step to ensure it meets MVMD requirements and works correctly across platforms. This guide covers different methods to validate your metadata before using it in production.

## Why Validation Matters

Proper validation helps:

- Catch errors before they cause problems
- Ensure compatibility with different platforms
- Confirm adherence to standards
- Improve discoverability of your assets
- Maintain consistency across your assets

## Method 1: Using the MVMD Validator Tool

The simplest way to validate your metadata is using the MVMD Validator Tool.

### Online Validator

1. Visit the [MVMD Validator Tool](/tools/validator)
2. Paste your JSON-LD metadata into the text field
3. Click the "Validate" button
4. Review the results:
   - Green checkmarks indicate valid elements
   - Red alerts indicate errors that must be fixed
   - Yellow warnings suggest improvements

### Common Validation Errors

| Error | Description | Fix |
|-------|-------------|-----|
| Missing required field | Essential property is missing | Add the required property |
| Invalid value type | Property has incorrect data type | Change to the correct data type |
| Invalid URL format | URL doesn't follow proper structure | Fix URL format |
| Unknown type | @type is not recognized | Use a valid Schema.org type |
| Context error | Problem with @context declaration | Fix context to include required vocabularies |

## Method 2: Command-Line Validation

For developers integrating validation into workflows, use the command-line tools.

### Installation

```bash
npm install -g mvmd-validator
```

### Basic Validation

```bash
mvmd-validate path/to/metadata.json
```

### Validation with Profile

```bash
mvmd-validate --profile=avatar path/to/metadata.json
```

### Batch Validation

```bash
mvmd-validate path/to/metadata-directory/*.json --output=validation-report.json
```

## Method 3: Schema.org Validator

For basic Schema.org compatibility, you can use the Schema.org Validator.

1. Visit [Schema.org Validator](https://validator.schema.org/)
2. Paste your JSON-LD
3. Click "Validate"

Note: This only validates the Schema.org aspects, not MVMD-specific extensions.

## Method 4: JSON-LD Playground

To validate your JSON-LD structure:

1. Visit [JSON-LD Playground](https://json-ld.org/playground/)
2. Paste your JSON-LD
3. Check that it expands and compacts correctly

## Integration Profile Validation

For specific integration profiles, use profile-specific validation:

```bash
mvmd-validate --profile=avatar path/to/avatar-metadata.json
```

Available profiles include:
- basic
- avatar
- wearable
- scene
- composable-3d-nft
- digital-twin

## Automatic Validation in Development

Consider adding validation to your development workflow:

### Git Pre-commit Hook

```bash
#!/bin/sh
# .git/hooks/pre-commit
files=$(git diff --cached --name-only --diff-filter=ACM | grep '.json$')
if [ -n "$files" ]; then
  echo "Validating JSON-LD files..."
  for file in $files; do
    mvmd-validate "$file"
    if [ $? -ne 0 ]; then
      echo "Validation failed for $file"
      exit 1
    fi
  done
fi
```

### CI/CD Pipeline Integration

For GitHub Actions:

```yaml
name: Validate Metadata

on:
  push:
    paths:
      - '**/*.json'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install MVMD Validator
        run: npm install -g mvmd-validator
      - name: Validate JSON-LD files
        run: find . -name "*.json" -exec mvmd-validate {} \;
```

## Troubleshooting Common Issues

### Context Resolution Failures

If your validator can't resolve your context:

```json
"@context": {
  "@vocab": "https://schema.org/",
  "mvmd": "https://mvmd.org/ns/",
  "ex": "https://example.org/"
}
```

Ensure all context URLs are accessible or use cached contexts.

### Type Validation Errors

If you see errors about invalid types:

1. Check that your `@type` values are valid in Schema.org
2. Ensure you're using the correct capitalization (`3DModel`, not `3dModel`)
3. Verify that namespace prefixes are correctly defined in your context

### Reference Validation

For properties that require specific reference types:

1. Ensure object references use proper typing
2. Check that IDs and references are consistent
3. Validate that references resolve to valid resources

## Next Steps

After successfully validating your metadata:

1. [Organize your files](organize-files.md) for optimal asset management
2. Implement more advanced features as needed
3. Consider integration with platforms that support MVMD

Remember that validation is an ongoing process. As you update and enhance your metadata, continue to validate it to ensure continued compliance with standards. 