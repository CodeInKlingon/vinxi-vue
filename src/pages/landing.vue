<template>
  <h1>Landing Page</h1>
  <h2>Completed Courses</h2>
  <ul>
    <li><router-link to="/course/1/details">Course 1</router-link></li>
    <li>
      <router-link to="/course/2/details">Course 2</router-link>
    </li>
    <li>
      <router-link to="/course/3/details">Course 3</router-link>
    </li>
  </ul>
  <h2>In Progress Courses</h2>
  <ul>
    <li>
      <router-link to="/course/1/registration/1/course-instructions"
        >Course 1</router-link
      >
    </li>
    <li>
      <router-link to="/course/2/registration/2/course-instructions"
        >Course 2</router-link
      >
    </li>
    <li>
      <router-link to="/course/3/registration/3/course-instructions"
        >Course 3</router-link
      >
    </li>
  </ul>
  <router-link to="/account">Manage Account</router-link>
</template>
