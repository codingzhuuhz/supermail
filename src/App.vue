<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <tab-bar>
      <tab-bar-item path="/home" itemtext="red">
          <img slot="tabbar-icon" src="./assets/img/tabbar/home.svg" alt="">
          <img slot="tabbar-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
          <div slot="tabbar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" itemtext="red">
        <img slot="tabbar-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="tabbar-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="tabbar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" itemtext="red">
        <img slot="tabbar-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="tabbar-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="tabbar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" itemtext="red">
        <img slot="tabbar-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="tabbar-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="tabbar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  components:{
    TabBar,
    TabBarItem
}
}
</script>

<style>
@import "assets/css/base.css";

</style>
