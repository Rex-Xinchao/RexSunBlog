开发工具
-----------
+ [WebStorm安装](http://www.jetbrains.com/webstorm/ "WebStorm 官网") 
    > WebStorm快捷方式：
    >+ 格式化：ctrl + alt + l
    >+ 注释： ctrl + / 或 ctrl + shit + /
    >+ 代码收放： ctrl + (-/+)
    >+ 查找文件： shift + shift
    >+ 全局查找文本： ctrl + shift + f
    >+ 查找文本：ctrl + f
    >+ 替换文本：ctrl + r
    >+ 复制行：ctrl + d
    >+ 删除行：ctrl + x

+ [Visual Studio Code安装](https://code.visualstudio.com/ "Visual Studio Code 官网") 
    
浏览器
-----------
+ [Chrome安装](https://www.google.cn/intl/zh-CN/chrome/ "Chrome 官网")

+ [Firefox安装](http://www.firefox.com.cn/ "Firefox 官网")
    
NodeJs
-----------
+ [Node安装](http://nodejs.cn/download/ "Node 官网")
    >+ [Node环境配置](../Node/node.md "Node环境配置")
    
+ [Nvm安装](https://github.com/coreybutler/nvm-windows/releases "Nvm 下载")
    >+ [Nvm使用说明](../Node/nvm.md "Nvm使用说明")

Git
-----------
+ [Git安装](https://git-scm.com/downloads "Git 官网下载")
    > Git常用指令：
    >+ $ git log (如果log多的时候，超过屏幕，想要退出的时候，按Q)
    >+ $ git status (查看当前本地的文件状态，红色为修改)
    >+ $ git add . (添加所有修改文件到缓存区)
    >+ $ git commit -m '提交描述' (添加本次提交的描述)
    >+ $ git push origin master (向远程master分支，推送版本)
    >+ $ git pull origin master (获取当前master分支的最新代码)
    >+ $ git branch develop (创建develop分支)
    >+ $ git checkout develop (切换到develop分支)
    >+ $ git push origin develop (将develop分支推到远程)
    >+ $ git branch -a (显示所有远程和本地分支，白色和绿色的表示为本地的，红色的表示为远程)
    >+ $ git fetch -p (强制更新本地所有分支)
    
::: tip 注意
安装完git一定还要初始化git指令，必须要做，否则以后会很麻烦
+ 设置全局的用户名 $ git config --global user.name "rexSun"
+ 设置全局的邮箱 $ git config --global user.email "13601935905@qq.com"
+ 设置的用户名和邮箱是git提交时显示的名称和联系方式，和github和账号无关
:::
    
+ [TortoiseGit安装](https://tortoisegit.org/download/ "TortoiseGit 下载")
    
Webpack
-----------
+ [Webpack安装](http://webpack.github.io/ "Webpack 官网下载")
    
Mysql
-----------
+ [Mysql安装](https://dev.mysql.com/downloads/installer/ "mysql下载")
    >+ 安装指南：[MySQL](https://blog.csdn.net/chic_data/article/details/72286329 "mysql安装指南")
    >+ 环境变量配置：系统变量-Path-新建变量（C:\Program File\MySQL\MySQL Server 8.0\bin）
    >+ MySQL服务启动命令：net start MySQL80

::: tip 注意
如果安装的版本是mysql8,因为mysql8更改了加密方式，会导致navicat连接数据库失败。<br/>
需要进行如下操作。
:::
```
// 进入sql服务器
mysql -uroot -p
USE mysql

// mypassword改为你的服务器登录密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mypassword'

//刷新
FLUSH PRIVILEGES
```

+ [Navicat安装](https://www.navicat.com.cn/store/navicat-for-mysql "navicat下载")

便捷工具
-----------
+ [取色小工具](https://colorpix.en.softonic.com/ "取色小工具")

+ [截图小工具](https://www.snipaste.com/ "截图小工具")

+ [notepad++](http://www.notepad-plus-plus.org/ "notepad++")
