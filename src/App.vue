<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { isRouting } from './composables/routeLoading';
</script>

<template>
  <div>
    <div v-if="isRouting">Loading</div>
    <router-link v-if="$route.path != '/'" to="/">logout</router-link>
    <router-view></router-view>
  </div>
  <LazyHydrate when-idle>
    <Suspense>
      <HelloWorld msg="Vite + Vue" />
    </Suspense>
  </LazyHydrate>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
