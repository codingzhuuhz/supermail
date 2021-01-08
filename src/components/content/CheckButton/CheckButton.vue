<template>
<div class="check-button">
  <img src="~/assets/img/cart/tick.svg" alt="" :class="{button:isChecked}" />
</div>
</template>

<script>
export default {
name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 2px solid #a3a3a5;
}
.button{
  border-color:#ff5777 ;
  background-color: #ff5777;
}
</style>
