::: tip 说明
docker 安装 jenkins 服务器配置至少 2 核 4G
:::

### 安装 jenkins

- 查看&下载 jenkins 镜像

```shell
docker serch jenkins
## 官方推荐镜像
docker pull jenkins/blueocean
```

- 运行镜像

```shell
sudo docker run \
    --name jenkins-blueocean \
    -d \
    -p 8081:8080 \
    -p 50000:50000 \
    -v jenkins-data:/var/jenkins_home \
    gitlab/gitlab-ce:latest
```
- jenkins 配置指南 [jenkins](https://www.jianshu.com/p/0391e225e4a6)
