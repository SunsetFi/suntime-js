import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Suntime-JS",
  tagline: "A sandboxed JavaScript interpreter",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://sunsetfi.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/suntime-js/",

  // GitHub pages deployment config.
  organizationName: "SunsetFi",
  projectName: "suntime-js",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [processEnvDefinePlugin],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/SunsetFi/suntime-js/tree/main/docusaurus/",
        },
        blog: {
          path: "blog",
          blogTitle: "JavaScript In JavaScript",
          blogDescription: "Musings from rebuilding JavaScript from scratch in itself",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Suntime-JS",
      logo: {
        alt: "Suntime-JS Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/playground",
          label: "Playground",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/SunsetFi/suntime-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quick Start",
              to: "/docs/quick-start",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/SunsetFi/suntime-js",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/@suntime-js/core",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SunsetFi. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

function processEnvDefinePlugin() {
  return {
    name: "process-env-define",
    configureWebpack(_config: unknown, _isServer: boolean, utils: any) {
      const { DefinePlugin } = utils.currentBundler.instance;
      return {
        plugins: [new DefinePlugin({ "process.env": JSON.stringify({}) })],
      };
    },
  };
}
