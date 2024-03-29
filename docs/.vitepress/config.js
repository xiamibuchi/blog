import sidebar from './sidebar.js';

export default {
  base: '/blog/',
  title: '羊圈',
  description: '神羊的羊圈.',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "部署", link: "/code/deploy/github" },
      {
        text: "about me",
        link: "/about_me",
      },
    ],
    sidebar: sidebar,
    returnToTopLabel: '返回顶部',
  }
}
