## 读写本地数据
+ 安装
```
 npm install --save electron-json-storage
```
+ 使用
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

## 读写文件
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