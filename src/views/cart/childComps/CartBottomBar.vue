<template>
<div class="bottom-bar">
  <div class="allChecked">
    <check-button @click.native="isAllChecked" :is-checked="isSelect"/>
    <span>全选</span>
  </div>

  <div class="price">
    总计:{{totalPrice}}
  </div>
  <div class="purchase">
    结算:({{goodnum}})
  </div>
</div>
</template>

<script>
import CheckButton from "@/components/content/CheckButton/CheckButton";
export default {
name: "CartBottomBar",
components:{
  CheckButton
},
  computed:{
    totalPrice(){
      return '￥'+ this.$store.state.cartList.filter(item =>{
        return item.isChecked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count ;
      },0).toFixed(2);
    },
    goodnum(){
      return this.$store.state.cartList.filter(item => item.isChecked).length ;
    },
    isSelect(){
      if(this.$store.state.cartList.length == 0) return false
      return !this.$store.state.cartList.find(item => !item.isChecked)
      // return !(this.$store.state.cartList.filter(item => !item.isChecked).length) ;
    }
  },
  methods:{
    isAllChecked(){
      if(this.isSelect){
        this.$store.state.cartList.forEach(item => item.isChecked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.isChecked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background-color: #a3a3a5;
  position: relative;
}
.check-button{
  width: 20px;
  height: 20px;

}
.allChecked{
  width: 100px;
  display: flex;
}
.bottom-bar{
  display: flex;
  padding-left: 10px;

  align-items: center;
}
.bottom-bar span{
  padding-left: 10px;
}
.price{
  padding-left: 10px;
  flex:1 ;
}
.purchase{
  width: 80px;
  height: 40px;
  background-color: #ff8198;
  color: #fff;
  text-align: center;
  line-height: 40px;
  /*align-items:center;*/
}
</style>
