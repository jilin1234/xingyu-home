# 星语家园（xingyu-home）

面向 ASD 儿童家长的社区 + 家庭巩固训练资源页。**概念验证（Demo）级别**，不承载真实使用者数据。

技术栈：Vue 3（`<script setup>`）· Vite · Tailwind CSS v4（`@tailwindcss/vite`，无 `tailwind.config.js`）· Vue Router · Supabase（M2 起）· Vercel。

## 怎么跑

```powershell
npm install
npm run dev        # 默认 http://localhost:5173
npm run build      # 部署前必须通过，build 报错基本等于线上白屏
npm run preview    # 本地预览 build 产物
```

Node 20 / 22 LTS 或更新的偶数 LTS 版本均可；本机验证环境为 Node 24.22.2 + npm 11.19.1。

## 目录结构

```
src/
  main.js                  入口，挂载 router
  App.vue                  顶部横幅 + 导航 + 页脚
  style.css                Tailwind v4 导入 + 全局基线（字号/焦点/减少动效）
  router/index.js          三个路由：/ 、/resources 、/about
  components/
    DemoBanner.vue         首屏常驻 Demo 横幅（G2）
    ResourceGrid.vue       响应式网格：1 / 2 / 3 列
    ResourceCard.vue       卡片：本地封面、lazy、alt、悬浮位移、reduced-motion 关闭
  views/
    HomeView.vue           首页：Hero + 社区空状态 + 视频预览
    ResourcesView.vue      视频墙
    AboutView.vue          项目说明 + 不做清单 + 免责声明（G2）
  data/
    resources.json         视频条目：id / title / cover / url / tag
    seed-posts.json        10 条种子帖（M0 产出，M2 灌库用）
vercel.json                SPA 重写：直接刷新 /about 不会 404
```

## 部署（M1 当天就要拿到真实网址）

1. 在 GitHub 新建空仓库 `xingyu-home`（不要勾选 README），然后：

   ```powershell
   git init
   git add .
   git commit -m "M1: 静态视频墙 + Demo 横幅 + 三页路由"
   git branch -M main
   git remote add origin https://github.com/jilin1234/xingyu-home.git
   git push -u origin main
   ```

2. Vercel → Add New Project → 选 `xingyu-home` → Framework 自动识别 Vite → Deploy。
3. 记下 `xxx.vercel.app`，用手机流量打开实测一次。

`vercel.json` 已配 SPA 重写；没有它，`/about` 直接刷新会 404，只有从首页点进去才正常。

## 环境变量（M2 起才需要）

`.env.example` 复制成 `.env`：

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<publishable key>
```

- 只用 publishable key（等同旧版 anon key）。`secret key` / `service_role key` **永不**进前端、截图、Git 历史。
- Vercel 上要在 **Production 和 Preview 两个环境**都配一遍，否则「本地通、线上不通」。

## 已知限制

- 没有身份体系，无法真正限流：公开 Demo 可能被刷。缓解方式是前端 10 秒节流 + 手动清理。
- 部分视频条目暂时指向 B 站搜索结果，选定具体视频后替换 `src/data/resources.json` 的 `url`。
- 视频封面若用 B 站外链会 403（防盗链），必须下载到 `public/covers/` 后引用。

## 与计划书护栏的对应

| 护栏 | 落地位置 |
| --- | --- |
| G2 隐私 | `DemoBanner.vue`、`AboutView.vue`、表单不存在的姓名/手机字段 |
| G3 可用性 | M1 即部署；封面本地化；`vercel.json` |
| G4 无障碍 | `style.css`（16px / 1.65 / 可见焦点 / reduced-motion）、卡片 alt + lazy、状态带文字 |
| G5 交付质量 | 一个里程碑一个 commit；README + `.env.example` |
