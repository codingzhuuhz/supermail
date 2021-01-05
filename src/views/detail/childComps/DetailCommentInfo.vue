<template>

  <div v-if="Object.keys(comment).length !==0" class="comment-info">
    <div v-for="(item,index) in comment">
    <div class="top-info">
      <img :src="item.commentImgUrl" alt=""/>
      <div class="commentName">{{item.commentName}}</div>
    </div>
    <div class="bottom-info">{{item.commentContent}}</div>
    </div>
  </div>

</template>

<script>
export default {
name: "DetailCommentInfo",
  props:{
    comment:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.comment-info{
  padding: 10px 15px 0;
  margin-top: 10px;
}

.top-info img{
  width: 30px;
  height: 30px;
  border-radius: 40px;

}
.top-info{
  display: flex;
  line-height: 30px;
  align-items: center;
}
.top-info .commentName{
  vertical-align:center ;
  margin-left: 10px;
}
.bottom-info{
  margin-top: 15px;
  font-size: 15px;
  line-height: 20px;
}
</style>
