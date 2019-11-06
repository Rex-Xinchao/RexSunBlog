+ 全局安装
```
npm install express-generator -g
```

+ 生成框架
```
express '项目名称'
```

+ 结构介绍
    >+ app.js：应用主体程序，项目入口
    >+ package.json：项目配置文件，可配置程序名称、版本号、依赖项等
    >+ node_modules：存放项目依赖项
    >+ public：存放静态文件，如css、js、图片资源什么的
    >+ routes：存放路由文件（划重点）
    >+ views：存放页面文件

+ 热加载
express每次更新代码都需要重新运行，安装supervisor用于热更新
```
// 全局安装
npm -g install supervisornpm -g install supervisor
// 运行配置
supervisor bin/www
```
