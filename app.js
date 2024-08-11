const express=require('express')
const app=express()

const db=require('./config/mongoose-connection')

const cookieParser=require('cookie-parser')
const path=require('path')
const ownerRouter=require('./routes/ownerRouter')
const userRouter=require('./routes/userRouter')
const productRouter=require('./routes/productRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", 'ejs')
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))



app.use('/owner',ownerRouter)
app.use('/product',productRouter)
app.use('/user',userRouter)

app.get('/',(req,res) => {
    res.render("index")
})

app.listen(3000)