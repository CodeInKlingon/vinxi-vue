import { createSSRApp } from 'vue';
import type { App } from 'vue';
import './style.css';
import VueApp from './App.vue';
import { routes } from 'vue-router/auto/routes';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  setupDataFetchingGuard,
} from 'vue-router/auto';
import type { Router } from 'vue-router/auto';
import {
  setupRouteLoadingRef,
} from './composables/routeLoading';

export function createApp(
  isServer: boolean,
  initialData?: any
): [App<Element>, Router, any] {
  const app = createSSRApp(VueApp);

  app.component('LazyHydrate', LazyHydrationWrapper);

  const router = createRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(),
    // You don't need to pass the routes anymore,
    // the plugin writes it for you 🤖
    routes: routes,
  });

  router.beforeEach(async (to, _from) => {
    console.log('to', to.meta);
  });

  if (!isServer) setupRouteLoadingRef(router);

  const fetchedData = setupDataFetchingGuard(router, {
    initialData: isServer
      ? // on server we want to generate the initial state
        undefined
      : // on the client we pass the initial state
        initialData ?? {},
  });

  app.use(router);

  return [app, router, fetchedData];
}
