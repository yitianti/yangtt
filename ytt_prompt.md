# YTT 提示词记录

---

**时间**：2026-10-22  
**模型**：Trae  
**提示词**：

设定规则：从现在开始，所有CSS类名，id名、js变量都以ytt_开始，所有的提示词都在执行之前写入文件ytt_prompt.md，以附加的方式写入，不覆盖之前的内容，写入的内容包括时间、使用的模型、提示词内容。

---

**时间**：2026-10-22  
**模型**：Trae  
**提示词**：

设置规则：新建的html文件加入超链接到首页index.html,并在首页index.html中加入新建的html文件的标题入口。

---

**时间**：2026-10-22  
**模型**：Trae  
**提示词**：

做两个html网页iconfont-1.html,inconfont-2.html，分别显示font awesome图标和lucide图标，前者使用字体图标的方式，后者使用svg的方式，相关的cdn文件下载到本目录下的cdn目录。

---

**时间**：2026-10-22  
**模型**：Trae  
**提示词**：

根据font目录中的iconfont图标完成移动端的固定的自适应宽度的下导航，导航项目包括4个，完成html网页的设计，网页名称iconfont-3.html和iconfont-4.html分别使用字体图标和svg，包括右上角的数字徽章和红点。

---

**时间**：2026-10-22  
**模型**：Trae  
**提示词**：

创建skill:提交项目：使用git commit并push当前项目到``https://gitee.com/Tinon/advanced-web-page.git`

---

**时间**：2026-10-29  
**模型**：Trae  
**提示词**：

创建技能skill：提交到github，将本项目提交commit并push到`https://github.com/yitianti/yangtt.git`，使用已设置公钥。

---

**时间**：2026-11-02  
**模型**：Trae  
**提示词**：

修改规则 AGENTS.md，在新建一个 html 文件时，要加入注释，尤其是 js 部分代码函数的主要功能实现。注释内容包括：杨婷婷，建立时间，使用模型、功能名称及简介。

---

**时间**：2026-11-02  
**模型**：Trae  
**提示词**：

AGENTS.md 所有说明、检查条目统一简体中文；文件路径、HTML、CSS、JS 标识符保留英文。后续在这个项目里，生成文档、检查清单都遵守这条约定。

---

**时间**：2026-11-02  
**模型**：Trae  
**提示词**：

请给我新建一个.html文件，显示tab选项卡，选项卡分为国内新闻，省内新闻，国际新闻，最热新闻，国内新闻作为默认选项，就是，文件单独放在js文件夹中，外部引用，js部分tab选项卡可复用。实现代码中包含事件监听，清除所有选项卡的选中状态再设置当前元素的选中状态

---

**时间**：2026-11-02  
**模型**：Trae  
**提示词**：

代码要按照之前设定放入规则：所有 CSS 类名、id、JS 变量必须以ytt 开头(你姓名首字母_ ）,github的仓库要包含我的姓名全拼，提交项目并page发布，js要使用外部引用

---

**时间**：2026-11-09  
**模型**：Trae  
**提示词**：

### 任务一 · Swiper 提示词工程 direction:vertical 为什么不生效

#### 第一轮提示词（❌ 有缺陷）
帮我创建一个 Swiper 轮播，方向是 vertical，有分页器，三张图就好。

#### 第二轮提示词（✅ 补全约束）
请创建一个 320px 高 的 Swiper 垂直轮播（direction:'vertical'），slide 高度占满容器。pagination 圆点也要竖排显示（verticalClass:true）。三张 nature 图，背景图模式，底部加标题和小副标题。给 swiper 容器加一个 320px 固定高度的 CSS 类。

#### 缺陷分析
第一轮漏掉三个约束：①容器高度没说（Swiper vertical 模式必须有 height 参照，否则 wrapper 高度 = 0）；②pagination 没说也要 vertical（视觉会和轮播方向打架）；③没提要写 CSS（AI 只写了 JS，容器还是 auto 高度）。

#### 对应文件
swiper-vertical.html — 左右并排对比两轮产出，同样的 nature 图，只差 CSS height 和 verticalClass:true

---

**时间**：2026-11-09  
**模型**：Trae  
**提示词**：

帮我修复 swiper-vertical.html 图片不显示的问题，并将提示词放到图片上方左右并排形成视觉对比，同时追加到 ytt_prompt.md
