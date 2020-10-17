<template>
    <div class="one1" >
        <div class="geren" v-show="mark=='false'">
        <div class="header">
            <img src="../assets/img/set.png" alt="" class="imgL" >
            <img src="../assets/img/news.png" alt="" class="imgR">

            <p class="zhongxin">{{$route.name}}</p>
        </div>
        <div class="yuan">
            <img src="../assets/img/1.jpg" alt="">
        </div>
       </div>
       <div class="baise">
            <div class="diandeng">小不点儿</div>
            <img src="../assets/img/keep.png" alt="" >  
            <span class="shaou">我的收藏（5）</span>
       </div>
       <div class="dingdan">
           <span class="dingdan1">我的订单</span>
           <span class="dingdan2">查看订单</span>
       </div>
        <div class="dwuge">
            <div class="fukuan">
                <img src="../assets/img/icon_boligation.png" alt="">
                <span>代付款</span>
            </div>
            <div class="fahuo">
                <img src="../assets/img/prepare.png" alt="">
                <span>代发货</span>
            </div>
            <div class="shoukuan">
                <img src="../assets/img/icon_consignee.png" alt="">
                <span>代收货</span>
            </div>
            <div class="pingjia">
                <img src="../assets/img/icon_evaluate.png" alt="">
                <span>代评价</span>
            </div>
            <div class="tuikuan">
                <img src="../assets/img/icon_refund.png" alt="">
                <span>退款/售后</span>
            </div>
        </div>
        <div class="shouhuot">
           <span class="dizhi">收货地址管理</span>
        </div>
    </div>
</template>

<script>
export default {
 data(){
     return{
          mark:"false"
     }
 }
}
</script>

<style scoped>

.geren{
    width: 100%;
    height: 3.64rem;
    background: #ff9900;
}
.header{
    border-bottom: 1px solid #fff;

}
.header p{
    padding: 0.1rem 0;
    font-size: 0.5rem;
    color: #ffffff;
    text-align: center;
}
.header .imgL{
    float: left;
    margin:0.25rem 0.1rem;
}
.header .imgR{
    float: right;
    margin:0.25rem 0.1rem;
}
.one1{
    width: 100%;
    /* height: 100%; */
    background: #f3f3f3;
    height: 13rem;
    position: relative;
}
.yuan{
    width: 2.1rem;
    height: 2.1rem;
    background: #e7dedf;
    border-radius: 50%;
    border: 0.1rem solid #ffffff;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%,-50%);
}
.yuan img{
     width: 2.1rem;
     height: 2.1rem;
     border-radius: 50%;
     text-align: center;
}
.baise{
    width: 100%;
    height: 2rem;
    padding-top: 0.8rem;
    background: #ffffff;
}
.baise img{
    margin-left: 0.2rem;
    padding: 0.1rem 0.1rem 0 0.1rem;
}
.diandeng{
    position: relative;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    
}
.shaou{
    font-size: 0.4rem;
}
.dingdan{
    width: 100%;
    height: 1.12rem;
    border-bottom: 0.01rem solid #bbbbbb;
    margin-top:0.3rem;
    background: #ffffff;
    position: relative;
}
.dingdan1{
    font-size: 0.3rem;
    display: inline-block;
    width: 1.4rem;
    height: 0.1rem;
    position: absolute;
    top:0.4rem;
    left: 0.2rem;
  
}
.dingdan2{
    font-size: 0.4rem;
     display: inline-block;
     margin-bottom:0.3rem;
     width: rem;
     height: 0.3rem;
     color: #bbbbbb;
     text-align: center;
     margin-left: 2.3rem;
    position: absolute;
    top:0.3rem;
    left: 1.4rem;

}
.dwuge{
    width: 100%;
    height:1.88rem;
    background: #ffffff;
    text-align: center;
 
}
.dwuge img{
    width:0.5rem ;
    display: block;
     text-align: center;
     margin-left: 0.3rem;
     margin-top:0.23rem;
}
.dwuge span{
    font-size: 0.03rem;
    margin-top:0.3rem;
    display: block;
}
.dwuge .fukuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.2rem;
     margin-top:0.3rem;
     display: block;
  
}

.dwuge .fahuo{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.1rem;
       margin-top:0.3rem;
}
.dwuge .shoukuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
     margin-left: 0.1rem;
       margin-top:0.3rem;
}
.dwuge .pingjia{
  width:1.1rem;
  height: 1.3rem;

  float: left;
    margin-left: 0.1rem;
      margin-top:0.3rem;
}
.dwuge .tuikuan{
  width:1.1rem;
  height: 1.3rem;

   float: left;
   margin-left: 0.1rem;
     margin-top:0.3rem;
}
.shouhuot{
    width: 100%;
    height:1.25rem;
    background: #ffffff;
    position: relative;
}
.shouhuot .dizhi{
    font-size: 0.4rem;
    color: #bbbbbb;
    position: absolute;
    left: 0.1rem;
    top:0.5rem;
}
.wode{
    width: 100%;
    background: #f3f3f3;
    height: 1.33rem;
}
</style>