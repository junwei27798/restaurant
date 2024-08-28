const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const printer = require('node-printer'); // 這是模擬的打印庫，你需要選擇適合的庫

app.use(bodyParser.json());

app.post('/order', (req, res) => {
    const order = req.body.order;
    // 打印出單
    printer.print(order);
    res.send('訂單已打印');
});

app.listen(3000, () => {
    console.log('伺服器運行在 http://localhost:3000');
});
