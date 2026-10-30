<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
})

const hasUrl = computed(() => Boolean(props.item.url && props.item.url.trim()))

// 没有真实链接时退回 B 站搜索页，保证卡片永远点得动、不会跳到空白页。
const href = computed(() =>
  hasUrl.value
    ? props.item.url.trim()
    : `https://search.bilibili.com/all?keyword=${encodeURIComponent(props.item.title)}`,
)
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition duration-200 hover:shadow-lg motion-safe:hover:-translate-y-1"
  >
    <div class="relative aspect-video w-full overflow-hidden bg-slate-100">
      <img
        v-if="item.cover"
        :src="item.cover"
        :alt="`${item.title} 的视频封面`"
        loading="lazy"
        class="h-full w-full object-cover"
      />
      <div v-else class="cover-fallback" aria-hidden="true">
        <span>{{ item.tag }}</span>
      </div>
      <span
        v-if="!hasUrl"
        class="absolute right-2 top-2 rounded-md bg-slate-900/85 px-2 py-1 text-xs font-medium text-white"
      >
        B 站搜索
      </span>
    </div>

    <div class="flex flex-1 flex-col p-4">
      <h3 class="text-base font-semibold leading-snug text-slate-900">
        {{ item.title }}
      </h3>
      <div class="mt-3 flex items-center justify-between gap-2">
        <span class="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
          {{ item.tag }}
        </span>
        <span class="text-sm font-medium text-sky-700 group-hover:underline">打开 ↗</span>
      </div>
    </div>
  </a>
</template>
