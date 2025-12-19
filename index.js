// import express,cors,dotenv into this file
// loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/db')

// create express server using express
const bookstoreServer = express()
// enable cors in server
bookstoreServer.use(cors())
// use json parse in server app
bookstoreServer.use(express.json())
// use router in server app
bookstoreServer.use(router)
// to enable static file in server
bookstoreServer.use('/uploads',express.static('./uploads'))
// create port for server app to view in web
const PORT = 3000
// server start to listen port for client request
bookstoreServer.listen(PORT,()=>{
    console.log("Bookstore server started... And watiting for client request");
    
})

bookstoreServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Bookstore server started... And watiting for client request</h1>`)
})