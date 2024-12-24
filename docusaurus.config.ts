import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Metaverse Metadata Directory',
  tagline: 'Building Bridges Across Realities: Standards for the Metaverse',
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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/mvmd-org/mvmd-site/edit/main/',
          routeBasePath: '/',
        },
        blog: false, // Change: Disable blog since it's causing errors
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Metaverse Metadata Directory',
      logo: {
        alt: 'MVMD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation', // Change: Update label to match content
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
              to: '/intro',
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Metaverse Metadata Directory`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
