<template>
  <div>
    <div class="register">
      <div class="register-header">
        <span class="goBack" @click="goBack()">＜</span>
        <span class="reg-but">注册</span>
        <router-link class="login" to="/login">登录</router-link>
      </div>
    </div>
    <div class="box">
      <div class="box-main">
        <div class="shouji">
          <span>手机号:</span>
          <input type="text" name="username" v-model="user.phone" placeholder="请输入手机号" />
        </div>
        <div class="inp">
          <span>昵称:</span>
          <input type="text" name="nickname" v-model="user.nickname" placeholder="请输入昵称" />
        </div>
        <div class="inp">
          <span>密码:</span>
          <input type="text" name="password" v-model="user.password" placeholder="请输入密码" />
        </div>
        <button @click="register()">注册</button>
         <v-toast v-if="isR" tit="注册成功" @hide="isR=false"></v-toast>
      </div>
    </div>
  </div>
</template>
<script>
import vToast from "./toast";
import { reqRegister } from "../utils/request";
export default {
  components: {
    vToast,
  },
  data() {
    return {
      isR: false,
      user: {
        phone: "",
        password: "",
        nickname: ""
      }
    };
  },
  methods: {
    register() {
      if (this.user.phone == "" || this.user.password == "") {
        alert("手机号和密码不能为空");
        return;
      }
      reqRegister({
        phone: this.user.phone,
        password: this.user.password,
        nickname: this.user.nickname
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.isR = true;
          this.$router.push("/login");
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 1.4rem;
  background: #ff9900;
}
.register-header {
  width: 6rem;
  margin: 0 auto;
  height: 1.4rem;
}
.register-header .goBack {
  color: #ffffff;
  font-size: 0.3rem;
  float: left;
  margin-top: 0.4rem;
}
.register-header .reg-but {
  color: #ffffff;
  font-size: 0.3rem;
  float: left;
  margin-left: 2.24rem;
  margin-top: 0.4rem;
}
.register-header .login {
  color: #ffffff;
  font-size: 0.3rem;
  float: right;
  margin-top: 0.4rem;
}
.box {
  width: 5rem;
  height: 8rem;
  margin: 0 auto;
}
.box .box-main {
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  margin-top: 2rem;
}
.box-main .shouji {
  width: 5rem;
  height: 1rem;
  color: #6e6e6e;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #a3a3a3;
  margin-top: 0.4rem;
}
.box-main input {
  border: none;
  outline: 0;
}
.box-main input {
  outline: 0;
  height: 0.8rem;
}
.box-main .inp {
  width: 5rem;
  height: 1rem;
  color: #6e6e6e;
  font-size: 0.3rem;
  margin: 0.5rem 0;
  border-bottom: 0.01rem solid #a3a3a3;
}
button {
  width: 5rem;
  background: #ff9900;
  text-align: center;
  height: 1rem;
  border: none;
  border-radius: 0.09rem 0.09rem;
  color: #ffffff;
}
</style>
