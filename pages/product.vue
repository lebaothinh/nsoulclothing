<template>
  <div>
    <head>
      <title>{{product.title}}</title>
      <meta name="description" :content="product.subTitle"/>
      <meta name="og:image" :content="'images/products/' + product.images[0]"/>
    </head>
    <!-- Content page -->
    <section class="bg0 p-t-104 p-b-116">
      <product-detail :isDetail="true" :product="product" />
    </section>
  </div>
</template>

<script>
import ProductDetail from "@/components/Product/ProductDetail.vue";
import products from "@/static/data/product.json";

export default {
  components: { ProductDetail },
  data() {
    return {
      product: [...products][0],
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.product = [...products].find(p => p.id == this.$route.query.id)
    }
  }
};
</script>

<style>
</style>