// import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { references } from '@vinxi/plugin-references';
import { createApp } from 'vinxi';

export default createApp({
  server: {
    plugins: [references.serverPlugin],
    virtual: {
      [references.serverPlugin]: references.serverPluginModule(),
    },
  },
  routers: [
    {
      name: 'public',
      mode: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      mode: 'build',
      handler: './src/client.ts',
      target: 'browser',
      plugins: () => [
        references.clientRouterPlugin(),
        VueRouter({
          /* options */
          // special sauce for data loading
          dataFetching: true,
        }),
        vue(),
      ],
      compile: {},
      base: '/_build',
    },
    {
      name: 'ssr',
      mode: 'handler',
      handler: './src/server.ts',
      target: 'server',
      plugins: () => [
        VueRouter({
          /* options */
          // special sauce for data loading
          dataFetching: true,
        }),
        vue(),
      ],
      compile: {},
      // base: '/',
    },
    references.serverRouter(),
  ],
});
