const express=require('express')
const route=express.Router()
const upload=require('../config/multer-config')
const productModel=require('../models/user-model')
route.post('/create',upload.single('image'),async(req,res) => {
    let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body
    let product=await productModel.create({
        image:req.file.buffer,
        name,
        discount,
        price,
        bgcolor,
        panelcolor,
        textcolor
    })
})
module.exports=route