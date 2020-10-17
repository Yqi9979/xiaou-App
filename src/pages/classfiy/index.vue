<template>
<div class="classBox">
    <div class="header">
      {{$route.name}}
    </div>
    <div class="box">
        <div class="left">
        <v-classes></v-classes>
    </div>
    <div class="right">
        <v-classgoods></v-classgoods>
    </div>
    </div>
</div>
</template>
<script>
import vClasses from './classes.vue';
import vClassgoods from './classgoods.vue';
export default {
    components:{
        vClasses,
        vClassgoods
    }
}
</script>
<style scoped>
.header{
  width: 100%;
  text-align: center;
  color: white;
  background:#ff9900;
  font-size:0.4rem;
  padding:0.1rem 0;
}
.box{
    width: 100%;
    display: flex;
}
.left{
    flex: 1;
    border: 1px solid black;
}
.right{
    flex: 2;
    border: 1px solid black;

}


</style>