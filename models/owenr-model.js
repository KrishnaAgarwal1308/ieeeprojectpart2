const mongoose=require('mongoose')

const ownerSchema =mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    contact:Number,
    picture:String,
    gstnum:String,
})

module.exports=mongoose.model('owner',ownerSchema)