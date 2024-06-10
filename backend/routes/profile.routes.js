const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const profileController = require("../controllers/profile.controller");

// localhost:3000/api/v1/schools/all METHOD: GET
router.get("/all", profileController.all_profiles)

router.get("/:id", profileController.on_id_profile)

//SignUp Profile
router.post("/signup",profileController.signup);

//LogIn Profile
router.post("/login",profileController.login);

//LogOut Profile
router.post("/logout",profileController.logout);

//Delete profile
router.delete("/:id",profileController.delete_profile);

//Update profile 
router.put("/:id",profileController.update_profile);

//Get profile fav facility
router.get("/:id/favfacility",profileController.get_profile_facility);

//Set profile fav facility
router.post("/:id/favfacility",profileController.set_profile_facility);

//Update profile fav facility
router.put("/:id/favfacility",profileController.update_profile_facility);

//Delete profile fav facility
router.delete("/:id/favfacility",profileController.delete_profile_facility);

//Get profile adress
router.get("/:id/homeaddress",profileController.get_profile_address);

//Set profile adress
router.post("/:id/homeaddress",profileController.set_profile_address);

//Update profile adress
router.put("/:id/homeaddress/",profileController.update_profile_address);

//Delete profile adress
router.delete("/:id/homeaddress",profileController.delete_profile_address);

// * Endpoint as * Method error handling
router.get("/*",profileController.error);

// All routes export
module.exports = router;