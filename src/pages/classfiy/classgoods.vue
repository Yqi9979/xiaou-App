<template>
<div>
    <!-- 分类商品 -->
    
</div>
</template>
<script>
import {reqCatetree} from '../../utils/request';
export default {
    data() {
    return {
      foodList: []
    };
  },
  mounted() {
    // var fid=this.$route.query.id;
    reqCatetree().then(res => {

      console.log(res);
    //   this.foodList = res.data.list;
    });
  }
}
</script>
<style>
</style>