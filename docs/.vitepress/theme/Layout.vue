<script setup>
import DefaultTheme from "vitepress/theme"
import { getRandomNumber } from "@study-notes/utils"
const { Layout } = DefaultTheme

const textArr = [
  "学而不思则罔，思而不学则殆。",
  "学而时习之，温故而知新",
  "不积跬步，无以至千里",
  "今天不学习，明天变垃圾"
]
const number = getRandomNumber(0, textArr.length - 1)
</script>

<template>
  <Layout>
    <template #home-hero-info>
      <div class="title">Jomorx的学习笔记</div>
      <div class="text">{{ textArr[number] }}</div>
      <div class="tagline">记录自己的学习心得📝</div>
    </template>
  </Layout>
</template>

<style scoped>
.title {
  font-size: 45px;
  font-weight: 700;
  line-height: 45px;
}
.text {
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  margin-top: 20px;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
.tagline {
  margin-top: 25px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
}
</style>
