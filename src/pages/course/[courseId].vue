<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { fetchCourseConfig } from '../../api/course';
import { defineLoader } from 'vue-router/auto';

// name the loader however you want **and export it**
export const useCourseData = defineLoader(
  async (route) => {
    const course = await fetchCourseConfig(route.params.courseId);
    // ...
    // return anything you want to expose
    return course;
  },
  {
    key: 'courseConfig',
  }
);
</script>
<script setup lang="ts">
const { data: course, pending, error, refresh } = useCourseData();
</script>
