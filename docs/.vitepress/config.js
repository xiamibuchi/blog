import sidebar from './sidebar.js';

export default {
  title: '羊圈',
  description: '神羊的羊圈.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "部署", link: "/linux/docs/附录4_自动化部署" },
      {
        text: "about me",
        link: "https://xiamibuchi.github.io/blog/",
      },
    ],
    sidebar: sidebar,
    returnToTopLabel: '返回顶部',
  }
}
