<template>
  <div>
    <AppHeader />
    <section
      class="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-3 mt-10 mb-16"
    >
      <!--   ✅ Product card 1 - Starts Here 👇 -->
      <div
        class="w-24 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        @click="navigateToDetail(1)"
        v-for="product in visibleListProducts"
        :key="product.id"
      >
        <a href="#">
          <img
            v-if="product.image"
            :src="product.image"
            alt="Product"
            class="h-24 w-24 object-cover rounded-t-xl"
          />
          <img
            v-else
            src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
            alt="Product"
            class="h-24 w-24 object-cover rounded-t-xl"
          />
          <div class="px-2 py-3 w-24">
            <p
              class="text-xs font-bold text-black block capitalize"
              style="white-space: 'wrap'; overflow: hidden"
            >
              {{product.name }}
            </p>
            <div class="flex items-center">
              <p class="text-xs font-semibold text-black cursor-auto my-3">
                ${{product.price}}
              </p>
            </div>
          </div>
        </a>
      </div>
        <!--   🛑 Product card 1 - Ends Here  -->
    </section>
    <div v-if="loading" class="flex justify-center items-center mb-20">
      <button @click="loadMore" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  {{more}}
</button>   
    </div>
    
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from "./Header.vue";
import AppFooter from "./AppFooter.vue";
import axios from "axios";
export default {
  name: "ListProduct",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      listProducts: [],
      length: 6 ,
      loading:false,
      more:"Load More"
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    visibleListProducts() {
      return this.listProducts.slice(0, this.length)
    }
  },
  methods: {
    async fetchData() {
      try {
        const category = localStorage.getItem("category");
        const brand = localStorage.getItem("brand");
        const gender = localStorage.getItem("gender");

        const response = await axios.get(
          "/api/catalog/product?brand_id=" +
            brand +
            "&category_id=" +
            category +
            "&gender_id=" +
            gender
        );
        this.listProducts = response.data.data; // Assuming 'data' key contains array of items
        this.loading = false; // Set loading to false once data is fetched
        // console.log(response.data.data);
        this.loading=true;
      } catch (error) {
        console.error("Error fetching data:", error);
        this.loading = false; // Set loading to false in case of error
      }
    },
    loadMore() {
      if (this.length > this.listProducts.length){
        this.more="Less More";
        this.length=6;
        return;
      } 
      else{
        this.more="Load More";
        this.length = this.length + 3;
        if (this.length >= this.listProducts.length){
          this.more="Less More";
        }
      }
      
    },
    navigateToDetail(productId) {
      // Navigate to ProductDetails route with productId parameter
      this.$router.push({ name: "detailproduct", params: {productId } });
    },
  },
};
</script>

<style>
/* No additional styles needed, all Tailwind classes are applied inline */
</style>
