<template>
  <form class="bg0 p-t-75 p-b-85">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
          <div class="m-l-25 m-r--38 m-lr-0-xl">
            <div class="wrap-table-shopping-cart">
              <table class="table-shopping-cart">
                <tr class="table_head">
                  <th class="column-1">Sản Phẩm</th>
                  <th class="column-2"></th>
                  <th class="column-3">Giá</th>
                  <th class="column-4">Số Lượng</th>
                  <th class="column-5">Tổng</th>
                </tr>

                <tr
                  v-for="(product, index) in cart"
                  :key="index"
                  class="table_row"
                >
                  <td class="column-1">
                    <div class="how-itemcart1" @click="() => onRemoveCart(product.id)">
                      <img
                        :src="'images/products/' + product.product.images[0]"
                        alt="IMG"
                      />
                    </div>
                  </td>
                  <td class="column-2">
                    {{ product.product.title }}<br />{{
                      `(Size ${product.size}, ${product.color})`
                    }}
                  </td>
                  <td class="column-3">{{ product.product.price }}</td>
                  <td class="column-4">
                    <div class="wrap-num-product flex-w m-l-auto m-r-0">
                      <div
                        @click="onChangeQuantity(product.id, false)"
                        class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                      >
                        <i class="fs-16 zmdi zmdi-minus"></i>
                      </div>

                      <input
                        class="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product1"
                        v-model="product.amount"
                      />

                      <div
                        @click="onChangeQuantity(product.id, true)"
                        class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                      >
                        <i class="fs-16 zmdi zmdi-plus"></i>
                      </div>
                    </div>
                  </td>
                  <td class="column-5">
                    {{
                      product.amount *
                      Number(product.product.price.replace(/[^0-9.-]+/g, ""))
                    }}
                  </td>
                </tr>
              </table>
            </div>

            <div
              class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm"
            >
              <!-- <div class="flex-w flex-m m-r-20 m-tb-5">
								<input class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code">
							</div> -->

              <div class="cl2">
                Tổng Tiền: <b>{{ getTotal }}VNĐ</b> (Chưa tính phí ship)
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
          <div
            class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm"
          >
            <h4 class="mtext-109 cl2 p-b-30">THÔNG TIN GIAO HÀNG</h4>

            <div>
              <div class="bor8 bg0 m-b-12">
                <input
                  class="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="name"
                  placeholder="Tên"
                  v-model="name"
                />
              </div>

              <div class="bor8 bg0 m-b-12">
                <input
                  class="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="number"
                  name="phonenumber"
                  placeholder="Số Điện Thoại"
                  v-model="phoneNumber"
                />
              </div>

              <div class="bor8 bg0 m-b-22">
                <input
                  class="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="address"
                  placeholder="Địa Chỉ"
                  v-model="address"
                />
              </div>
            </div>

            <div class="flex-w flex-t p-t-27 p-b-33">
              <div class="size-208">
                <span class="mtext-101 cl2"> Tổng: </span>
              </div>

              <div class="size-209 p-t-1">
                <span class="mtext-110 cl2"> {{ getTotal }}VNĐ </span>
              </div>
            </div>

            <button
              @click="onOrder"
              class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      name: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    onOrder: function (e) {
      e.preventDefault();
      let products = "";
      this.cart.forEach((product, index) => {
        products += `${index + 1}. - ID:${product.product.id} | SKU: ${
          product.product.sku
        } - ${product.product.title} (Size ${product.size}, ${product.color} ${
          product.amount
        } cái)\n`;
      });

      if (this.name && this.phoneNumber && this.address) {
        this.$axios
          .post(`https://formspree.io/f/mleadkya`, {
            ["Tên Khách Hàng"]: this.name,
            ["Số Điện Thoại"]: this.phoneNumber,
            ["Địa chỉ"]: this.address,
            ["Sản phẩm đặt mua"]: products,
          })
          .then(function (response) {
            swal(
              "Đặt Hàng Thành Công!",
              "Cảm ơn bạn đã đặt hàng, NSoulClothing sẽ liên hệ lại với bạn để xác nhận đơn hàng!",
              "success"
            );
          })
          .catch(function (error) {
            swal(
              "Gửi thất bại!",
              "Vui lòng chat với với chúng tôi ngay bên dưới để đặt hàng nhanh!",
              "info"
            );
          });
      } else {
        swal("Thiếu thông tin!", "Vui lòng điền đầy đủ thông tin!", "info");
      }
    },
    onRemoveCart: function (id) {
      localStorage.setItem(
        "CozaShopCart",
        JSON.stringify(this.cart.filter((c) => c.id != id))
      );
      this.$root.$emit('cartChange');
      this.cart = JSON.parse(localStorage.getItem("CozaShopCart")) || [];
    },
    onChangeQuantity: function (id, isInc) {
      this.cart = this.cart.map(p => {
        if (p.id == id) {
          p.amount = isInc ? p.amount+1 : p.amount-1
        }
        return p 
      })
      localStorage.setItem(
        "CozaShopCart",
        JSON.stringify(this.cart)
      );
    } 
  },
  computed: {
    getTotal: function () {
      let total = 0;
      this.cart.forEach((product) => {
        total +=
          product.amount *
          Number(product.product.price.replace(/[^0-9.-]+/g, ""));
      });
      return Number(total).toLocaleString();
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("CozaShopCart")) || [];
  },
};
</script>

<style>
</style>