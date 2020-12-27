<template>
  <div class="tab-bar-item" @click="clickItem()">
    <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar-icon-active"></slot></div>
    <div :class="activeColor"><slot name="tabbar-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    itemtext:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      //isActive:true
    }
  },
  methods:{
    clickItem(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeColor(){
      return this.isActive?{color:this.itemtext}:{}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height:49px ;
}
.tab-bar-item img{
  width: 20px;
  height: 20px;
  font-size: 20px;
}
.active{
  color: red;
}
</style>
