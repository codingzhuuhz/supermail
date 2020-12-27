<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link"><img :src="item.image" alt=""></a>
    <div>{{item.title}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding : 15px 0 25px; /*上 右 下 左*/
  border-bottom: 8px solid #eee; /* solid 画实线 thin虚线*/
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>

