const mongoose =require('mongoose')

const productSchema=mongoose.Schema({
    image:String,
    name:String,
    discount:{
        type:Number,default:0},
    price:Number,
    bgColor:String,
    pannelColor:String,
    text:String
})

module.exports=mongoose.model('product',productSchema)