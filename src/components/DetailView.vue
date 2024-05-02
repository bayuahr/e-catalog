<template>
    <AppHeader />
    <main class="container mx-auto px-4 flex justify-center">
      <DetailProduct />
    </main>
    <AppFooter />
  </template>
  
  <script>
  import AppHeader from "./Header.vue";
  import AppFooter from "./AppFooter.vue";
import DetailProduct from "./DetailProduct.vue";
  export default {
    name: "GenderGrid",
    components: {
      DetailProduct,
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
  