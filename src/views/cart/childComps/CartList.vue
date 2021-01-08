<template>
<div>
  <cart-list-item v-for="item in $store.state.cartList" :itemInfo="item"/>
</div>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
export default {
name: "CartList",
  components:{
    CartListItem
  }
}
</script>

<style scoped>

</style>
