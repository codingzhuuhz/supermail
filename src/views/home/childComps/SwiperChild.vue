<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link"><img :src="item.image" alt="" @load="swiperImgLoad"/></a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper" ;
export default {
  name: "SwiperChild",
  props:{
    banners:{
      type:Array,
    //  default:[]
      default(){
        return []
      }
    }
  },
  components:{
    SwiperItem,
    Swiper
  },
  methods:{
    swiperImgLoad(){
      this.$emit("swiperImgLoad")
    }
  }
}
</script>
<style scoped>

</style>
