

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  generate: {
    subFolders: false
  },
  head: {
    title: "掌柜查查官网 - 反打假_防敲诈_曝光恶人_职业打假人查询_差评师查询 ",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: "keywords",
        content:
          "掌柜查查,照妖镜,反恶联盟,亲查查,查电商,淘宝查号,淘宝信誉查询,职业打假人,7举报网,淘宝小号查询,旺旺号查询,微查宝,开店宝,八卦盾,黑号捕手,淘捏捏,淘一兔"
      },
      {
        name: "description",
        content:
          "掌柜查查，一个开放免费共享的天猫，淘宝，京东，拼多多，阿里巴巴、苏宁易购，反打假人的云数据库,曝光恶意买家，维护公平交易，传递正能量！"
      },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?188bddda2bb7550300f8a02552c20ce7' }, /*引入百度统计的js*/
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/app.scss',
    "element-ui/lib/theme-chalk/index.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: "~plugins/element-ui.js",
      mode: 'client'
    },
    {
      src: "~plugins/axios.js",
      mode: 'client'
    },
    {
      src: "~plugins/ga.js",
      mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    verdor: ['element-ui'],
    extend(config, ctx) {
    }
  }
}
