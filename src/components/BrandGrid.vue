<template>
    
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4 text-center">Brand Grid</h1>
      <!-- Grid of category cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BrandCard v-for="brand in brands" :key="brand.id" :brand="brand" />
      </div>
    </div>
  </template>
  
  <script>
  import BrandCard from './BrandCard.vue';
  
  export default {
    components: {
      BrandCard
    },
    data() {
      return {
        brands: [
          { id: 1, name: 'Adidas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/725px-Adidas_Logo.svg.png' },
          { id: 2, name: 'Nike', image: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg' },
          { id: 3, name: 'FlipFlop', image: 'https://cdn.vectorstock.com/i/preview-1x/17/38/stylized-pair-of-three-colored-rubber-flip-flops-vector-13361738.jpg' },
          { id: 4, name: 'NB', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png' },
          // Add more brands with image URLs as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  /* No additional styles needed, Tailwind CSS classes handle layout */
  </style>
  