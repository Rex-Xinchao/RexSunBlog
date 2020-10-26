### 配置jenkins

插件
- Publish Over SSH
 > 要在jenkins的配置页面填写服务器信息
 > 1、输入 Name：服务器名称
 > 2、输入 Hostname：服务器ip地址
 > 3、输入 Username：服务器登录用户名称
 > 4、输入 Remote Directory：需要操作的服务器文件夹路径
 > 5、输入 Passphrase / Password：服务器登录密码
 > 6、输入 Port：端口号 
 > 7、输入 Timeout：超时时间 
 > 8、点击 Test Configuration 测试是否成功

全局配置
- 在插件中心下载安装 NodeJS Plugin
- 在全局配置页面配置NodeJs
 > 1、输入 别名
 > 2、勾选 别自动安装
 > 3、选择版本 Node对应版本
 > 4、点击保存


创建人物
- GitHub项目： 输入git项目URL
- 丢弃旧的构建： 勾选
- 源码管理：输入git项目URL && 添加 github账号名称和密码 && 指定分支
- 勾选NodeJs
- 构建 
  > 1、执行shell 
  >     npm install 
  >     npm run server
  > 2、选择ssh服务的操作
  >     选择服务器
  >     其他操作