### 安装 nginx

- 查看&下载 nginx 镜像

```shell
docker serch nginx
docker pull nginx
```

- 创建容器

```shell
docker run -d --name mynginx -p 80:80 nginx:latest
```

- 修改 nginx 配置文件

```shell
docker exec -it ef /bin/bash
## 参数说明
## -- it i-->交互式操作 t-->终端
## -- ef 容器ID
## -- /bin/bash 指定执行命令的shell

cd /etc/nginx

## 查看文件
ls -l

## 然后修改nginx.conf文件即可
## 退出容器
exit
```
