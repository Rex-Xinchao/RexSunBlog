+ node-express部署到服务器
```shell
# 先把项目复制到home/www 文件夹下
# cd 进入文件夹
# 全局安装pm2
npm install pm2 -g
# 加入环境变量 
whereis pm2 
# 安装依赖
npm install
# 运行程序
pm2 start ./bin/www
```

+ pm2指令
```
// 启动
pm2 start 
// 查看进程列表
pm2 list
// 查看详细状态信息
pm2 show (进程id|appname)
// 停止 指定/所有 进程
pm2 stop (进程id|all)
// 监控每个 node 进程的 cpu 和内存使用情况
pm2 monit
// 显示所有进程的日志信息
pm2 logs
// 监控运行这些进程的机器的状态
pm2 web
```