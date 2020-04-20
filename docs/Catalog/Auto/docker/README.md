### 概念
+ 三个核心概念
> Image(镜像): Docker的镜像是分层可复用的<br/>
> Container(容器): 镜像运行时的一个载体。依托Docker的虚拟化技术，给容器创建独立的端口、进程等空间。容器可在宿主机之间进行port、volumes、network等的通信<br/>
> Repository(仓库): 当本地构建完成镜像之后，即可通过仓库进行镜像的分发<br/>

### 基础镜像
+ 在[DockerHub](https://hub.docker.com/ "DockerHub 官网")选择一种基础镜像
+ 利用docker pull命令从hub网站上拉取镜像到本地
```shell
> docker pull ubunut:18.04

// 'ubunut' --> 镜像名称
// '18.04' --> 版本号，不填默认为lasted
```
+ 查看所有本地镜像
```shell
docker images
```
+ 运行容器
```shell
docker run -it --rm \
    ubuntu:18.04 \
    bash

// '-it' --> -i(交互式操作)、-t(终端)
// '--rm' --> 退出容器后删除容器
// 'ubunty' --> 容器名称
// '18.04' --> 版本号
// 'bash' --> 命令
```