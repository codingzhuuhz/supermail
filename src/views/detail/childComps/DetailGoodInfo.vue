<template>
<div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
  <div class="info-desc clear-fix">
    <div class="start">
    </div>
    <div class="desc">{{detailInfo.gintroduce}}</div>
    <div class="end"></div>

  </div>
  <div class="info-list">
    <img v-for="(item,index) in detailInfo.introurls" @load="DetailSwiperGoodImg" :src="item" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "DetailGoodInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    DetailSwiperGoodImg(){
      this.$emit("DetailSwiperGoodImg") ;
    }
  }
}
</script>

<style scoped>
.goods-info{

  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc{
  padding: 0 1px 15px;
}
.info-desc .start ,.info-desc .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position:relative;
}
.info-desc .start{
  float: left;
}
.info-desc .end{
  float: right;
}
/*用它来做了一个小方块*/
.info-desc .start::before,.info-desc .end::after{
  content: '' ;
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
/*设置小方块的位置*/
.info-desc .end::after{
  right: 0;
}
.info-desc .desc{
  padding: 15px 0;
  font-size: 14px;
}
.info-list img{
  width: 100%;
}
</style>
