<template>
  <div>
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
  head() {
    return this.product ? {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.product.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.product.subTitle
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/product/'+this.product.images[0]
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.product.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.product.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.subTitle
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/product/'+this.product.images[0]
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: '/images/product/'+this.product.images[0]
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.product.title
        }
      ]
    } : {}
  },
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