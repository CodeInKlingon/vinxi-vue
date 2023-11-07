<template>
  <h2>Edit User {{ $route.params.id }}</h2>
</template>
<script setup>
import { definePage } from 'vue-router/auto';

definePage({
  meta: {
    mpaNavigateTo: true,
  },
});
</script>
