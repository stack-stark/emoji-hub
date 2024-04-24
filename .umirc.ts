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
    title: '@umijs/max',
  },
  title: 'Emoji Hub',
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
