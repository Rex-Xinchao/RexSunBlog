::: tip 说明
使用的服务器镜像为 Ubuntu 18.04 server 64bit <br/>
所有安装的服务都是通过 docker 镜像化
:::

### 安装 docker

- 安装方法一：运行官方安装脚本

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

- 安装方法二：手动安装：

```shell
##更新apt索引
sudo apt-get update

##安装apt依赖包，允许apt通过https使用存储库
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

##添加docker秘钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

##验证密钥（非必要）
sudo apt-key fingerprint 0EBFCD88

##设置稳定版仓库
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

##再次更新apt索引
sudo apt-get update

##安装docker
sudo apt-get install docker docker-ce 或者 sudo apt-get install docker docker-compose
```

### docker 命令

- 获取镜像 --> docker pull [镜像名称]:[镜像版本号] \* 镜像名称不能带大写字母
- 列出镜像 --> docker image ls / docker image ls -a / docker image ls [镜像名称]
- 删除镜像 --> docker image rm [镜像名称]:[镜像版本号] / docker rm [镜像 id]
- 构建镜像 --> docker image build [目标目录路径] -t [镜像名称]:[镜像版本号]

- 启动容器 --> docker run [容器名称]:[容器版本号] / docker run [容器 id]
- 停止容器 --> docker stop [容器名称]:[容器版本号] / docker stop [容器 id]
- 列出容器 --> docker container ls -a / docker ps -a
- 获取容器输出信息 --> docker container logs [容器名称]:[容器版本号] / docker container logs [容器 id]
- 进入容器 --> docker exec [容器名称]:[容器版本号] / docker exec [容器 id]

### dockerfile 指令详解

- COPY --> COPY [源路径][目标路径]
  > - 将源路径下的文件/目录下的文件复制到目标路径
- ADD --> ADD [源路径][目标路径]
  > - 源路径为 url 链接 --> 下载链接的文件并放入目标路径
  > - 源路径为 tar 压缩文件 --> 自动解压并放入目标路径
- CMD --> CMD <命令> / CMD ["可执行文件", "参数 1", "参数 2"...]
- ENV --> ENV \<key\>=\<value\> \<key2\>=\<value2\>
- EXPOSE --> EXPOSE <端口 1> (这只是一个申明，并不会实际开启端口服务)
