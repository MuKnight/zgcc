<template>
  <div id="login">
    <div class="header">
      <div class="container">
        <div class="hd-main flex flex-row flex-between">
          <div class="hd-l flex flex-row">
            <a href="/" class="flex-self-center">
              <img src="~static/img/main/logo.png" alt="logo" class="logo" />
            </a>
          </div>
          <div class="hd-r flex-self-center">
            还没有账号，
            <a href="/page_register">立即注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="form-box">
          <h4>用户登录</h4>
          <form
            onsubmit="return false"
            class="layui-form"
            id="form"
            onkeyup="if(event.keyCode==13)return false;"
            novalidate="novalidate"
          >
            <div class="layui-form-item">
              <input class="layui-input email" type="text" name="email" placeholder="请输入手机号码  /邮箱" />
            </div>
            <div class="layui-form-item">
              <input class="layui-input" type="password" name="plainPassword" placeholder="请输入登录密码" />
            </div>
            <div class="layui-form-item">
              <input
                class="layui-input-inline layui-input code"
                name="validateCode"
                type="text"
                placeholder="请输入图形验证码"
              />
              <a class="validatep-pic">
                <img src="/validateCode" alt="图形验证码" />
              </a>
            </div>
            <div class="layui-form-item">
              <button @click="login" class="layui-btn layui-btn-fluid confirm-btn">登录{{num}}</button>
            </div>
            <p class="layui-form-item resetPwd">
              <a href="/forget_pwd">忘记密码？</a>
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- <link href="/static/web/css/footer.css" rel="stylesheet" /> -->
    <footer-view />
  </div>
</template>

<script>
import footerView from "~/components/layout/pc/footer";
export default {
  layout: "empty",
  components: {
    footerView
  },
  computed: {
    num: {
      get() {
        return this.$store.state.test.num;
      }
    }
  },
  methods: {
    login() {
      const data = {
        username: "cctest",
        password: "admin123"
      };
      this.$axios.post("/vender/login/login", data).then(res => {});
    }
  }
};
</script>

<style>
</style>