<template>
  <div class="content">
    <ul>
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
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>


      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>11</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>1</li>
      <li></li>
      <li>1</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>1</li>
      <li></li>
      <li>1</li>
      <li>1</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "cart",
  data(){
    return {
        scroll:null
    }
  },
  created:{
    // 计算属性是在魔伴属性加载完毕，之后进行加载
  },
  mounted() {
    //这里模板挂载完毕
    this.scroll = new BScroll(document.querySelector('.content'),{
      probeType:3,
      pullUpLoad: true
    })
    this.scroll.on('scroll',(position) => {
      //console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log("上拉加载")
      this.scroll.pullUpLoad.finishPullUp() ;
    })
  }
}
</script>

<style scoped>
.content{
  height: 200px;
  background-color: #ff5777;
  overflow: hidden;
}
</style>
