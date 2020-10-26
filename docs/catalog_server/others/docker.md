### Window10
+ [Docker安装](https://docs.docker.com/docker-for-windows/install/ "WebStorm 官网") 
::: tip Tips
上述安装方式只支持win10系统，针对win7的安装方式如下
:::

### Window7
+ [Docker_Toolbox安装](https://github.com/docker/toolbox/releases "Git：docker/toolbox")
    >+ 点击DockerToolbox.exe，安装完成后运行桌面上的Docker Quickstart Terminal.exe文件
    ::: tip Tips
    当运行start.sh出现报错“looks like someting went wrong...”，请确认以下环境变量：<br/><br/>
    1、DOCKER_TOOLBOX_INSTALL_PATH --> docker_toolbox的安装路径<br/>
    docker_toolbox的默认路径：“C:\Program Files\Docker Toolbox” <br/><br/>
    2、VBOX_MSI_INSTALL_PATH --> VirtualBox”的安装路径 <br/>
    vbox的默认路径：“C:\Program Files\Oracle\VirtualBox”
    :::
    >+ 初次运行start.sh会进行docker初始化，会需要下载iso文件
    ::: tip Tips
    由于下载iso文件需要访问外网，可能会遇到防火墙的问题或下载过慢：<br/>
    可以将docker_toolbox的安装路径下的boot2docker.iso文件放入 <br/>
    C:\Users\rex.sun\.docker\machine\cache文件夹下来跳过下载过程<br/>
    :::
    >+ 文件下载完成后，需要用户多次确认管理员权限允许docter更改计算机
    >+ 当初始化完成时，界面上会出现$符号，这时候就可以使用docker命令
    ::: tip Tips
    当输出docker命令出现报错“docker: command not found”，请确认：<br/>
    PATH变量末尾是否添加上了docker_toolbox的默认路径
    :::
    >+ 最后输入docker version 验证docker是否安装完成

### dockerfile指令详解
+ COPY --> COPY [源路径] [目标路径]
> + 将源路径下的文件/目录下的文件复制到目标路径

+ ADD --> ADD [源路径] [目标路径]
> + 源路径为url链接 --> 下载链接的文件并放入目标路径
> + 源路径为tar压缩文件 --> 自动解压并放入目标路径

+ CMD --> CMD <命令> / CMD ["可执行文件", "参数1", "参数2"...]

+ ENV --> ENV <key>=<value> <key2>=<value2>

+ EXPOSE --> EXPOSE <端口1> (这只是一个申明，并不会实际开启端口服务)

### 本地项目镜像化
+ 目录结构
> \+ dist(vue打包生成的文件)<br/>
> ++ index.html<br/>
> ++ js<br/>
> ++ css<br/>
> \+ default.conf(nginx配置文件)<br/>
> \+ Dockerfile<br/>
> \+ .dockerignore<br/>
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

\\ .dockerignore
frontend/
config/

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln

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

+ 获取镜像 --> docker pull [镜像名称]:[镜像版本号]  * 镜像名称不能带大写字母
+ 列出镜像 --> docker image ls / docker image ls -a / docker image ls [镜像名称]
+ 删除镜像 --> docker image rm [镜像名称]:[镜像版本号] / docker rm [镜像id]
+ 构建镜像 --> docker image build [目标目录路径] -t [镜像名称]:[镜像版本号]

+ 启动容器 --> docker run [容器名称]:[容器版本号] / docker run [容器id]
+ 停止容器 --> docker stop [容器名称]:[容器版本号] / docker stop [容器id]
+ 列出容器 --> docker container ls -a
+ 获取容器输出信息 --> docker container logs [容器名称]:[容器版本号] / docker container logs [容器id]
+ 进入容器 --> docker exec [容器名称]:[容器版本号] / docker exec [容器id]