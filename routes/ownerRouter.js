const express = require('express')
const route = express.Router()
const ownerModel = require('../models/owenr-model')
const bcrypt=require('bcrypt')

if (process.env.NODE_ENV === "development") {
    route.post('/create', async (req, res) => {
        try{
        let owner = await ownerModel.find()
        if (owner.length != 0) {
            return res.status(500).send('Unauthorised access denied')
        }
        let {fullName,email,password,contact}=req.body
        let hashed = await bcrypt.hash(password,10)
        let createdOwner=await ownerModel.create({
            fullName,
            email,
            password:hashed,
            contact,    
        })
        res.send(createdOwner).status(201)
        }
        catch(err){
            res.send(err).status(500)
        }
    })
}

route.get('/admin', (req, res) => {
    res.render('createproducts')
})
module.exports = route