<template>
    <div>
        <div class="denglu">
            <div class="denglu1">
                 <span class="twodeng" >登录</span>
                  <router-link class="theredenglu" to='/register'>注册</router-link>
            </div>
        </div>
        <!-- 2 -->
        <div class="bao">
            <div class="baoton">
            <div class="shouji">
                <span>手机号:</span>
                <input type="text" name="userphone" v-model="user.phone" placeholder="请输入账号">
            </div>
            <div class="mima">
                <span>密码:</span>
                <input type="text" name="password" v-model="user.password" placeholder="请输入密码">
            </div>
            <button  @click="login()" >登录</button>
            <v-toast v-if="isLogin" tit="登录成功" @hide="isLogin=false"></v-toast>
            </div>
        </div>
    </div>
</template>

<script>
import vToast from "./toast";
import { reqLogin } from "../utils/request";
export default {
  components: {
    vToast,
  },
  data() {
    return {
      
      isLogin: false,
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if(this.user.phone==''||this.user.password==''){
        alert('账号密码不能未空')
      }
      reqLogin({
        phone:this.user.phone,
        password:this.user.password
      }).then((res)=>{
        console.log(res);        
        if(res.data.code==200){
          //登录成功，设计一个标记
          var uid = localStorage.setItem("uid", res.data.list.uid);
          this.isLogin = true;
          this.$router.push("/index")
          
        }
      }).catch(err=>{
        alert("密码错误")
      })

      
    },
  },
}
</script>

<style scoped>
 .denglu{
     width: 100%;
     height: 1.4rem;
     background:#ff9900;
 }
  .denglu1{
      width: 6rem;
      margin:0 auto;
      height: 1.4rem;

 }
  .denglu .denglu1 .onedeng{
      color: #ffffff;
      font-size: 0.3rem;
       float: left;
        margin-top:0.4rem;
  }
    .denglu .denglu1 .twodeng{
      color: #ffffff;
      font-size: 0.3rem;
      float: left;
      margin-left: 2.24rem;
       margin-top:0.4rem;
  }
    .denglu .denglu1 .theredenglu{
      color: #ffffff;
      font-size: 0.3rem;
      float: right;
      margin-top:0.4rem;
  }
.bao{
    width: 5rem;
    height: 8rem;
    margin: 0 auto;
}
.bao .baoton{
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    margin-top:2rem;

}
.bao .baoton .shouji{
    width:5rem;
    height: 1rem;
    color: #6e6e6e;
    font-size: 0.3rem;
    border-bottom: 0.01rem solid #a3a3a3;
      margin-top:0.4rem;
}
.bao .baoton input{
    border: none;
    outline: 0;
}
.bao .baoton .mima{
    width:5rem;
    height: 1rem;
    color: #6e6e6e;
    font-size: 0.3rem;
    margin-top:0.4rem;
    border-bottom: 0.01rem solid #a3a3a3;
}
.bao .baoton input{
    border: none;
    outline: 0;
}
.baotonn{
    width: 4rem;
    margin: 0 auto;
    background: red
}
 .baotonn .tomi{
     width: 1rem;
     color: #6e6e6e;
     float: right;
     font-size: 0.1rem;
 }
 button{
     width: 5rem;
     background: #ff9900;
     text-align: center;
     height:1rem;
     border: none;
     border-radius: 0.09rem 0.09rem;
     color: #ffffff;
 }
</style>
