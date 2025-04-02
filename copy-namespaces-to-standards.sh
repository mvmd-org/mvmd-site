#!/bin/bash

# Copy all namespace files to standards directory
for file in docs/namespaces/*.md; do
  if [[ "$file" != *"backup/"* && "$file" != *"redirects/"* && "$file" != *"overview.md"* ]]; then
    filename=$(basename "$file")
    cp "$file" "docs/standards/$filename"
    
    # Replace any references to namespaces directory with standards directory
    sed -i '' 's/namespaces\//standards\//g' "docs/standards/$filename"
    
    # Replace "Namespace" with "Standard" in titles if needed
    sed -i '' 's/# \(.*\) Namespace/# \1 Standard/g' "docs/standards/$filename"
    sed -i '' 's/title: \(.*\) Namespace/title: \1 Standard/g' "docs/standards/$filename"
    sed -i '' 's/sidebar_label: \(.*\) Namespace/sidebar_label: \1 Standard/g' "docs/standards/$filename"
  fi
done

# Create redirects from old namespaces paths to standards paths
mkdir -p docs/namespaces/redirects
cat > docs/namespaces/redirects/namespaces-to-standards.md << EOL
---
title: Namespaces Moved
sidebar_label: Namespaces Moved
---

import {Redirect} from '@docusaurus/router';

<Redirect to="/standards/overview" />

:::caution Content Moved

The Namespaces section has been renamed to Standards. All namespace pages have been moved to their corresponding standard pages.

Please update your bookmarks to the new locations.
:::
EOL

echo "All files have been copied and updated." 