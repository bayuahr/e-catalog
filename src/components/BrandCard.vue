<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    @click="navigateToGender(brand.id)"
  >
    <img
      :src="brand.image"
      :alt="brand.name"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2 text-center">{{ brand.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateToGender(brandId) {
      // Navigate to ProductDetails route with productId parameter
      this.$router.push({ name: "gender", params: {brandId } });
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
