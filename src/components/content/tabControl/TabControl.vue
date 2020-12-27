<template>
 <div class="tab-control">
    <div v-for="(item,index) in title" @click="Swith(index)" class="tab-control-item" :class="{active: index==currentIndex}">
      <span>{{item}}</span>
    </div>
 </div>
</template>
<script>
export default {
name: "TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    Swith(index){
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab-control-item{
  flex:1;
}
.active span{
  color: var(--color-high-text) ;
  padding: 3px;
  border-bottom: 3px solid var(--color-tint);
}
.tab-control{
  position: sticky;
  height:44px;
  z-index: 9;
}
</style>
