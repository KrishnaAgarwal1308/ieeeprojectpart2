const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')
const path=require('path')
const flash=require('connect-flash')
const session=require('express-session')

require('dotenv').config()
const db=require('./config/mongoose-connection')
const indexRouter=require('./routes/indexRouter')
const ownerRouter=require('./routes/ownerRouter')
const userRouter=require('./routes/userRouter')
const productRouter=require('./routes/productRouter')


app.use(session({
    resave:false,
    saveUninitialized:false,
    cookie:({secure:false}),
    secret:process.env.EXPRESS_SESSION_KEY
}))
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", 'ejs')
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))


app.use('/',indexRouter)
app.use('/owner',ownerRouter)
app.use('/product',productRouter)
app.use('/users',userRouter)

// app.get('/',(req,res) => {
//     res.render("owner-login")
// })

app.listen(3000)