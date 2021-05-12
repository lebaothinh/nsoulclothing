<template>
  <div class="row isotope-grid">
    <div
      :key="pro.id"
      v-for="(pro, index) in data"
      :class="col ? `col-sm-12 col-md-${12/col}` : 'col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item'"
    >
      <product-card
        @quickView="
          () => {
            selectedProduct = pro;
            isShowModal = true;
          }
        "
        :product="pro"
        :isRemove="isRemove"
        @onRemove="
          () => {
            onRemove(index);
          }
        "
        @click.native="() => onCardClick(index)"
      ></product-card>
    </div>
    <Modal :isShow="isShowModal" @close="() => (isShowModal = false)">
      <product-detail
        v-if="isShowModal"
        :isDetail="isDetail"
        :isView="isView"
        :product="selectedProduct"
      ></product-detail>
    </Modal>
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";
import ProductCard from "./ProductCard.vue";
import ProductDetail from "./ProductDetail.vue";
export default {
  components: { Modal, ProductDetail, ProductCard },
  props: {
    data: Array,
    isDetail: Boolean,
    isView: Boolean,
    isRemove: Boolean,
    col: Number
  },
  data() {
    return {
      selectedProduct: this.data[0] || {},
      isShowModal: false,
    };
  },
  methods: {
    onRemove: function (index) {
      this.$emit("removeProduct", index);
    },
    onCardClick: function (index) {
      this.$emit("clickProduct", index);
    },
  },
};
</script>

<style>
</style>