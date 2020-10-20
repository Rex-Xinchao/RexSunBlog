module.exports = {
  title: 'RexSun的学习之旅',
  description: 'RexSun的个人网站',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  base: '/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [{ text: 'Github', link: 'https://github.com/Rex-Xinchao' }],
    sidebar: [
      {
        title: '环境搭建',
        children: [
          ['/catalog_start/tool.md', '开发工具'],
          ['/catalog_start/mysql.md', 'Mysql安装'],
          ['/catalog_start/node.md', 'Node安装'],
          ['/catalog_start/git.md', 'Git安装']
        ]
      },
      {
        title: '基础',
        children: [
          ['/catalog_base/html/', 'Html'],
          ['/catalog_base/css/', 'Css3'],
          ['/catalog_base/css/elastic', '弹性布局'],
          ['/catalog_base/algorithm/', '算法'],
          ['/catalog_base/chart/', '可视化图表']
        ]
      },
      {
        title: '网络请求',
        children: [
          ['/catalog_request/ajax', 'ajax'],
          ['/catalog_request/axios', 'axios'],
          ['/catalog_request/fetch', 'fetch']
        ]
      },
      {
        title: 'Vue',
        children: [
          ['/catalog_vue/vue/', 'vue'],
          ['/catalog_vue/vue/vue-cli.md', 'vue-cli'],
          ['/catalog_vue/typescript/', 'typescript']
        ]
      },
      {
        title: '三方平台开发',
        children: [
          ['/catalog_platform/electorn/', '桌面应用'],
          ['/catalog_platform/wechat/h5.md', '微信分享功能'],
          ['/catalog_platform/wechat/', '微信小程序'],
        ]
      },
      {
        title: '单元测试',
        children: [
          ['/catalog_unit/mocha.md', 'Mocha'],
          ['/catalog_unit/assertionLibrary.md', '断言库']
        ]
      },
      {
        title: '服务器',
        children: [
          ['/catalog_server/install/docker.md', 'docker'],
          ['/catalog_server/install/gitlab.md', 'gitlab'],
          ['/catalog_server/install/jenkins.md', 'jenkins'],
          ['/catalog_server/install/nginx.md', 'nginx'],
          ['/catalog_server/publish/node.md', '发布Node程序'],
          ['/catalog_server/publish/web.md', '发布Web程序']
        ]
      },
      {
        title: '面试总结',
        children: [
          ['/catalog_self/interview/', '面试汇总'],
          ['/catalog_self/problem/2019.md', '2019问题小结']
        ]
      }
    ]
  }
}
