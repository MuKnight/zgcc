<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "掌柜查查官网 - 反打假_防敲诈_曝光恶人_职业打假人查询_差评师查询 ",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "掌柜查查，一个开放免费共享的天猫，淘宝，京东，拼多多，阿里巴巴、苏宁易购，反打假人的云数据库,曝光恶意买家，维护公平交易，传递正能量！"
        },
        {
          name: "keywords",
          content:
            "掌柜查查,照妖镜,反恶联盟,亲查查,查电商,淘宝查号,淘宝信誉查询,职业打假人,7举报网,淘宝小号查询,旺旺号查询,微查宝,开店宝,八卦盾,黑号捕手,淘捏捏,淘一兔"
        }
      ]
    };
  },
  data() {
    return {
      formError: null,
      formUsername: "",
      formPassword: ""
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
</script>

<style>
</style>
