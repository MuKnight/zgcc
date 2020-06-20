<template>
  <div class="header layui-hide-xs">
    <div class="container">
      <div class="hd-main flex flex-row flex-between">
        <div class="hd-l flex flex-row">
          <a class="flex-self-center" href="/">
            <img src="~static/img/main/logo.png" alt="logo" class="logo" />
          </a>
          <ul class="nav flex-self-center">
            <li data-menu="home" class="active">
              <a href="/">首页</a>
            </li>
            <li data-menu="plugin">
              <a href="/plugin">插件下载</a>
            </li>
            <li data-menu="wechat-mall">
              <a href="https://www.chachamall.com" target="_blank">微信开店</a>
            </li>
            <li data-menu="check-shop" class="new">
              <a href="/check-shop">查查检测</a>
            </li>
            <li class="drop-menu">
              <a href="javascript:void(0);">工具箱</a>
              <div class="drop-body num3">
                <a href="/tool">卖家工具</a>
                <a href="/law/judgement">裁判文书</a>
              </div>
            </li>
            <!-- <li class='drop-menu'>
						<a class='' href="/law/judgement.html">裁判文书</a>
						<div class='drop-body'>
												<a href="/law/judgement.html" target="_blank">裁判文书</a>
												<a href="/legal.html">尊享律师</a>
											</div>
            </li>-->
            <!-- <li class="pull-down">
                     <span>律师服务</span>
                     <div class="pull-down-box">
                       <ul class="pull-down-ul">
                          <li><a href="/law/judgement.html" target="_blank">裁判文书</a></li>
                          <li><a href="/legal.html">尊享律师</a></li>
                       </ul>
                     </div>
            </li>-->
            <!-- <li><a href="/law/judgement.html" target="_blank">裁判文书</a></li>
            -->
            <li>
              <a href="http://api.zgchacha.com" target="_blank">API接口</a>
            </li>
            <li>
              <a href="/promote.html">推广合作</a>
            </li>
            <li data-menu="help">
              <a href="/home-help.html">帮助中心</a>
            </li>
          </ul>
        </div>
        <div class="hd-r flex-self-center">
          <div class="btn-group">
            <a
              href="/page_login"
              class="flex-item-center layui-btn layui-btn-sm layui-btn-normal layui-btn-radius"
            >登录</a>
            <a
              href="/page_register"
              class="flex-item-center layui-btn layui-btn-sm layui-btn-primary layui-btn-radius"
            >注册</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "~assets/styles/header.css";
</style>