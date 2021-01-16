import axios from 'axios'
export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:10000
    })
    // 2. axios的拦截器
    // instance.interceptors.response.use(
    // res =>{
     //       return res.data
    // },err => {
       //    console.log(err)
    // })
    instance.interceptors.request.use(config => {
        //进行拦截请求参数
        //config中一些不符合服务器要求的  在进行网络请求在页面上显示的发送请求的动态图标  判断一些config中是否带有一些token 等特殊信息信息
       // console.log("=="+config)
        return config //放行参数
    }, err => {

    })
    return instance(config) //这里的config 放到这里作为请求参数
   // return  instance(config.url)
   //      .then(res => config.success(res))
   //      .catch(err => config.failure(err))
}
export function request2(config){
    const instance = axios.create({
        baseURL:'http://localhost:8080/',
        timeout:5000
    })
    return instance(config) ;
}
// export  function request2(config,success,failure){
//     const instance =axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000,
//     })
//     return instance(config)
//         .then(res =>{
//             success(res) ;
//         })
//         .catch(err =>{
//             failure(err) ;
//         })
// }
// export  function  request(config){
//     return new Promise((resolve,reject) => {
//         // 1.创建axios的实例
//         const instance = axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:5000
//         })
//         //发送网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err)
//         })
//      })  //返回promise
        // .then(res => {console.log(res)}).catch( err => {console.log(err)})

