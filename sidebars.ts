import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        'introduction',
        'quickstart',
        {
            type: 'category',
            label: 'Concepts',
            items: [
                'concepts/overview',
                'concepts/fundamentals',
                'concepts/types-of-things',
                'concepts/composition',
                'concepts/references',
                'concepts/urls-vs-embedding',
            ],
        },
        {
            type: 'category',
            label: 'Implementation',
            items: [
                'implementation/overview',
                'implementation/assets',
                'implementation/nfts',
                'implementation/composable',
                'implementation/best-practices',
            ],
        },
        {
            type: 'category',
            label: 'Recipes',
            items: [
                'recipes/overview',
                'recipes/basic',
                'recipes/wearable',
                'recipes/avatar',
                'recipes/3d-object',
                'recipes/scene',
                'recipes/equipable',
                'recipes/interactable',
                {
                    type: 'category',
                    label: 'Locations',
                    items: [
                        'recipes/locations/virtual',
                        'recipes/locations/physical',
                    ],
                },
                'recipes/future',
            ],
        },
        {
            type: 'category',
            label: 'Embedding',
            items: [
                'embedding/overview',
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
                        'embedding/3d-assets/gltf',
                        'embedding/3d-assets/usd',
                        'embedding/3d-assets/x3d',
                        'embedding/3d-assets/fbx',
                        'embedding/3d-assets/vrm',
                        'embedding/3d-assets/openxr',
                        'embedding/3d-assets/collada'
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
                'community/contributors',
            ],
        },
        {
            type: 'category',
            label: 'Tools',
            items: [
                'tools/validator',
                'tools/mintr'
            ],
        }
    ],
};

export default sidebars;
