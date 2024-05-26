const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const profileController = require("../controllers/profile.controller");

// localhost:3000/api/v1/schools/all METHOD: GET
//Get all profiles
router.get("/all",schoolController.all_profiles);

//Get profile by email address
router.get("/onEmail",schoolController.on_email_profile);


//Get profile by email address
router.post("/",schoolController.create_profile);

// * Endpoint as * Method error handling
router.get("/*",schoolController.error);

// All routes export
module.exports = router;