const express = require('express')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// google login
router.post('/google-login',userController.googleLoginController)

// home 
router.get('/home/books',bookController.getHomeBookController)


// --------Authorised user
// add book - request body in formdata,header should has token
router.post('/user/add/book',jwtMiddleware,multerMiddleware.array('uploadImg',3) ,bookController.addBookController)

// all books 
router.get('/all-books',jwtMiddleware,bookController.getUserAllBooksController)

//user profile books 
router.get('/user-books',jwtMiddleware,bookController.getUserProfileBooksController)

//user purshased books 
router.get('/user-books/bought',jwtMiddleware,bookController.getUserPurshaseBooksController)


module.exports = router