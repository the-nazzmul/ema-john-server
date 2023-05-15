const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;

// middleware

app.use(cors());
app.use(express());

app.get('/', (req,res) => {
    res.send('server is running hahahaha')
})

app.listen(port, ()=>{
    console.log('server is running on port:', port);
})