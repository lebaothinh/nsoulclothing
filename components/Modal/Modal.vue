<template>
  <div :class="isShow ? 'wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1' : 'wrap-modal1 js-modal1 p-t-60 p-b-20'">
      <div class="overlay-modal1 js-hide-modal1"></div>

      <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button class="how-pos3 hov3 trans-04 js-hide-modal1" @click="() => {
              this.$emit('close')
          }">
            <img src="@/static/images/icons/icon-close.png" alt="CLOSE" />
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        isShow: Boolean
    }
}
</script>

<style>

</style>