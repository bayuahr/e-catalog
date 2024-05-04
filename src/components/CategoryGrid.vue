<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4 text-center">Kategori Produk</h1>
    <!-- Grid of category cards -->
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CategoryCard v-for="category in items" :key="category.id" :category="category" />
      
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';
import axios from 'axios';
export default {
  components: {
    CategoryCard
  },
  data() {
    return {
      items: [], // To store fetched data
      loading: true // Loading indicator
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/api/catalog/category');
        this.items = response.data.data; // Assuming 'data' key contains array of items
        this.loading = false; // Set loading to false once data is fetched
        console.log(response.data.data)
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
