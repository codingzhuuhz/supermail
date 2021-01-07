<template>
  <div id="detail">

    <detail-nav-bar @titleClick="titleClick" :currentIndex="currentIndex"/>

    <scroll id="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImg"></detail-swiper>
      <detail-base-info  :goods="goods"/>
      <detail-shop-info ref="shop" :shop="shop"/>
      <detail-good-info ref="detail" :detailInfo="detailInfo"  @DetailSwiperGoodImg="DetailSwiperGoodImg"/>
      <detail-comment-info ref="comment" :comment="comment"/>
    </scroll>
<!--    这个@click.native 是让click点击事件能在自定义主键-->
    <back-top @click.native="backTop" v-show="srollLongStatus"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";

import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/BackTop/BackTop";

import {mixin} from "@/common/mixin";
import {debounce} from "@/common/utils";
import {getGoodDetailInfo,Shop,Good} from "@/network/detail";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailGoodInfo from "@/views/detail/childComps/DetailGoodInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

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
      themeTopY:[],
      getThemeLowY:null,
      currentIndex:0,
      srollLongStatus:false
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
    DetailCommentInfo,
    DetailBottomBar,
    BackTop
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
//这里拿来数据进行获取$el.offsetTop 但是dom元素并没有渲染好 拿不到
//       this.themeTopY = []
//       this.themeTopY.push(0);
      // this.themeTopY.push(this.$refs.shop.$el.offsetTop);
      // this.themeTopY.push(this.$refs.detail.$el.offsetTop);
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop);

      //this.$nextTick()依据dom元素染完成之后进行回调
      //问题是dom 加载完成 但是图片并没渲染完成 获取的offsetTop不准确
      // this.$nextTick(() => {
      //   this.themeTopY = []
      //   this.themeTopY.push(0);
      //   this.themeTopY.push(this.$refs.shop.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.detail.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      //   console.log(this.themeTopY);
      // })

      this.getThemeLowY =  debounce(() => {
        this.themeTopY = []
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.shop.$el.offsetTop);
        this.themeTopY.push(this.$refs.detail.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopY.push(Number.MAX_VALUE); 用着大的数来凑数 来简化区间判断条件
      },200)

    })
  },

  methods:{
    addToCart(){
      const product = {}
      product.img = this.goods.gurl;
      product.title = this.goods.title ;
      product.introduce = this.goods.introduce ;
      product.price = this.goods.newprice ;
      product.id = this.goods.id ;
      this.$store.commit("addCart",product) ;
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500) ;
    },
    contentScroll(position){
      const positionY = -position.y ;
      this.srollLongStatus = -(position.y) > 800
      for(let i = 0; i< this.themeTopY.length-1 ; i++){
        if(this.currentIndex != i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
            this.currentIndex = i ;
        }else if(this.currentIndex != this.themeTopY.length-1 && positionY >=this.themeTopY[this.themeTopY.length-1]){
          this.currentIndex = this.themeTopY.length-1 ;
        }
      }

      // switch (-position.y) {
      //   case this.themeTopY[0]:
      //           this.currentIndex = 0; break;
      //   case this.themeTopY[1]:
      //            this.currentIndex = 1 ; break;
      //
      //   case  this.themeTopY[2]:
      //           this.currentIndex = 2; break ;
      //   default:
      //           this.currentIndex = 3
      // }
    },
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopY[index],200)
    },
    DetailSwiperGoodImg(){
      this.newRefresh() ;
      this.getThemeLowY() ;
      // this.$refs.scroll.scroll.refresh() ;
      // this.topoffset = this.refs.
    }
  },
  mixins: [mixin],//将mouted中重复的内容抽取出来然后混入到mouted中
  mounted() {
   //created 中开始请求数据  数据请求是一个异步操作 在mounted中数据可能没有请求过来 则
    // Object.Keys() 可能是null  $el.offsetTop 没有东西为undefine
    // this.themeTopY.push(0);
    // this.themeTopY.push(this.$refs.shop.$el.offsetTop)
    // this.themeTopY.push(this.$refs.detail.$el.offsetTop)
    // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
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
  height: calc(100% - 44px - 49px);
  /*第二种*/
  /*position: fixed;*/
  /*top: 44px;*/
  /*bottom:49px;*/
  /*right:0;*/
  /*left: 0;*/
  /*overflow: hidden;*/
}
</style>
