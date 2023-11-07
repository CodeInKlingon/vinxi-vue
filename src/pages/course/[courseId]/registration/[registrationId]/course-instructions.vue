<template>
  <h2>Instructions {{ course.name }}</h2>
</template>
<script setup lang="ts">
import { useCourseData } from '../../../[courseId].vue';
const { data: course, pending, error, refresh } = useCourseData();
</script>
