const dbgr = require('debug')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user-model')
const { generateToken } = require('../utils/generateToken')

module.exports.registerUser = async (req, res) => {
    try {
        let { fullName, email, password } = req.body
        let existingUser = await userModel.findOne({ email })
        if (existingUser){
            req.flash('error','You already have an accoutn. Please Log in')
            res.redirect('/')
        } 
        let hashed = await bcrypt.hash(password, 10)
        let user = await userModel.create({
            fullName, email, password: hashed
        })
        let token = generateToken(user)
        res.cookie('token', token)
        res.send('user created successfully')
    }
    catch (err) {
        dbgr(err)
        res.status(500)
    }
}
module.exports.loginUser = async (req, res) => {
    try {
        let { password, email } = req.body
        let user = await userModel.findOne({ email })
        if(!user) return res.send('access denied plaese check the credentials').status(401)
        bcrypt.compare(password,user.password,(err,result) => {
            if(result){
                let token=generateToken(user)
                res.cookie('token',token)
                res.redirect('/shop')
            }
            else {
                req.flash('access denied plaese check the credentials')
                res.redirect('/')
            }
        })
    }
    catch (err) {
        res.status(401).send(err)
    }

}
module.exports.logout=async (req,res) => {
    res.clearCookie('token')
    res.redirect('/')
}