const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const schoolController = require("../controllers/school.controller");

// localhost:3000/api/v1/schools/all METHOD: GET
//Get all schools
router.get("/all",schoolController.all_schools);

// * Endpoint as * Method error handling
router.get("/*",schoolController.error);

// All routes export
module.exports = router;