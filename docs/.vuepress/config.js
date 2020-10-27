const css = require("./config/css");
const js = require("./config/js");

module.exports = {
  title: "羊圈",
  description: "神羊的羊圈",
  dest: "./dist",
  repo: "https://xiamibuchi.github.io/blog/",
  head: [
    ["meta", { name: "theme-color", content: "#00adb5" }],
    ["link", { rel: "icon", href: `/images/favicon.png` }],
    [
      "meta",
      {
        itemprop: "image",
        content: "/js_tricks/images/favicon.png",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#00adb5",
      },
    ],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      // md.use(require("markdown-it-include"));
    },
  },
  plugins: [],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "js", link: js[0] },
      { text: "css", link: css[0] },
      { text: "部署", link: "/linux/附录4_自动化部署" },
      {
        text: "about me",
        link: "https://xiamibuchi.github.io/blog/",
      },
    ],
    sidebar: {
      "/css/": css,
      "/js/": js,
    },
    footer: true,
    valineConfig: {
      showComment: false,
      appId: "",
    },
  },
  evergreen: true,
};
