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

---

**时间**：2026-11-12  
**模型**：Trae  
**提示词**：

给我新建一个 html 文件，显示上图下文的结构，图片和文字通过本地启动服务器获取当前文件夹下面的db里面db.json的poems里面的图片，title和content。并给我生成server.js数据服务器文件，server.js放在db文件夹中。其中端口号为3004。

#### 实现
- db/server.js — Node.js http 模块，端口 3004，GET /api/poems 返回 poems 数组，支持 CORS
- poem-list.html — 上图下文卡片网格，fetch 本地服务器，CSS 类名/id 以 ytt_ 开头
- db.json 原有 4 条 poems 数据（title + content + pic 远程图 URL）

---

**时间**：2026-11-12  
**模型**：Trae  
**提示词**：

给我新建一个 html 文件，显示上图下文的结构，图片和文字通过本地启动服务器获取当前文件夹下面的db里面db.json的poems里面的图片，title和content。并给我生成server.js数据服务器文件，server.js放在db文件夹中。其中端口号为3005。

#### 实现
- db/server.js — 端口从 3004 改成 **3005**（覆盖上次的 server.js），其余接口一致
- poem-list-port3005.html — 上图下文卡片网格，fetch 端口 3005，水墨蓝配色（和 V1 暖棕区分）
- V2 新增左上角半透明编号徽章（backdrop-filter:blur）
- poem-list.html（V1，端口 3004）保留不动

---

**时间**：2026-11-12  
**模型**：Trae  
**提示词**：

课堂任务三档进阶：
任务一 ⭐ 跑通全链路：fetch 两段式 + catch 错误处理（关服务器刷新不能白屏）
任务二 ⭐⭐ 数据我来定：db.json 新增 2 条 poems + server.js 新增 /authors 接口 + Promise.all 并发
任务三 ⭐⭐⭐ 加交互：搜索框（按标题/内容过滤）+ 按标题长度排序按钮

#### 实现
- db/db.json — poems 从 4 条 → **6 条**（新增《静夜思》李白、《登鹳雀楼》王之涣），新增 authors 数组（6 个作者，含 id/name/dynasty/works）
- db/server.js — 新增 `GET /api/authors` 接口 + **新增静态文件服务**（可直接访问 http://localhost:3005/poems.html）
- poems.html — 新建，包含全部三档任务功能：
  - Promise.all 同时 fetch /api/poems + /api/authors（任务二）
  - fetch 两段式 .then(resp.json()).then().catch() 错误处理（任务一）
  - 搜索框 input 事件实时过滤 + 按标题长度排序按钮三级切换（任务三）
  - 自动匹配诗词 → 作者（通过 works 数组匹配标题）
  - CORS Access-Control-Allow-Origin: * 跨域放行

---

**时间**：2026-11-16  
**模型**：Trae  
**提示词**：

课堂任务二三四（移动端手势与传感器）：
- 任务二 ⭐⭐ mobile-gesture.html：手势卡片，4 道菜，左右滑动切换，阈值 40px，0.3s 过渡，边界提示
- 任务三 ⭐⭐⭐ mobile-zoom.html：图片查看器，双指 pinch（1x~4x）+ 双击 1x/2x + 放大后拖动，缩放中心锁定不"跳走"
- 任务四 ⭐⭐⭐⭐ mobile-sensor.html：摇一摇彩蛋，deviceMotion accelerationIncludingGravity 阈值 18，1.5s 冷却，iOS 权限申请，降级按钮

#### 实现
- 统一前缀 hy_（课堂要求）
- mobile-gesture.html：touchstart/move/end + 阈值 40px + track translateX + touch-action:pan-y
- mobile-zoom.html：pinch 算法（两指距离比值 + 中点锁定公式 `newTx = midX - imgCoordX * newScale`）+ 边界钳制
- mobile-sensor.html：hy_computeAcceleration 计算 sqrt(x²+y²+z²) + 冷却窗口 accelerationIncludingGravity vs acceleration

---

**时间**：2026-11-16  
**模型**：Trae  
**提示词**：

课堂任务一：事件侦探 — 触摸事件探针 & 日志。要求做一个探针区，用户在手机上做 5 种操作（单击 / 向上拖动 / 向左快速滑动 / 双指触摸 / 长按抬起），自动记录所有触摸事件的触发顺序、次数、坐标、时间戳。然后回答三个思考问题：
① 一次拖动里 touchmove 大约触发多少次？和距离有什么关系？
② click 出现在 touchend 之前还是之后？
③ 如果把 touchend 换成 touchcancel，会发生什么？

#### 实现
- mobile-probe.html：探针区 + 事件日志面板（黑底终端风格）+ 统计面板（start/move/end/cancel/click 计数）+ 三个思考问题折叠区（含示例答案）
- 拖动时在探针区自动画轨迹点（start 绿 / move 黄 / end 蓝）
- 节流：move 每 3 次打一条日志，每 5 次画一个点，防止爆量
- click 事件在 touchend 之后触发，拖动不会产生 click（这个在日志里会直观看到）

---

**时间**：2026-11-16（第二次）  
**模型**：Trae  
**提示词**：

任务三没有图片 任务二也没有图片 任务一也如图片上所示 我建议将这四个文件在index中合并为一个入口 这样方便我点击

#### 问题排查
- mobile-zoom.html / mobile-gesture.html 的图片引用了 Gitee 远程 URL（`gitee.com/wangyao_jsj/...`），校园网屏蔽 Gitee 导致加载失败
- 本地 `img/` 目录已有 1.jpg~5.jpg、7.jpg、8.png，之前没用到

#### 修复内容
1. mobile-zoom.html：`gitee img/5.jpg` → 本地 `img/5.jpg`
2. mobile-gesture.html：4 张图全改本地路径（6.jpg 本地不存在，用 7.jpg 替代红烧肉）
3. index.html：原来 4 个独立入口合并成 1 个入口，page-desc 里内嵌 4 个子任务快捷链接

---

**时间**：2026-11-16（第三次）  
**模型**：Trae  
**提示词**：

图片任务二帮我生成符合的图片呗 任务三图片用本地2.jpg 任务一只需要回答那三个问题就可以

#### 实现
1. 任务三 mobile-zoom.html：图片从 `img/5.jpg` → `img/2.jpg`
2. 任务二 mobile-gesture.html：用 GenerateImage 工具生成四张美食图，落地到 `img/dishes/`
   - hongshaorou.jpg 青花瓷碗红烧肉
   - gongbaojiding.jpg 宫保鸡丁
   - mapodoufu.jpg 青花瓷碗麻婆豆腐
   - qingzhengluyu.jpg 清蒸鲈鱼
   - HY_DISHES 数组 img 路径全部改为本地 `img/dishes/*.jpg`
3. 任务一 mobile-probe.html：三个思考问题区默认展开（加 `hy_open` class）

---

### 时间: 2026-11-23
### 使用模型: Trae
### 提示词:
新建 LLM 实践操作演示页 llm-demo.html，包含四部分：1) AI 客服切换（硅基流动/七牛）· 图片 AI_1.png AI_2.png；2) 知识库 · zsk_1.png zsk_2.png；3) 图像识别 · txsb.png；4) 语音识别 · yysb.png。图片在 img/LLM/ 下。首页 index.html 加入口。风格与 mobile-hub.html 保持一致（深色主题、卡片、hy_ 前缀）。点击截图可放大（lightbox）。

---

**时间**：2026-11-16（第四次）  
**模型**：Trae  
**提示词**：

这里实现的只有双指缩放

#### 问题根因
mobile-zoom.html 只监听了 touch 事件，没有桌面鼠标模拟。用户在电脑上打开页面时：
- 双指缩放（触摸板捏合）→ 有效（因为浏览器会转成 touch 事件）
- 鼠标双击 → 无效（只在 touchstart 里检测双击）
- 鼠标拖动 → 无效（只在 touchmove 里处理拖动）

#### 修复
在 hy_init 里加桌面鼠标 polyfill：
- mousedown 里检测双击（300ms / 25px 阈值）→ 触发 hy_doDoubleTap
- mousemove（按住时）→ 模拟单指拖动 → hy_drag
- mouseup → 收尾 → hy_onTouchEnd({touches:[]})
- 双指 pinch 只能手机测，鼠标无法模拟
