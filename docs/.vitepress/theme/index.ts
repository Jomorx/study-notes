// https://vitepress.vuejs.org/guide/custom-theme
import { h } from "vue"
import Theme from "vitepress/theme"
import "./style.css"
// import "./nico.scss";

import Layout from "./Layout.vue"
export default {
  ...Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.vuejs.org/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
