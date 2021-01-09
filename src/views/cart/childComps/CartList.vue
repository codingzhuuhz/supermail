<template>
<div>
  <cart-list-item v-for="(item,index) in $store.state.cartList"  :key="index" :item-info="item"/>
</div>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
export default {
name: "CartList",
  components:{
    CartListItem
  },
  activated() {
    // this.$refs.scroll.scroll.refresh() ;
  }
}
</script>

<style scoped>

</style>
