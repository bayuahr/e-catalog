<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    @click="navigateToBrand(category.id)"
  >
    <img :src="category.image" :alt="category.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2 text-center">{{ category.name }}</h2>    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToBrand(categoryId) {
      // Navigate to ProductDetails route with productId parameter
      this.$router.push({ name: 'brand', params: { categoryId } });
    }
  }
};
</script>

<style>
/* Add hover effect to scale the card on hover */
.transform {
  transition-property: transform;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
