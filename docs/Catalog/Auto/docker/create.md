### 本地项目镜像化
+ 目录结构
> \+ dist(vue打包生成的文件)<br/>
> ++ index.html<br/>
> ++ js<br/>
> ++ css<br/>
> \+ default.conf(nginx配置文件)<br/>
> \+ Dockerfile<br/>
```
// nginx配置文件
server {
    listen       80;
    server_name  localhost;

    index index.html;
    root /usr/share/nginx/html;

    location /api/ {
        proxy_pass http://192.168.250.213:10090/sam_mgt/client/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
    }
}

// Dockerfile
FROM nginx:1.17.9-alpine

# 复制dist下的文件到/usr/share/nginx/html下
COPY dist /usr/share/nginx/html

# 复制default.conf替换/etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# 指定端口
EXPOSE 8089

# 运行nginx
CMD ["nginx", "-g", "daemon off;"]
```

+ 首先进入对应目录
```shell
cd path
```

+ 打包镜像
```shell
docker image build ./ -t docker-test:1.0.0

//  './' --> 基于当前路径
//  'docker-test' --> 镜像名称
//  '1.0.0' --> 版本号
```

+ 创建容器
```shell
docker container create -p 8089:80 docker-test:1.0.0

// `8089` --> 端口号
// `docker-test:1.0.0` --> 目标镜像

```

+ 运行容器
```shell
docker container ls -a 查看目标容器的id
docker container start xxxxx(容器id)
```

+ 打开页面查看是否成功


### 相关命令

+ 获取镜像 --> docker pull [镜像名称]:[镜像版本号]
+ 列出镜像 --> docker image ls / docker image ls -a / docker image ls [镜像名称]
+ 删除镜像 --> docker rm [镜像名称]:[镜像版本号] / docker rm [镜像id]
+ 构建镜像 --> docker image build [目标目录路径] -t [镜像名称]:[镜像版本号]

+ 启动容器 --> docker run [容器名称]:[容器版本号] / docker run [容器id]
+ 停止容器 --> docker stop [容器名称]:[容器版本号] / docker stop [容器id]
+ 列出容器 --> docker container ls -a
+ 获取容器输出信息 --> docker container logs [容器名称]:[容器版本号] / docker container logs [容器id]
+ 进入容器 --> docker exec [容器名称]:[容器版本号] / docker exec [容器id]