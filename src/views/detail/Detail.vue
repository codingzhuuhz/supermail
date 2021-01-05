<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll id="content" ref="scroll">
      <detail-swiper :top-images="topImg"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-good-info :detailInfo="detailInfo" ref="detailImg" @DetailSwiperGoodImg="DetailSwiperGoodImg"/>
      <detail-comment-info :comment="comment"/>

    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";

import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import Scroll from "@/components/common/scroll/Scroll";
import {mixin} from "@/common/mixin";
import {getGoodDetailInfo,Shop,Good} from "@/network/detail";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailGoodInfo from "@/views/detail/childComps/DetailGoodInfo";

export default {
name: "Detail",
  data(){
    return {
      gid:null,
      topImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      comment:[],
      itemImgListener:null,
     // topoffset:0
    }
  },
  components:{
    NavBar,
    DetailNavBar,
    DetailSwiper,
    DetailGoodInfo,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailCommentInfo
  },
  created() {
  this.gid = this.$route.params.gid ;
    getGoodDetailInfo(this.gid).then(res => {
      console.log(res) ;
      this.topImg = res.data.goodInfo.topurls ;
      this.goods = new Good(res.data.goodInfo) ;
      this.shop = new Shop(res.data.shopInfo,res.data.goodInfo.sellnum) ;
      this.detailInfo = res.data.goodInfo ;
      this.comment = res.data.comment ;
    })
  },
  methods:{
    DetailSwiperGoodImg(){
      this.$refs.scroll.scroll.refresh() ;
      // this.topoffset = this.refs.
    }
  },
  mixins: [mixin],//将mouted中重复的内容抽取出来然后混入到mouted中
  mounted() {
  },
  deactivated() {
    console.log("这个方法此时不被触发")
  },
  destroyed(){
    this.$bus.$off('imgItemLoading',this.itemImgListener)
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;
}
#content{
  /*第一种*/
  background-color: #fff;
  height: calc(100% - 44px);
  /*第二种*/
  /*position: fixed;*/
  /*top: 44px;*/
  /*bottom:49px;*/
  /*right:0;*/
  /*left: 0;*/
  /*overflow: hidden;*/
}
</style>
