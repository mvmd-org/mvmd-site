import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Metaverse Metadata Directory',
    tagline: 'Your central hub for discovering and implementing metadata standards for metaverse assets',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mvmd.org',
    baseUrl: '/',
    organizationName: 'mvmd-org',
    projectName: 'mvmd-site',

    // Disable link checking temporarily
    onBrokenLinks: 'ignore', // Options: 'throw', 'warn', 'ignore'
    onBrokenMarkdownLinks: 'ignore', // Options: 'throw', 'warn', 'ignore'

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        // require.resolve('@docusaurus/plugin-debug'),
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    // Redirect from namespaces to standards
                    {
                        from: '/namespaces/overview',
                        to: '/standards/overview',
                    },
                    {
                        from: '/namespaces/schema-org',
                        to: '/standards/schema-org',
                    },
                    {
                        from: '/namespaces/gltf',
                        to: '/standards/gltf',
                    },
                    {
                        from: '/namespaces/usd',
                        to: '/standards/usd',
                    },
                    {
                        from: '/namespaces/usdz',
                        to: '/standards/usdz',
                    },
                    {
                        from: '/namespaces/vrm',
                        to: '/standards/vrm',
                    },
                    {
                        from: '/namespaces/fbx',
                        to: '/standards/fbx',
                    },
                    {
                        from: '/namespaces/collada',
                        to: '/standards/collada',
                    },
                    {
                        from: '/namespaces/x3d',
                        to: '/standards/x3d',
                    },
                    {
                        from: '/namespaces/openxr',
                        to: '/standards/openxr',
                    },
                    {
                        from: '/namespaces/cityjson',
                        to: '/standards/cityjson',
                    },
                    {
                        from: '/namespaces/3d-tiles',
                        to: '/standards/3d-tiles',
                    },
                    {
                        from: '/namespaces/c2pa',
                        to: '/standards/c2pa',
                    },
                    // Redirect for category pages to standards overview
                    {
                        from: '/namespaces/3d-standards',
                        to: '/standards/overview',
                    },
                    {
                        from: '/namespaces/geospatial-standards',
                        to: '/standards/overview',
                    },
                    {
                        from: '/namespaces/trust-provenance',
                        to: '/standards/overview',
                    },
                    // Redirects for implementations mentioned in standards-implementation
                    {
                        from: '/implementation/standards-implementation',
                        to: '/standards/overview',
                    },
                    // Manual redirect pages
                    {
                        from: '/namespaces/redirects/gltf-redirect',
                        to: '/standards/gltf',
                    },
                    {
                        from: '/namespaces/redirects/usd-redirect',
                        to: '/standards/usd',
                    },
                    {
                        from: '/namespaces/redirects/usdz-redirect',
                        to: '/standards/usdz',
                    },
                    {
                        from: '/namespaces/redirects/vrm-redirect',
                        to: '/standards/vrm',
                    },
                    {
                        from: '/namespaces/redirects/fbx-redirect',
                        to: '/standards/fbx',
                    },
                    {
                        from: '/namespaces/redirects/collada-redirect',
                        to: '/standards/collada',
                    },
                    {
                        from: '/namespaces/redirects/x3d-redirect',
                        to: '/standards/x3d',
                    },
                    {
                        from: '/namespaces/redirects/openxr-redirect',
                        to: '/standards/openxr',
                    },
                    {
                        from: '/namespaces/redirects/cityjson-redirect',
                        to: '/standards/cityjson',
                    },
                    {
                        from: '/namespaces/redirects/3d-tiles-redirect',
                        to: '/standards/3d-tiles',
                    },
                    {
                        from: '/namespaces/redirects/c2pa-redirect',
                        to: '/standards/c2pa',
                    },
                    {
                        from: '/namespaces/redirects/3d-standards-redirect',
                        to: '/standards/overview',
                    },
                    {
                        from: '/namespaces/redirects/geospatial-standards-redirect',
                        to: '/standards/overview',
                    },
                    {
                        from: '/namespaces/redirects/trust-provenance-redirect',
                        to: '/standards/overview',
                    },
                ],
                createRedirects(existingPath) {
                    // Create redirects for content that was moved from category pages to standards
                    if (existingPath.includes('/standards/gltf')) {
                        return [
                            existingPath.replace('/standards/gltf', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/gltf', '/namespaces/gltf'),
                            existingPath.replace('/standards/gltf', '/implementation/standards-implementation'),
                        ];
                    }
                    if (existingPath.includes('/standards/usd')) {
                        return [
                            existingPath.replace('/standards/usd', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/usd', '/namespaces/usd'),
                            existingPath.replace('/standards/usd', '/implementation/standards-implementation'),
                        ];
                    }
                    if (existingPath.includes('/standards/usdz')) {
                        return [
                            existingPath.replace('/standards/usdz', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/usdz', '/namespaces/usdz'),
                        ];
                    }
                    if (existingPath.includes('/standards/vrm')) {
                        return [
                            existingPath.replace('/standards/vrm', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/vrm', '/namespaces/vrm'),
                        ];
                    }
                    if (existingPath.includes('/standards/fbx')) {
                        return [
                            existingPath.replace('/standards/fbx', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/fbx', '/namespaces/fbx'),
                        ];
                    }
                    if (existingPath.includes('/standards/collada')) {
                        return [
                            existingPath.replace('/standards/collada', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/collada', '/namespaces/collada'),
                        ];
                    }
                    if (existingPath.includes('/standards/x3d')) {
                        return [
                            existingPath.replace('/standards/x3d', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/x3d', '/namespaces/x3d'),
                        ];
                    }
                    if (existingPath.includes('/standards/openxr')) {
                        return [
                            existingPath.replace('/standards/openxr', '/namespaces/3d-standards'),
                            existingPath.replace('/standards/openxr', '/namespaces/openxr'),
                        ];
                    }
                    if (existingPath.includes('/standards/cityjson')) {
                        return [
                            existingPath.replace('/standards/cityjson', '/namespaces/geospatial-standards'),
                            existingPath.replace('/standards/cityjson', '/namespaces/cityjson'),
                        ];
                    }
                    if (existingPath.includes('/standards/3d-tiles')) {
                        return [
                            existingPath.replace('/standards/3d-tiles', '/namespaces/geospatial-standards'),
                            existingPath.replace('/standards/3d-tiles', '/namespaces/3d-tiles'),
                        ];
                    }
                    if (existingPath.includes('/standards/c2pa')) {
                        return [
                            existingPath.replace('/standards/c2pa', '/namespaces/trust-provenance'),
                            existingPath.replace('/standards/c2pa', '/namespaces/c2pa'),
                        ];
                    }
                    if (existingPath.includes('/standards/overview')) {
                        return [
                            existingPath.replace('/standards/overview', '/namespaces/overview'),
                        ];
                    }
                    if (existingPath.includes('/standards/schema-org')) {
                        return [
                            existingPath.replace('/standards/schema-org', '/namespaces/schema-org'),
                        ];
                    }
                    return undefined;
                },
            },
        ],
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/mvmd-org/mvmd-site/edit/main/',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            {name: 'og:type', content: 'website'}, // Required Open Graph type
            {name: 'fb:app_id', content: 'YOUR_FB_APP_ID'}, // Replace with your Facebook App ID
            {name: 'og:title', content: 'Metaverse Metadata Directory'},
            {name: 'og:description', content: 'Metadata standards for metaverse assets'},
            {name: 'og:image', content: 'https://mvmd.org/img/mvmd-social-card.jpg'},
            {name: 'og:url', content: 'https://mvmd.org'},
            {name: 'twitter:card', content: 'summary_large_image'}, // For Twitter large card display
            {name: 'twitter:title', content: 'Metaverse Metadata Directory'},
            {name: 'twitter:description', content: 'Metadata standards for metaverse assets'},
            {name: 'twitter:image', content: 'https://mvmd.org/img/mvmd-social-card.jpg'},
        ],
        image: 'img/mvmd-social-card.jpg',
        navbar: {
            title: 'Metaverse Metadata Directory',
            logo: {
                alt: 'MVMD Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docs',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/validator',
                    label: 'Schema Validator',
                    position: 'right',
                },
                {
                    href: 'https://github.com/mvmd-org',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'X',
                            href: 'https://x.com/mvmd_org',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/mvmd-org',
                        },
                        {
                            label: 'Docs Validation Report',
                            to: '/validation-report',
                        },
                    ],
                },
            ],
            copyright: `version 0.3 - Copyright © ${new Date().getFullYear()} Metaverse Metadata Directory`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'},
                },
            ],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
