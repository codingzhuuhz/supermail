<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">手机商城</div>
    </nav-bar>
   <user-info/>

  </div>
</template>

<script>


import NavBar from "@/components/common/navbar/NavBar";
import userInfo from "@/views/profile/childComps/userInfo";
export default {
name: "Profile",
  data(){
    return {headImg:''}
  },
  components: {
    NavBar,
    userInfo
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: #ff8198;
}
.login{
  height: 70px;
  background-color: #ff8198;

}
.login_left{
  display: flex;
}
.head_img{
  padding-left: 10px;
  padding-bottom: 4px;
}
.head_img img{
  width: 70px;
  height: 70px;
}
.login_phone img{
  width: 20px;
  height: 20px;
  padding-top: 8px;

}
.login_title{
  padding-top: 12px;
  color:#ffffff;
}
 .login_title .registerOrLogin{
   font-size: 18px;
  /*vertical-align: center;*/
  /*align-items: center;*/
}
 .login_right{

 }
</style>
