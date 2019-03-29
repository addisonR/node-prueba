const express = require('express');
const app = express()

app.get('/',(req,res) => res.send('hello world'));askdklasd

app.listen(3000, ()=>{
    console.log('runing in port: 3000');
})