<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link"><img :src="item.image" alt=""/></a>
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
  }
}
</script>
<style scoped>

</style>
