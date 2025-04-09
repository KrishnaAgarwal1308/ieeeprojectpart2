const express=require('express')
const route=express()
const {isLoggedIn}=require('../middlewares/isLoggedIn')
route.get('/',(req,res) => {
    let error=req.flash('error')
    res.render('index',{error})  
})
route.get('/shop',isLoggedIn,(req,res) => {
  res.render('shop')
}
)

module.exports=route;