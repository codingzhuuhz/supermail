import  Vue from 'vue'
import VueRouter from 'vue-router'
// 1.安装插件
Vue.use(VueRouter)
const Home=() =>import("../views/home/Home")
const Category=() =>import("../views/category/Category")
const Cart=() =>import("../views/cart/Cart")
const Profile=() =>import("../views/profile/Profile")
const Detail=() =>import("../views/detail/Detail")
// 2.创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    } ,
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
    path:'/Cart',
        component:Cart
    },
    {
        path:'/Profile',
        component:Profile
    },
    {
        path:'/detail/:gid',
        component:Detail
    }
]

const router = new VueRouter({
    routes,// 挂载到Vue实例上
    mode:'history'// 这里使得路径变得更加好看
})
// 3.导出router
export default router
