<template>
  <div class="classes">
    <div class="header">{{$route.name}}</div>
    <!-- class分类信息-->
    <div class="box" >
      <ul class="left">
        <li
          v-for="item in foods"
          :key="item.id"
          @click="changeone(item.id)"
          :class="num==item.id?'select':'' "
        >{{item.catename}}</li>
      </ul>
      <div class="right"  v-for="(item,index) in foods" :key="index" :class="num===item.id?'show':'hidden'">
        <div class="every" v-for="it in item.children"  :key="it.id" @click="toList(it.id,it.catename)">
          <img class="img" :src="'/api'+it.img " alt />
          <p class="text">{{it.catename}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqCatetree } from "../utils/request";
export default {
  data() {
    return {
      foods: {},
      num: 17,
    };
  },
  methods: {
    changeone(i) {
      this.num = i;
    },
    toList(id,name){
      
      this.$router.push('/list/'+id+'/'+name)
    }
  },
  mounted() {
    reqCatetree().then(res => {
      console.log(res);
      this.foods = res.data.list;
      
    });

  }
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
.box {
  display: flex;
}
.box .left {
  background: #fafafa;
  width: 2.34rem;
}
.left li {
  text-align: center;
  font-size: 0.28rem;
  height: 0.93rem;
  line-height: 1rem;
}
.box .right {
  flex: 1;
  overflow: hidden;
}
.right .every {
  float: left;
  border: 1px solid blue;
  border-radius: 0.2rem;
  margin-left: .1rem;
  margin-top: .24rem;
  position: relative;
  overflow: hidden;
  
}
.every .img{
    width: 2.2rem;
    height: 2.3rem;
}
.every .text{
    height: .48rem;
    width: 2.2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #1d84a7;
    color: #fff;
    text-align: center;
    line-height: .48rem;
    font-size: .23rem;
}
.show {
  display: block;
}
.hidden {
  display: none;
}
.select {
  border-left: .1rem solid #1d84a7;
  background: #fff;
  color: #f90;
}
</style>