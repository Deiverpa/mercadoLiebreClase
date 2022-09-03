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


