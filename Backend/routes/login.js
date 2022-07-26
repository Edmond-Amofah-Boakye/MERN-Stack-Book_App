const express = require('express')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Signup = require('../models/signup')

router.post('/user/login', async(req, res)=>{

    try {
        const {email, password} = req.body

        const user = await Signup.findOne({email})

        if(user && (await bycrypt.compare(password, user.password))){

            const token = jwt.sign(
                {_id: user._id}, process.env.SECRET_KEY, {expiresIn: "1h"})

            return res.status(200).json({token, message:"successfuly signed in"})
        }

        return res.status(400).json({message: "invalid credentials"})

    } catch (error) {
        res.status(500).json({error, message: "invalid credentials"})
    }
})




module.exports = router