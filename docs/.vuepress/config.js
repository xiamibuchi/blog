module.exports = {
  title: "羊圈",
  description: "神羊的羊圈",
  dest: "./dist",
  repo: "https://xiamibuchi.github.io/blog/",
  head: [
    ["meta", {name: "theme-color", content: "#00adb5"}],
    ["link", {rel: "icon", href: `/images/favicon.png`}],
    ["meta", {
      itemprop: "image",
      content: "/js_tricks/images/favicon.png"
    }],
    ["meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    ["meta", {
      name: "msapplication-TileColor",
      content: "#00adb5"
    }]
  ],
  markdown: {
    anchor: {permalink: false},
    toc: {includeLevel: [1, 2]},
    config: md => {
      md.use(require("markdown-it-include"), "./");
    }
  },
  plugins: [
    "vuepress-plugin-cat",
    "@vuepress/nprogress"
  ],
  themeConfig: {
    nav: [
      {
        text: "blog",
        link: "/blog/"
      },
      {
        text: "about me",
        link: "https://qishaoxuan.github.io/animate_resume/"
      },
      {
        text: "GitHub",
        link: "https://github.com/QiShaoXuan/blog"
      }
    ],
    sidebar: [
      {
        title: "JavaScript",
        collapsable: true,
        children: [
          "/JavaScript/1.基础知识"
        ]
      }
    ]
  }
};
