module.exports = {
    title: '路一的博客',
    description: '这是我的第一个 VuePress 文档网站',
    dest:'docs',
    themeConfig: {
      logo: '/blog.png',
      nav: [
        { text: '上下求索', link: '/materials/' },
      ],
      sidebar: {
        '/materials/': [
          {
            title: '上下求索',
            collapsable: false,
            children: [
              '',
              'js',
              'browser',
              'http',
              'html',
              'css'
            ]
          }
        ]
      },
      sidebarDepth: 2  // 显示 h2 和 h3 标题
    }
  }