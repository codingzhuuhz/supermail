<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
        <cart-list/>
      </scroll>
      <cart-bottom-bar />
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
import { mapGetters } from 'vuex'

import BScroll from 'better-scroll'
export default {
  name: "cart",
  data(){
    return {
        scroll:null
    }
  },
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  created:{

    // 计算属性是在魔伴属性加载完毕，之后进行加载
    // 使用对象展开运算符 getter 混入computed 对象之中
    ...mapGetters({
      lengt:'cartLength'
    })
  },
  mounted() {
    //这里模板挂载完毕
    this.scroll = new BScroll(document.querySelector('.content'),{
      probeType:3,
      pullUpLoad: true
    })
    this.scroll.on('scroll',(position) => {
      // console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log("上拉加载")
      this.scroll.finishPullUp() ;
    })
  },
  activated() {
    this.$refs.scroll.scroll.refresh() ;
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff5777;
}
.cart-list{
  /*这是地方有点问题*/
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}

</style>
