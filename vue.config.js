module.exports = {
    // address:'127.0.0.1',
    // port:8081,
    devServer:{

        // proxy:{ 开启跨域访问
        //     "/Calculate":{
        //         target:'http://47.93.40.7:8033',
        //         changeOrigin:true,
        //         secure:true,
        //         // pathRewrite:{
        //         //     "/^api":""
        //         // }
        //     }
        // }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "views":"@/views",
            }
        }
    }
}
