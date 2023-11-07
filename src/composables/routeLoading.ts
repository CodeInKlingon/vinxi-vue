import { ref } from 'vue';
import type { Router } from 'vue-router/auto';

export const isRouting = ref(false);
let firstRoute = true;

export function setupRouteLoadingRef(router: Router) {
  router.beforeEach(() => {
    if (!firstRoute) {
      isRouting.value = true;
    }
    firstRoute = false;
  });

  router.afterEach(() => {
    isRouting.value = false;
  });
}

