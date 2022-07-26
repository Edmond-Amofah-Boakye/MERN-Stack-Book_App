const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const SignUp = require('../models/signup')

router.post('/api/signup', async(req, res)=>{
    try {

        const {fullname, username, email, password} = req.body
        
        const user = await SignUp.findOne({email})

        if(user){
            return res.status(400).json({message: 'user email already exist'})
        }
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const userSignUp = new SignUp({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        await userSignUp.save()

        if(!userSignUp){
            return res.status(401).json("could not send")
        }
        res.status(200).json({userSignUp, message: "succesfully signed in"})
        
    } catch (error) {
        console.log(error);
    }
})




module.exports = router