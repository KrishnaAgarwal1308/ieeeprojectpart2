// this middleware will help in creating protected routes
const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports.isLoggedIn = async(req, res, next) => {
    if (!req.cookies.token) {
        req.flash("error","PLEASE LOG IN FIRST")
        return res.redirect('/')
    }
    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user =await userModel.findOne({ email: decoded.email })
            .select("-password")
        req.user = user
        next()
    }catch (err){
        req.flash("error","PLEASE LOG IN FIRST")
        res.redirect('/')
    }
}


