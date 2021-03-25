# 构建说明

## 开发与构建

* 开发: `npm run start`
* 生产: `npm run build`

## 功能列表

### 已完成功能

* 生成一个HTML文件，并主动加入JS文件
* 识别React语法以及ES6
* 分离生产环境与开发环境
* 加入了代码的热更新，修改代码自动编译
* 加入了less以及sass的处理
* 添加source-map方便调试

### 未完成功能

* 分析了babel-polyfill不同导入方式的影响
* 代码分割 定义了被抽离的模块如何分成组
* 处理了不兼容ES7修饰器（@）Decorator的问题
* 小于8k的图片以base64压入url减少请求
* 添加了组件按需加载而不是直接导入整个模块
* 抽离了所有的css样式文件
* 压缩了JS代码以及CSS代码
* 添加了CSS自动补全浏览器前缀，增强了适配性
* 完成对字体、图片、媒体文件的按大小分类打包策略
* 配置删除生产环境的console.log
* 每次打包先清除dist目录
* 加入了webpack多入口的配置
* 加入了对包大小的可视化分析工具
* babel缓存
* 使用动态链接库文件DLL
* Tree Shaking
* happypack并发执行任务
* CDN
* 按需加载babel-plugin-import
* 首屏渲染loading
