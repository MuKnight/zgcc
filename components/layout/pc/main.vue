<template>
  <div class="app-main">
    <header-view />
    <nuxt :nuxt-child-key="$route.name" />
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "./header";
import FooterView from "./footer";

export default {
  components: {
    // 布局
    HeaderView,
    FooterView
  }
};
</script>

<style>
</style>