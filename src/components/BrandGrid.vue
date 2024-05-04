<template>
    
    <div class="container mx-auto p-4">
      <h1 class="text-xl font-bold mb-4 text-center">Brands</h1>
      <!-- Grid of category cards -->
      <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BrandCard v-for="brand in brands" :key="brand.id" :brand="brand" />
      </div>
    </div>
  </template>
  
  <script>
  import BrandCard from './BrandCard.vue';
  import axios from 'axios';
  export default {
    components: {
      BrandCard
    },
    data() {
      return {
        brands:[]
      };
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      async fetchData() {
      try {
        const response = await axios.get('/api/catalog/brand');
        this.brands = response.data.data; // Assuming 'data' key contains array of items
      } catch (error) {
        console.error('Error fetching data:', error);
        this.loading = false; // Set loading to false in case of error
      }
    }
    }
  };
  </script>
  
  <style>
  /* No additional styles needed, Tailwind CSS classes handle layout */
  </style>
  