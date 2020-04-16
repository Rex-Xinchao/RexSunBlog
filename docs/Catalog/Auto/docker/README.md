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

18.04: Pulling from library/ubuntu
c448d9b1e62f: Pull complete
0277fe36251d: Pull complete
6591defe1cd9: Pull complete
2c321da2a3ae: Pull complete
08d8a7c0ac3c: Pull complete
Digest: sha256:2152a8e6c0d13634c14aef08b6cc74cbc0ad10e4293e53d2118550a52f3064d1
Status: Downloaded newer image for ubuntu:18.04
```
+ 执行docker images 即可查看所有本地镜像

### 创建docker容器
