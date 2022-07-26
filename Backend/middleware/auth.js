const jwt = require('jsonwebtoken')
require('dotenv').config()
const userSignUp = require('../models/signup')

const auth = async(req, res, next)=>{

    //Get Headers
    const authHeader = req.headers["authorization"]; // re.headers.authorization

    //Check if there is a header
    if(authHeader){
        //Get token from header
        const token = authHeader.split(" ")[1];
        try {
            //Verify token
            const decode = jwt.verify(token, process.env.SECRET_KEY)

            //Find token in the database and ssign to req.user
            req.userId = await userSignUp.findById(decode._id).select('-password')
 
            //call next middleware
            next()

        } catch (error) {
            
            res.status(401).json({error, message:'not authorized'})
        }
    }else{
        res.status(401).json('not authorized')
    }
   
}

module.exports = auth;