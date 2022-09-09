const express = require('express')
const app = express();
const path = require('path')

// const publicPath = path.resolve(__dirname,"./public")
// app.use(express.static(publicPath))
app.use(express.static('public'))

app.listen(3002,()=>{
    console.log("server3002 OnLine")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/homee.html'))
})

app.post('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
