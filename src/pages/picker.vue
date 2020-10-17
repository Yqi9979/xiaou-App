<template>
  <div class="mask" @click.self="add">
      <div class="con">
          <h3>请选择你要的手机内存</h3>
          <button @click="add">加入购物车</button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        add(){
            this.$emit("hide")
        }
    },
}
</script>

<style>
.mask{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
}
.con{
    width: 100%;
    height: 300px;
    background: royalblue;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>