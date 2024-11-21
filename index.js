const express = require('express') 

const app = express()

PORT = 3000;

app.get('/',(req,res) =>{
res.send('hello world')
});


app.listen(PORT,(req,res) =>{
    console.log('listening to port 3000')
});

