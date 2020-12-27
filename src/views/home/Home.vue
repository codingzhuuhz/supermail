<template>
  <div id="home">
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <scroll class="content">
      <swiper-child :banners="banners"></swiper-child>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

      <goods-list :good-list="goods[currentType].list"></goods-list>
    </scroll>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li></li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>

    </ul>
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

    }
  },
  components:{
    NavBar,
    SwiperChild,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    this.getHomeMultidata();
    this.getHomeMultiGoods('pop') ;
    this.getHomeMultiGoods('new') ;
    this.getHomeMultiGoods('hot') ;
  },
  methods:{
    tabClick(index){
      if(index==0){this.currentType='pop'}else if(index==1){this.currentType='new'}else{this.currentType='hot'}
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
          this.goods[type].list.push(...res.data.content)
          this.goods[type].page+=1
          console.log(this.goods[type].list)
        })
      }
  }
}
</script>

<style scoped>
#home{
  padding-top:44px;
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
  position: sticky;
  top:44px ;
  z-index: 9;
}
.content{
  /*position: absolute;*/
  /*top:44px;*/
  /*bottom:49px ;*/
  /*left: 0;*/
  /*right: 0;*/
  overflow: hidden;
  height: 300px;
}
</style>
