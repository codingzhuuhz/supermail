<template>
<div class="goods">
  <goods-list-item v-for="item in goodList" :goods-item="item"/>
</div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
export default {
name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
      goodList:{
        type:Array,
        default(){
          return []
        }
    }
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;/*一行图片进行均等分 ，但是 图片左右两边相加等于中间的空隙*/
  /*可以进行微调 左右两边的空隙 以便用来平衡中间的空隙*/
  padding: 10px;
}
</style>
