### docker 发布 web 程序

- 准备文件
  Dockerfile 文件 && 程序代码 && nginx.conf
  :::tip 注意
    - 因为要支持https和域名的缘故，别忘了配置ssl协议
    - nginx.conf的用户指定nginx (useradd nginx 要不要执行这个命令手动添加用户，待确认)
  :::

- 进入服务器目录并生成镜像

```shell
cd ../home/frontend

## demo是镜像名称
docker image build ./ -t demo:1.0.0
```

- 生成并启动容器

```shell
docker container create --name demo -p 80:80 -p 443:443 demo:1.0.0
## 参数说明
## -80:80 第一个3000是终端端口，第二个容器端口
## -443:443 https的协议要用到ssl-443端口
## -demo 第一个是容器名称，第二个是镜像名称

## 查看全部容器
docker ps -a

## 启动容器
docker container start xxxxx(容器id)
```

- 文件展示

::: details dockerfile

```shell
FROM nginx:1.17.9-alpine

COPY web /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY server.crt /etc/nginx/cert/server.crt
COPY server.key /etc/nginx/cert/server.key

EXPOSE 80/tcp 443/tcp

CMD ["nginx", "-g", "daemon off;"]

```

:::

::: details nginx.conf

```shell
user nginx;
worker_processes auto;
pid /run/nginx.pid;

events {
	worker_connections 768;
	# multi_accept on;
}

http {
	sendfile on;
	keepalive_timeout 65;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;
	
	server {
        listen 443 ssl;
        server_name rexsun.site www.rexsun.site;
		ssl on;
		ssl_certificate cert/server.crt;
		ssl_certificate_key cert/server.key;
		ssl_session_timeout 5m;
		ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
		ssl_prefer_server_ciphers on;
		
		#add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
		#add_header X-Frame-Options DENY;
		#add_header X-Content-Type-Options nosniff;
		#add_header X-Xss-Protection 1;
		
		location /api/ {
            proxy_pass http://121.36.201.82:3000/;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $remote_addr;
        }
		
		location / {
            root   /usr/share/nginx/html;
            index  index.html;
        }
       }
		
	server {
        listen 80;
        server_name rexsun.site www.rexsun.site;
		
		location /api/ {
            proxy_pass http://121.36.201.82:3000/;
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

:::
