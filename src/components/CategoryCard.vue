<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    @click="navigateToBrand(category.id)"
  >
    <img v-if="category.image" :src="category.image" :alt="category.name" class="w-full h-24 object-contain">
    <img v-else src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg" :alt="category.name" class="w-full h-24 object-contain" >

    
    <div class="p-2">
      <p class="text-sm font-semibold mb-2 text-center" style="word-break: break-word;">{{ category.name }}</p>    </div>
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
      localStorage.setItem('category', categoryId);
      this.$router.push({ name: 'brand'});
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
