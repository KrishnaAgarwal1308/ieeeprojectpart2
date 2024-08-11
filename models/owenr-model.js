const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')

const ownerSchema =mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    contact:Number,
    picture:String,
    gstnum:String,
})

module.exports=mongoose.model('owner',ownerSchema)