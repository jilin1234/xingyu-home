# M0 还没做完的两件事（M1 代码已就绪，只差素材）

代码这边已经能跑、能部署。剩下的是计划书里 M0 的素材部分，只有你能拍板：

## 1. 把 9 条视频的直链填掉（约 60 分钟）

打开 `src/data/resources.json`，每条把 `url` 从 `""` 改成真实的 B 站视频地址（`https://www.bilibili.com/video/BVxxxxxxx`）。

- 现在 `url` 为空时，卡片会自动跳到「B 站搜索：该条目标题」的结果页，所以演示时不会点出空白页。
- 换成直链后，建议顺手把封面下载到 `public/covers/`，文件名用 `vid-001.jpg` 这类，然后 `cover` 填 `/covers/vid-001.jpg`。
  **不要**直接填 B 站封面 URL，会 403，表现为卡片一片空白（计划书 G3 第 4 条）。
- 计划书说 3 个就能进 M1，剩下 6 个可以演示后再补。

## 2. 确认三条文案

- `src/components/DemoBanner.vue`：横幅文案
- `src/views/AboutView.vue`：免责声明与「不收集什么」
- `src/views/HomeView.vue`：空状态文案「社区还在起步，欢迎第一个发帖」

这三处是 G2 护栏的可见证据，M4 验收要截图。语气你满意就不要再改。

## 3. 种子帖

`src/data/seed-posts.json` 里 10 条，M2 灌库时用。发之前自己读一遍，别有哪句是你不想代表你说的话。

## 完成后

```powershell
npm run build      # 必须无报错
git add .
git commit -m "M0: 填完视频直链与封面"
```
