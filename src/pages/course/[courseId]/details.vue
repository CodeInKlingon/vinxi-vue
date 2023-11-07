<template>
  <h1>Course Details: {{ course.name }} {{ course.courseId }}</h1>
  <router-link to="/landing">back to landing</router-link>
</template>
<script setup lang="ts">
import { useCourseData } from '../[courseId].vue';
const { data: course, pending, error, refresh } = useCourseData();
</script>
