<script setup>
import resources from '../data/resources.json'

const preview = resources.slice(0, 3)
</script>

<template>
  <section class="shell pt-10 sm:pt-14">
    <p class="text-sm font-semibold tracking-wide text-sky-800">ASD 儿童家长 · 经验与家庭训练</p>
    <h1 class="mt-2 max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
      经验有人接住，训练回到家里
    </h1>
    <p class="mt-4 max-w-2xl text-slate-700">
      这里是一个轻量的地方：家长之间交换真正用得上的经验，也能找到可以跟着做的家庭巩固训练视频。
      没有排行榜，没有诊断，也没有人会被要求交代自己是谁。
    </p>

    <div class="mt-8 flex flex-wrap gap-3">
      <RouterLink
        to="/resources"
        class="rounded-lg bg-sky-800 px-5 py-3 text-base font-semibold text-white transition hover:bg-sky-900"
      >
        看视频墙
      </RouterLink>
      <a
        href="#community"
        class="rounded-lg border border-slate-400 bg-white px-5 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100"
      >
        看家长们在说什么
      </a>
    </div>
  </section>

  <section id="community" class="shell mt-14 scroll-mt-6" aria-labelledby="community-title">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <h2 id="community-title" class="text-2xl font-bold text-slate-900">家长社区</h2>
      <p class="text-sm text-slate-600">匿名 · 不收集个人信息</p>
    </div>

    <!-- M1 只有空状态；接上数据库后的列表在 M2 替换这里 -->
    <div class="mt-5 rounded-xl border-2 border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <p class="text-lg font-semibold text-slate-900">社区还在起步，欢迎第一个发帖</p>
      <p class="mx-auto mt-2 max-w-xl text-slate-700">
        发帖与评论功能正在开发中（M3）。当前版本先展示视频墙，社区列表将在接上数据库后出现。
      </p>
      <button
        type="button"
        disabled
        class="mt-5 cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-base font-semibold text-slate-500"
      >
        发帖功能开发中
      </button>
    </div>
  </section>

  <section class="shell mt-14" aria-labelledby="preview-title">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <h2 id="preview-title" class="text-2xl font-bold text-slate-900">先看几个视频</h2>
      <RouterLink to="/resources" class="text-base font-semibold text-sky-800 underline">
        查看全部 {{ resources.length }} 个 →
      </RouterLink>
    </div>

    <ul class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="item in preview" :key="item.id" class="h-full">
        <a
          :href="item.url || `https://search.bilibili.com/all?keyword=${encodeURIComponent(item.title)}`"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition duration-200 hover:shadow-lg motion-safe:hover:-translate-y-1"
        >
          <div class="aspect-video w-full overflow-hidden">
            <div class="cover-fallback" aria-hidden="true">
              <span>{{ item.tag }}</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-base font-semibold leading-snug text-slate-900">{{ item.title }}</h3>
            <span class="mt-3 inline-block text-sm font-medium text-sky-700 group-hover:underline">
              打开 ↗
            </span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>
