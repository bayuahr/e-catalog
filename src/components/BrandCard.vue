<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    @click="navigateToGender(brand.id)"
  >
  <img
      v-if="brand.image"
      :src="brand.image"
      :alt="brand.name"
      class="w-full h-24 object-contain"
    />
    <img
      v-else
      src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
      :alt="brand.name"
      class="w-full h-24 object-contain"
    />
    

    <div class="p-4">
      <p class="text-sm font-semibold mb-2 text-center">{{ brand.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToGender(brandId) {
      // Navigate to ProductDetails route with productId parameter
      localStorage.setItem('brand', brandId);
      this.$router.push({ name: "gender"});
    },
  },
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
