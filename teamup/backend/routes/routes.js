const { response } = require('express')
const express = require('express')
const router = express.Router()
const signuptemplate = require('../models/SignUpModals')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

router.post('/signup', async (req, res)=>{
    let err = '';
    const saltedPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltedPassword)

    const signedUpUser = new signuptemplate({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:securePassword
    })
    //Check if user exists
    const user = await signuptemplate.findOne({ email: signedUpUser.email });
    if(user) {
        console.log('User exists')
        err = "User exists"
        res.json(err);
    }
    if(!user) {
        signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
    }
})

module.exports = router;