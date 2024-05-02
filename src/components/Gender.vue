<template>
    <AppHeader />
    <main class="container mx-auto px-4 flex justify-center h-full">
      <CenteredButtons />
    </main>
    <AppFooter />
  </template>
  
  <script>
import CenteredButtons from "./CenteredButtons.vue";
  import AppHeader from "./Header.vue";
  import AppFooter from "./AppFooter.vue";
  export default {
    name: "GenderGrid",
    components: {
      CenteredButtons,
      AppHeader,
      AppFooter
    },
  };
  </script>
  
  <style>
  /* Global styles or overrides */
  body {
    margin: 0; /* Remove default margin */
    font-family: Arial, sans-serif; /* Set global font */
  }
  </style>
  