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
          ['/catalog_start/git.md', 'Git安装'],
        ]
      },
      {
        title: '基础',
        children: [
          ['/catalog_base/html/', 'Html-DOM操作'],
          ['/catalog_base/html/h5.md', 'Html-H5'],
          ['/catalog_base/css/', 'Css-动画'],
          ['/catalog_base/css/elastic.md', 'Css-弹性布局'],
          ['/catalog_base/algorithm/', '算法']
        ]
      }
    ]
  }
}
