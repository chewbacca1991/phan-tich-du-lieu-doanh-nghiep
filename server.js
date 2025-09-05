const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/phan_tich_du_lieu', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối tới MongoDB thành công!'))
  .catch(err => console.error('Không thể kết nối tới MongoDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});