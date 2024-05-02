<template>
  <section
    class="container flex-grow mx-auto mb-16 max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10"
  >
    <!-- Image Gallery -->
    <div class="container mx-auto px-4">
      <div class="relative">
        <!-- Main Image -->
        <img
          :src="mainImage"
          alt="Main Image"
          class="w-full rounded-lg shadow-lg"
        />

        <!-- Thumbnail Container at Bottom -->
        <div
          class="absolute left-0 w-full bg-white p-2 flex justify-center items-center"
          style="gap: 10px"
        >
          <!-- Thumbnail Image -->
          <img
            v-for="(thumbnail, index) in productDetailItem.images.slice(1, 4)"
            :key="index + 1"
            :src="thumbnail.thumbnail"
            :alt="'Thumbnail ' + (index + 1)"
            class="h-12 w-12 object-cover rounded-lg border-2 border-gray-200"
            @click="changeMainImage(thumbnail)"
          />
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="mx-auto px-5 lg:px-5">
      <h2 class="pt-24 text-2xl font-bold lg:pt-0">
        {{ productDetailItem.title }}
      </h2>
      <p class="mt-5 font-bold">
        Availability:
        <span
          :class="{
            'text-green-600': productDetailItem.availability,
            'text-red-600': !productDetailItem.availability,
          }"
        >
          {{ productDetailItem.availability ? "In Stock" : "Expired" }}
        </span>
      </p>
      <p class="font-bold">
        Gender: <span class="font-normal">{{ productDetailItem.gender }}</span>
      </p>
      <p class="font-bold">
        Brand: <span class="font-normal">{{ productDetailItem.brand }}</span>
      </p>
      <p class="font-bold">
        Category:
        <span class="font-normal">{{ productDetailItem.category }}</span>
      </p>
      <p class="mt-4 text-4xl font-bold text-violet-900">
        ${{ productDetailItem.price }}
      </p>
      <p class="font-bold mt-4">Description:</p>
      <p class="pt-2 text-sm leading-5 text-gray-500">
        {{ productDetailItem.description }}
      </p>
      <h2 class="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        Promotion:
      </h2>
      <ul
        class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li>Free Voucher 1 Juta</li>
        <li>Get 100 Points</li>
      </ul>
      <div class="mt-6">
        <h2 class="mb-2 mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        Variant:
      </h2>
        <div class="flex space-x-2">
          <button
            v-for="color in productDetailItem.variant"
            :key="color"
            style="background-color: cadetblue;"
            class="h-12 w-40 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            @click="selectColor(color)"
          >{{ color }}</button>
        </div>
      </div>
      <!-- <div class="mt-6">
        <p class="pb-2 text-xs text-gray-500">Quantity</p>
        <div class="flex">
          <button
            @click="decrementQuantity"
            class="flex h-8 w-8 items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            −
          </button>
          <div
            class="flex h-8 w-8 items-center justify-center border-t border-b active:ring-gray-500"
          >
            {{ productDetailItem.quantity }}
          </div>
          <button
            @click="incrementQuantity"
            class="flex h-8 w-8 items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            +
          </button>
        </div>
      </div> -->
      <!-- <div class="mt-7 flex flex-row items-center gap-6">
        <button
          @click="addToCart"
          class="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800"
        >
          Add to Cart
        </button>
        <button
          @click="addToWishlist"
          class="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300"
        >
          Wishlist
        </button>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      productDetailItem: {
        images: [
          {
            original:
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            original:
              "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            thumbnail:
              "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            original:
              "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            thumbnail:
              "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        ],
        variant:[
          "Variant 1","Variant 2","Variant 3"
        ],
        title: "BIG ITALIAN SOFA",
        reviews: "150",
        availability: true,
        gender: "male",
        brand: "apex",
        category: "Sofa",
        sku: "BE45VGTRK",
        price: 450,
        previousPrice: 599,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
        size: ["XS", "S", "M", "L", "XL"],
        color: ["gray", "violet", "red"],
        quantity: 1, // Initialize quantity
      },
      mainImage:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    };
  },
  methods: {
    incrementQuantity() {
      this.productDetailItem.quantity++;
    },
    decrementQuantity() {
      if (this.productDetailItem.quantity > 1) {
        this.productDetailItem.quantity--;
      }
    },
    // addToCart() {
    //   // Implement add to cart logic
    //   console.log("Adding to cart:", this.productDetailItem.title);
    // },
    // addToWishlist() {
    //   // Implement add to wishlist logic
    //   console.log("Adding to wishlist:", this.productDetailItem.title);
    // },
    changeMainImage(image) {
      this.mainImage = image.original;
    },
  },
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>
