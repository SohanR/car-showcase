const express = require('express')
const router = express.Router()
const adminController = require('./../controller/adminController')
const adminCarController = require('./../controller/adminCarController')
const adminOptionController = require('./../controller/adminOptionController')
const userController = require('./../controller/userController')
const adminStoryController = require('./../controller/adminStroyController')
const middleware = require('./../middleware/middleware');
const multer = require('multer');

//multer configuration
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

router.post('/login' , adminController.login);

router.post('/carupload' , middleware.requireSignIn, middleware.verifyAdmin,upload.array('carImages', 5), adminCarController.carUpload);

router.get('/get-cars', middleware.requireSignIn, middleware.verifyAdmin, adminCarController.getCars);

router.get('/get-car-by-id/:carId', middleware.requireSignIn, middleware.verifyAdmin, adminCarController.getCarById);

router.put('/edit-car/:carId', middleware.requireSignIn, middleware.verifyAdmin ,upload.array('carImages', 5), adminCarController.editCar );

router.delete('/delete-car/:carId', middleware.requireSignIn, middleware.verifyAdmin , adminCarController.deleteCar );

router.post('/car-approve/:carId', middleware.requireSignIn, middleware.verifyAdmin , adminCarController.approved );

router.delete('/car-reject/:carId', middleware.requireSignIn, middleware.verifyAdmin , adminCarController.reject );

router.put('/update-option', middleware.requireSignIn, middleware.verifyAdmin , adminOptionController.update )

router.post('/update-option', middleware.requireSignIn, middleware.verifyAdmin , adminOptionController.createDefault )

router.get('/get-option', middleware.requireSignIn, middleware.verifyAdmin, adminOptionController.getOptions)

router.get('/get-all-user',middleware.requireSignIn, middleware.verifyAdmin, userController.getAllUser)

router.get('/get-user/:userId',middleware.requireSignIn, middleware.verifyAdmin, userController.getSingleUser)

router.put('/update-role/:userId/:role',middleware.requireSignIn, middleware.verifyAdmin, userController.updateRole)

router.post('/upload-banner', middleware.requireSignIn, middleware.verifyAdmin,upload.array('image', 1), adminController.uploadBanner)

router.get('/get-banner', middleware.requireSignIn, middleware.verifyAdmin, adminController.getBanner)

router.delete('/delete-banner/:bannerId', middleware.requireSignIn, middleware.verifyAdmin, adminController.deleteBanner)

router.post('/add-story', middleware.requireSignIn, middleware.verifyAdmin,upload.array('image', 1), adminStoryController.addStory)

router.get('/get-story', middleware.requireSignIn, middleware.verifyAdmin, adminStoryController.getStory)

router.delete('/delete-story/:storyId', middleware.requireSignIn, middleware.verifyAdmin, adminStoryController.deleteStory)



module.exports = router  