### Window10
+ [Docker安装](https://docs.docker.com/docker-for-windows/install/ "WebStorm 官网") 
::: tip Tips
上述安装方式只支持win10系统，针对win7的安装方式如下
:::

### Window7
+ [Docker_Toolbox安装](https://github.com/docker/toolbox/releases "Git：docker/toolbox")
    >+ 点击DockerToolbox.exe，安装完成后运行桌面上的Docker Quickstart Terminal.exe文件
    ::: tip Tips
    当运行start.sh出现报错“looks like someting went wrong...”，请确认以下环境变量：<br/><br/>
    1、DOCKER_TOOLBOX_INSTALL_PATH --> docker_toolbox的安装路径<br/>
    docker_toolbox的默认路径：“C:\Program Files\Docker Toolbox” <br/><br/>
    2、VBOX_MSI_INSTALL_PATH --> VirtualBox”的安装路径 <br/>
    vbox的默认路径：“C:\Program Files\Oracle\VirtualBox”
    :::
    >+ 初次运行start.sh会进行docker初始化，会需要下载iso文件
    ::: tip Tips
    由于下载iso文件需要访问外网，可能会遇到防火墙的问题或下载过慢：<br/>
    可以将docker_toolbox的安装路径下的boot2docker.iso文件放入 <br/>
    C:\Users\rex.sun\.docker\machine\cache文件夹下来跳过下载过程<br/>
    :::
    >+ 文件下载完成后，需要用户多次确认管理员权限允许docter更改计算机
    >+ 当初始化完成时，界面上会出现$符号，这时候就可以使用docker命令
    ::: tip Tips
    当输出docker命令出现报错“docker: command not found”，请确认：<br/>
    PATH变量末尾是否添加上了docker_toolbox的默认路径
    :::
    >+ 最后输入docker version 验证docker是否安装完成
