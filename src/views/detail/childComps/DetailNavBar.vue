<template>
  <div>
    <nav-bar id="detail-nav-bar">
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" @click="titleClick(index)" :class="{active: index==currentIndex}" class="title-item">{{item}}</div>
      </div>
    </nav-bar>

  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
export default {
name: "DetailNavBar",
  data(){
    return {title:['商品','参数','评论','推荐']}
  },
  components:{
    NavBar,
    DetailSwiper
  },
  props:{
    currentIndex:{
      type:Number,
      default(){
        return 0 ;
      }
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#detail-nav-bar{
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.title{
  display: flex;
}
.title-item{
  flex:1 ;
}
.back{
  margin-top: 5px;
}
.active{
  color:#ff5777;
}
</style>
