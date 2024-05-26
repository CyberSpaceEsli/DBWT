const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialChildProjectController = require("../controllers/socialChildProject.controller");

// localhost:3000/api/v1/socialchildprojects/all METHOD: GET
// Get all social child projects
router.get("/all",socialChildProjectController.all_socialChildProjects);

//router.get("/:id",schoolController.on_id_school);

//router.post("/onPLZ",schoolController.on_plz_school);

//@TODO add your other CRUD endpoint and Methods here

// * Endpoint as * Method error handling
router.get("/*",socialChildProjectController.error);

// All routes export
module.exports = router;