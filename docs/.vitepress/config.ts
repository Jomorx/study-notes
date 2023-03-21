import { getMenuNav } from "../../utils/menu"
import { defineConfig } from "vitepress"
import path from "path"
// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "study-notes",
  description: "A Site To Record My Study",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "项目", link: "/project/" },
      { text: "笔记", link: "/notes/" },
      { text: "代码", link: "/code/" }
    ],
    logo: "/logo.jpg",
    sidebar: {
      "/notes/": [
        {
          text: "目录",
          link: "/notes/",
          items: [
            // {
            //   text: "掘金小册",
            //   collapsed: true,
            //   items: getMenuNav(__dirname, "notes/tiny-book")
            // },
            {
              text: "React源码学习",
              collapsed: true,
              items: getMenuNav(__dirname, "notes/react-source-code")
            }
          ]
        }
      ],
      "/code/": [
        {
          text: "目录",
          link: "/code/",
          items: [
            // {
            //   text: "类型体操",
            //   collapsed: true,
            //   items: getMenuNav(__dirname, "code/type-challenge")
            // }
          ]
        }
      ]
    },

    socialLinks: [{ icon: "github", link: " https://github.com/Jomorx" }]
  },
  base: "/test/"
})
