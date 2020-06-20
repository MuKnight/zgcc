#  nuxt 开发需要注意问题  

1. windows 未定义问题。 nuxt 内部提供函数 process.browser 判断是否为前端环境

2. 引入静态文件 ~指向根目录  使用~static  指向根目录的 static

3. nuxt目录下需要引入 或者使用的 
    1. store.js 中 导出state为方法  mutations actions 导出为对象  使用 直接this.store 非index.js 的store 方法需要带入文件路径 
    例如: this.$store.state.test.num 指store文件夹下 test.js  state的num
    this.$store.commit("test/add") 指store文件夹下 test.js  mutations中的add方法
        
    2. middleware目录下的 js文件方法也需要export  在需要使用页面 使用 middleware:js名 键值对方式

4. 




