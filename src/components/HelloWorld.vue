<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { sayHello } from '../actions/actions'; //'./actions';

defineProps<{ msg: string }>();
const count = ref();
const loading = ref(false);

onMounted(async () => {
  if(count.value) return
  await getCount();
})

async function getCount(){
  loading.value = true;
  count.value = await sayHello();
  loading.value = false;
}
</script>

<template>
  <div class="card">
    <button type="button" @click="getCount">
      <template v-if="loading">... loading ...</template>
      <template v-else>
        count is {{ count }}
      </template>
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
