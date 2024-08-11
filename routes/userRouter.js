const express=require('express')
const route=express.Router()

route.get('/',(req,res) => {
    res.send('hey its working')
})
module.exports=route