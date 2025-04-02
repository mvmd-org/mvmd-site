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
      label: 'Examples',
      items: [
        'examples/README',
        'examples/combining-standards',
        {
          type: 'category',
          label: 'Embedding',
          items: [
            'examples/embedding/README',
            'examples/embedding/gltf',
            'examples/embedding/usd',
            'examples/embedding/fbx',
            'examples/embedding/vrm',
            'examples/embedding/collada',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/overview',
        'implementation/getting-started',
        'implementation/assets',
        'implementation/nfts',
        'implementation/composable',
        'implementation/best-practices',
        'implementation/metadata-profiles',
        'implementation/standards-implementation',
        {
          type: 'category',
          label: 'Composable',
          items: [
            'implementation/composable/assembly-patterns',
            'implementation/composable/concepts',
            'implementation/composable/schema-parts',
          ],
        },
        {
          type: 'category',
          label: 'NFT',
          items: [
            'implementation/nft/concepts',
            'implementation/nft/examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration Profiles',
      items: [
        'integration-profiles/overview',
        'integration-profiles/basic',
        'integration-profiles/wearable',
        'integration-profiles/avatar',
        'integration-profiles/composable-3d-nft',
        'integration-profiles/digital-twin',
        'integration-profiles/vehicle',
        'integration-profiles/identity',
        'integration-profiles/royalty',
        'integration-profiles/scene',
        'integration-profiles/equipable',
        'integration-profiles/interactable',
        'integration-profiles/future',
      ],
    },
    {
      type: 'category',
      label: 'Namespaces',
      items: [
        'namespaces/overview',
        'namespaces/schema-org',
        'namespaces/3d-standards',
        'namespaces/geospatial-standards',
        'namespaces/trust-provenance',
      ],
    },
    {
      type: 'category',
      label: 'Embedding',
      items: [
        'embedding/overview',
        'embedding/media-content',
        'embedding/general-metadata',
        'embedding/3d-virtual-world',
        'embedding/geospacial',
        {
          type: 'category',
          label: 'Schema',
          items: [
            'embedding/schema/schema-org',
            'embedding/schema/json-ld',
          ],
        },
        {
          type: 'category',
          label: '3D Assets',
          items: [
            'embedding/3d-assets/x3d',
            'embedding/3d-assets/openxr',
          ],
        },
        {
          type: 'category',
          label: 'Geospatial',
          items: [
            'embedding/geospatial/cityjson',
            'embedding/geospatial/3d-tiles',
          ],
        },
        {
          type: 'category',
          label: 'Trust and Provenance',
          items: [
            'embedding/trust/c2pa',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/supporters',
        'community/become-supporter',
        'contributing',
        'community/sdo-integration-guide',
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
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/validator',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/api',
        'reference/schemas',
        'reference/validator',
        'reference/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/content-creators',
      ],
    },
  ],
};

export default sidebars;
