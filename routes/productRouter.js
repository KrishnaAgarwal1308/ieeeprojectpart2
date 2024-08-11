const express=require('express')
const route=express.Router()

route.get('/',(req,res) => {
    res.send('hey its not working')
})
module.exports=route