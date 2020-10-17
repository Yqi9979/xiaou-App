<template>
<div>
 <router-view></router-view>
 <tab-bar :tabNav="tabNav"></tab-bar>
</div>
</template>
<script>
import home_hig from "../assets/img/tab_home_hig.png";
import home_nor from "../assets/img/tab_home_nor.png";
import menu_hig from "../assets/img/tab_menu_hig.png";
import menu_nor from "../assets/img/tab_menu_nor.png";
import shopping_hig from "../assets/img/tab_shopping_hig.png";
import shopping_nor from "../assets/img/tab_shopping_nor.png";
import me_hig from "../assets/img/tab_me_hig.png";
import me_nor from "../assets/img/tab_me_nor.png";

export default {
    data(){
        return {
            
            tabNav:[
                {
                path:"/index/home",
                text:"首页",
                selectImg:home_hig,
                noSelect:home_nor
                },
                {
                path:"/index/classfiy",
                text:"分类",
                selectImg:menu_hig,
                noSelect:menu_nor
                },
                {
                path:"/index/order",
                text:"订单",
                selectImg:shopping_hig,
                noSelect:shopping_nor
                },
                {
                path:"/index/mine",
                text:"我的",
                selectImg:me_hig,
                noSelect:me_nor
                },
            ]
        };
    }
}
</script>
<style>
</style>