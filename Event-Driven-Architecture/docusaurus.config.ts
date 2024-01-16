import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Event Driven Architecture Patterns & Best Practices',
  tagline: 'Events are everywhere, but how do you use them, what are the best practices?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bcgov.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/event-driven-architecture-guidelines',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bcgov', // Usually your GitHub org/user name.
  projectName: 'event-driven-architecture-guidelines', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-lunr-search'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/gov-bc-logo-horiz.png',
    navbar: {
      title: 'Event Driven Architecture Patterns & Best Practices',
      logo: {
        alt: 'BCGov Logo',
        src: 'img/gov-bc-logo-horiz.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'search',
          position: 'right', // this can be 'left' or 'right'
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.developer.gov.bc.ca/',
            },
            {
              label: 'Rocket.Chat',
              href: 'https://chat.developer.gov.bc.ca/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BCGov, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
