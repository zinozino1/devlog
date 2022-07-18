// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: `zino's devlog`,
    tagline: "Dinosaurs are cool",
    url: "https://zino-devlog-ge967y4ua-zinozino1.vercel.app/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    onDuplicateRoutes: "throw",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "zinozino1", // Usually your GitHub org/user name.
    projectName: "devlog", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: [
                    // /docs/oldDoc -> /docs/newDoc
                    {
                        from: "/",
                        to: "/docs/intro",
                    },
                ],
            },
        ],
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // routeBasePath: "/",
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    sidebarCollapsed: false, // 펼쳐져있는 것이 default로(기본상태)
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    autoCollapseCategories: false,
                },
            },

            navbar: {
                title: "zino's devlog",
                logo: {
                    href: "/docs/intro",
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/zinozino1",
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
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/docusaurus",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/zinozino1",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} zino's. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
