const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/final-vue-test/" : "/",
  // env: {
  //   'vue/setup-compiler-macros': true
  // },
  lintOnSave: false,
})

