const express = require('express');
const cors = require('cors');
// 创建一个Express应用程序
const app = express();
const port = 3000;
app.use(cors());
const data = Array.from({ length: 100000 }, (_, i) => i)

// 设置路由处理程序
app.get('/api/list', (req, res) => {
    res.json({data});
});
// 启动服务器
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
