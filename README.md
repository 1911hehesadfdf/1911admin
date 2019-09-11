#######
这里是dev分支

###目录结构
pages 页面
components 组件
style 样式
utils 公用的库或者插件
router 路由文件
store 全局状态管理文件
asset 资源目录
###ui框架
antd less

全局引入
按需引入
###预处理语言
less
npm install less less-loader
默认不支持less   需要在 config webpck.config.js  把所有的sass  变成less

###基本配置
起别名
webpack.config.js中全局搜alias中修改
'style':path.join(__dirname,'../src/style')
'style':path.resolve(__dirname,'../src/style')
服务器代理
。。。


###公有的库
axios 二次封装
路由
react-redux
