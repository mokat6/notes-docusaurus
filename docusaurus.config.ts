import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Shoulders of Giants",
  tagline: "Devil is coming",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://mokat6.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/notes-docusaurus/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mokat6", // Usually your GitHub org/user name.
  projectName: "notes-docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mokat6/notes-docusaurus/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexBlog: false, // 🔥 disables blog indexing (you don’t have a blog)
        indexDocs: true, // keep docs search

        // TODO: ONLY INDEX TITLES, HEADINGS. ignore all paragraph text. enable later when it gets too big
        // extendPage(page) {
        //   // page.title = doc frontmatter title
        //   // page.content = full HTML body

        //   // Keep only headings (h1-h6)
        //   const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g;
        //   const matches = [...page.content.matchAll(headingRegex)];
        //   const headingsText = matches.map(m => m[1]).join(" ");
        //   page.content = headingsText; // replace full content with only headings

        //   return page;
        // },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: "./sidebars.ts",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "js", // 👈 unique ID for this docs instance
        path: "js", // 👈 folder you created
        routeBasePath: "js", // URL base path
        sidebarPath: "./sidebars.ts", // 👈 separate sidebar file
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cleanCode", // 👈 unique ID for this docs instance
        path: "notes/clean-code", // 👈 folder you created
        routeBasePath: "clean-code", // URL base path
        sidebarPath: "./sidebars.ts", // 👈 separate sidebar file
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial3",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // must match the sidebar ID from your sidebars file
          position: "left",
          label: "Community",
          docsPluginId: "community", // 🔑 tell Docusaurus which docs instance
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // must match the sidebar ID from your sidebars file
          position: "left",
          label: "js",
          docsPluginId: "js", // 🔑 tell Docusaurus which docs instance
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // must match the sidebar ID from your sidebars file
          position: "left",
          label: "clean-code",
          docsPluginId: "cleanCode", // 🔑 tell Docusaurus which docs instance
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
