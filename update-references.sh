#!/bin/bash

# Find all .md files in the docs directory and update references
find docs -type f -name "*.md" -exec sed -i '' 's|../namespaces/|../standards/|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|/docs/namespaces/|/docs/standards/|g' {} \;

# Special cases for category pages that no longer exist
find docs -type f -name "*.md" -exec sed -i '' 's|../standards/3d-standards.md|../standards/overview.md|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|../standards/geospatial-standards.md|../standards/overview.md|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|../standards/trust-provenance.md|../standards/overview.md|g' {} \;

find docs -type f -name "*.md" -exec sed -i '' 's|/docs/standards/3d-standards|/docs/standards/overview|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|/docs/standards/geospatial-standards|/docs/standards/overview|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|/docs/standards/trust-provenance|/docs/standards/overview|g' {} \;

# Update any "Namespaces" text references that should be "Standards"
find docs -type f -name "*.md" -exec sed -i '' 's|Learn about \[Namespaces\]|Learn about \[Standards\]|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|\[glTF Namespace\]|\[glTF Standard\]|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|\[USD Namespace\]|\[USD Standard\]|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|\[OpenXR Namespace\]|\[OpenXR Standard\]|g' {} \;
find docs -type f -name "*.md" -exec sed -i '' 's|\[Schema.org Namespace\]|\[Schema.org Standard\]|g' {} \;

echo "All references have been updated." 