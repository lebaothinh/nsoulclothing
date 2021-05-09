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
  data() {
    return {
      product: [...products][0],
    };
  },
  mounted() {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
    if (this.$route.query.id) {
      this.product = [...products].find(p => p.id == this.$route.query.id)
    }
  }
};
</script>

<style>
</style>