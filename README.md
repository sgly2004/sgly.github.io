# Qiyuan Liu · Personal Homepage

Built with [PRISM](https://github.com/xyjoey/PRISM). Live site: [https://sgly2004.github.io](https://sgly2004.github.io)

[中文](README_cn.md)

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing content

| Path | Purpose |
|------|---------|
| `content/` | Default English content (TOML / Markdown / BibTeX) |
| `content_zh/` | Chinese content |
| `content/config.toml` | Site title, author, navigation, feature flags |
| `private/` | Local personal drafts (gitignored) |

Key files: `content/config.toml`, `content/bio.md`, `content/publications.bib`, `content/news.toml`.

## Build & deploy

```bash
npm run build
```

Pushes to `main` trigger GitHub Actions deployment. See [docs/deployment.md](docs/deployment.md).

## License

Based on PRISM (MIT License).
