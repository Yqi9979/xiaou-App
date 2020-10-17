import axios from "axios"
import qs from "qs"
const baseUrl = "/api"

//请求拦截:每次发起请求都要做的事，return的内容是服务端收到的请求信息
axios.interceptors.request.use(config => {
    if (config.url != baseUrl + "/login") {
        config.headers.token = localStorage.getItem("token")
    }
    return config
})

//响应拦截：服务端响应组件，每次都要做的事，return内容是组件收到的真正的数据
axios.interceptors.response.use(res => {
    console.log("本次请求的地址是：" + res.config.url);
    console.log(res);
    return res;
})

//登录
export const reqLogin = (data) => {
    return axios({
        url: baseUrl + "/api/login",
        method: "post",
        data:data
    })
}
//注册
export const reqRegister = (data) => {
    return axios({
        url: baseUrl + "/api/register",
        method: "post",
        data:data
    })
}
//分类信息(首页)
export const reqClasses = () => {
    return axios({
        url: baseUrl + "/api/getcate",
        method: "get",
        
    })
}
//轮播图信息(首页)
export const reqBanner = () => {
    return axios({
        url: baseUrl + "/api/getbanner",
        method: "get",
        
    })
}
//限时秒杀信息(首页)
export const reqSeckill = () => {
    return axios({
        url: baseUrl + "/api/getseckill",
        method: "get",
        
    })
}
//商品信息(首页)
export const reqIndexgoods = () => {
    return axios({
        url: baseUrl + "/api/getindexgoods",
        method: "get",
        
    })
}
//分类树形结构
export const reqCatetree = () => {
    return axios({
        url: baseUrl + "/api/getcatetree",
        method: "get",
        
    })
}
//分类商品
export const reqGoods = (fid) => {
    return axios({
        url: baseUrl + "/api/getgoods",
        method: "get",
        params: {
            fid:fid
        }
    })
}
//一个商品信息
export const reqGoodsinfo = (id) => {
    return axios({
        url: baseUrl + "/api/getgoodsinfo",
        method: "get",
        params: {
            id:id
        }
    })
}
//购物车列表
export const reqCartlist = (uid) => {
    return axios({
        url: baseUrl + "/api/cartlist",
        method: "get",
        params: {
            uid:uid
        }
    })
}
//购物车添加
export const reqCartadd = (data) => {
    return axios({
        url: baseUrl + "/api/cartadd",
        method: "post",
        data: data
    })
}
//购物车删除
export const reqCartdelete= (id) => {
    return axios({
        url: baseUrl + "/api/cartdelete",
        method: "post",
        data: {
            id:id
        }
    })
}
// 购物车修改
export const reqCartedit= (id,type) => {
    return axios({
        url: baseUrl + "/api/cartedit",
        method: "post",
        data: {
            id: id,
            type:type
        }
    })
}


