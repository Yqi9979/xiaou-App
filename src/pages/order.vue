<template>
  <div>
    <div class="order">
      <div class="header">{{$route.name}}</div>
      <div :class="cartList==''?'show':'hidden'">暂无数据</div>
    </div>
    <!-- vant插件的购物车 -->
    <!-- <div class="inner" v-for="(item,index) in cartList" :key="index">
      <van-card
        :num="item.num"
        :price="item.price"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="'/api'+item.img"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>-->
    <div class="inner" >
      <div class="every" v-for="(item,index) in cartList" :key="index">
        <div class="title">
          <img class="title-img" src="../assets/img/store.png" alt="">
          <div class="title-txt">杭州保税区仓</div>
        </div>
        <div class="every-con"  >
          <div class="con">
            <div class="left">
              <img class="left-img" src="../assets/img/radio_nor.png" alt="">
            </div>
            <div class="center">
              <img class="center-img" :src="'/api'+item.img" alt="">
            </div>
            <div class="right">
              <div class="r-left">
                <div class="name">{{item.goodsname}}</div>
                <div class="btns">
                  <div class="btn" @click="sub(index)">-</div>
                  <div class="btn">{{item.num}}</div>
                  <div class="btn" @click="add(index)">+</div>
                </div>
                <div>总价：{{item.num*item.price | filterPrice}}</div>
              </div>
            </div>
            <div class="price">
              <div>￥{{item.price | filterPrice}}</div>
            </div>
            <div class="delete-btn">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="quanxuan">
        <img src="../assets/img/radio_nor.png" alt />
      </div>
      <div class="edit">
        <img src="../assets/img/editor_nor.png" alt />
        <div class="edit-txt">编辑</div>
      </div>
      <div class="all">
        <div class="all-price" >合计:0:00</div>
        <div class="all-price tip">(不含运费)</div>
      </div>
      <div class="pay-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { reqCartlist } from "../utils/request";
export default {
  data() {
    return {
      checked:false,
      cartList: []
    };
  },
  methods:{
    // - 
    sub(index) {
        this.cartList[index].num--;
        this.cartList[index].num = Math.max(this.cartList[index].num, 1)
    },
    // + 
    add(index) {
        this.cartList[index].num++;
        this.cartList[index].num = Math.max(this.cartList[index].num, 1)
    },
    //修改某一个的checked
    changeOne() {
      console.log(111)
    }
  },
  mounted() {
    var uid = localStorage.getItem("uid");
    reqCartlist(uid).then(res => {
      console.log(res);
      this.cartList = res.data.list;
    });
  }
};
</script>

<style scoped>
.order .header {
  width: 100%;
  text-align: center;
  color: white;
  background: #ff9900;
  font-size: 0.4rem;
  padding: 0.1rem 0;
}
.inner {
  margin-bottom: 2.24rem;
}
.title{
    overflow: hidden;
    height: 1.06rem;
}
.title-img{
  float: left;
    width: .36rem;
    height: .36rem;
    margin-left: .36rem;
    margin-top: .35rem;
    margin-right: .27rem;
}
.title-txt {
    float: left;
    font-size: .28rem;
    color: #a8a8a8;
    line-height: 1.06rem;
}
.every-con{
  overflow: hidden;
}
.con {
    width: 8.7rem;
    height: 2.4rem;
    overflow: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.con .left{
  float: left;
}
.left-img{
      width: .42rem;
    height: .42rem;
    margin-left: .38rem;
    margin-top: .86rem;
    margin-right: .21rem;
}
.con .center{
  float: left;
}
.center-img{
  width: 1.57rem;
    height: 1.57rem;
    margin-top: .3rem;
    margin-right: .21rem;
}
.con .right{
  float: left;
}
.r-left {
    float: left;
    width: 2.8rem;
    margin-top: .1rem;
    margin-right: .13rem;
}
.name{
    font-size: .32rem;
    overflow: hidden;
    color: #333;
    margin-bottom: .33rem;
}
.btns {
    overflow: hidden;
}
.btn {
    width: .78rem;
    height: .47rem;
    float: left;
    font-size: .24rem;
    color: #666;
    border: .01rem solid #ccc;
    text-align: center;
    line-height: .47rem;
}
.price{
    float: left;
    font-size: .3rem;
    color: #333;
    line-height: 1.2rem;
}
.delete-btn {
    float: right;
    height: 2.4rem;
    width: .98rem;
    text-align: center;
    line-height: 2.4rem;
    color: #fff;
    background: #fa0;
}
.footer {
    width: 100%;
    height: 1.12rem;
    position: fixed;
    left: 0;
    bottom: 1.04rem;
    border-top: .02rem solid #ccc;
    overflow: hidden;
    background: #fff;
}
.quanxuan{
    float: left;
    width: .58rem;
    margin-left: .38rem;
    margin-top: .18rem;
    margin-right: .68rem;
}
.edit-img, .quanxuan-img {
    width: .42rem;
    height: .42rem;
    margin-bottom: .1rem;
    margin-left: .08rem;
    float: left;
}
.edit-txt, .quanxuan-txt {
    float: left;
    font-size: .28rem;
    color: #666;
    width: 100%;
    text-align: center;
}
.edit {
    float: left;
    width: .58rem;
    margin-top: .18rem;
}
.all{
    float: left;
    margin-left: .15rem;
    margin-top: .29rem;
}
.all-price {
    font-size: .24rem;
    color: #666;
}
.tip {
    color: #999;
    margin-left: .08rem;
}
.pay-btn {
    width: 2.32rem;
    float: right;
    height: 1.12rem;
    background: #fa0;
    color: #fff;
    text-align: center;
    line-height: 1.12rem;
    font-size: .38rem;
}




.show {
  display: block;
}
.hidden {
  display: none;
}
</style>