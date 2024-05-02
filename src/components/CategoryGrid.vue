<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4 text-center">Kategori Produk</h1>
    <!-- Grid of category cards -->
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue';

export default {
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Elektronik', image: 'https://aseranishi.com/wp-content/uploads/2023/11/rekomendasi-jenis-alat-elektronik-rumah-tangga.jpg' },
        { id: 2, name: 'Baju', image: 'https://img.lazcdn.com/g/p/755fedc6a4d647169d8ad77bb7bf12fa.jpg_720x720q80.jpg' },
        { id: 3, name: 'Sepatu', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/99/MTA-137606138/brd-44261_sneakers-wanita-sport-shoes-canvas-cewek-sepatu-olahraga-a2026_full07-43ad062c.jpg' },
        { id: 4, name: 'Sandal', image: 'https://res.cloudinary.com/ruparupa-com/image/upload/w_500,h_500/f_auto,q_auto:eco/v1658293404/Products/10475775_1.jpg' },
        // Add more categories with image URLs as needed
      ]
    };
  }
};
</script>

<style>
/* No additional styles needed, Tailwind CSS classes handle layout */
</style>
