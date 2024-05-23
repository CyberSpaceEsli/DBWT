const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const kindergardenController = require("../controllers/kindergarden.controller");

// localhost:5000/api/v1/persons/all METHOD: GET
// Get all kindergarden
router.get("/all",kindergardenController.all_kindergarden);

//router.get("/:id",schoolController.on_id_school);

//router.post("/onPLZ",schoolController.on_plz_school);

//@TODO add your other CRUD endpoint and Methods here

// * Endpoint as * Method error handling
router.get("/*",kindergardenController.error);

// All routes export
module.exports = router;