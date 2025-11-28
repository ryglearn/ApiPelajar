const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const app = express();
const pelajarRoute = require('./routes/pelajarRoute');
const PORT = process.env.PORT || 3000;

app.use(express.json());

//allow all origin
app.use(cors());

// API
app.use('/api/pelajar', pelajarRoute);

// Static files React
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Fallback — semua request selain API masuk ke React
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
