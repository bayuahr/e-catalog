<!-- components/Footer.vue -->
<template>
    <footer class="footer bg-gray-800">
      <button @click="navigateToHome" class="close-icon text-white">(X) Close</button>
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
    padding: 10px;
    text-align: center;
  }
  
  .close-icon {
    background-color: transparent;
    font-size: 24px;
    border: none;
    cursor: pointer;
  }
  </style>
  