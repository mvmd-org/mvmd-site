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
      type: 'doc',
      id: 'introduction',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'concepts/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Metadata',
          items: [
            {
              type: 'doc',
              id: 'concepts/metadata/fundamentals',
              label: 'Fundamentals',
            },
            {
              type: 'doc',
              id: 'concepts/metadata/structure',
              label: 'Structure',
            },
            {
              type: 'doc',
              id: 'concepts/metadata/schema-org',
              label: 'Schema.org',
            },
          ],
        },
        {
          type: 'doc',
          id: 'concepts/types-of-assets',
          label: 'Asset Types',
        },
        {
          type: 'doc',
          id: 'concepts/linking-vs-embedding',
          label: 'Linking vs Embedding',
        },
      ],
    },
    {
      type: 'category',
      label: 'Standards',
      items: [
        {
          type: 'doc',
          id: 'standards/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: '3D Asset Formats',
          items: [
            {
              type: 'doc',
              id: 'standards/gltf',
              label: 'glTF',
            },
            {
              type: 'doc',
              id: 'standards/vrm',
              label: 'VRM',
            },
            {
              type: 'doc',
              id: 'standards/fbx',
              label: 'FBX',
            },
            {
              type: 'doc',
              id: 'standards/collada',
              label: 'COLLADA',
            },
            {
              type: 'doc',
              id: 'standards/x3d',
              label: 'X3D',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scene Description',
          items: [
            {
              type: 'doc',
              id: 'standards/usd',
              label: 'USD',
            },
            {
              type: 'doc',
              id: 'standards/usdz',
              label: 'USDZ',
            },
          ],
        },
        {
          type: 'category',
          label: 'Geospatial',
          items: [
            {
              type: 'doc',
              id: 'standards/cityjson',
              label: 'CityJSON',
            },
            {
              type: 'doc',
              id: 'standards/3d-tiles',
              label: '3D Tiles',
            },
          ],
        },
        {
          type: 'category',
          label: 'Trust & Provenance',
          items: [
            {
              type: 'doc',
              id: 'standards/c2pa',
              label: 'C2PA',
            },
          ],
        },
        {
          type: 'category',
          label: 'Extended Reality',
          items: [
            {
              type: 'doc',
              id: 'standards/openxr',
              label: 'OpenXR',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        {
          type: 'doc',
          id: 'implementation/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'implementation/getting-started',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          id: 'implementation/assets',
          label: 'Assets',
        },
        {
          type: 'category',
          label: 'Use Cases',
          items: [
            {
              type: 'doc',
              id: 'implementation/cross-platform-assets',
              label: 'Cross-Platform Assets',
            },
            {
              type: 'doc',
              id: 'implementation/interactive-assets',
              label: 'Interactive Assets',
            },
            {
              type: 'doc',
              id: 'implementation/discovery-optimization',
              label: 'Discovery Optimization',
            },
            {
              type: 'doc',
              id: 'implementation/nfts',
              label: 'NFTs',
            },
            {
              type: 'doc',
              id: 'implementation/composable',
              label: 'Composable',
            },
          ],
        },
        {
          type: 'doc',
          id: 'implementation/best-practices',
          label: 'Best Practices',
        },
        {
          type: 'doc',
          id: 'implementation/standards-implementation',
          label: 'Standards Implementation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration Profiles',
      items: [
        {
          type: 'doc',
          id: 'integration-profiles/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'integration-profiles/attachable',
          label: 'Attachable',
        },
        {
          type: 'doc',
          id: 'integration-profiles/avatar',
          label: 'Avatar',
        },
        {
          type: 'doc',
          id: 'integration-profiles/basic',
          label: 'Basic',
        },
        {
          type: 'doc',
          id: 'integration-profiles/composable-3d-nft',
          label: 'Composable 3D NFT',
        },
        {
          type: 'doc',
          id: 'integration-profiles/digital-twin',
          label: 'Digital Twin',
        },
        {
          type: 'doc',
          id: 'integration-profiles/equipable',
          label: 'Equipable',
        },
        {
          type: 'doc',
          id: 'integration-profiles/future',
          label: 'Future',
        },
        {
          type: 'doc',
          id: 'integration-profiles/identity',
          label: 'Identity',
        },
        {
          type: 'doc',
          id: 'integration-profiles/interactable',
          label: 'Interactable',
        },
        {
          type: 'doc',
          id: 'integration-profiles/royalty',
          label: 'Royalty',
        },
        {
          type: 'doc',
          id: 'integration-profiles/scene',
          label: 'Scene',
        },
        {
          type: 'doc',
          id: 'integration-profiles/vehicle',
          label: 'Vehicle',
        },
        {
          type: 'doc',
          id: 'integration-profiles/wearable',
          label: 'Wearable',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          id: 'reference/schemas',
          label: 'Schemas',
        },
        {
          type: 'doc',
          id: 'reference/api',
          label: 'API',
        },
        {
          type: 'doc',
          id: 'reference/glossary',
          label: 'Glossary',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'doc',
          id: 'tools/validator',
          label: 'Validator',
        },
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        {
          type: 'doc',
          id: 'community/contributing',
          label: 'Contributing',
        },
        {
          type: 'doc',
          id: 'community/standards-organizations',
          label: 'Standards Organizations',
        },
        {
          type: 'category',
          label: 'Guides',
          items: [
            {
              type: 'doc',
              id: 'community/guides/content-creators',
              label: 'For Content Creators',
            },
          ],
        },
        {
          type: 'category',
          label: 'Supporters',
          items: [
            {
              type: 'doc',
              id: 'community/supporters/support-mvmd',
              label: 'Support MVMD',
            },
            {
              type: 'doc',
              id: 'community/supporters/nftr-pro',
              label: 'NFTR Pro',
            },
            {
              type: 'doc',
              id: 'community/supporters/sumset-tech',
              label: 'Sumset Tech',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
