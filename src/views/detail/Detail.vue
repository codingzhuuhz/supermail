<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll id="content">
      <detail-swiper :top-images="topImg"></detail-swiper>
      <detail-good-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailGoodInfo from "@/views/detail/childComps/DetailGoodInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import {getGoodDetailInfo,Shop,Good} from "@/network/detail";

export default {
name: "Detail",
  data(){
    return {
      gid:null,
      topImg:[],
      goods:{},
      shop:{}
    }
  },
  components:{
    NavBar,
    DetailNavBar,
    DetailSwiper,
    DetailGoodInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
  this.gid = this.$route.params.gid ;
    getGoodDetailInfo(this.gid).then(res => {
      console.log(res) ;
      this.topImg = res.data.goodInfo.topurls ;
      this.goods = new Good(res.data.goodInfo) ;
      this.shop = new Shop(res.data.shopInfo,res.data.goodInfo.sellnum) ;

    })
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #f2f5f8;
}
#content{
  position: fixed;
  top: 44px;
  bottom:49px;
  overflow: hidden;
}
</style>
