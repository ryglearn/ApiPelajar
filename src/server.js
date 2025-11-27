const express = require('express');
require('dotenv').config();
const app = express();
const pelajarRoute = require('./routes/pelajarRoute')
const PORT = process.env.PORT || 3000;

app.use(express.json());

// prefix
app.use('/api/pelajar/', pelajarRoute);
// home url
app.use('/', (req,res)=>{
    res.send('SElamat datang ketua!')
})


// start server
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})