const BannerModel = require("../models/Banner");
const CarModel = require("../models/Cars");
const StoryModel = require("./../models/Story");

exports.getCars = async (req, res) => {
  try {
    let allCars = await CarModel.find({ status: "approved" }).exec();

    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get car" });
  }
};

exports.getReconditionCars = async (req, res) => {
  try {
    let allCars = await CarModel.find({
      status: "approved",
      "carDetails.condition": "recondition",
    }).exec();

    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get car" });
  }
};

exports.getNewCars = async (req, res) => {
  try {
    let allCars = await CarModel.find({
      status: "approved",
      "carDetails.condition": "new",
    }).exec();

    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get car" });
  }
};

exports.getUsedCars = async (req, res) => {
  try {
    let allCars = await CarModel.find({
      status: "approved",
      "carDetails.condition": "used",
    }).exec();

    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get car" });
  }
};

exports.getCarByBrands = async (req, res) => {
  try {
    const { brand } = req.params;

    console.log("params", req.params);

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    console.log("capital", capitalizeFirstLetter(brand));

    const make = capitalizeFirstLetter(brand);

    let allCars = await CarModel.find({
      status: "approved",
      "carDetails.make": make,
    }).exec();

    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get car" });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const { carId } = req.params;

    const car = await CarModel.findById(carId)
      .populate({
        path: "sellerInfo",
        select: "-password -role",
      })
      .exec();

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({ car: car });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Error Fetch car result" });
  }
};

exports.getBanner = async (req, res) => {
  try {
    let allBanner = await BannerModel.find({}).exec();

    res.status(200).json(allBanner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get images" });
  }
};

exports.searchResults = async (req, res) => {
  try {
    const {
      make,
      model,
      modelCode,
      enginType,
      loadingCapacity,
      cc,
      exteriorColor,
      driveType,
      transmission,
      condition,
      year,
      mileage,
      fuelType,
      engineSize,
      door,
      cylinder,
      airLock,
      powerSteering,
      ac,
      navigation,
      antiLockBrakes,
      leatherSeats,
      tv,
      fogLight,
      alloyWheels,
      grillGuard,
      powerWindow,
      roofRails,
      dualAirBag,
      sunRoof,
      rearSpoiler,
      blackTire,
      keylessEntry,
      centralLocking,
      cd,
      abs,
      acFront,
      acRear,
    } = req.query;

    console.log("body", req.body);

    const searchCriteria = {
      status: "approved", // Include only approved cars
    };

    if (make !== "") {
      searchCriteria["carDetails.make"] = make;
    }

    if (model !== "") {
      searchCriteria["carDetails.model"] = model;
    }

    if (modelCode !== "") {
      searchCriteria["carDetails.modelCode"] = modelCode;
    }

    if (enginType !== "") {
      searchCriteria["carDetails.enginType"] = enginType;
    }

    if (loadingCapacity !== "") {
      searchCriteria["carDetails.loadingCapacity"] = loadingCapacity;
    }

    if (cc !== "") {
      searchCriteria["carDetails.cc"] = cc;
    }

    if (exteriorColor !== "") {
      searchCriteria["carDetails.exteriorColor"] = exteriorColor;
    }

    if (driveType !== "") {
      searchCriteria["carDetails.driveType"] = driveType;
    }

    if (transmission !== "") {
      searchCriteria["carDetails.transmission"] = transmission;
    }

    if (condition !== "") {
      searchCriteria["carDetails.condition"] = condition;
    }

    if (year !== "") {
      searchCriteria["carDetails.year"] = year;
    }

    if (mileage !== "") {
      searchCriteria["carDetails.mileage"] = mileage;
    }

    if (fuelType !== "") {
      searchCriteria["carDetails.fuelType"] = fuelType;
    }

    if (engineSize !== "") {
      searchCriteria["carDetails.engineSize"] = engineSize;
    }

    if (door !== "") {
      searchCriteria["carDetails.door"] = door;
    }

    if (cylinder !== "") {
      searchCriteria["carDetails.cylinder"] = cylinder;
    }

    if (airLock === "true") {
      searchCriteria["addOn.airLock"] = true;
    }

    // Check if the query parameter is 'true' and set the respective boolean value
    if (powerSteering === "true") {
      searchCriteria["addOn.powerSteering"] = true;
    }

    if (ac === "true") {
      searchCriteria["addOn.ac"] = true;
    }

    if (navigation === "true") {
      searchCriteria["addOn.navigation"] = true;
    }

    if (antiLockBrakes === "true") {
      searchCriteria["addOn.antiLockBrakes"] = true;
    }

    if (leatherSeats === "true") {
      searchCriteria["addOn.leatherSeats"] = true;
    }

    if (tv === "true") {
      searchCriteria["addOn.tv"] = true;
    }

    if (fogLight === "true") {
      searchCriteria["addOn.fogLight"] = true;
    }

    if (alloyWheels === "true") {
      searchCriteria["addOn.alloyWheels"] = true;
    }

    if (grillGuard === "true") {
      searchCriteria["addOn.grillGuard"] = true;
    }

    if (powerWindow === "true") {
      searchCriteria["addOn.powerWindow"] = true;
    }

    if (roofRails === "true") {
      searchCriteria["addOn.roofRails"] = true;
    }

    if (dualAirBag === "true") {
      searchCriteria["addOn.dualAirBag"] = true;
    }

    if (sunRoof === "true") {
      searchCriteria["addOn.sunRoof"] = true;
    }

    if (rearSpoiler === "true") {
      searchCriteria["addOn.rearSpoiler"] = true;
    }

    if (blackTire === "true") {
      searchCriteria["addOn.blackTire"] = true;
    }

    if (keylessEntry === "true") {
      searchCriteria["addOn.keylessEntry"] = true;
    }

    if (centralLocking === "true") {
      searchCriteria["addOn.centralLocking"] = true;
    }

    if (cd === "true") {
      searchCriteria["addOn.cd"] = true;
    }

    if (abs === "true") {
      searchCriteria["addOn.abs"] = true;
    }

    if (acFront === "true") {
      searchCriteria["addOn.acFront"] = true;
    }

    if (acRear === "true") {
      searchCriteria["addOn.acRear"] = true;
    }

    console.log("searchCriteria: ", searchCriteria);

    const searchResult = await CarModel.find(searchCriteria);

    console.log("result -->", searchResult);

    res.status(200).json({ cars: searchResult });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "error searching car" });
  }
};

exports.getStory = async (req, res) => {
  try {
    let allStory = await StoryModel.find({}).exec();

    res.status(200).json(allStory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get story" });
  }
};

// mini search

exports.miniSearchResults = async (req, res) => {
  try {
    const { make, model } = req.query;

    console.log("body", req.body);

    const searchCriteria = {
      status: "approved", // Include only approved cars
    };

    if (make !== "") {
      searchCriteria["carDetails.make"] = make;
    }

    if (model !== "") {
      searchCriteria["carDetails.model"] = model;
    }

    console.log("searchCriteria: ", searchCriteria);

    const searchResult = await CarModel.find(searchCriteria);

    console.log("result -->", searchResult);

    res.status(200).json({ cars: searchResult });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "error searching car" });
  }
};
