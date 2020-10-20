## GitLab
+ GitLab：是一个基于Git实现的在线代码仓库托管软件


- 安装
```
## 刷新索引
sudo apt update 
sudo apt install curl openssh-server ca-certificates

## 邮件服务--可以跳过（没用过）
debconf-set-selections <<< "postfix postfix/mailname string $(hostname -f)"
debconf-set-selections <<< "postfix postfix/main_mailer_type string 'Internet Site'"
sudo apt install postfix

## 将GitLab存储库添加到系统源列
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
## 安装gitlab
sudo apt install gitlab-ce
```

- 设置GitLab URL