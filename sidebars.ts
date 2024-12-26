import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'introduction/intro',
                'introduction/quickstart',
            ],
        },
        {
            type: 'category',
            label: 'Core Concepts',
            items: [
                'core-concepts/metadata-fundamentals',
                'core-concepts/file-organization',
                'core-concepts/embedding-and-reference',
            ],
        },
        {
            type: 'category',
            label: 'Standards',
            items: [
                'standards/overview',
                {
                    type: 'category',
                    label: 'Schema',
                    items: [
                        'standards/schema/schema-org',
                        'standards/schema/json-ld',
                    ],
                },
                {
                    type: 'category',
                    label: '3D Assets',
                    items: [
                        'standards/3d-assets/gltf',
                        'standards/3d-assets/usd',
                        'standards/3d-assets/x3d',
                    ],
                },
                {
                    type: 'category',
                    label: 'Geospatial',
                    items: [
                        'standards/geospatial/cityjson',
                        'standards/geospatial/3d-tiles',
                    ],
                },
                {
                    type: 'category',
                    label: 'Trust and Provenance',
                    items: [
                        'standards/trust/c2pa',
                    ],
                },
                {
                    type: 'category',
                    label: 'Media Standards',
                    items: [
                        'standards/media/mpeg-4',
                    ],
                },
                'standards/future-profiles',
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
                        'implementation/profiles/basic-profile',
                        'implementation/profiles/wearables-profile',
                        'implementation/profiles/avatar-profile',
                        'implementation/profiles/3d-model-profile',
                        'implementation/profiles/scene-profile',
                        'implementation/profiles/equipable-profile',
                        'implementation/profiles/interactables-profile',
                        'implementation/profiles/future-profiles',
                    ],
                },
                {
                    type: 'category',
                    label: 'NFT Integration',
                    items: [
                        'implementation/nft/concepts',
                        'implementation/nft/examples',
                    ],
                },
                {
                    type: 'category',
                    label: 'Composable Assets',
                    items: [
                        'implementation/composable/concepts',
                        'implementation/composable/schema-parts',
                        'implementation/composable/assembly-patterns',
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
                {
                    type: 'category',
                    label: 'Supporting Organizations',
                    items: [
                        'community/supporters/sumset-tech',
                        'community/supporters/nftr-pro',
                    ],
                },
                'community/become-supporter',
                'community/contributors',
            ],
        },
    ],
};

export default sidebars;
