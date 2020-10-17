<template>
  <div>
    <div class="header">
      <span class="goBack" @click="goBack()">＜</span>
      <p class="hea-span">{{$route.name}}</p>
    </div>
    <div>
      <img class="bigimg" :src="'/api'+detail.img" />
      <div class="info">
        <div class="line1">
          <p>{{detail.goodsname}}</p>
          <div class="line1-right">
            <div class="line1-right-img">
              <img src="../assets/img/img/cart_on.png" alt />
            </div>
            <div class="collect">收藏</div>
          </div>
        </div>
        <div class="line2">
          <div class="left">
            <div class="new-price" v-if="detail.market_price">￥{{detail.market_price | filterPrice}}</div>
            <div class="old-price" v-if="detail.price" >￥{{detail.price | filterPrice}}</div>
          </div>
          <div class="right">
            <div class="right-line2">
              <div class="btn2">热卖</div>
              <div class="btn2">热品</div>
            </div>
          </div>
        </div>
      </div>
      <div class="des" v-html="detail.description"></div>
    </div>
    <div class="footer">
      <div class="btn" @click="isshow=true">加入购物车</div>
    </div>
    <div class="mask " v-show="isshow" @click.self="isshow=false" >
      <div class="con">
        <div class="info">
          <img :src="'/api'+detail.img" alt />
          <p>{{detail.goodsname}}</p>
        </div>
        <div class="sku">
          <h3>{{detail.specsname}}</h3>
          <div class="attr"  >
            <span v-for="(item,index) in specsattr" :key="index"  @click="changeone(index)" :class="num1==index?'select':'' ">{{item}}</span>
          </div>
          <div class="btn" @click="add()">加入购物车</div>
          <v-toast v-if="isAdd" tit="加购成功" @hide="isAdd=false"></v-toast>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import vPicker from "./picker";
import vToast from "./toast";
import { reqGoodsinfo,reqCartadd } from "../utils/request";
export default {
  components: {
    vToast,
  },
  data() {
    return {
      isshow: false,
      isAdd: false,
      detail: [],
      specsattr:[],
      num1:0,
      num:1,
      tip:'',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changeone(i) {
      this.num1 = i;
    },
    add(){
      this.isshow=false
      reqCartadd({
        uid:localStorage.getItem('uid'),
        goodsid:localStorage.getItem('goodsid'),
        num:this.num
      }).then(res=>{
        console.log(res)
        this.tip=res.data.msg
      })
    }
  },
  computed:{
    
  },
  mounted() {
    // console.log(this.$route.params);
    var id = this.$route.params.id;
    // console.log(id);
    reqGoodsinfo(id).then(res => {
      console.log(res.data);
      this.detail = res.data.list[0];
      // this.specsattr=eval('('+ res.data.list[0].specsattr +')')
      this.specsattr=JSON.parse(res.data.list[0].specsattr)
      // console.log(this.specsattr);
      
      // console.log(res.data.list[0].specsattr)
    });
    
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.8rem;
  background: #f90;
  text-align: center;
  line-height: 0.8rem;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
.hea-span {
  font-size: 0.38rem;
  color: #fff;
}
.goBack {
  position: absolute;
  color: #fff;
  left: 0.3rem;
}
.bigimg {
  width: 100%;
  height: 4rem;
  margin-top: 0.8rem;
}
.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.line1 {
  width: 6.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0.1rem auto 0;
}
.line1 p {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}
.line1-right {
  flex: 1;
}
.line1-right-img {
  width: 100%;
}
.line1-right-img img {
  width: 0.3rem;
  display: block;
  margin: 0.1rem auto;
}
.collect {
  font-size: 0.2rem;
  color: red;
  text-align: center;
}
.line2 {
  width: 6.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.line2 .left {
  width: 1.5rem;
}
.new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.old-price {
  font-size: 0.26rem;
  color: #666;
  text-decoration: line-through;
}
.line2 .right {
  flex: 1;
}
.right-line2 {
  overflow: hidden;
}
.btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}

.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.footer .btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.con {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.con .info {
  overflow: hidden;
}
.con .info img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.info p {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.sku h3 {
  font-size: 0.38rem;
  line-height: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
}
.sku .attr {
  overflow: hidden;
}
.attr span {
  float: left;
  padding: .2rem .3rem;
  border: .02rem solid #666;
  border-radius: .1rem;
  margin: .2rem;
  font-size: .3rem;
}
.select {
  color: #f90;
  border-color: #f90;
}
.con .btn {
  position: static;
  display: block;
  margin: 0 auto;
  width: 2rem;
  height: 1rem;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}

.hide {
  display: none;
}
</style>