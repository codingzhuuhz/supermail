<template>
<div id="shop-item">
  <div class="item-selector">
    <check-button @click.native="isItemChecked" :is-checked="itemInfo.isChecked" />
  </div>
  <div class="item-img">
    <img :src="itemInfo.img" alt=""/>
  </div>
  <div class="item-info">
    <div class="item-title">{{itemInfo.title}}</div>
    <div class="item-desc">{{itemInfo.introduce}}</div>
    <div class="info-bottom">
      <div class="item-price left">{{itemInfo.price}}￥</div>
      <div class="item-price right">x{{itemInfo.count}}</div>
    </div>
  </div>


</div>
</template>

<script>
import CheckButton from "@/components/content/CheckButton/CheckButton";
export default {
name: "CartListItem",
  components:{
    CheckButton
  },
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    isItemChecked(){
      this.itemInfo.isChecked = !this.this.itemInfo.isChecked
    }
  }
}
</script>

<style scoped>
#shop-item{
  display: flex;
  /*margin-top: 15px;*/
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
  width: 20px;

  display: flex;
  /*这个是嘛意思*/
   justify-content: center;
   align-items: center;
  /*margin-left: 10px;*/
  /*margin-top: 40px;*/
}
.item-img img{
  width: 120px;
  height: 120px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color:#333 ;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-title ,.item-desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 25px;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left:10px;
  right:10px

}
.info-bottom .item-price{
  color:orangered;
}
</style>
