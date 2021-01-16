<template>
<div>

  <div id="home">
    <form @submit.prevent="submit" >
      商品名字:<input type="text" name="gname" v-model="gname"><br>
      价格:<input type="number" name="gnewprice" v-model="gnewprice"><br>
      之前价格:<input type="number" name="goldprice" v-model="goldprice"><br>
      库存<input type="number" name="storenum" v-model="storenum"><br>
      已销售<input type="number" name="sellnum" v-model="sellnum"><br>
      介绍<input type="textarea" style="width:200px;height:200px"  name="gintroduce" v-model="gintroduce"><br>
      图片<input type="file" name="gurl" @change="uploadfile1($event)"><br>
      顶端图片<input type="file" name="topimgurl" @change="uploadfile2($event)" multiple="multiple"><br>
      详情图片<input type="file" name="introimgurl" @change="uploadfile3($event)" multiple="multiple"><br>
      类型:<select name="type" id="" v-model="type">
      <option value="pop">pop</option>
      <option value="hot">hot</option>
      <option value="new">new</option>
    </select>
      <button type="submit">提交</button>
    </form>

  </div>
</div>
</template>

<script>

export default {
  name: "test",
  data() {


    return {
      gname: '',
      storenum: '',
      gnewprice: '',
      goldprice: '',
      sellnum: '',
      gintroduce: '',
      file: '',
      topfile: [],
      introfile: [],
      type: '',


    }
  },
  components:{

  },
  mounted() {
  },
  methods:{
    btnClilk(){


    var formData = new FormData() ;
    formData.append("well_name",this.well_name)
    formData.append("starttime",this.starttime)
    formData.append("endtime",this.endtime)
    formData.append("gname",this.gname) ;
    formData.append("storenum",this.storenum) ;
    formData.append("gnewprice",this.gnewprice) ;
    formData.append("goldprice",this.goldprice) ;
    formData.append("sellnum",this.sellnum) ;
    formData.append("gintroduce",this.gintroduce)
    formData.append("file",this.file) ;
    this.topfile.forEach((file) =>{formData.append("topfile",file,file.name)})
    this.introfile.forEach((file) =>{formData.append("introfile",file,file.name)})
     //formData.append("topfile",this.topfile) ;
     //formData.append("introfile",this.introfile) ;
    formData.append("type",this.type) ;
    this.$http("http://localhost:8081/cors/getAddGoodInfo",formData,{emulateJSON:true}).then(response => {
      console.log(response)
    },response => {
      console.log(response)
    })


   },
    uploadfile1(event){
      this.file = event.target.files[0] ;
    },
    uploadfile2(event){
    for(var i=0 ;i<event.target.files.length;i++){
      this.topfile.push(event.target.files[i])
      }
    },
    uploadfile3(event){
      for(var i=0 ;i<event.target.files.length;i++){
        this.introfile.push(event.target.files[i]) ;
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
