<template>
  <div class="swiper" ref="swipers">
  <div class="content">
    <slot></slot>
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
  mounted() {
    this.scroll = new BScroll(this.$refs.swipers, {

      probeType: 3,
      pullUpLoad: true
    })
   // console.log(this.scroll)
    this.scroll.on('scroll', (position) => {
      console.log(position);
    })
    this.scroll.on('pullingUp', () => {
      console.log("上拉加载")

    })
  }
}
</script>

<style scoped>

</style>
