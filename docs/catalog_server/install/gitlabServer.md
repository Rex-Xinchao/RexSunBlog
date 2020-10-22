::: tip 说明
docker 安装 gitlab 服务器配置至少 2 核 4G
:::

### 安装 gitlab

- 安装命令

```shell
sudo docker run --detach \
    --hostname 121.36.201.82 \
    --publish 8443:443 --publish 8880:80 --publish 8222:22 \
    --name gitlab \
    --restart always \
    --volume /srv/gitlab/config:/etc/gitlab \
    --volume /srv/gitlab/logs:/var/log/gitlab \
    --volume /srv/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce:latest

## 参数说明
## --detach: 设置容器后台运行
## --hostname: 设置容器的 hostname
## --publish: 端口转发规则（将http:443映射到外部端口8443；将web:80映射到外部端口8880；将ssh:22端口映射到外部端口8222）
## --name：容器名称
## --restart always：每次启动容器就重启GitLab
## --volume: 共享目录挂载，即 docker 容器内外数据共享（/srv/gitlab/data: 应用程序数据，/srv/gitlab/logs：GitLab 的 log，/srv/gitlab/config：GitLab 的配置文件）
## --privileged=true：是容器内获得root真正权限??
## --e：配置 Gitlab 运行的环境变量
```

- 查看 url -- 121.36.201.82:8880

- gitlab 配置指南 [gitlab](https://segmentfault.com/a/1190000021593151)
