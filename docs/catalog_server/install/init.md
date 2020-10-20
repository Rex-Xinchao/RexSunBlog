## 环境搭建 （ubuntu 环境）

- Nginx 安装

```shell
# 查找Nginx相关的安装包
apt-cache search nginx
# 安装nginx
sudo apt-get install nginx
# 运行nginx
nginx
# 查看nginx端口
ps -e | grep nginx
# 强制关闭nginx进程
kill 进程号
# 重新载入配置文件
nginx -s reload
# 重启 Nginx
nginx -s reopen
# 停止 Nginx
nginx -s stop

# 关闭防火墙
ufw disable
```

- Mysql 配置
```shell
# 更新服务器上的软件包索引
sudo apt update
# 下载并安装mysql
sudo apt install mysql-server
# 配置mysql
# 运行安全脚本
sudo mysql_secure_installation
# 主要是sql的配置并设置root密码
# 设置完密码还有一些安全设置
# Remove anonymous users? n
# Disallow root login remotely? y
# Remove test database and access to it? y
# Reload privilege tables now? y

# 验证mysql
systemctl status mysql.service
# 登录mysql
mysql -uroot -ppassword
# 设置远程连接
# /etc/mysql/mysql.conf.d/mysqld.cnf 文件及下注释掉# bind-address = 127.0.0.1
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '您的数据库密码' WITH GRANT OPTION;
mysql> flush privileges;
# 最后重启mysql
systemctl restart mysql.service

#备注：如果报错密码格式强度不对，删除密码验证插件
mysql> uninstall plugin validate_password;
#备注：如果远程连接不上sql，看一下服务器的安全组端口是否开放了3306
```

- Node 安装
```shell
# node-12.*.*的安装包
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
# 安装
sudo apt-get install -y nodejs
# 清理环境-不需要的内容
sudo apt autoremove
# 检验
node -v
```