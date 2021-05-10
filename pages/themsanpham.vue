<template>
  <div>
    <!-- Title page -->
    <section
      class="bg-img1 txt-center p-lr-15 p-tb-92"
      style="background-image: url('/images/bg-01.jpg')"
    >
      <h2 class="ltext-105 cl0 txt-center">Thêm Sản Phẩm</h2>
    </section>

    <!-- Content page -->
    <section class="bg0 p-t-104 p-b-116">
      <div class="container">
        <div class="scroll"></div>
        <product-list :isDetail="true" :isView="true" :data="newProducts" />
        <form class="bor16 p-l-10">
          <div class="form-group">
            <label for="exampleFormControlInput1">Tên sản phẩm</label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              v-model="newProduct.title"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Mô tả ngắn</label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              v-model="newProduct.subTitle"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Mô tả chi tiết</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              v-model="newProduct.description"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-3">
              <label for="exampleFormControlInput1">Trọng lượng</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                v-model="newProduct.weight"
              />
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlInput1">Kích thước</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                v-model="newProduct.demensions"
              />
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlInput1">Chất liệu</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                v-model="newProduct.material"
              />
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlInput1">Giá</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Nhập tên sản phẩm"
                v-model="newProduct.price"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-4">
              <label for="exampleFormControlInput1">Thể loại</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                v-model="newProduct.categories"
              />
            </div>

            <div class="form-group col-4">
              <label for="exampleFormControlInput1">Các Sizes</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Nhập tên sản phẩm"
                v-model="newProduct.sizes"
              />
            </div>
            <div class="form-group col-4">
              <label for="exampleFormControlInput1">Các Màu</label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Nhập tên sản phẩm"
                v-model="newProduct.colors"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">SKU</label>
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nhập tên sản phẩm"
              v-model="newProduct.sku"
            />
          </div>
          <div class="form-group">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile"
              >Choose file</label
            >
          </div>
        </form>
        <button
          @click="onAdd"
          class="w-full flex-c-m stext-103 cl0 size-102 bg7 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
        >
          Thêm
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import products from "@/static/data/product.json";
import ProductList from "../components/Product/ProductList.vue";
export default {
  components: { ProductList },
  data() {
    return {
      newProduct: {
        id: 0,
        images: [
          "product-detail-01.jpg",
          "product-detail-02.jpg",
          "product-detail-03.jpg",
        ],
        price: "$58.79",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Yellow", "Blue"],
        subTitle:
          "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
        title: "Esprit Ruffle Shirt",
        description:
          "Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.",
        weight: "0.67kg",
        demensions: "110 x 33 x 100 cm",
        material: "60% cotton",
        categories: ["Nam"],
        sku: "K25",
      },
      newProducts: [],
    };
  },
  methods: {
    onAdd: function () {
      this.newProducts.push(this.newProduct);
      $(".scroll")[0].scrollIntoView();
    },
  },
  mounted() {
    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2"),
      });
    });
  },
};
</script>

<style>
</style>