const express = require("express");
const router = express.Router();
const publicController = require("./../controller/publicController");

router.get("/get-cars", publicController.getCars);

router.get("/get-cars/recondition", publicController.getReconditionCars);

router.get("/get-cars/new", publicController.getNewCars);

router.get("/get-cars/used", publicController.getUsedCars);

router.get("/get-cars/:brand", publicController.getCarByBrands);

router.get("/get-car-by-id/:carId", publicController.getCarById);

router.get("/get-banner", publicController.getBanner);

router.get("/get-story", publicController.getStory);

router.get("/car-search", publicController.searchResults);

router.get("/car-minisearch", publicController.miniSearchResults);

router.get("/car-by-brand/:brand", publicController.getCarByBrands);

module.exports = router;
