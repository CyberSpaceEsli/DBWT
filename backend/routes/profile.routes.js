const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const profileController = require("../controllers/profile.controller");

// localhost:3000/api/v1/schools/all METHOD: GET
router.get("/all", profileController.all_profiles)

//SignUp Profile
router.post("/signup",profileController.signup);

//LogIn Profile
router.post("/login",profileController.login);

//LogOut Profile
router.post("/logout",profileController.logout);

//Delete profile
router.delete("/:id",profileController.delete_profile);

//Update profile 
router.patch("/:id",profileController.update_profile);

// * Endpoint as * Method error handling
router.get("/*",profileController.error);

// All routes export
module.exports = router;