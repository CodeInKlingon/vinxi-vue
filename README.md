# Vue + vue-route with loader plugin

- uses vinxi for app framework
- uses unplugin-vue-router for file based routing & nested route data loading
- server only actions (RPC) turn a function call into a server only handled api route
- bonus example of extending the vue router: supports per-route mpa only navigation ( not a server component, page js is sent and page is hydrated )

nested data loading before vue router navigation: https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
loads nested route data async

unfortunately there is a bug that prevents the loaders to be lazy at the moment.

- once this is fixed we can navigate to a route and the route portions can load in seperately

TODO

- api

## Enable per route mpa only navigation

in src/main.ts make sure the setupMpaOnlyNavigationGuard function is called for the client

` if (!isServer) setupMpaOnlyNavigationGuard(router);`

add the following to a page to enable a full page refresh

```
<script setup>
import { definePage } from 'vue-router/auto';

definePage({
  meta: {
    mpaNavigateTo: true,
  },
});
</script>
```
