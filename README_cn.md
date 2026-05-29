# 刘骐源 · 个人主页

基于 [PRISM](https://github.com/xyjoey/PRISM) 模板构建，站点地址：[https://sgly2004.github.io](https://sgly2004.github.io)

[English](README.md)

## 本地开发

需要 Node.js 22+。

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 编辑内容

| 路径 | 说明 |
|------|------|
| `content/` | 英文默认内容（TOML / Markdown / BibTeX） |
| `content_zh/` | 中文内容 |
| `content/config.toml` | 站点标题、作者、导航、功能开关 |
| `private/` | 本地个人信息草稿（已 gitignore，不会提交） |

常用文件：

- `content/config.toml` — 导航与站点配置
- `content_zh/competitions.toml` — 竞赛
- `content_zh/entrepreneurship.toml` — 创业
- `private/competitions/`、`private/entrepreneurship/` — 各项目素材文件夹（本地，不提交）

## 构建与部署

```bash
npm run build
```

推送到 `main` 分支后，GitHub Actions 会自动部署到 GitHub Pages。详见 [docs/deployment_cn.md](docs/deployment_cn.md)。

## 开源协议

本项目基于 PRISM（MIT License）。上游模板版权归 PRISM 作者所有。
