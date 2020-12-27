import {request,request2} from "./request"
export function getGoodDetailInfo(gid){
    return request2({
        url:'/cors/getGoodInfoById/'+gid,
        dataType:'jsonp'
    })
}
