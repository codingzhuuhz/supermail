<template>
  <div id="home">
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <tab-control  class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="iscrollY"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="pullingLoading">
      <swiper-child :banners="banners" @swiperImgLoad="swiperImgLoad"></swiper-child>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :class="{tabcontrol:iscrollY}"  :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :good-list="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="srollLongStatus"/>
  </div>
</template>

<script>
import NavBar  from "@/components/common/navbar/NavBar";
import SwiperChild from "@/views/home/childComps/SwiperChild";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import TabControl from "@/components/content/tabControl/TabControl";
import Scroll from '@/components/common/scroll/Scroll' ;
import BackTop from "@/components/content/BackTop/BackTop";
import {debounce} from "@/common/utils";
import {mixin} from "@/common/mixin";
import {getHomeMultidata,getHomeGoods} from "@/network/home";

export default {
name: "Home",
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        hot:{page:0,list:[]}
     },
      currentType:'pop',
      srollLongStatus:false,
      tabOffsetTop:0,
      iscrollY:false,
      saveCurrentY:0,
      itemImgListener:null
    }
  },
  components:{
    NavBar,
    SwiperChild,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeMultiGoods('pop') ;
    this.getHomeMultiGoods('new') ;
    this.getHomeMultiGoods('hot') ;
  },
  mixins: [mixin],
  // created 和 mounted create执行的时候组件已经加载完毕 mouted 执行的时候组件已经挂载完毕
  mounted() {
  //debouce 对this.$refs.scroll.refresh 函数进行防抖动操作
  //   const refresh = debounce(this.$refs.scroll.refresh,800) ;
  //   this.itemImgListener = () => {refresh()}
  //   this.$bus.$on("imgItemLoading",this.itemImgListener)
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveCurrentY,0)

    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
  // 1保存y值
    this.saveCurrentY = this.$refs.scroll.scroll?this.$refs.scroll.scroll.y:0
    // 2 取消全局事件的监听 因为使用了公共组件bus 取消事件监听的对应的函数 this.itemImgListener
    this.$bus.$off('imgItemLoading',this.itemImgListener)
  },
  methods:{
    swiperImgLoad(){
      // $el 获取根主键
      this.tabOffsetTop  = this.$refs.tabControl2.$el.offsetTop;
    },

    pullingLoading(){
      this.getHomeMultiGoods(this.currentType) ;
      // this.$refs.scroll.scroll.refresh() ;
    },
    contentScroll(position){
      this.iscrollY = -(position.y) > this.tabOffsetTop
      this.srollLongStatus = -(position.y) > 800
    },
    backTop(){
      //this.$refs.scroll可以获取这个对象 来调用这个对象中的 东西
      this.$refs.scroll && this.$refs.scroll.scroll.scrollTo(0,0,500) ;
    },
    tabClick(index){
      if(index==0){this.currentType='pop'}else if(index==1){this.currentType='new'}else{this.currentType='hot'}
      //使两个tabBar中的算选择的类型的索引保持一致
      this.$refs.tabControl1.currentIndex = index ;
      this.$refs.tabControl2.currentIndex = index ;
      },
    getHomeMultidata(){
      getHomeMultidata().then(res => {

        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list ;
        console.log(this.banners)
      })
    },
    getHomeMultiGoods(type){
        const page = this.goods[type].page+1 ;
        getHomeGoods(page,type).then(res =>{
          if(res.data.content!==null)
            this.goods[type].list.push(...res.data.content)
          else
            console.log("没有更多了")
          this.goods[type].page+=1
          this.$refs.scroll.scroll.finishPullUp() ;
          console.log(this.goods[type].list)
        })
      }
  }
}
</script>

<style scoped>
#home{
  padding-top:44px;
  height: 100vh;
}
.home_nav{
  background-color: #ff5777;
  color: white;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}
.tab-control{
  position: relative;
  z-index: 9;
}
/*.tabcontrol{*/
/*  position: fixed;*/
/*  top:44px;*/
/*  right: 0;*/
/*  left: 0;*/
/*}*/
/*.tab-control{*/
/*  !*position: sticky;*!*/
/*  !*top:44px ;*!*/
/*  !*z-index: 9;*!*/
/*}*/
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
/*.content{*/
/*  !*position: absolute;*!*/
/*  !*top:44px;*!*/
/*  !*bottom:49px ;*!*/
/*  !*left: 0;*!*/
/*  !*right: 0;*!*/
/*  overflow: hidden;*/
/*  height: calc(100% - 44px);*/
/*}*/
</style>
