- 安装：[Mysql](https://dev.mysql.com/downloads/installer/ 'mysql下载')
  / 指南：[MySQL](https://blog.csdn.net/chic_data/article/details/72286329 'mysql安装指南')
- 环境变量配置：系统变量-Path-新建变量（C:\Program File\MySQL\MySQL Server 8.0\bin）
- MySQL 服务启动命令：net start MySQL80

::: tip 注意
如果安装的版本是 mysql8,因为 mysql8 更改了加密方式，会导致 navicat 连接数据库失败。<br/>
需要进行如下操作:<br/>

```
# docker安装指令
// psd替换为你的登录密码
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=psd mysql
```

```
// 进入sql服务器
mysql -uroot -p

// 更改加密方式
ALTER USER 'root'@'%' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;

// psd替换为你的登录密码
// % 为所有ip均可访问; 改为localhost 为仅本机访问;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'psd';

//刷新
FLUSH PRIVILEGES;

#添加远程登录用户
CREATE USER 'rexsun'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'rexsun'@'%';
```

:::
