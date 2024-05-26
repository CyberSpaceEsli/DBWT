const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialTeenagerProjectController = require("../controllers/socialTeenagerProject.controller");

// localhost:3000/api/v1/socialteenagerprojects/all METHOD: GET
// Get all social teenager projects
router.get("/all",socialTeenagerProjectController.all_socialTeenagerProjects);

// * Endpoint as * Method error handling
router.get("/*",socialTeenagerProjectController.error);

// All routes export
module.exports = router;