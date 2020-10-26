- 安装：[Mysql](https://dev.mysql.com/downloads/installer/ 'mysql下载')
  / 指南：[MySQL](https://blog.csdn.net/chic_data/article/details/72286329 'mysql安装指南')
- 环境变量配置：系统变量-Path-新建变量（C:\Program File\MySQL\MySQL Server 8.0\bin）
- MySQL 服务启动命令：net start MySQL80

::: tip 注意
如果安装的版本是 mysql8,因为 mysql8 更改了加密方式，会导致 navicat 连接数据库失败。<br/>
需要进行如下操作:<br/>

```
// 进入sql服务器
mysql -uroot -p
USE mysql

// psd替换为你的登录密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'psd'

//刷新
FLUSH PRIVILEGES
```

:::
