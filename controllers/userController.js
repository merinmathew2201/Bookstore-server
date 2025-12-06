const users = require('../model/userModel')
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
// user profile edit
// admin profile edit