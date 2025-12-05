// register
exports.registerController = (req,res)=>{
    console.log("Inside register controller");
    const {username,email,password} = req.body
    console.log(username,email,password);
    
    res.status(200).json("Request Received")
    
}
// login
// user profile edit
// admin profile edit