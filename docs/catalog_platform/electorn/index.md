[官网](https://electronjs.org/ "electron官网")

## 介绍
Electron是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。<br/>
Electron通过将Chromium和Node.js合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。

## 兼容性
+ macOS 10.10 (Yosemite) 及以上版本
+ Windows 7 及以上版本
+ Ubuntu 12.04、Fedora 21、Debian 8 及其以上版本。

## 开发环境
[安装NodeJS](https://nodejs.org/en/download/, "node官网")

## 安装electron
```
npm install --save-dev electron
```

## 基于vue脚手架开发
```
# 安装 vue-cli 和 脚手架样板代码
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project
```

## 主进程和渲染进程交互
+ 主进程
```
// 实现全屏切换效果
ipcMain.on('setFullScreen', (isFullScreen) => {
  mainWindow.setFullScreen(isFullScreen)
})
ipcMain.on('fullScreen', () => {
  mainWindow.setFullScreen(true)
})
ipcMain.on('exitFullScreen', () => {
  mainWindow.setFullScreen(false)
})
```
+ 渲染进程
```
const {ipcRenderer} = require('electron')
ipcRenderer.send('fullScreen')
ipcRenderer.send('exitFullScreen')
```

## 资料
[官方文档](https://electronjs.org/docs, "官方文档")
[资料](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/savingreading-local-files.html, "资料")