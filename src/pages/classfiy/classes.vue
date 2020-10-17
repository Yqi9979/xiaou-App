<template>
  <div class="classes">
    <!-- class分类信息-->
    <ul>
      <li v-for="item in foods" :key="item.id">{{item.catename}}</li>
    </ul>
    
  </div>
</template>
<script>
import { reqCatetree } from "../../utils/request";
export default {
  data() {
    return {
      foods: []
    };
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
ul li{
  /* border: 1px solid red; */
  text-align: center;
  line-height: 1rem;
}
.select{
  background: blue;
  color: #fff;
}
</style>