const express = require('express')
const path = require('path')
const add = express()

add.use(express.static(path.join(__dirname , 'public')))
add.use(express.static(path.join(__dirname , 'images')))

add.get('/youtube' , ()=>{
    res.sendFile(path.join(__dirname ,"views" , "YouTube.html~"))

})

add.get('/' , (req , res)=>{

    res.sendFile(path.join(__dirname ,"views" , "initial.html"))

})

add.listen(3000  , ()=>{
    console.log("LocalHost : 3000");
})