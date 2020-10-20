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