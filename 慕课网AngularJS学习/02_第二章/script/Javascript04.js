//路由、模块、依赖注入 课程

//一个完整的项目  结构是怎么样的
//BookStore
    //app
        //css
        //framework --存放angularJS源文件、UI控件等等
        //imgs
        //js   --存放js代码
            //app.js  --做为启动点的js
            //controller.js
            //directives.js
            //filters.js
            //services.js
        //tpls   --存放模板，  HTML片段，只有一小块HTML
            //bookList.html
            //hello.html
        //index.html  --应用的主HTML文件，加载js文件
    //node_modules  -- npm自动生成， 存放各种NodeJS的工具
        //..
    //package.json -- npm配置项
