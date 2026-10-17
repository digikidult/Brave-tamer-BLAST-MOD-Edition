# BLAST-MOD-Edition GitHub Pages package

A buildless bilingual website for Digikidult's Brave Tamer BLAST-MOD-Edition v1.0. No build tools, external fonts, account services, or analytics are required.

## Publish on GitHub Pages

1. Unzip this package.
2. Upload **the contents of this folder** to the root of the GitHub repository you want to use for this project. Keep `index.html`, `index-zh-HK.html`, `style.css`, `script.js`, `.nojekyll`, `assets/`, and `patches/` together.
3. In that repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select your publishing branch and **/(root)**, then save.
5. Wait for GitHub's Pages deployment to finish, then open the website URL shown in Settings → Pages.

If your repository already hosts another site, use a separate repository for this page or merge the files deliberately rather than replacing that site's index.

Official GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

All local links are relative, so the site works beneath a GitHub project-repository URL. No repository name or release URL needs to be configured.

## Files

- `index.html` — English page.
- `index-zh-HK.html` — Traditional Chinese page using Hong Kong wording.
- `style.css` — responsive LCD-inspired design, with green and amber palettes.
- `script.js` — theme preference, image zoom, checksum copying, and section navigation.
- `assets/` — the two README screenshots and three extracted Digimon illustrations.
- `patches/` — Standard and SRAM IPS patches, plus `checksums.json`.
- `.nojekyll` — allows direct static-file publication without a Jekyll build.

Open `index.html` for a local preview. The site can be read without JavaScript; theme switching and image zoom require JavaScript. Clipboard copying works on HTTPS or localhost; on other local previews you can select the visible checksum text manually.

## 更新與發佈

解壓縮後，將本資料夾內的檔案及子資料夾上載至 GitHub 儲存庫根目錄。於 **Settings → Pages** 選擇 **Deploy from a branch**，再選擇發佈分支及 **/(root)**。

請保留檔案的相對位置。英語首頁為 `index.html`，繁體中文頁面為 `index-zh-HK.html`，右上角可切換語言及 LCD 配色。

如儲存庫已有其他網站，請使用獨立儲存庫，或先安排合併，避免覆蓋原有首頁。

## Content and downloads

The wording follows the supplied revised English and Chinese Word documents, including the explicitly requested **Impmon + Zhuqiaomon** presentation. The English introduction has been lightly polished for fluency. Non-commercial terms and copyright statements are retained.

The two IPS files are copied byte-for-byte from the existing v1.0 project outputs. The website does not alter their fusion mechanics. Original base-ROM hashes and IPS hashes are available in expandable verification panels on the page.

This package contains **no original ROMs, modified ROMs, save files, private documents, or personal filesystem paths**. Download links serve the bundled patches directly, rather than pointing to uncreated GitHub Releases.

## Credits

Mod by Digikidult. Visual direction references the existing Ver. Zero project page:
https://digikidult.github.io/Anode-Cathode-Ver-Zero/index.html

Original game artwork and characters belong to their respective rights holders. This is an unofficial, free, non-commercial fan project.
