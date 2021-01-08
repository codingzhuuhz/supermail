import Vue from 'vue'
import Vuex from 'vuex'
import getters from "@/store/getters";
Vue.use(Vuex)
const store = new Vuex.Store({
    getters,
    state:{
        cartList:[]
    },
    mutations:{
        //mutations唯一的目的就是修改state中的状态
        //mutations中的方法尽可能完成的事件比较单一

        //进行重构操作 后期看一下vuex 在进行重构！！！
        addCart(state,payload){
            let oldProduct = null
            for(let item of state.cartList){
                if(item.id == payload.id){//数组中已经存在
                    oldProduct = item ;
                }
            }
            if(oldProduct){
                oldProduct.count +=1;
            }else{
                state.cartList.push(payload)
                payload.isChecked = true
                payload.count  = 1 ;
            }
        }
    }
})
export default store
