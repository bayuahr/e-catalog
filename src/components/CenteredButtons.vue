<template>
  <div class="flex items-center justify-center" style="height: 70vh;">
    <div class="flex flex-row items-center">
      <button class="button bg-blue-700" @click="navigateToListProduct(1)">Male</button>
      <button class="button bg-red-300" @click="navigateToListProduct(2)">Female</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenteredButtons",
  methods: {
    navigateToListProduct(gender) {
      // Navigate to ProductDetails route with productId parameter
      this.$router.push({ name: 'ListProduct', params: { gender } });
    }
  }
};
</script>

<style>
.button {
  width: 150px; /* Set the desired width for the buttons */
  height: 50px; /* Set the desired height for the buttons */
  color: white; /* Set the text color */
  font-size: 16px; /* Set the font size */
  font-weight: bold; /* Set the font weight */
  border: none; /* Remove button border */
  border-radius: 8px; /* Add border radius for rounded corners */
  cursor: pointer; /* Change cursor to pointer on hover */
  margin: 10px; /* Add margin around each button */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}
</style>
