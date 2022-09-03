const express = require('express')
const app = express();
const path = require('path')

app.use(express.static('public'))

app.listen(3002,()=>{
    console.log("server3002 OnLine")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})