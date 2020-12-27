import {request,request2} from "./request"
export  function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeGoods(page,type){
    //console.log(page)
    return request2({
        type: 'get',
        url:'/cors/getGoodInfo',
        params:{
            page:page,
            type:type,
        },
        dataType: 'JSONP'
    })
}
// export function getHomeMultidata(){
//     return request({
//         url:'/home/multidata',
//         success: function (res){
//             console.log("--"+res)
//         },
//         failure: function (err){
//             console.log(err)
//         }
//     })
// }

//
// export function getHomeMultidata(){
//     return  request2({url:'/home/multidata'},
//         res  => {console.log(res)},
//         err => {console.log(err)})
// }

// request({url:''}).then().catch() ;
