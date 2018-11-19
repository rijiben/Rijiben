module.exports = {
  title: '工作笔记',
  description: '程序猿的那点事',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: '/',   //基础路径,
  port:8001,
  markdown: {
    lineNumbers: true //代码块显示行号
  },
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/note/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      // 下拉列表的配置
      {
        text: '帮助中心',
        items: [
          { text: '关于博客', link: '/about' },
          { text: '找到博主', link: '/about' }
        ]
      }
    ],
    sidebar: {
      '/note': [
        {
          title: '前端',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '后端',
          collapsable: true,
          children: [
          ]
        },
      ]
    }
  }

}