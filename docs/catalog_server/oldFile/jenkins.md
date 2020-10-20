### 安装jenkins
+ 通过docker安装jenkins
```
# 通过docker镜像安装jenkins可以本地不需要tomcat和jdk环境
docker pull jenkins/jenkins:lts
docker conatiner create -p 8087:8080 jenkins/jenkins:lts
```

### 运行jenkins
+ 初始化步骤较慢，耐心等待
+ 初始化完成进入插件管理下载nodeJs插件
+ 下载完成插件进入全局配置添加node
+ 然后开始构建项目
> + 描述 --> 随意
> + 项目URL --> 填写对应的git地址
> + 丢弃旧的构建 --> 保持最大构件数填 10
> + Git 源码管理 --> 输入git地址
> + Provide Node & npm bin/ folder to PATH --> 勾选
> + 构建 --> 执行shell
```
# 查看路径
echo $PATH
# 查看node版本
node -v
# 查看npm版本
npm -v
# 安装依赖
npm install 
# 移除旧的包
rm -rf ./dist/*
# 打包
npm run build
# 移除服务器上的包
rm -rf /www/web/site/*
# 复制包到服务器上
cp -rf ./dist/* /www/web/site
```
