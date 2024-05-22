const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const schoolController = require("../controllers/school.controller");

// localhost:5000/api/v1/persons/all METHOD: GET
//Get all schools
router.get("/all",schoolController.all_schools);

//Get schools by kind
router.get("/onKind",schoolController.on_kind_school);

//router.get("/:id",schoolController.on_id_school);

//router.post("/onPLZ",schoolController.on_plz_school);

//@TODO add your other CRUD endpoint and Methods here

// * Endpoint as * Method error handling
router.get("/*",schoolController.error);

// All routes export
module.exports = router;