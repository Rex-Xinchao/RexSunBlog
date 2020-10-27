### docker 发布 node 服务

- 准备文件
  Dockerfile 文件 && 程序代码
  :::tip 注意
  dockerfile 中复制文件并不会复制文件夹<br/>
  正确做法如下：<br/>
  COPY model ./model(复制 model 文件夹下文件并放在 model 文件夹下)
  :::

- 进入服务器目录并生成镜像

```shell
cd ../home/backend

## daydayup是镜像名称
docker image build ./ -t daydayup:1.0.0
```

- 生成并启动容器

```shell
docker container create --name daydayup -p 3000:3000 daydayup:1.0.0
## 参数说明
## -3000:3000 第一个3000是终端端口，第二个容器端口
## -daydayup 第一个是容器名称，第二个是镜像名称

## 查看全部容器
docker ps -a

## 启动容器
docker container start xxxxx(容器id)

## 进入容器
docker exec -it xxxxx(容器id) /bin/bash
```

- 文件展示

::: details dockerfile

```shell
# 依赖node
FROM node:12
# 创建文件夹
WORKDIR /usr/src/app
# 复制全部文件进入文件夹
COPY . .
# 安装依赖
RUN npm install pm2 -g
RUN whereis pm2
RUN npm install
EXPOSE 3000
# 执行pm2 ./bin/www
CMD [ "pm2-runtime", "./bin/www" ]
```

:::
