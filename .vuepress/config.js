module.exports = {
    title: '路一的博客',
    description: '这是我的第一个 VuePress 文档网站',
    dest:'docs',
    themeConfig: {
      logo: '/blog.png',
      nav: [
        { text: '学习资料', link: '/materials/' },
      ],
      sidebar: {
        '/materials/': [
          {
            title: '学习资料',
            collapsable: false,
            children: [
              '',
              'getting-started',
              'css',
              'html',
              'http',
              'js'
            ]
          }
        ]
      },
      sidebarDepth: 2  // 显示 h2 和 h3 标题
    }
  }