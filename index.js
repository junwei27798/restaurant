const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 使用中間件
app.use(cors());
app.use(bodyParser.json());

// 模擬的菜單數據
const menu = [
  { id: 1, name: 'Fried Rice', price: 100 },
  { id: 2, name: 'Chicken Curry', price: 150 },
  { id: 3, name: 'Spring Rolls', price: 80 },
  { id: 4, name: 'Miso Soup', price: 50 }
];

// 存儲訂單的數組
let orders = [];

// 獲取菜單
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

// 接收訂單
app.post('/api/orders', (req, res) => {
  const order = req.body;

  if (!order || !order.items || order.items.length === 0) {
    return res.status(400).json({ message: 'Invalid order format' });
  }

  // 添加訂單到訂單數組
  orders.push(order);

  // 回應成功
  res.status(201).json({ message: 'Order received successfully', order });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
