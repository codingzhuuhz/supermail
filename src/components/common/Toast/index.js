import Toast from "@/components/common/Toast/Toast";
 const obj = {}
 obj.install = function (Vue){
     // console.log('默认进行执行....');
     // 目的是将Toast放到页面body里面
     // 1. 创建组件构造器
     const toastContrustor = Vue.extend(Toast);
      //2 new的方式，根据组件构造器，创建出来一个组件对象
     const toast = new toastContrustor() ;
     //3 将组件对象手动挂载到某一个元素上
     toast.$mount(document.createElement('div'))
     //4. toast.$el对应的就是div
     document.body.appendChild(toast.$el)
      //5再将Toast组件放到原型中
     Vue.prototype.$toast = toast
 }
 export default obj;
