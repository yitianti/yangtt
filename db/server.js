/**
 * 作者: 杨婷婷
 * 建立时间: 2026-11-12
 * 使用模型: Trae
 * 功能名称: 诗词数据服务器
 * 功能简介: 基于 Node.js http 模块的极简数据服务器
 *          - 端口 3004
 *          - 提供 GET /api/poems 接口，返回 db.json 中的 poems 数组
 *          - 设置 CORS 允许跨域（方便本地 HTML fetch）
 *          - 可作为静态文件服务器直接访问 db.json
 *
 * 启动方式: node db/server.js
 * 测试:    浏览器打开 http://localhost:3004/api/poems
 */

const http = require('http');          // Node.js 内置 HTTP 模块
const fs = require('fs');              // 文件系统
const path = require('path');          // 路径处理

const PORT = 3005;                     // 端口号（第 2 版，端口 3004 → 3005）

/* ===== readDb =====
 * 功能: 同步读取 db.json 文件并解析成 JS 对象
 * 参数: 无
 * 返回: Object（整个 JSON 文件解析后的对象）
 */
function readDb() {
  const dbPath = path.join(__dirname, 'db.json');
  const raw = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(raw);
}

/* ===== sendJson =====
 * 功能: 给客户端返回 JSON 响应（自动设置 CORS + Content-Type）
 * 参数: res  - http.ServerResponse
 *       data - 要发送的数据对象
 *       statusCode - HTTP 状态码，默认 200
 * 返回: 无
 */
function sendJson(res, data, statusCode = 200) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',        // 允许任何源跨域
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data, null, 2));       // 格式化输出，方便人眼阅读
}

/* ===== 主服务器 ===== */
const server = http.createServer((req, res) => {
  // 处理 OPTIONS 预检请求（浏览器跨域时自动发）
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // 只接受 GET 请求
  if (req.method !== 'GET') {
    sendJson(res, { error: '仅支持 GET 请求' }, 405);
    return;
  }

  /* ===== 路由: GET /api/poems ===== */
  if (req.url === '/api/poems' || req.url === '/api/poems/') {
    try {
      const db = readDb();                       // 读 db.json
      sendJson(res, db.poems);                   // 返回 poems 数组
    } catch (err) {
      sendJson(res, { error: '读取数据失败', detail: err.message }, 500);
    }
    return;
  }

  /* ===== 路由: GET /api/poem/:index ===== */
  // 取单条，/api/poem/0 → 第一首
  const singleMatch = req.url.match(/^\/api\/poem\/(\d+)$/);
  if (singleMatch) {
    try {
      const db = readDb();
      const index = parseInt(singleMatch[1], 10);
      if (index >= 0 && index < db.poems.length) {
        sendJson(res, db.poems[index]);
      } else {
        sendJson(res, { error: '索引越界，当前共 ' + db.poems.length + ' 条' }, 404);
      }
    } catch (err) {
      sendJson(res, { error: '读取数据失败', detail: err.message }, 500);
    }
    return;
  }

  /* ===== 路由: GET /db.json（直接拿原始文件） ===== */
  if (req.url === '/db.json') {
    try {
      const dbPath = path.join(__dirname, 'db.json');
      const raw = fs.readFileSync(dbPath, 'utf-8');
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(raw);
    } catch (err) {
      sendJson(res, { error: '文件不存在' }, 404);
    }
    return;
  }

  /* ===== 其他路由 → 404 ===== */
  sendJson(res, { error: '接口不存在。可用接口: /api/poems, /api/poem/:index, /db.json' }, 404);
});

server.listen(PORT, () => {
  console.log(`✅ 诗词数据服务器已启动`);
  console.log(`   接口: http://localhost:${PORT}/api/poems`);
  console.log(`   原始文件: http://localhost:${PORT}/db.json`);
  console.log(`   Ctrl+C 停止`);
});
