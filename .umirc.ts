import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    dark: true,
    configProvider: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Emoji Hub - 收录三千多个Emoji',
  },
  title: 'Emoji Hub - 收录三千多个Emoji',
  metas: [
    { name: 'keywords', content: 'Emoji, 快捷Emoji' },
    {
      name: 'description',
      content:
        '这是一个使用 umi4 构建的 emoji 网站，通过分类展示各种 emoji ，支持搜索功能。配合 vscode 插件快捷 emoji，可以快速查看以及使用 emoji',
    },
  ],
  links: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Emoji Hub',
      path: '/home',
      component: '@/layouts/index',
      layout: false,
      routes: [{ path: '', component: './Home', layout: false }],
    },
  ],
  npmClient: 'pnpm',
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "./src/styles/variables.less";',
    },
  },
});
