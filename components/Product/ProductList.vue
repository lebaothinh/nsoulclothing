<template>
  <div class="row isotope-grid">
    <div :key="pro.id" v-for="pro in data" class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
        <product-card @quickView="() => {
          selectedProduct = pro;
          isShowModal = true;
        }" :product="pro" ></product-card>
    </div>
    <Modal :isShow="isShowModal" @close="() => isShowModal = false">
        <product-detail :isDetail="isDetail" :isView="isView" :product="selectedProduct ? selectedProduct : data.length > 0 ? this.data[0] : {}"></product-detail>
    </Modal>
  </div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
import ProductCard from './ProductCard.vue';
import ProductDetail from './ProductDetail.vue';
export default {
  components: { Modal, ProductDetail, ProductCard },
  props: {
    data: Array,
    isDetail: Boolean,
    isView: Boolean
  },
  data: () => ({
      selectedProduct: null,
      isShowModal: false
  }),
};
</script>

<style>
</style>