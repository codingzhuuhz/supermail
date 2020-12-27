<template>
  <div>

      <detail-nav-bar></detail-nav-bar>
<detail-swiper :top-images="topImg"></detail-swiper>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import {getGoodDetailInfo} from "@/network/detail";

export default {
name: "Detail",
  data(){
    return {
      gid:null,
      topImg:[]
    }
  },
  components:{
    NavBar,
    DetailNavBar,
    DetailSwiper
  },
  created() {
  this.gid = this.$route.params.gid ;
    getGoodDetailInfo(this.gid).then(res => {
      this.topImg = res.data.goodInfo.topurls ;
      console.log(this.topImg)
    console.log(res)
  })
  }
}
</script>

<style scoped>
</style>
