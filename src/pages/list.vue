<template>
  <div>
    <div class="page">
      <div class="header">
        <span class="goBack" @click="$router.go(-1);">＜</span>
        <p class="hea-span">{{name}}</p>
      </div>
      <div class="main-item">
        <div class="info-item" v-for="item in goods" :key="item.id" @click="toDetail(item.id)">
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
import { reqGoods } from "../utils/request";
export default {
  data() {
    return {
      goods: [],
      name: ""
    };
  },
  mounted() {
    var fid = this.$route.params.id;
    this.name = this.$route.params.name;
    reqGoods(fid).then(res => {
      console.log(res.data);
      this.goods=res.data.list;
    });
  },
  methods: {
    toDetail(id){
    //   var goodsis = localStorage.setItem('goodsid',id)
      this.$router.push("/detail/"+id)
    }
  }
};
</script>

<style scoped>
.page {
  padding-top: 0.8rem;
}
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