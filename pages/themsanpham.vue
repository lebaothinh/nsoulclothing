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
        <button
          :disabled="!newProducts.length"
          @click="onGetJson"
          class="w-full m-b-20 flex-c-m stext-103 cl0 size-102 bg7 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
        >
          Lấy Dữ Liệu
        </button>
        <div class="row">
          <div class="col-md-6">
            <form class="bor16 p-l-10">
              <div class="form-row">
              <div class="form-group col-9">
                <label for="exampleFormControlInput1">Tên sản phẩm</label>
                <input
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newProduct.title"
                />
              </div>
              <div class="form-group col-3">
                <label for="exampleFormControlInput1">ID</label>
                <input
                  disabled
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newProduct.id"
                />
              </div>
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
                    placeholder="Nhập giá tiền"
                    type="number"
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
                    placeholder="Nhập các size cách nhau bởi dấu ,"
                    v-model="newProduct.sizes"
                  />
                </div>
                <div class="form-group col-4">
                  <label for="exampleFormControlInput1">Các Màu</label>
                  <input
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nhập các màu cách nhau bởi dấu ,"
                    v-model="newProduct.colors"
                  />
                </div>
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
              <div class="form-group">
                <label for="exampleFormControlFile1">Chọn Ảnh</label>
                <input
                  type="file"
                  class="form-control-file"
                  ref="myFiles"
                  id="exampleFormControlFile1"
                  multiple
                  @change="onChangeFile"
                />
              </div>
              <div class="row m-b-20">
                <div
                  :key="index"
                  v-for="(image, index) in newProduct.imageSrc"
                  class="image col-md-3"
                >
                  <img
                    @click="() => onRemoveImage(index)"
                    src="/images/icons/icon-close.png"
                    alt="CLOSE"
                    style="
                      position: absolute;
                      background: #333;
                      border-radius: 50%;
                      top: 5px;
                      right: 5px;
                      height: 30px;
                      z-index: 10;
                      width: 30px;
                      cursor: pointer;
                    "
                  />
                  <img :src="image" alt="image" />
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <product-list
              :col="2"
              :isRemove="true"
              :isDetail="true"
              :isView="true"
              :data="newProducts"
              @clickProduct="onClickProduct"
              @removeProduct="onRemoveProduct"
            />
          </div>
        </div>
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
        id: Date.now(),
        images: [],
        imageSrc: [],
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
        categories: ["Nam", "Nữ"],
      },
      newProducts: [],
    };
  },
  methods: {
    onAdd: function () {
      this.newProducts.push({
        ...JSON.parse(JSON.stringify(this.newProduct)),
        id: Date.now(),
      });
      this.newProduct = this.newProducts[this.newProducts.length - 1];
      $(".scroll")[0].scrollIntoView();
    },
    toBase64: function (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    onChangeFile: async function (e) {
      for (let file of [...this.$refs.myFiles.files]) {
        let result = await this.toBase64(file);
        this.newProduct.imageSrc.push(result);
      }

      this.newProduct.images = [...this.$refs.myFiles.files].map((f) => f.name);
    },
    onRemoveImage: function (index) {
      this.newProduct.imageSrc.splice(index, 1);
      this.newProduct.imageSrc = [...this.newProduct.imageSrc];
    },
    onClickProduct: function (index) {
      if (this.newProducts[index]) {
        this.newProduct = this.newProducts[index];
      }
    },
    onRemoveProduct: function (index) {
      this.newProducts = this.newProducts.filter((p, i) => i != index);
      this.newProduct = this.newProducts[
        index > this.newProducts.length - 1
          ? this.newProducts.length - 1
          : index
      ];
    },
    onGetJson: function () {
      let result = [
        ...products,
        ...this.newProducts.map((p) => {
          delete p.imageSrc;
          return p;
        }),
      ];

      // copy
      const el = document.createElement("textarea");
      el.value = JSON.stringify(result);
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }

      swal("Đã Copy Data", "success");
    },
  },
};
</script>

<style scoped>
.image img {
  width: 100%;
}
</style>