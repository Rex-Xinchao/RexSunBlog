### 安装 nginx

- 查看&下载 nginx 镜像

```shell
docker serch nginx
docker pull nginx
```

- 创建容器

```shell
docker run -d --name mynginx -p 80:80 nginx:latest
```

- 修改 nginx 配置文件

```shell
docker exec -it ef /bin/bash
## 参数说明
## -- it i-->交互式操作 t-->终端
## -- ef 容器ID
## -- /bin/bash 指定执行命令的shell

cd /etc/nginx

## 查看文件
ls -l

## 然后修改nginx.conf文件即可
## 退出容器
exit
```

- nginx.conf 说明

```shell
#定义Nginx运行的用户和用户组
user nginx;
#nginx进程数，通常设置成和cpu的数量相等
worker_processes auto;
#进程pid文件
pid /run/nginx.pid;

events {
    #单个进程最大连接数（最大连接数=连接数+进程数）
    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cup跑到100%就行。
	worker_connections 768;
}
#设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    #文件扩展名与文件类型映射表
	include /etc/nginx/mime.types;
    #默认文件类型
	default_type application/octet-stream;
    #开启高效文件传输模式，
	sendfile on;
    #长连接超时时间，单位是秒
	keepalive_timeout 65;
    # 开启gzip 压缩
    gzip on;
    # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）
    gzip_http_version 1.1;
    # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）
    gzip_comp_level 4;
    # 设置压缩的最小字节数， 页面Content-Length获取
    gzip_min_length 1000;
    # 设置压缩文件的类型  （text/html)
    gzip_types text/plain application/javascript text/css;

    # 定义常量
    upstream node_server {
      server 121.36.201.82:3000;
    }

    #虚拟主机的配置
	server {
        #监听端口 && ssl参数
        listen 443 ssl;
        #域名可以有多个，用空格隔开
        server_name rexsun.site www.rexsun.site;
		ssl on;
        #证书文件
		ssl_certificate cert/server.crt;
		ssl_certificate_key cert/server.key;
        #私钥文件
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        #优先采取服务器算法
		ssl_prefer_server_ciphers on;
        #配置会话超时时间
		ssl_session_timeout 5m;
        #对 "/api/" 启用反向代理
		location /api/ {
            proxy_pass http://node_server/;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $remote_addr;
        }
        #入口文件的设置
		location / {
            root   /usr/share/nginx/html;
            index  index.html;
        }
       }

	server {
        listen 80;
        server_name rexsun.site www.rexsun.site;
		location /api/ {
            proxy_pass http://node_server/;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $remote_addr;
        }

		location / {
            root   /usr/share/nginx/html;
            index  index.html;
        }
    }
}
```

- nginx 相关 shell 命令

```shell
nginx  #启动Nginx
nginx -c /etc/nginx/nginx.conf  #启动Nginx
nginx -t  #测试配置文件是否有语法错误
nginx -s reopen  #重启Nginx
nginx -s reload  #重新加载Nginx配置文件，然后以优雅的方式重启Nginx
nginx -s stop  #强制停止Nginx服务
nginx -s quit  #优雅地停止Nginx服务（即处理完所有请求后再停止服务）

ps -ef | grep nginx  #查看Nginx进程号
kill -QUIT 主进程号  #从容停止Nginx
kill -TERM 主进程号  #快速停止Nginx
pkill -9 nginx  #强制停止Nginx
```
