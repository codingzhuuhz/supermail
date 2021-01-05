<template>
<div v-if="Object.keys(goods).length !==0" class="base-info">
   <div class="info-title">{{goods.title}}</div>
  <div class="info-price">
    <span class="n-price">{{goods.newprice}}</span>
    <span class="o-price">{{goods.oldprice}}</span>
  </div>
  <div class="info-other">
    <span>销量 {{goods.sellnum}}</span>
    <span>库存 {{goods.storenum}}</span>
  </div>
</div>
</template>s
<script>
export default {
name: "DetailGoodInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color:#999 ;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color:#222 ;
}
.info-price{
  margin-top: 10px;
}
.info-price .n-price{
  font-size: 24px;
  color:var(--color-high-text)
}
.info-price .o-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-other{
  margin-top: 15px;
  /*计算行间距*/
  line-height: 30px;
  display: flex;
  /*rgba()这个表示的前三个表示颜色 最后一个表示 透明度*/
  border-bottom: 1px solid rgba(100,100,100,0.1);
  justify-content: space-between;
}

</style>
