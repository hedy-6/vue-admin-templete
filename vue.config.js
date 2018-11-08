const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/' :
    '/'

module.exports = {
    baseUrl: BASE_URL,
    outputDir: 'admin-templete', // 生产环境构建文件的目录
    assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    css: {
        loaderOptions: {
            css: {},
            postcss: {}
        }
    },
    devServer: {
        port: '8088',
        host: 'localhost',
        open: true //配置自动启动浏览器
    },
    lintOnSave: true,
    // 打包时不生成.map文件
    productionSourceMap: false
}