module.exports = {
  title: 'Praneet Rohida',
  description: 'Just playing around',
  dest: './.vuepress/dist',
  serviceWorker: true,
  themeConfig: {
    home: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Intro', link: '/intro/' },
      {
        text: 'Connect',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/praneetrohida' },
          { text: 'Github', link: 'https://github.com/pranit123' },
          {
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/praneet-rohida'
          },
          {
            text: 'Email',
            link: 'mailto:praneetrohida@gmail.com'
          }
        ]
      }
    ],
    sidebar: ['/', '/projects/', ['/intro/', 'Work Experience']],
    sidebarDepth: 2,
    search: true
  }
}
