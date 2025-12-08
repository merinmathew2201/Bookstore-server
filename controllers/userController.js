const users = require('../model/userModel')
const jwt = require('jsonwebtoken')

// register
exports.registerController =async (req,res)=>{
    console.log("Inside register controller");
    const {username,email,password} = req.body
    // console.log(username,email,password);
    // res.status(200).json("Request Received")

    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(409).json("User already exists!!! Please login...")
        }else{
            const newUser = await users.create({
                username,email,password
            })
            res.status(200).json(newUser)
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}
// login
exports.loginController = async (req,res)=>{
    console.log("Inside loginController");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            if(password == existingUser.password){
                const token = jwt.sign({userMail:existingUser.email,role:existingUser.role},process.env.jwtSecret)
                res.status(200).json({user:existingUser,token})
            }else{
                res.status(401).json("Incorrect email/password!!!")
            }
        }else{
            res.status(404).json("Account Doesnot exists!!!")
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
    
}
// user profile edit
// admin profile edit