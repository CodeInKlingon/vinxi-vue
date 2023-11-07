<template>
  <h1>User account</h1>
  <ul>
    <li><router-link to="/account">Account</router-link></li>
    <li>
      <router-link to="/account/details">Account Details</router-link>
    </li>
    <li>
      <router-link to="/account/secondary">Secondary Account</router-link>
    </li>
  </ul>
  <router-view></router-view>
  <router-link to="/landing">Back to landing</router-link>
</template>
