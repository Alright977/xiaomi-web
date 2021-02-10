<template>
  <div class="product">
    <product-params>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-params>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>
<script>
import ProductParams from '../components/ProductParams.vue'
export default {
  components: { ProductParams },
  name: 'product',
}
</script>
<style scoped lang="scss">
.product {
  button {
    margin-left: 10px;
  }
  .h {
    background-color: green;
    height: 150px;
  }
}
</style>
