<template>
  <div class="block2">
    <div class="block2-pic hov-img0">
      <img
        v-if="isRemove"
        @click="() => this.$emit('onRemove')"
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
      <img
        v-if="product.imageSrc"
        style="height: 344px; object-fit: cover"
        :src="
          product.imageSrc[0] ? product.imageSrc[0] : '/default.jpg'
        "
        alt="IMG-PRODUCT"
      />
      <img
        v-else
        style="height: 344px; object-fit: cover"
        :src="
          product && product.images
              && product.images[0] ?
               '/images/products/' + product.images[0]
            : '/default.jpg'
        "
        alt="IMG-PRODUCT"
      />

      <a
        href="#"
        @click="
          (e) => {
            e.preventDefault();
            this.$emit('quickView', product ? product.id : null);
          }
        "
        class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
      >
        Xem Nhanh
      </a>
    </div>

    <div class="block2-txt flex-w flex-t p-t-14">
      <div class="block2-txt-child1 flex-col-l">
        <NuxtLink
          :to="`/product?id=${product ? product.id : null}`"
          class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
        >
          {{ product ? product.title : "Chưa đặt tên" }}
        </NuxtLink>

        <span class="stext-105 cl3">
          {{ product ? Number(product.price).toLocaleString() + ' VNĐ' : "Thương lượng" }}
        </span>
      </div>

      <div class="block2-txt-child2 flex-r p-t-3">
        <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
          <img
            class="icon-heart1 dis-block trans-04"
            src="/images/icons/icon-heart-01.png"
            alt="ICON"
          />
          <img
            class="icon-heart2 dis-block trans-04 ab-t-l"
            src="/images/icons/icon-heart-02.png"
            alt="ICON"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export const Product = {
  id: Number,
  title: String,
  subTitle: String,
  price: String,
  size: Array,
  colors: Array,
  images: Array,
  description: String,
  weight: String,
  dimensions: String,
  materials: String,
  categories: Array,
  sku: String,
};
export default {
  props: {
    product: Product,
    isRemove: Boolean
  },
};
</script>

<style>
</style>