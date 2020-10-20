### Electron [官网](https://electronjs.org/ 'electron官网')<br/>

Electron 是由 Github 开发，用 HTML，CSS 和 JavaScript 来构建跨平台桌面应用程序的一个开源库。<br/>
Electron 通过将 Chromium 和 Node.js 合并到同一个运行时环境中，并将其打包为 Mac，Windows 和 Linux 系统下的应
用来实现这一目的。<

- 兼容性

  > - macOS 10.10 (Yosemite) 及以上版本
  > - Windows 7 及以上版本
  > - Ubuntu 12.04、Fedora 21、Debian 8 及其以上版本。

- 开发环境（需要 NodeJs）

  - 安装 electron

    > ```
    > npm install --save-dev electron
    > ```

  - 基于 vue 脚手架开发

    > ```
    > # 安装 vue-cli 和 脚手架样板代码
    > npm install -g vue-cli
    > vue init simulatedgreg/electron-vue my-project
    > ```

### electorn 实例

::: details 主进程和渲染进程交互

- 主进程

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

- 渲染进程

```
const {ipcRenderer} = require('electron')
ipcRenderer.send('fullScreen')
ipcRenderer.send('exitFullScreen')
```

:::

::: details 读写本地数据

- 安装

```
 npm install --save electron-json-storage
```

- 使用

```
  const storage = require('electron-json-storage')
  // 设置路径
  storage.setDefaultDataPath()
  storage.getDefaultDataPath()
  // 读写数据
  storage.set(key, value, function (error) {
    if (error) throw error
    if (callback) {
      callback()
    }
  })
  storage.get(key, function (error, data) {
    if (error) throw error
    if (callback) {
      callback(data)
    }
  })
```

:::

::: details 读写文件

```
  // 异步读取文件的时候由操作系统在后台进行读取
  // 异步不会阻碍下面的代码执行。同步读取的时候会阻碍下面的代码执行
  const fs = require('fs')
  const PATH = path.join(__dirname, './static/log/'),
  // fs.existsSync(filePath) 判断文件是否存在
  // 写入
  writeFile (fileName, data) {
    let _path = PATH.filePath + fileName
    // 方案1
    fs.writeFile(_path, data, function (err) {
      console.log(err)
      if (!err) {
        console.log('写入成功。')
      }
    })
    // 方案2
    fs.writeFileSync(_path, data)
  },
  // 读取
  readFile (fileName) {
    let _path = PATH.filePath + fileName
    // 方案1
    fs.readFile(_path, 'utf8', function (err, data) {
      console.log(data)
      if (err) return console.log(err)
    })
     // 方案2
    fs.readFileSync(_path, 'utf8')
  },
```

:::

::: details 自动化更新

- 安装 electron-updater 包模块

```
npm install electron-updater --save
```

- 配置 package.json 文件的 build-publish 参数

```
 "publish": [
      {
        "provider": "generic",
        "url": "http://**.**.**.**:3002/download/",//更新服务器地址,可为空
      }
    ]
```

- 配置 package.json 文件的 build-nsis 参数（可省略）
  > nsis 配置不会影响自动更新功能，但是可以优化用户体验，比如是否允许用户自定义安装位置、是否添加桌面快捷方式、装完成是否立即启动、配置安装图标等。nsis 配置也是添加在 build 参数中。
  > [配置](https://www.electron.build/configuration/nsis, 'nsis官网')

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

- 配置主进程

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

// 添加完成后，在主进程 createWindow 中需要调用一下 updateHandle()。

- 在视图（View）层中触发自动更新，并添加自动更新事件的监听

```
ipcRenderer.send("checkForUpdate");
```

- 监听自动更新事件：

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

:::

### 参考资料

[官方文档](https://electronjs.org/docs, '官方文档')
[资料](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/savingreading-local-files.html, '资料')
