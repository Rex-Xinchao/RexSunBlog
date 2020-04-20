module.exports = {
  title: 'RexSun的学习之旅',
  description: 'RexSun的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    displayAllHeaders: true,
    // activeHeaderLinks: true,
    nav: [ // 导航栏配置
      { text: 'Github', link: 'https://github.com/Rex-Xinchao' }
    ],
    sidebar: [ // 路径不能过深，不然build会出错
      {
        title: '环境搭建',
        collapsable: true, //是否展开
        children: [
          ['/Catalog/Start/install.md', '软件下载']
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          ['/Catalog/Css/c3/animation.md', 'c3-动画'],
          ['/Catalog/Css/layout/grid.md', '网格布局'],
          ['/Catalog/Css/layout/flex.md', '弹性盒子布局'],
          ['/Catalog/Css/layout/contrast.md', '网格Vs弹性盒子'],
        ]
      },
      {
        title: 'HTML',
        collapsable: true,
        children: [
          ['/Catalog/Html/dom/', 'Dom&Event'],
          ['/Catalog/Html/h5/', 'H5']
        ]
      },
      {
        title: 'JS',
        collapsable: true,
        children: [
          ['/Catalog/JavaScript/algorithm.md', '算法']
        ]
      },
      {
        title: 'TypeScript',
        collapsable: true,
        children: [
          ['/Catalog/TypeScript/', 'TypeScript']
        ]
      },
      {
        title: '网络请求',
        collapsable: true,
        children: [
          ['/Catalog/Request/ajax.md', 'ajax'],
          ['/Catalog/Request/axios.md', 'axios'],
          ['/Catalog/Request/fetch.md', 'fetch']
        ]
      },
      {
        title: '桌面端应用',
        collapsable: true,
        children: [
          ['/Catalog/Desktop/electron.md', 'electron'],
          ['/Catalog/Desktop/electron-autoUpdate.md', '自动化更新'],
          ['/Catalog/Desktop/electron-rw.md', '数据/文件读写']
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          ['/Catalog/Vue/vue.md', '你所不知道的Vue'],
          ['/Catalog/Vue/vdom.md', '虚拟dom'],
          ['/Catalog/Vue/vue-cli3.md', 'Vue3.0脚手架']
        ]
      },
      {
        title: 'Node',
        collapsable: true,
        children: [
          ['/Catalog/Node/node.md', 'node环境配置'],
          ['/Catalog/Node/nvm.md', 'nvm使用说明'],
          ['/Catalog/Node/express.md', 'node接口开发']
        ]
      },
      {
        title: 'Unit',
        collapsable: true,
        children: [
          ['/Catalog/Unit/mocha.md', 'Mocha'],
          ['/Catalog/Unit/assertionLibrary.md', '断言库']
        ]
      },{
        title: '自动化',
        collapsable: true,
        children: [
          ['/Catalog/Auto/docker/install.md', 'Docker安装'],
          ['/Catalog/Auto/docker/create.md', 'Docker使用说明']
          ['/Catalog/Auto/docker/docker.md', 'Dockerfile']
        ]
      },
      {
        title: '面试题',
        collapsable: true,
        children: [
          ['/Catalog/Interviews/', '前端']
        ]
      },
      {
        title: '问题汇总',
        collapsable: true,
        children: [
          ['/Catalog/Problems/2019.md', '2019年汇总']
        ]
      }
    ],
    sidebarDepth: 1, // 侧边栏显示2级
  }
};
