const express = require('express')
const route = express.Router()
const {registerUser,loginUser,logout}=require('../controllers/authController')


// route.get('/', (req, res) => {
//     res.send('hey its working')
// })
route.post('/register',registerUser)
route.post('/login',loginUser)
route.get('/logout',logout)

module.exports = route