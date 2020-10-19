## Node

- 安装：[Node](http://nodejs.cn/download/ 'Node 官网')
  / 指南：[npm scripts](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- 环境变量配置：

  > - 安装 nodeJs，默认安装位置在 C:\Program Files 文件夹下
  > - 我的电脑-右键-属性-高级系统设置-高级-环境变量
  > - 在【系统变量】下新建【NODE_PATH】，输入【C:\Program Files\nodejs\node_modules】
  >   ![alt text](./images/node_01.png '系统变量配置')
  > - 在【用户变量】下的【Path】修改为【C:\Program Files\nodejs\node_global】
  >   ![alt text](./images/node_02.png '用户变量配置')

::: tip 切换淘宝镜像源

- 临时：npm --registry https://registry.npm.taobao.org
- 永久：npm i -g cnpm --registry=https://registry.npm.taobao.org
- 验证方式：npm config get registry
  :::

## Nvm

- 安装：[Nvm](https://github.com/coreybutler/nvm-windows/releases)（用于用户管理和控制多个 nodeJs 的版本）

- nvm 环境变量配置
  > - 【用户变量】下的【Path】
  >   ![alt text](./images/nvm_02.png '用户变量配置')
  > - 【系统变量】
  >   ![alt text](./images/nvm_01.png '系统变量配置')

::: tip Tips

- 安装前先删除已经安装在电脑上的 nodeJs。
- 切换指定版本后，要用 nvm on 启用 nvm。
- 如果出现安装的时候过慢，node 或 npm 包下载不下来，可以找到 nvm 包下的 setting 文件,指定下载地址为淘宝镜像。

```
root: C:\Users\Administrator\AppData\Roaming\nvm
path: C:\Program Files\nodejs
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

:::

::: details 点击查看 Nvm 命令

```
# 列出所有可以安装的node版本号
nvm ls-remote

#列出所有已经安装的node版本
nvm ls

#安装指定版本号的node
nvm install v10.3.0

#卸载指定版本号的node
nvm uninstall v10.3.0

#切换node的版本，这个是全局的
nvm use v10.3.0

#当前node版本
nvm current
```

:::
