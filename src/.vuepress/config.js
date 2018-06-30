module.exports = {
  title: "Praneet Rohida",
  description: "Just playing around",
  dest: "./.vuepress/dist",
  head: [
    ["link", { rel: "icon", href: `/icon-256.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#6Cb484" }]
  ],
  serviceWorker: true,
  themeConfig: {
    home: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Intro", link: "/intro/" },
      {
        text: "Connect",
        items: [
          { text: "Twitter", link: "https://twitter.com/praneetrohida" },
          { text: "Github", link: "https://github.com/pranit123" },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/praneet-rohida"
          },
          {
            text: "Email",
            link: "mailto:praneetrohida@gmail.com"
          }
        ]
      }
    ],
    sidebar: [
      "/",
      ["/intro/", "About Me"],
      ["/experience/", "Work Experience"],
      "/projects/",
      "/skills/",
      "/education/"
    ],
    sidebarDepth: 2,
    search: false
  }
};
