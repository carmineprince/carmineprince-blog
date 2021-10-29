// nav
module.exports = [
  { text: "首页", link: "/" },
  {
    text: "前端",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: "HTML", link: "/pages/6a1054/" },
          { text: "CSS", link: "/pages/31329c/" },
          { text: "JavaScript", link: "/pages/efc5a2/" },
        ],
      },
    ],
  },
  {
    text: "框架",
    link: "/frame/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: "Vue", link: "/pages/37498d/" },
          { text: "React", link: "/pages/fad6ff/" },
          { text: "TypeScript", link: "/pages/8c812a/" },
          { text: "Node", link: "/pages/667cb2/" },
          { text: "Flutter", link: "/pages/6df927/" },
        ],
      },
    ],
  },
  {
    text: "后端",
    link: "/back/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: "Python", link: "/pages/497c5f/" },
          { text: "运维", link: "/pages/157def/" },
        ],
      },
    ],
  },
  {
    text: "笔记",
    link: "/note/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: "重学前端", link: "/pages/d99d1f/" },
        ],
      },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
];
