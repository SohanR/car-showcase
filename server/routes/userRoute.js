const express = require('express');
const router = express.Router()
const userController = require('./../controller/userController')
const userCarController = require('./../controller/userCarController')
const middleware = require('./../middleware/middleware');
const multer = require('multer');

//multer configuration
const storage = multer.memoryStorage();
const upload = multer({storage:storage});



router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/carupload' , middleware.requireSignIn, upload.array('carImages', 3), userCarController.carUpload);

router.get('/mycars' , middleware.requireSignIn, userCarController.myCars);



module.exports = router