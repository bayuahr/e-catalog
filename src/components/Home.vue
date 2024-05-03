<template>
  <AppHeader />
  <main class="container mx-auto px-4 flex pb-20 justify-center">
    <CategoryGrid />
  </main>
</template>

<script>
import CategoryGrid from "./CategoryGrid.vue";
import AppHeader from "./Header.vue"
export default {
  name: "HomePage",
  components: {
    CategoryGrid,
    AppHeader,
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
