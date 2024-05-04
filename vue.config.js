const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy: {
      '/api': {
        target: 'https://wmsdev.smgdev.top',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' }
      }
    }
  },
  transpileDependencies: true
})
