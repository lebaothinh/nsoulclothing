<template>
  <div class="bg0 p-t-80 p-b-140">
    <div class="container">
      <div class="flex-w flex-sb-m p-b-52">
        <div class="flex-w flex-l-m filter-tope-group m-tb-10">
          <button
            :class="isSelectAll == -1 ? 'stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1' : 'stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5'"
            data-filter="*"
            @click="onSelectAll()"
          >
            All Products
          </button>

          <button
            :key="cate"
            v-for="(cate, index) in getCategories"
            @click="onSelectCategory(cate, index)"
            :class="isSelectAll == index ? 'stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1' : 'stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5'"
          >
            {{ cate }}
          </button>
        </div>
      </div>
      <product-list :data="data" />
    </div>
  </div>
</template>

<script>
import ProductList from "../../components/Product/ProductList.vue";
import products from "@/static/data/product.json";

export default {
  created() {
    console.log(this.$route)
  },
  data: () => ({
    data: products,
    isSelectAll: -1
  }),
  computed: {
    getCategories: function() {
      let categories =
        [].concat.apply(
          [],
          products.map((p) => p.categories)
        ) || [];
      return [...new Set(categories.map((c) => this.capitalizeFirstLetter(c)))];
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onSelectCategory(cate, index) {
      this.isSelectAll = index;
      this.data = products.filter((p) =>
        p.categories.some((c) => c.toLowerCase() === cate.toLowerCase())
      );
    },
    onSelectAll() {
      this.data = products;
      this.isSelectAll = -1;
    },
  },
  components: { ProductList },
  mounted() {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
    $(".parallax100").parallax100();
    $(".gallery-lb").each(function () {
      // the containers for all your galleries
      $(this).magnificPopup({
        delegate: "a", // the selector for gallery item
        type: "image",
        gallery: {
          enabled: true,
        },
        mainClass: "mfp-fade",
      });
    });
    $(".js-addwish-b2").on("click", function (e) {
      e.preventDefault();
    });
    $(".js-addwish-b2").each(function () {
      var nameProduct = $(this).parent().parent().find(".js-name-b2").html();
      $(this).on("click", function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass("js-addedwish-b2");
        $(this).off("click");
      });
    });
    $(".js-addwish-detail").each(function () {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .find(".js-name-detail")
        .html();

      $(this).on("click", function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass("js-addedwish-detail");
        $(this).off("click");
      });
    });
    $(".js-addcart-detail").each(function () {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".js-name-detail")
        .html();
      $(this).on("click", function () {
        swal('Thêm Vào Giỏ Hàng',"Thành Công!", "success");
      });
    });
    $(".js-pscroll").each(function () {
      $(this).css("position", "relative");
      $(this).css("overflow", "hidden");
      var ps = new PerfectScrollbar(this, {
        wheelSpeed: 1,
        scrollingThreshold: 1000,
        wheelPropagation: false,
      });

      $(window).on("resize", function () {
        ps.update();
      });
    });
  },
};
</script>

<style>
</style>