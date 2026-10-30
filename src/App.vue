<script setup>
import DemoBanner from './components/DemoBanner.vue'
</script>

<template>
  <a class="skip-link" href="#main">跳到主要内容</a>

  <!-- G2 护栏：首屏常驻横幅，用户不滚动也能看到 -->
  <DemoBanner />

  <header class="site-header">
    <div class="shell flex flex-wrap items-center justify-between gap-3 py-3">
      <RouterLink to="/" class="brand" aria-label="星语家园，回到首页">
        <span class="brand-dot" aria-hidden="true"></span>
        <span>星语家园</span>
      </RouterLink>
      <nav class="nav flex items-center gap-1" aria-label="主导航">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/resources">视频墙</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
      </nav>
    </div>
  </header>

  <main id="main" tabindex="-1">
    <RouterView />
  </main>

  <footer class="shell mt-16 border-t border-slate-300 py-8 text-sm text-slate-600">
    <p>星语家园 · 概念验证 Demo。内容为家长经验分享，不构成医疗或诊断建议。</p>
    <p class="mt-1">本站不收集姓名、孩子年龄与诊断、联系方式等任何个人信息。</p>
  </footer>
</template>
