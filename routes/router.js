const express = require('express')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// google login
router.post('/google-login',userController.googleLoginController)

// home 
router.get('/home/books',bookController.getHomeBookController)


// --------Authorised user---------
// --------role-user-------

// add book - request body in formdata,header should has token
router.post('/user/add/book',jwtMiddleware,multerMiddleware.array('uploadImg',3) ,bookController.addBookController)

// all user books 
router.get('/all-books',jwtMiddleware,bookController.getUserAllBooksController)

//user profile books 
router.get('/user-books',jwtMiddleware,bookController.getUserProfileBooksController)

//user purshased books 
router.get('/user-books/bought',jwtMiddleware,bookController.getUserPurshaseBooksController)

// user profile update
router.put('/user/:id/edit',jwtMiddleware,multerMiddleware.single('picture') ,userController.userProfileUpdateController)

// view book
router.get('/books/:id/view',jwtMiddleware,bookController.viewBookController)

// delete book
router.delete('/books/:id/',jwtMiddleware,bookController.deleteBookController)

// buy book
router.put('/books/:id/buy',jwtMiddleware,bookController.bookPaymentController)

// --------role-admin-------

// all admin books 
router.get('/books/all',adminMiddleware,bookController.getAllBooksController)

// all users 
router.get('/users/all',adminMiddleware,userController.getAllUsersController)

// update book status
router.put('/books/:id/update',adminMiddleware,bookController.updateBookStatusController)





module.exports = router