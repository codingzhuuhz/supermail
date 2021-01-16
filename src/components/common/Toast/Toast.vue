<template>
<div class="toast" v-show="isShow">
  <div class="">{{message}}</div>
</div>
</template>
<script>
export default {
  name: "Toast",
  data(){
    return {message:'',isShow:false}
  },
  // props:{
  //   massage:{
  //     type: String,
  //     default:'hahhahha'
  //   },
  //  isShow:{
  //     type:Boolean,
  //     default: false
  //  }
  // },
  methods:{
    show(message='默认文字',duration=2000){
      console.log("-----");
      this.isShow = true ;
      this.message = message ;
      setTimeout(function (){
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>
<style scoped>
.toast{

  position: fixed;
  left:50% ;
  top: 50%;
  z-index: 9;
  transform: translate(-50%,-50%);
  padding:8px 10px;
  color:#fff ;
  background-color: rgba(0,0,0,0.7);
}
</style>
