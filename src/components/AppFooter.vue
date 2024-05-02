<!-- components/Footer.vue -->
<template>
    <footer class="footer" style="background-color: #FCA5FC;">
      <button @click="navigateToHome" class="close-icon">(X) Close</button>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToHome() {
        // Navigate to the home page using Vue Router
        this.$router.push({name:"home"});
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 10px;
    text-align: center;
  }
  
  .close-icon {
    background-color: transparent;
    color: #000;
    font-size: 24px;
    border: none;
    cursor: pointer;
  }
  </style>
  