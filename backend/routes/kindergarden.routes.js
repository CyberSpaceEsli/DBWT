const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const kindergardenController = require("../controllers/kindergarden.controller");

// localhost:3000/api/v1/kindergarden/all METHOD: GET
// Get all kindergarden
router.get("/all",kindergardenController.all_kindergarden);

// * Endpoint as * Method error handling
router.get("/*",kindergardenController.error);

// All routes export
module.exports = router;