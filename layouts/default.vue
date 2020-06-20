<template>
  <div>
    <client-only>
      <pc-main-view v-if="!isMobile" />
      <mobile-main-view v-else />
    </client-only>
  </div>
</template>
<script>
import PcMainView from "~/components/layout/pc/main.vue";
import MobileMainView from "~/components/layout/mobile/main.vue";
import { isBrowser, isProdMode } from "~/environment";
export default {
  components: {
    PcMainView,
    MobileMainView
  },

  methods: {
    baiduStatistics: function() {
      (function() {
        let hm = document.createElement("script");

        hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxx";

        let s = document.getElementsByTagName("script")[0];

        s.parentNode.insertBefore(hm, s);
      })();
    }
  },
  mounted() {
    this.baiduStatistics();
  },
  computed: {
    isMobile() {
      return this.$store.state.global.isMobile;
    }
  }
};
</script>
<style>
</style>
