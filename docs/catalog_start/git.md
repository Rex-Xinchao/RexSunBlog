- [Git 安装](https://git-scm.com/downloads 'Git 官网下载')
- [TortoiseGit 安装](https://tortoisegit.org/download/ 'TortoiseGit 下载')

::: details 点击查看 Git 常用指令

- \$ git log (如果 log 多的时候，超过屏幕，想要退出的时候，按 Q)
- \$ git status (查看当前本地的文件状态，红色为修改)
- \$ git add . (添加所有修改文件到缓存区)
- \$ git commit -m '提交描述' (添加本次提交的描述)
- \$ git push origin master (向远程 master 分支，推送版本)
- \$ git pull origin master (获取当前 master 分支的最新代码)
- \$ git branch develop (创建 develop 分支)
- \$ git checkout develop (切换到 develop 分支)
- \$ git push origin develop (将 develop 分支推到远程)
- \$ git branch -a (显示所有远程和本地分支，白色和绿色的表示为本地的，红色的表示为远程)
- \$ git fetch -p (强制更新本地所有分支)
  :::

::: tip 注意
安装完 git 一定还要初始化 git 指令，必须要做，否则以后会很麻烦

- 设置全局的用户名 \$ git config --global user.name "rexSun"
- 设置全局的邮箱名 \$ git config --global user.email "13601935905@qq.com"
- 设置的用户名和邮箱是 git 提交时显示的名称和联系方式，和 github 和账号无关
  :::

``` git
# git-rebase 流程
# 在当前仓库点击 fork 按钮创建私人分支
git clone fork地址
# 添加上游
git remote add upstream 上游git地址
git remote -v
# fetch && rebase上游代码
git fetch upstream
git rebase upstream/master
# 解决冲突并提交代码
git push orign master 
```
