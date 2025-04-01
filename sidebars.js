/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'introduction',
        'quickstart',
        'for-standards-organizations',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'concepts/overview',
        'concepts/integration-profiles',
        'concepts/metadata-structure',
      ],
    },
    {
      type: 'category',
      label: 'Integration Profiles',
      items: [
        'integration-profiles/overview',
        'integration-profiles/avatar',
        'integration-profiles/wearable',
        'integration-profiles/environment',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/overview',
        'implementation/validation',
        'implementation/tools',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'contributing',
        'supporting-organizations',
        'community/guidelines',
      ],
    },
  ],
};

module.exports = sidebars; 