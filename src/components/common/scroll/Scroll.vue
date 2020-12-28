<template>
  <div class="swiper" ref="swipers">
  <div class="content">
    <slot></slot>
<!--    这个无论click是否为true button都可以进行点击 其他元素-->
<!--    <button @click=""></button>-->
<!--    这个元素或者其他元素 span 则需要click设置成true才可以进行点击-->
<!--    <div @click=""></div>-->
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    //使用props中添加probeType  在不同的地方进行使用 给probeType进行赋值  不能这这个组件中写死
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.swipers, {
      click:true,
       probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })
   console.log(this.probeType)
    if(this.probeType==2 || this.probeType==3){
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll',position)
      })
    }
    if(this.pullUpLoad==true){
      this.scroll.on('pullingUp', () => {
        console.log("上拉加载")
        this.$emit("pullingUp")
      })
    }

  },
  methods:{
    scrollTo(x,y,time){
      //进行回到某个位置
    },
    refresh(){
      this.scroll.refresh() ;
      console.log("-----")
    }
  }
}
</script>

<style scoped>
.content{
  /*overflow: hidden;*/
  /*height: 300px;*/
}
</style>
