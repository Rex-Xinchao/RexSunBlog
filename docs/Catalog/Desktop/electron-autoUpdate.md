## 自动化更新
+ 安装 electron-updater 包模块
```
npm install electron-updater --save
```
+ 配置package.json文件的build-publish参数
```
 "publish": [
      {
        "provider": "generic",
        "url": "http://**.**.**.**:3002/download/",//更新服务器地址,可为空
      }
    ]
```
+ 配置package.json文件的build-nsis参数（可省略）
::: tip Tips
 nsis配置不会影响自动更新功能，但是可以优化用户体验，比如是否允许用户自定义安装位置、是否添加桌面快捷方式、安装完成是否立即启动、配置安装图标等。nsis 配置也是添加在 build 参数中。
:::
[配置](https://www.electron.build/configuration/nsis, "nsis官网")
```
"nsis": {
      "oneClick": true,
      "perMachine": true,
      "allowElevation": true,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "runAfterFinish": true,
      "installerIcon": "./build/icon.ico",
      "uninstallerIcon": "./build/icon.ico"
    },
```
+ 配置主进程
```
import { app, BrowserWindow, ipcMain } from 'electron'

// 注意这个autoUpdater不是electron中的autoUpdater
import { autoUpdater } from "electron-updater"
// 更新服务器地址，比如"http://**.**.**.**:3002/download/"
import {uploadUrl} from "../renderer/config/config";

// 检测更新，在你想要检查更新的时候执行，renderer事件触发后的操作自行编写
function updateHandle() {
  let message = {
    error: '检查更新出错',
    checking: '正在检查更新……',
    updateAva: '检测到新版本，正在下载……',
    updateNotAva: '现在使用的就是最新版本，不用更新',
  };
  const os = require('os');

  autoUpdater.setFeedURL(uploadUrl);
  autoUpdater.on('error', function (error) {
    sendUpdateMessage(message.error)
  });
  autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(message.checking)
  });
  autoUpdater.on('update-available', function (info) {
    sendUpdateMessage(message.updateAva)
  });
  autoUpdater.on('update-not-available', function (info) {
    sendUpdateMessage(message.updateNotAva)
  });

  // 更新下载进度事件
  autoUpdater.on('download-progress', function (progressObj) {
    mainWindow.webContents.send('downloadProgress', progressObj)
  })
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {

    ipcMain.on('isUpdateNow', (e, arg) =&gt; {
      console.log(arguments);
      console.log("开始更新");
      //some code here to handle event
      autoUpdater.quitAndInstall();
    });

    mainWindow.webContents.send('isUpdateNow')
  });

  ipcMain.on("checkForUpdate",()=&gt;{
      //执行自动更新检查
      autoUpdater.checkForUpdates();
  })
}

// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage(text) {
  mainWindow.webContents.send('message', text)
}
```
::: tip Tips
  添加完成后，在主进程createWindow中需要调用一下updateHandle()。
:::
+ 在视图（View）层中触发自动更新，并添加自动更新事件的监听
```
ipcRenderer.send("checkForUpdate");
```
+ 监听自动更新事件：
```
  import { ipcRenderer } from "electron";
  ipcRenderer.on("message", (event, text) =&gt; {
            console.log(arguments);
            this.tips = text;
        });
        //注意：“downloadProgress”事件可能存在无法触发的问题，只需要限制一下下载网速就好了
        ipcRenderer.on("downloadProgress", (event, progressObj)=&gt; {
            console.log(progressObj);
            this.downloadPercent = progressObj.percent || 0;
        });
        ipcRenderer.on("isUpdateNow", () =&gt; {
            ipcRenderer.send("isUpdateNow");
        });
```