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

- jenkins 插件安装和配置

  > - 推荐插件-NodeJS Plugin （在构建时使用 node 命令一定要配置 Node 环境）<br/>
  >   需要在全局配置中配置 node 名称、是否自动安装、选择版本
  > - 推荐插件-Publish Over SSH （远程服务器的配置）<br/>
  >   需要在配置页面填写服务器信息：名称、IP、用户名、服务器文件夹路径、登录密码、端口号和超时时间、并且勾选去掉 Disable exec
  > - 推荐插件-Build With Parameters （构建参数）<br/>

- jenkins 创建 Job
  > 1、创建任务 -- 选择 Freestyle project<br/>
  > 2、通用信息：描述、项目 Url。并勾选丢弃旧的构建（设置保持最大个数为 10）<br/>
  > 3、通用信息：参数添加 version<br/>
  > 4、源码管理：Git（填写 git 地址 && 配置 git 账号信息 && 选择分支名称）<br/>
  > 5、构建环境：选择 Node 环境并选择全局配置过的 Node<br/>
  > 6、构建：选择执行 shell<br/>
  >
  > ```shell
  >   npm run install
  >   npm run build
  > ```
  >
  > 7、构建：选择上传服务器的文件<br/>
  >
  > ```
  > Name:服务器名称
  > Source files:需要上传文件的路径 -- \**/*代表该路径下的全部文件和文件夹 -- /\*代表全部文件
  > Remove prefix:需要移除的文件夹（上传路径中匹配的路径会被删除）
  > Remote directory:上传到服务器上的路径（会拼接在你配置的路径后面）
  > 高级中勾选 Clean remote -- 每次上传前清空目标文件夹
  > Exec command:上传文件完成后执行的脚本
  > # 停止并删除名称中带demo的容器
  > docker container stop `docker ps -f "name=demo" -a -q`
  > docker container rm `docker ps -f "name=demo" -a -q`
  > # 删除名称中为demo的镜像
  > docker rmi `docker images -f  "reference=demo" -q`
  > cd ../home/frontend
  > # 生成镜像
  > docker image build ./ -t demo:${version}
  > docker container create --name demo${version} -p 80:80 -p 443:443 demo:${version}
  > docker container start `docker ps -f "name=demo" -a -q`
  > ```
