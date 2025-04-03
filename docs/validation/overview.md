---
sidebar_position: 1
---

# Validation Overview

This section provides comprehensive guidance on validating your MVMD metadata to ensure compliance with standards and profiles.

## Why Validation Matters

Validating your metadata is a critical step in implementing MVMD for several reasons:

- **Ensures Interoperability**: Properly validated metadata works reliably across different platforms
- **Prevents Errors**: Catches issues before deployment to production environments
- **Improves Discoverability**: Valid metadata is more effectively indexed by search engines
- **Maintains Consistency**: Helps maintain uniform implementation across your assets
- **Simplifies Troubleshooting**: Makes it easier to identify issues when problems arise

## Validation Resources

MVMD provides multiple validation resources to help ensure your metadata is correct:

### Schema Validation

[Schema validation](./schema-validation.md) uses JSON Schema files to validate your metadata against profile requirements:

- **Profile Schemas**: Validate against specific integration profile requirements
- **Standard Schemas**: Validate standard-specific properties
- **Complete Validation**: Ensure all aspects of your metadata are correct

[Learn about Schema Validation →](./schema-validation.md)

### Validator Tool

The [MVMD Validator Tool](../tools/validator.md) provides an online interface for validating your metadata:

- Paste your JSON-LD directly into the editor
- Validate against Schema.org definitions
- Get detailed error reports and suggestions

[Use the Validator Tool →](../tools/validator.md)

## Validation Workflow

We recommend following this validation workflow for your MVMD implementation:

1. **Development Validation**: Integrate schema validation into your development process
2. **Pre-deployment Check**: Run full validation before deploying to production
3. **Regular Audits**: Periodically validate existing metadata against updated schemas
4. **Cross-platform Testing**: Verify that validated metadata works across target platforms

## Common Validation Issues

Be aware of these common validation issues:

| Issue | Description | Resolution |
|-------|-------------|------------|
| Missing required properties | Required fields are absent | Add all required properties for the profile |
| Type mismatches | Property values have incorrect types | Ensure values match expected data types |
| Format errors | String formats don't match requirements | Format strings according to documentation |
| Schema.org inconsistencies | Incorrect Schema.org usage | Follow Schema.org patterns exactly |
| Invalid standard integration | Incorrect standard property usage | Follow standard-specific guidance |

## Validation by Profile

Each integration profile has specific validation requirements:

- [Basic Profile](../integration-profiles/basic.md#validation)
- [Attachable Profile](../integration-profiles/attachable.md#validation)
- [Avatar Profile](../integration-profiles/avatar.md#validation)
- [Scene Profile](../integration-profiles/scene.md#validation)

## Related Resources

- [Implementation Best Practices](../implementation/best-practices.md)
- [Schema.org Integration](../standards/schema-org.md)
- [Integration Profiles Overview](../integration-profiles/overview.md)
- [JSON-LD Context Files](../reference/schemas.md) 