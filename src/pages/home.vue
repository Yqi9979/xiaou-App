<template>
  <div class="box">
    <div class="mine">
      <div class="header">{{$route.name}}</div>
    </div>
    <header>
      <img src="../assets/img/img/home/logo.jpg" alt />
      <div class="search">寻找商品</div>
    </header>
    <div class="main">
      <!-- <div class="banner">
        <img src="../assets/img/img/home/swiper.jpg" alt />
        <p></p>
      </div>-->
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item  v-for="(list,index) in banner" :key="index">
            <img :src="'/api'+list.img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="main-box">
        <div class="box-item">
          <img src="../assets/img/img/home/1.jpg" alt />
        </div>
        <div class="box-item">
          <img src="../assets/img/img/home/1.jpg" alt />
        </div>
        <div class="box-item">
          <img src="../assets/img/img/home/1.jpg" alt />
        </div>
        <div class="box-item">
          <img src="../assets/img/img/home/1.jpg" alt />
        </div>
      </div>
      <div class="main-item">
        <div class="info-item" v-for="item in indexList" :key="item.id" @click="toDetail(item.id)">
          <img class="item-img" :src="'/api'+item.img" alt />
          <div class="item-con">
            <div class="goodsname">{{item.goodsname}}</div>
            <div class="price">￥{{item.price}}</div>
            <div class="btn">立即抢购</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqIndexgoods,reqBanner } from "../utils/request";
export default {
  data() {
    return {
      indexList: [],
      banner: {},
    };
  },
  methods: {
    toDetail(id) {
      //本地存储goodsid
      var goodsis = localStorage.setItem("goodsid", id);
      this.$router.push("/detail/" + id);
    },
  },
  mounted() {
    reqIndexgoods().then(res => {
      this.indexList = res.data.list[0].content;
    });
    reqBanner().then(res=>{
      this.banner=res.data.list
    })
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  text-align: center;
  color: white;
  background: #ff9900;
  font-size: 0.4rem;
  padding: 0.1rem 0;
}
header {
  /* border: 1px solid red; */
  line-height: 0.8rem;
  padding: 0.2rem 0;
}
header img {
  float: left;
  margin-left: 0.2rem;
  width: 2rem;
  height: 0.5rem;
}
header .search {
  width: 1.8rem;
  height: 0.5rem;
  background: #ccc;
  color: #666;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.14rem;
  margin: 0 auto;
  border-radius: 0.2rem;
}
.banner img {
  width: 100%;
  height: 211px;
}
.main-box {
  text-align: center;
  display: flex;
}
.box-item {
  flex: 2;
}
.box-item img {
  width: 90%;
}
.info-item {
  display: flex;
  padding: 0.2rem;
}
.info-item .item-img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.info-item .item-con {
  flex: 1;
  margin-left: 0.3rem;
}
.item-con .goodsname {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.item-con .price {
  color: #e23838;
  font-size: 0.4rem;
}
.item-con .btn {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}
</style>