<template>
  <h1>
    Registration for course {{ course.name }} #
    {{ registration.registrationId }}
  </h1>
  <router-view></router-view>
  <router-link to="/landing">back to landing</router-link>
</template>
<script lang="ts">
import { fetchRegistration } from '../../../../api/registration';
import { defineLoader } from 'vue-router/auto';
import { useCourseData } from '../../[courseId].vue';

// name the loader however you want **and export it**
export const useRegistrationData = defineLoader(
  async (route) => {
    const registration = await fetchRegistration(
      route.params.courseId,
      route.params.registrationId
    );
    // ...
    // return anything you want to expose
    return registration;
  },
  {
    key: 'registration',
  }
);
</script>
<script setup lang="ts">
const {
  data: registration,
  pending: regPending,
  error: regError,
  refresh: regRefresh,
} = useRegistrationData();
const { data: course, pending, error, refresh } = useCourseData();
</script>
