<template>
<div id="user-info">
  <slot name="user-icon">
    <div class="headImg left">
      <img src="~/assets/img/profile/avatar.svg" alt="">
    </div>
  </slot>
  <div class="login_info">
    <slot name="username">
      <div>登录/注册</div>
    </slot>
    <div class="phone">
      <span><img src="~/assets/img/profile/phone.svg" alt=""></span>
      <slot name="user-phone">
        暂无绑定手机号
      </slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "userInfo"
}
</script>

<style scoped>
#user-info{
  background-color: var(--color-tint);
}
#user-info img{
  width: 60px;
  height: 60px;
  /*background-color: #fff;*/
  /*border-radius: 30px;*/
}
.left{
  float: left;
}
#user-info .login_info{
  color: #fff;
  padding: 10px 0 0 10px;
}
#user-info .login_info .phone{
  position: relative;
}
</style>
