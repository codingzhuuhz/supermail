<template>
  <div class="goods-item" @click="enterDetail">
    <img :src="goodsItem.gurl" alt="">
    <div class="good-info" >
      <p>{{goodsItem.gname}}</p>
      <span class="price">{{goodsItem.gnewprice}}</span>
<!--      <span class="collect">{{goodsItem.storenum}}</span>-->
    </div>
  </div>
</template>

<script>
export default {
name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    enterDetail(gid){
      console.log("---");
       this.$router.push('/detail/'+this.goodsItem.gid) ;

    }
  }
}
</script>

<style scoped>
.goods-item{
  width: 50%;
  padding-bottom: 40px;
  position: relative;
  /*position: fixed;*/
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.good-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left:0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.good-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-info .price{
  color:var(--color-high-text) ;
  margin-right: 20px;
}
.good-info .collect{
  position: relative;
}
/*伪元素*/
.good-info .collect::before{
  content: '';
  position: absolute;
  left:-15px;
  top:-1px;
  width: 14px;
  height: 14px;
  background: url("") 0;
}

img{

}
</style>
