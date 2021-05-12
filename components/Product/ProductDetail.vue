<template>
  <div v-if="product">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-7 p-b-30">
          <div class="p-l-25 p-r-30 p-lr-0-lg">
            <div class="wrap-slick3 flex-sb flex-w">
              <div class="wrap-slick3-dots"></div>
              <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

              <div class="slick3 gallery-lb">
                <template v-if="product.imageSrc">
                  <div
                    v-for="(image, i) in product.imageSrc || []"
                    :key="i"
                    class="item-slick3"
                    :data-thumb="image"
                  >
                    <div class="wrap-pic-w pos-relative">
                      <img :src="image" alt="IMG-PRODUCT" />

                      <a
                        class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      >
                        <i class="fa fa-expand"></i>
                      </a>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div
                    v-for="(image, i) in product.images || []"
                    :key="i"
                    class="item-slick3"
                    :data-thumb="'images/products/' + image"
                  >
                    <div class="wrap-pic-w pos-relative">
                      <img
                        :src="'images/products/' + image"
                        alt="IMG-PRODUCT"
                      />

                      <a
                        class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                        :href="'images/products/' + image"
                      >
                        <i class="fa fa-expand"></i>
                      </a>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-5 p-b-30">
          <div class="p-r-50 p-t-5 p-lr-0-lg">
            <nuxt-link :to="'/product?id=' + product.id">
              <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                {{ product.title || "Chưa đặt tên" }}
              </h4>
            </nuxt-link>

            <span class="mtext-106 cl2">
              {{
                product && product.price
                  ? Number(product.price).toLocaleString() + " VNĐ"
                  : "Giá chưa có"
              }}
            </span>

            <p class="stext-102 cl3 p-t-23">
              {{ product.subTitle }}
            </p>

            <!--  -->
            <div class="p-t-33">
              <div class="flex-w flex-r-m p-b-10">
                <div class="size-203 flex-c-m respon6">Size</div>

                <div class="size-204 respon6-next">
                  <div class="rs1-select2 bor8 bg0">
                    <select
                      v-select2
                      v-model="size"
                      class="js-select2"
                      name="time"
                    >
                      <option value="">Chọn một size</option>
                      <option
                        :value="size"
                        :key="size"
                        v-for="size in product.sizes"
                      >
                        Size {{ size }}
                      </option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </div>
              </div>

              <div class="flex-w flex-r-m p-b-10">
                <div class="size-203 flex-c-m respon6">Màu</div>

                <div class="size-204 respon6-next">
                  <div class="rs1-select2 bor8 bg0">
                    <select
                      v-select2
                      v-model="color"
                      class="js-select2"
                      name="time"
                    >
                      <option value="">Chọn một màu</option>
                      <option
                        :value="color"
                        :key="color"
                        v-for="color in product.colors"
                      >
                        {{ color }}
                      </option>
                    </select>
                    <div class="dropDownSelect2"></div>
                  </div>
                </div>
              </div>

              <div class="flex-w flex-r-m p-b-10">
                <div class="size-204 flex-w flex-m respon6-next">
                  <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                    <div
                      @click="
                        () => {
                          amount = amount > 0 ? amount - 1 : amount;
                        }
                      "
                      class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                    >
                      <i class="fs-16 zmdi zmdi-minus"></i>
                    </div>

                    <input
                      class="mtext-104 cl3 txt-center num-product"
                      type="number"
                      name="num-product"
                      v-model="amount"
                    />

                    <div
                      @click="
                        () => {
                          amount += 1;
                        }
                      "
                      class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                    >
                      <i class="fs-16 zmdi zmdi-plus"></i>
                    </div>
                  </div>

                  <button
                    @click="addToCart()"
                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                  >
                    Thêm Vào Giỏ
                  </button>
                </div>
              </div>
            </div>

            <!--  -->
            <div class="flex-w flex-m p-l-100 p-t-40 respon7">
              <a
                href="https://www.facebook.com/nsoulclothing"
                class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                data-tooltip="Facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/nsoulclothing/"
                class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                data-tooltip="Instagram"
              >
                <i class="fa fa-instagram"></i>
              </a>

              <div
                class="fb-share-button"
                :data-href="'/product?id='+ product.id"
                data-layout="button_count"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isDetail" class="bor10 m-t-50 p-t-43 p-b-40">
        <!-- Tab01 -->
        <div class="tab01">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item p-b-10">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#description"
                role="tab"
                >Mô Tả</a
              >
            </li>

            <li class="nav-item p-b-10">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#information"
                role="tab"
                >Thông Tin Sản Phẩm</a
              >
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content p-t-43">
            <!-- - -->
            <div
              class="tab-pane fade show active"
              id="description"
              role="tabpanel"
            >
              <div class="how-pos2 p-lr-15-md">
                <p class="stext-102 cl6">
                  {{ product.description }}
                </p>
              </div>
            </div>

            <!-- - -->
            <div class="tab-pane fade" id="information" role="tabpanel">
              <div class="row">
                <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                  <ul class="p-lr-28 p-lr-15-sm">
                    <li class="flex-w flex-t p-b-7">
                      <span class="stext-102 cl3 size-205"> Trọng lượng </span>

                      <span class="stext-102 cl6 size-206">
                        {{ product.weight || "unknown" }}
                      </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                      <span class="stext-102 cl3 size-205"> Kích thước </span>

                      <span class="stext-102 cl6 size-206">
                        {{ product.demensions || "unknown" }}
                      </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                      <span class="stext-102 cl3 size-205"> Chất liệu </span>

                      <span class="stext-102 cl6 size-206">
                        {{ product.material || "unknown" }}
                      </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                      <span class="stext-102 cl3 size-205"> Màu sắc </span>

                      <span class="stext-102 cl6 size-206">
                        {{
                          (product.colors && product.colors.join(", ")) ||
                          "unknown"
                        }}
                      </span>
                    </li>

                    <li class="flex-w flex-t p-b-7">
                      <span class="stext-102 cl3 size-205"> Size </span>

                      <span class="stext-102 cl6 size-206">
                        {{
                          (product.sizes && product.sizes.join(", ")) ||
                          "unknown"
                        }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isDetail" class="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
      <span class="stext-107 cl6 p-lr-25"> ID: {{ product.id }} </span>

      <span class="stext-107 cl6 p-lr-25">
        Thể Loại: {{ product.categories && product.categories.join(", ") }}
      </span>
    </div>
  </div>
  <div v-else>
    <h1 class="text-center m-b-20">Sản Phẩm Này Không Tồn Tại</h1>
    <nuxt-link to="/" class="m-t-50 text-center"><h3>Quay về trang chủ</h3></nuxt-link>
  </div>
</template>

<script>
import { Product } from "./ProductCard";
import Vue from "vue";
Vue.directive("select2", {
  inserted(el) {
    $(el).on("select2:select", () => {
      const event = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      el.dispatchEvent(event);
    });

    $(el).on("select2:unselect", () => {
      const event = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      el.dispatchEvent(event);
    });
  },
});
export default {
  data() {
    return {
      isSlicked: false,
      size: "",
      color: "",
      amount: 1,
    };
  },
  methods: {
    addToCart() {
      if (this.isView) {
        return;
      }
      if (!this.size) {
        swal("Vui lòng chọn một size", "Thiếu thông tin!", "info");
        return;
      }
      if (!this.color) {
        swal("Vui lòng chọn một màu", "Thiếu thông tin!", "info");
        return;
      }
      try {
        let cart = JSON.parse(localStorage.getItem("CozaShopCart")) || [];

        let _product = cart.find(
          (p) =>
            p.product.id == this.product.id &&
            p.color == this.color &&
            p.size == this.size
        );
        if (
          _product &&
          _product.size == this.size &&
          _product.color == this.color
        ) {
          _product.amount += this.amount;
        } else {
          cart.push({
            id: Date.now() + cart.length,
            product: this.product,
            size: this.size,
            color: this.color,
            amount: this.amount,
          });
        }

        localStorage.setItem("CozaShopCart", JSON.stringify(cart));
        swal("Thêm Vào Giỏ Hàng", "Thành Công!", "success");
        this.$root.$emit("cartChange");
      } catch (e) {}
    },
  },
  updated() {
    let slick = $(".wrap-slick3");
    if (this.isSlicked) {
      slick.each(function () {
        $(this).find(".slick3").slick("unslick");
      });
    }
    slick.each(function () {
      $(this)
        .find(".slick3")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,

          arrows: true,
          appendArrows: $(this).find(".wrap-slick3-arrows"),
          prevArrow:
            '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

          dots: true,
          appendDots: $(this).find(".wrap-slick3-dots"),
          dotsClass: "slick3-dots",
          customPaging: function (slick, index) {
            var portrait = $(slick.$slides[index]).data("thumb");
            return (
              '<img src="' +
              portrait +
              '"/><div class="slick3-dot-overlay"></div>'
            );
          },
        });
    });
    this.isSlicked = true;
  },
  mounted() {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
    $(".wrap-slick3").each(function () {
      $(this)
        .find(".slick3")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,

          arrows: true,
          appendArrows: $(this).find(".wrap-slick3-arrows"),
          prevArrow:
            '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

          dots: true,
          appendDots: $(this).find(".wrap-slick3-dots"),
          dotsClass: "slick3-dots",
          customPaging: function (slick, index) {
            var portrait = $(slick.$slides[index]).data("thumb");
            return (
              '<img src="' +
              portrait +
              '"/><div class="slick3-dot-overlay"></div>'
            );
          },
        });
    });
    this.isSlicked = true;
  },
  props: {
    product: Product,
    isDetail: Boolean,
    isView: Boolean,
  },
};
</script>

<style>
</style>