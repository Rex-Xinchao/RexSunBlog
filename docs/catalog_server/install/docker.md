##  安装Docker
```
## 使用官方脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
## 或者使用国内daocloud
curl -sSL https://get.daocloud.io/docker | sh
```

## Docker安装GitLab
+ GitLab有2个版本 社区版(gitlab-ce)和企业收费版(gitlab-ee)
```
##拉取源
docker pull gitlab/gitlab-ce:latest
```