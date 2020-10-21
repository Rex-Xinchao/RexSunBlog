::: tip 说明
docker 安装 jenkins 服务器配置至少 2 核 4G
:::

### 安装 jenkins

- 查看&下载 jenkins 镜像

```shell
docker serch jenkins
## 官方推荐镜像
docker pull jenkinsci/blueocean
## 标准镜像
docker pull jenkins/jenkins:lts
## lts 长期支援的稳定版本
```

- 运行镜像

```shell
docker run \
    --name jenkins-blueocean \
    -d \
    -p 8080:8080 \
    -p 50000:50000 \
    jenkinsci/blueocean

## 或者
docker run \
  --name jenkins-blueocean \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins:/var/jenkins_home \
  -v /etc/localtime:/etc/localtime \
  jenkinsci/blueocean

## -d 后台运行镜像
## -p 8081:8080 将镜像的8080端口映射到服务器的8081端口
## -p 50000:50000 将镜像的50000端口映射到服务器的50000端口
## -v jenkins:/var/jenkins_home /var/jenkins_home目录为jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后续更新镜像后继续使用原来的工作目录。
## -v /etc/localtime:/etc/localtime 让容器使用和服务器同样的时间设置。
## --name jenkins 给容器起一个别名
```

- jenkins 配置指南 [jenkins](https://www.jianshu.com/p/0391e225e4a6)
