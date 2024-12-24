import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Standards Registry',
      items: [
        'standards/overview',
        'standards/general-metadata',
        'standards/3d-virtual-world',
        'standards/geospacial',
        'standards/media-content',
      ],
    },
    {
      type: 'category',
      label: 'Implementation Guide',
      items: [
        'implementation/getting-started',
        'implementation/metadata-profiles',
        'implementation/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        'tools/validation',
        'tools/api-reference',
        'tools/query-builder',
      ],
    },
  ],
};

export default sidebars;
