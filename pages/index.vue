<template>
  <div>
    <!-- Banner -->
    <div class="sec-banner bg0 p-t-80 p-b-50">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <!-- Block1 -->
            <div class="block1 wrap-pic-w">
              <img src="@/assets/images/banner-01.jpg" alt="IMG-BANNER" />

              <NuxtLink
                to="/shop/women"
                class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div class="block1-txt-child1 flex-col-l">
                  <span class="block1-name ltext-102 trans-04 p-b-8">
                    Women
                  </span>

                  <span class="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div class="block1-txt-child2 p-b-4 trans-05">
                  <div class="block1-link stext-101 cl0 trans-09">Shop Now</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <!-- Block1 -->
            <div class="block1 wrap-pic-w">
              <img src="@/assets/images/banner-02.jpg" alt="IMG-BANNER" />

              <NuxtLink
                to="/shop/men"
                class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div class="block1-txt-child1 flex-col-l">
                  <span class="block1-name ltext-102 trans-04 p-b-8">
                    Men
                  </span>

                  <span class="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div class="block1-txt-child2 p-b-4 trans-05">
                  <div class="block1-link stext-101 cl0 trans-09">Shop Now</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <!-- Block1 -->
            <div class="block1 wrap-pic-w">
              <img src="@/assets/images/banner-03.jpg" alt="IMG-BANNER" />

              <NuxtLink
                to="/shop"
                class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div class="block1-txt-child1 flex-col-l">
                  <span class="block1-name ltext-102 trans-04 p-b-8">
                    Accessories
                  </span>

                  <span class="block1-info stext-102 trans-04">
                    New Trend
                  </span>
                </div>

                <div class="block1-txt-child2 p-b-4 trans-05">
                  <div class="block1-link stext-101 cl0 trans-09">Shop Now</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product -->
    <section class="bg0 p-t-23 p-b-140">
      <div class="container">
        <div class="p-b-30">
          <h3 class="ltext-103 cl5">Sản Phẩm Mới Nhất</h3>
        </div>

        <product-list :data="data"></product-list>

        <!-- Load more -->
        <div class="flex-c-m flex-w w-full p-t-45">
          <NuxtLink
            to='/shop'
            class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
          >
            Load More
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductList from '../components/Product/ProductList.vue';
import products from "@/static/data/product.json";

export default {
  components: { ProductList },
  head: {
    script: [{ src: "js/main.js", type: "text/javascript", body: true }],
  },
  data () {
    return {
      data: [...products].slice([...products].length-9, [...products].length-1)
    }
  },
  mounted() {
    console.log(products)
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
               swal("Đã Thêm Vào Giỏ Hàng", "success");

        $(this).addClass("js-addedwish-detail");
        $(this).off("click");
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