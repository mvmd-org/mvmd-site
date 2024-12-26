import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'introduction/intro',
                'introduction/concepts',
                'introduction/quickstart',
            ],
        },
        {
            type: 'category',
            label: 'Standards Registry',
            items: [
                'standards/overview',
                {
                    type: 'category',
                    label: 'Core Standards',
                    items: [
                        'core-standards/schema-org',
                        'core-standards/json-ld',
                    ],
                },
                {
                    type: 'category',
                    label: '3D Standards',
                    items: [
                        '3d-standards/gltf',
                        '3d-standards/usd',
                        '3d-standards/x3d',
                    ],
                },
                {
                    type: 'category',
                    label: 'Geospatial Standards',
                    items: [
                        'geospatial-standards/citygml',
                        'geospatial-standards/3d-tiles',
                    ],
                },
                {
                    type: 'category',
                    label: 'Media Standards',
                    items: [
                        'media-standards/c2pa',
                        'media-standards/mpeg-4',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Implementation Guide',
            items: [
                'implementation/getting-started',
                {
                    type: 'category',
                    label: 'Metadata Profiles',
                    items: [
                        'implementation/metadata-profiles/basic-profile',
                        'implementation/metadata-profiles/3d-object-profile',
                        'implementation/metadata-profiles/avatar-profile',
                        'implementation/metadata-profiles/environment-profile',
                    ],
                },
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
        {
            type: 'category',
            label: 'Community',
            items: [
                'community/supporters',
                {
                    type: 'category',
                    label: 'Supporting Organizations',
                    items: [
                        'community/supporters/sumset-tech',
                        'community/supporters/nftr-pro',
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
