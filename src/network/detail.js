import {request,request2} from "./request"
export function getGoodDetailInfo(gid){
    return request2({
        url:'/cors/getGoodInfoById/'+gid,
        dataType:'jsonp'
    })
}
export class Good{
    constructor(itemInfo) {
        this.title = itemInfo.gname ;
        this.introduce = itemInfo.gintroduce ;
        this.newprice = itemInfo.gnewprice ;
        this.oldprice = itemInfo.goldprice ;
        this.sellnum = itemInfo.sellnum ;
        this.storenum = itemInfo.storenum ;
    }
}
export class Shop{
    constructor(shopInfo,sellnum) {
        this.logo = shopInfo.shopUrl ;
        this.name = shopInfo.shopName ;
        this.shopScore = shopInfo.shopScore ;
        this.sellnum = sellnum ;
    }
}
