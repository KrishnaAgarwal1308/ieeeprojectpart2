const mongoose=require('mongoose')

const userSchema =mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    admin:Boolean,
    contact:Number,
    cart:{
        type:Array,
        default: []
    },
    orders:{
        type:Array,
        default:[]
    },
    picture:String
})

module.exports=mongoose.model('user',userSchema)