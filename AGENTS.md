# AGENTS.md

静态 HTML/CSS/JS 课程作品集（高级网页设计）。无 `package.json`、无打包器、无测试套件、无代码检查、无 CI。根目录每个 `.html` 文件是一个独立练习页面；修改后直接在浏览器里打开即可验证（或用任意静态服务器 serve 根目录）。没有构建步骤，没有运行时依赖。

## 目录结构

- `index.html` 是唯一的目录/首页。每个新页面必须在这里登记，带标题和一行描述。
- 新建页面必须有回到 `index.html` 的超链接（规则记录在 `ytt_prompt.md`）。
- 页面默认自包含：小页面把 `<style>` / `<script>` 写内联，大页面把 CSS 拆成同名文件（`CSS3.html` + `CSS3.css`）。
- `dataTy.html` 和 `JS_obj-fun.html` 是 JavaScript 控制台练习，输出在 DevTools 里，不显示在页面上。
- `data.js` 定义 `window.STUDENTS` / `window.SUBJECTS`；`starter-level1.html` 和 `starter-level2.html` 引用它做成绩分析练习，注释里提到的 `target.html` 不在本仓库。
- 优先复用本地资源，不要引入新的远程 CDN：`cdn/`（Font Awesome、Lucide）、`font/` + `font1/`（阿里巴巴 iconfont 包）、`icon/`（独立 SVG）、`img/`（共享图片）。

## 已知坑点

- `GJWY/` 是过期的重复快照，有自己的 `.git` 和不同的 Gitee 远程。不要在那里编辑或提交，所有工作都在仓库根目录进行。
- `index.html` 链接的是 `css3.html`，但实际文件叫 `CSS3.html`。Windows 上不报错，但 Linux / Gitee Pages 这类区分大小写的主机会 404。修改 `index.html` 时顺手把链接修一下，注意保留文件名的大小写。
- `zwjs1.html` 引用了不存在的 `./css/zwjs1.css`（没有样式加载），不要以为它现在的样子是故意设计的。
- `svg.html` 虽然本地有 icon 资源，却仍然加载远程 `http://at.alicdn.com/...` 脚本，其他页面都用本地版，这里风格不统一。
- 文件统一 UTF-8 编码，界面和注释都是简体中文，请保持一致。

## 约定

- 来自 `ytt_prompt.md`（已 gitignore 但文件存在）：ytt 作用域下的 CSS 类名、ID、JS 变量统一加 `ytt_` 前缀；每次新提示词追加到 `ytt_prompt.md` 末尾，不覆盖，记录时间、模型、提示词内容。
- `skills/frontend-design/SKILL.md` 是 UI 视觉设计指南，不会被自动加载（不在 `.opencode/` 下），所以创建或重做页面时需要主动读它。
- Git：`master` 分支，Gitee 远程是 `advanced-web-page`。现有提交信息用中文，有时带 `feat:` / `初始提交：` 前缀。不要改已配置的远程（里面嵌了凭证），除非被问起，否则不要提交。
- 后续生成的文档、检查清单**全部使用简体中文书写说明**；文件路径、HTML 标签、CSS/JS 标识符、代码片段中的关键字保留英文。本文件已按这条约定改写完成。

## 注释规范（新文件）

以后新建的 `.html` 文件必须包含标准化的作者/功能注释。已存在的文件不回溯补注释，除非用户明确要求。

### 1. HTML 文件头注释

放在 `<title>` 或 `<meta charset>` 之后，插入一个 HTML 注释块：

```html
<!--
  作者: 杨婷婷
  建立时间: YYYY-MM-DD
  使用模型: Trae
  功能名称: <该页面做什么，一句话>
  功能简介: <2-4 行，描述页面核心能力、主要模块、与其他页面的关系>
-->
```

### 2. CSS 区块注释

在 `<style>` 块前或各大 CSS 分区之前，加一个块注释说明这个区块（tokens、layout、components 等）。

### 3. JS 函数头注释（强制）

`<script>` 或 `.js` 文件里每个**独立函数**前面必须有一行注释说明功能。**事件处理器里的内联 one-liner 不要求单独注释。**

格式：

```javascript
// ===== ytt_functionName =====
// 功能: <一句话说明这个函数的主要职责>
// 参数: <参数列表及含义，无参数写 无>
// 返回: <返回值含义，无返回写 无>
// 示例: <可选，典型调用方式>
function ytt_functionName(...) { ... }
```

匿名函数 / 箭头函数赋值给变量的，同样格式直接写在赋值语句上方：

```javascript
// ===== ytt_handler =====
// 功能: 处理 tab 点击切换 active 态并递减徽章
// 参数: event  — 点击事件对象（未使用，tab 通过 this 读取）
// 返回: 无
var ytt_handler = function() { ... };
```

### 4. 什么不用注释

- HTML 模板标签（`<!DOCTYPE html>`、`<head>`、meta 标签）——本身不言自明。
- 普通 CSS 属性行，除非那个值不直观、或者用到了 hack / workaround。
- 数组方法里的 tiny 箭头回调（`.map`、`.filter`）——一行就像散文一样好读。

### 5. 与 `ytt_prompt.md` 的关系

这些注释字段（作者/时间/模型/功能）和 `ytt_prompt.md` 每次记录的内容会重叠。两者面对的受众不同：注释跟着 HTML 文件走，`ytt_prompt.md` 留在本地且已 gitignore。两边保持一致即可——比如一处写了 "2026-11-02 / Trae"，另一处也要同步。
