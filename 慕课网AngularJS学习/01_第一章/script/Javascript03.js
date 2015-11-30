//搭建自动化的前端开发、调试、测试环境
//一个完整的项目目录结构实例 （官方的Phonecat实例解析）

//思考：我们需要什么样的前端开发环境？

// 代码编辑工具
    //sublime
    //webstorm

// 断点调试工具
    //chrome插件 Batarang

// 版本管理工具
    //git + tortoisegit  ====>  可以在github上克隆项目  https://github.com/

// 代码合并和混淆工具
    //基于Node.js的   学会使用npm
    //神器 grunt  基本上是必备的  用来做 js文件合并、js代码子自动压缩、每次ctrl+s的时候自动执行以上动作 还可以自动运行单元测试、集成测试
    // http://www.gruntjs.org   中文：www.gruntjs.net  http://www.gruntjs.net/sample-gruntfile

// 依赖管理工具 -- 用于插件、第三方控件 之间的依赖
    // bower  自动安装依赖的组件，组件之间的依赖检测，版本兼容性自动检测   http://bower.io/

// 单元测试工具
    //Protractor  专门为AngularJS定制的测试工具  https://github.com/angular/protractor
    //https://code.google.com/p/selenium/wiki/WebDriverJs
    //基于WebDriverJS（开源） 利用WebDriverJS，可以借助于NodeJS直接调用浏览器（IE FF Chrome）的接口
    //PS:protractor是为AngularJS专门定制的工具，但是webDriverJS是通用的

// 集成测试工具

// 轻量级的httpServer
    // http-server   一款简单的http-server  基于 nodeJS的HTTP接口  https://github.com/nodeapps/http-server
    //主要用于 假数据模拟测试





// 一个完整的项目目录结构实例：
    // angular-phonecat
        //.git
        //app --放我们自己的源代码  也可以叫 src
            //bower_components -- 依赖管理工具自动生成
            //css
            //img
            //js
            //partials
            //phones
        //node_modules -- npm自动创建的目录
            //--
        //scripts
        //test --必备
            //e2e   --集成测试
            //unit  --单元测试






