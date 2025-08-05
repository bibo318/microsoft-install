// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gravesoft Vietnam',
  tagline: 'Tạo ra phần mềm mã nguồn mở và miễn phí cho mọi người.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gravesoft.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username', // Usually your GitHub org/user name.
  projectName: 'gravesoft-vietnam', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: 'false',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root	
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gravesoft/gravesoft.dev/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/card.png',
      navbar: {
        title: 'Gravesoft Vietnam',
        logo: {
          alt: 'Gravesoft Vietnam',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/cas',
            position: 'left',
            label: 'Phần Mềm',
          },
          {
            to: '/download_windows',
            position: 'left',
            label: 'Tải Windows / Office',
          },
          {
            to: '/bypass-russian-geoblock',
            position: 'left',
            label: 'Hướng Dẫn',
          },
          {
            to: '/news',
            position: 'left',
            label: 'Tin Tức',
          },
          {
            to: '/credits',
            position: 'left',
            label: 'Tín Dụng',
          },
          {
            to: '/troubleshoot',
            position: 'right',
            label: 'Khắc Phục Sự Cố',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://discord.gg/yJ8phEmbw9',
            className: 'discord-button',
            position: 'right',
            label: 'Discord',
            "title": 'Trò chuyện với chúng tôi trên Discord',
          },
          {
            href: 'https://github.com/your-github-username',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            "title": 'Kho lưu trữ GitHub',
          },
        ],
      },
      /*   footer: {
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
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
