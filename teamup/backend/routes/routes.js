const { response } = require('express')
const express = require('express')
const router = express.Router()
const signuptemplate = require('../models/SignUpModals')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const session = require('express-session')


router.post('/signup',  async (req, res)=>{
    let userExists = false;
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
        userExists = true;
        res.json(userExists);
    }
    if(!user) {
        signedUpUser.save()
        .then(data => {
            res.json(userExists)
        })
        .catch(error => {
            res.json(error)
        })
    }
})

router.post('/login',  async (req, res)=>{
    let userExists = false;
    //const saltedPassword = await bcrypt.genSalt(10);
    //const securePassword = await bcrypt.hash(req.body.password, saltedPassword)

    const User = new signuptemplate({
        email:req.body.email,
        password:req.body.password
    })
    //Check if user exists
    const user = await signuptemplate.findOne({ email: User.email });
    if(user) {
        console.log('User exists')
        //
        bcrypt.compare(req.body.password, user.password, function(error, isMatch) {
            if (error) {
                throw error
            } else if (!isMatch) {
                console.log("Password doesn't match!")
                userExists = false;
                res.json(userExists);
            } else {
                //
                //let session;
                //session=req.session;
                //session.user = user;
                req.session.email = user.email;
                console.log(req.session)
                //
                console.log("Password matches!")
                userExists = true;
                res.json(userExists);
            }
          })
        //
    }
    if(!user) {
        console.log('Incorrect Password or Email')
        userExists = false;
        res.json(userExists);
    }
})

module.exports = router;