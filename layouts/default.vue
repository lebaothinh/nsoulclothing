<template>
  <div>
    <header>
      <!-- Header desktop -->
      <div class="container-menu-desktop" style="z-index: 99">
        <div class="wrap-menu-desktop">
          <nav class="limiter-menu-desktop container" style="min-height: unset">
            <!-- Logo desktop -->
            <nuxt-link to="/" class="logo">
              <img src="/images/icons/logo.png" alt="IMG-LOGO" />
            </nuxt-link>

            <!-- Menu desktop -->
            <div class="menu-desktop">
              <ul class="main-menu">
                <li :class="getActive('index')">
                  <NuxtLink to="/">Trang Chủ</NuxtLink>
                  <!-- <ul class="sub-menu">
                    <li><a href="index.html">Homepage 1</a></li>
                    <li><a href="home-02.html">Homepage 2</a></li>
                    <li><a href="home-03.html">Homepage 3</a></li>
                  </ul> -->
                </li>

                <li :class="getActive('shop')">
                  <NuxtLink data-label="hot" to="/shop">Sản Phẩm</NuxtLink>
                </li>

                <li :class="getActive('about')">
                  <NuxtLink to="/about">Giới Thiệu</NuxtLink>
                </li>

                <li :class="getActive('contact')">
                  <NuxtLink to="/contact">Liên Hệ</NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Icon header -->
            <div class="wrap-icon-header flex-w flex-r-m">
              <div
                class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                :data-notify="this.count"
              >
                <i class="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <!-- Header Mobile -->
      <div class="wrap-header-mobile">
        <!-- Logo moblie -->
        <div class="logo-mobile">
          <NuxtLink to="/"
            ><img src="/images/icons/logo.png" alt="IMG-LOGO"
          /></NuxtLink>
        </div>

        <!-- Icon header -->
        <div class="wrap-icon-header flex-w flex-r-m m-r-15">
          <div
            class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            :data-notify="this.count"
          >
            <i class="zmdi zmdi-shopping-cart"></i>
          </div>
        </div>

        <!-- Button show menu -->
        <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div class="menu-mobile">
        <ul class="main-menu-m">
          <li :class="'menu-link '+getActive('index')">
            <NuxtLink to="/">Trang Chủ</NuxtLink>
            <!-- <ul class="sub-menu-m">
              <li><a href="index.html">Homepage 1</a></li>
              <li><a href="home-02.html">Homepage 2</a></li>
              <li><a href="home-03.html">Homepage 3</a></li>
            </ul> -->
          </li>

          <li :class="'menu-link '+getActive('shop')">
            <NuxtLink data-label1="hot" to="/shop">Sản Phẩm</NuxtLink>
          </li>

          <li :class="'menu-link '+getActive('about')">
            <NuxtLink to="/about">Giới Thiệu</NuxtLink>
          </li>

          <li :class="'menu-link '+getActive('contact')">
            <NuxtLink to="/contact">Liên Hệ</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Modal Search -->
      <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div class="container-search-header">
          <button
            class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search"
          >
            <img src="/images/icons/icon-close2.png" alt="CLOSE" />
          </button>

          <form class="wrap-search-header flex-w p-l-15">
            <button class="flex-c-m trans-04">
              <i class="zmdi zmdi-search"></i>
            </button>
            <input
              class="plh3"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </header>
    <!-- Cart -->
    <div class="wrap-header-cart js-panel-cart">
      <div class="s-full js-hide-cart"></div>

      <div class="header-cart flex-col-l p-l-65 p-r-25">
        <div class="header-cart-title flex-w flex-sb-m p-b-8">
          <span class="mtext-103 cl2"> GIỎ HÀNG CỦA BẠN </span>

          <div
            class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart"
          >
            <i class="zmdi zmdi-close"></i>
          </div>
        </div>

        <div class="header-cart-content flex-w js-pscroll">
          <ul class="header-cart-wrapitem w-full">
            <li v-if="!cart.length">Trống</li>
            <li
              v-for="(product, index) in cart"
              :key="index"
              class="header-cart-item flex-w flex-t m-b-12"
            >
              <div
                class="header-cart-item-img"
                @click="() => onRemoveCart(product.id)"
              >
                <img
                  :src="'/images/products/' + product.product.images[0]"
                  alt="IMG"
                />
              </div>

              <div class="header-cart-item-txt p-t-8">
                <a
                  href="#"
                  class="header-cart-item-name m-b-18 hov-cl1 trans-04"
                >
                  {{
                    product.product.title +
                      ` (Size ${product.size}, ${product.color})` || "No title"
                  }}
                </a>

                <span class="header-cart-item-info">
                  {{ product.amount }} x {{ Number(product.product.price).toLocaleString() }}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <div class="header-cart-total w-full p-tb-20">
            Total:
            {{
              cart
                .map((p) => Number(p.product.price.replace(/[^0-9.-]+/g, "")))
                .reduce((a, b) => a + b, 0).toLocaleString()
            }}
            VNĐ
          </div>

          <div class="header-cart-buttons flex-w w-full m-b-50">
            <nuxt-link
              @click="onCloseCart"
              to="/cart"
              class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              ><span @click="() => onCloseCart()">THANH TOÁN</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <!-- Footer -->
    <footer class="bg3 p-t-75 p-b-32">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Thể Loại</h4>

            <ul>
              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Women </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Men </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Shoes </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Watches </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Hỗ Trợ</h4>

            <ul>
              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Track Order
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Returns </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Shipping
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> FAQs </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Liên Hệ</h4>

            <p class="stext-107 cl7 size-201">
              Ghé shop tại số 10, đường số 1, khu phố 5, phường Hiệp Bình Chánh,
              quận Thủ Đức, Hồ Chí Minh, Việt Nam
            </p>

            <div class="p-t-27">
              <a
                href="https://www.facebook.com/nsoulclothing"
                class="fs-18 cl7 hov-cl1 trans-04 m-r-16"
              >
                <i class="fa fa-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/nsoulclothing/"
                class="fs-18 cl7 hov-cl1 trans-04 m-r-16"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to top -->
    <div class="btn-back-to-top" id="myBtn">
      <span class="symbol-btn-back-to-top">
        <i class="zmdi zmdi-chevron-up"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "vendor/jquery/jquery-3.2.1.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/animsition/js/animsition.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/bootstrap/js/popper.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/bootstrap/js/bootstrap.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/select2/select2.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/daterangepicker/moment.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/daterangepicker/daterangepicker.js",
        type: "text/javascript",
        body: true,
      },
      { src: "vendor/slick/slick.min.js", type: "text/javascript", body: true },
      { src: "js/slick-custom.js", type: "text/javascript", body: true },
      {
        src: "vendor/parallax100/parallax100.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/MagnificPopup/jquery.magnific-popup.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/isotope/isotope.pkgd.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/sweetalert/sweetalert.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "vendor/perfect-scrollbar/perfect-scrollbar.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },
  created() {
    this.$root.$on("cartChange", this.cartChange);
  },
  data() {
    return {
      cart: [],
      count: 0,
    };
  },
  methods: {
    onCloseCart: function () {
      $(".js-hide-cart").click();
    },
    getActive: function (path) {
      return this.$route.name == path ? "active-menu" : "";
    },
    cartChange: function () {
      this.cart = JSON.parse(localStorage.getItem("CozaShopCart")) || [];
      this.count = this.cart.reduce(function (acc, val) {
        return acc + val.amount;
      }, 0);
    },
    onRemoveCart: function (id) {
      localStorage.setItem(
        "CozaShopCart",
        JSON.stringify(this.cart.filter((c) => c.id != id))
      );
      this.cartChange();
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("CozaShopCart")) || [];
    this.count = this.cart.reduce(function (acc, val) {
      return acc + val.amount;
    }, 0);
    $(".menu-link").on("click", function () {
      $(".menu-mobile").slideToggle();
    })
    $(".js-show-cart").on("click", function () {
      $(".js-panel-cart").addClass("show-header-cart");
    });

    $(".js-hide-cart").on("click", function () {
      $(".js-panel-cart").removeClass("show-header-cart");
    });

    /*==================================================================
    [ Cart ]*/
    $(".js-show-sidebar").on("click", function () {
      $(".js-sidebar").addClass("show-sidebar");
    });

    $(".js-hide-sidebar").on("click", function () {
      $(".js-sidebar").removeClass("show-sidebar");
    });

    $(".btn-show-menu-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".menu-mobile").slideToggle();
    });

    var arrowMainMenu = $(".arrow-main-menu-m");

    for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on("click", function () {
        $(this).parent().find(".sub-menu-m").slideToggle();
        $(this).toggleClass("turn-arrow-main-menu-m");
      });
    }

    $(window).resize(function () {
      if ($(window).width() >= 992) {
        if ($(".menu-mobile").css("display") == "block") {
          $(".menu-mobile").css("display", "none");
          $(".btn-show-menu-mobile").toggleClass("is-active");
        }

        $(".sub-menu-m").each(function () {
          if ($(this).css("display") == "block") {
            console.log("hello");
            $(this).css("display", "none");
            $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
          }
        });
      }
    });
    var headerDesktop = $(".container-menu-desktop");
    var wrapMenu = $(".wrap-menu-desktop");

    if ($(".top-bar").length > 0) {
      var posWrapHeader = $(".top-bar").height();
    } else {
      var posWrapHeader = 0;
    }
    if ($(window).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass("fix-menu-desktop");
      $(wrapMenu).css("top", 0);
    } else {
      $(headerDesktop).removeClass("fix-menu-desktop");
      $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
    }

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass("fix-menu-desktop");
        $(wrapMenu).css("top", 0);
      } else {
        $(headerDesktop).removeClass("fix-menu-desktop");
        $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
      }
    });
  },
  destroyed() {
    this.$root.$off("cartChange", this.cartChange);
  },
};
</script>

