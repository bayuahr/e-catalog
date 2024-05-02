<template>
    <AppHeader />
    <main class="container mx-auto px-4 flex justify-center mb-44">
      <BrandGrid />
    </main>
    <AppFooter />
  </template>
  
  <script>
  import BrandGrid from "./BrandGrid.vue";
  import AppHeader from "./Header.vue";
  import AppFooter from "./AppFooter.vue";
  export default {
    name: "BrandView",
    components: {
      BrandGrid,
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
  