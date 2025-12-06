const mongoose = require('mongoose')


const connectionString = process.env.databaseURL

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB Atlas Database connected successfully"); 
}).catch(error=>{
    console.log("database connection failed");
    console.log(error); 
})