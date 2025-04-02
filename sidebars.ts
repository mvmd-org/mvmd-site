import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction',
        'quickstart',
        'for-standards-organizations',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/overview',
        'concepts/metadata-fundamentals',
        'concepts/types-of-assets',
        'concepts/structural-organization',
        'concepts/linking-vs-embedding',
      ],
    },
    {
      type: 'category',
      label: 'Standards',
      items: [
        'standards/overview',
        'standards/schema-org',
        // Individual standard pages
        'standards/gltf',
        'standards/usd',
        'standards/usdz',
        'standards/vrm',
        'standards/fbx',
        'standards/collada',
        'standards/x3d',
        'standards/openxr',
        'standards/cityjson',
        'standards/3d-tiles',
        'standards/c2pa',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/overview',
        'implementation/getting-started',
        'implementation/assets',
        {
          type: 'category',
          label: 'Use Case Guides',
          items: [
            'implementation/cross-platform-assets',
            'implementation/interactive-assets',
            'implementation/discovery-optimization',
            'implementation/nfts',
            'implementation/composable',
          ],
        },
        'implementation/best-practices',
        'implementation/metadata-profiles',
        'implementation/standards-implementation',
      ],
    },
    {
      type: 'category',
      label: 'Integration Profiles',
      items: [
        'integration-profiles/overview',
        'integration-profiles/basic',
        'integration-profiles/attachable',
        'integration-profiles/avatar',
        'integration-profiles/composable-3d-nft',
        'integration-profiles/digital-twin',
        'integration-profiles/vehicle',
        'integration-profiles/identity',
        'integration-profiles/royalty',
        'integration-profiles/scene',
        'integration-profiles/interactable',
        'integration-profiles/future',
      ],
    },
    {
      type: 'category',
      label: 'Validation',
      items: [
        'validation/overview',
        'validation/schema-validation',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/schemas',
        'reference/api',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/validator',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/supporters',
        'community/become-supporter',
        'community/contributing',
        'community/sdo-integration-guide',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'community/guides/content-creators',
          ],
        },
        {
          type: 'category',
          label: 'Supporters',
          items: [
            'community/supporters/nftr-pro',
            'community/supporters/sumset-tech',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
