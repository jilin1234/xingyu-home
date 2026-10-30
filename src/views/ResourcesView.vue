<script setup>
import resources from '../data/resources.json'
import ResourceGrid from '../components/ResourceGrid.vue'

const tags = [...new Set(resources.map((r) => r.tag))]
</script>

<template>
  <section class="shell pt-10 sm:pt-12">
    <h1 class="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">家庭训练视频墙</h1>
    <p class="mt-4 max-w-2xl text-slate-700">
      一共 {{ resources.length }} 个条目，覆盖 {{ tags.length }} 个方向。都是可以在家里跟着做的内容，
      点开会在新标签页打开 B 站。学之前请记得：视频是别人的经验，不是给你孩子的处方。
    </p>

    <ul class="mt-5 flex flex-wrap gap-2" aria-label="内容方向">
      <li
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700"
      >
        {{ tag }}
      </li>
    </ul>

    <div class="mt-8">
      <ResourceGrid :items="resources" />
    </div>

    <p class="mt-10 rounded-lg border border-slate-300 bg-white p-4 text-sm text-slate-700">
      说明：部分条目暂时指向 B 站搜索结果，等选定具体视频后会替换为直链。
      如果你有想推荐的内容，可以在社区里说说你找它的理由。
    </p>
  </section>
</template>
