<template>
  <div id="app">
    
      <router-view /> <!-- This will render the component for the current route -->
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
/* Global styles or overrides */
body {
  margin: 0; /* Remove default margin */
  font-family: Arial, sans-serif; /* Set global font */
}
</style>
