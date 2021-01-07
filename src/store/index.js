import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
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
                payload.count  = 1 ;
            }
        }
    }
})
export default store
