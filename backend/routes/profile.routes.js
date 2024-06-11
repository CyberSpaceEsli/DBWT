/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the profile
 *         password:
 *           type: string
 *           description: The password of the profile
 *         favFacility:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Facility'
 *           description: List of favorite facilities
 *         street:
 *           type: string
 *           description: The street address
 *         city:
 *           type: string
 *           description: The city
 *         zip:
 *           type: string
 *           description: The postal code
 *         lat:
 *           type: number
 *           description: The latitude coordinate
 *         long:
 *           type: number
 *           description: The longitude coordinate
 *
 *     Facility:
 *       type: object
 *       required:
 *         - name
 *         - lat
 *         - lng
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the facility
 *         lat:
 *           type: number
 *           description: The latitude coordinate of the facility
 *         lng:
 *           type: number
 *           description: The longitude coordinate of the facility
 */


const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const profileController = require("../controllers/profile.controller");

/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: Operations related to profiles
 */


/**
 * @swagger
 * /api/v1/profile/all:
 *   get:
 *     summary: Retrieve all profiles
 *     tags: [Profiles]
 *     responses:
 *       '200':
 *         description: A list of profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *       '500':
 *         description: Internal server error
 */
router.get("/all", profileController.all_profiles)


/**
 * @swagger
 * /api/v1/profile/{id}:
 *   get:
 *     summary: Retrieve a profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the profile to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single profile object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       '404':
 *         description: Profile not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", profileController.on_id_profile)

//SignUp Profile
/**
 * @swagger
 * /api/v1/profiles/signup:
 *   post:
 *     summary: Sign up a profile
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       '200':
 *         description: Profile created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Profile already exists
 *       '500':
 *         description: Internal server error
 */
router.post("/signup",profileController.signup);

//LogIn Profile
/**
 * @swagger
 * /api/v1/profiles/login:
 *   post:
 *     summary: Log in with username and password
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       '200':
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Invalid credentials
 *       '500':
 *         description: Internal server error
 */
router.post("/login",profileController.login);

//LogOut Profile
/**
 * @swagger
 * /api/v1/profiles/logout:
 *   post:
 *     summary: Log out a profile
 *     tags: [Profiles]
 *     responses:
 *       '200':
 *         description: Logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/logout",profileController.logout);

//Update profile 
/**
 * @swagger
 * /api/v1/profiles/{id}:
 *   put:
 *     summary: Update a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: profile
 *         required: true
 *         description: The updated profile data
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: Profile successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 message:
 *                   type: string
 *       '400':
 *         description: No data to update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put("/:id",profileController.update_profile);

//Delete profile
/**
 * @swagger
 * /api/v1/profiles/{id}:
 *   delete:
 *     summary: Delete a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Profile successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       '404':
 *         description: No such profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete("/:id",profileController.delete_profile);

//Get profile fav facility
/**
 * @swagger
 * /api/v1/profiles/{id}/favfacility:
 *   get:
 *     summary: Get favorite facilities of a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Favorite facilities retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 favFacility:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       lat:
 *                         type: number
 *                       lng:
 *                         type: number
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/:id/favfacility",profileController.get_profile_facility);

//Set profile fav facility
/**
 * @swagger
 * /api/v1/profiles/{id}/favfacility:
 *   post:
 *     summary: Create a favorite facility for a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *       - in: body
 *         name: favFacility
 *         description: The favorite facility data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lat:
 *               type: number
 *             lng:
 *               type: number
 *     responses:
 *       '200':
 *         description: Favorite facility created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 favFacility:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       lat:
 *                         type: number
 *                       lng:
 *                         type: number
 *                 message:
 *                   type: string
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/:id/favfacility",profileController.set_profile_facility);

//Update profile fav facility
/**
 * @swagger
 * /api/v1/profiles/{id}/favfacility:
 *   put:
 *     summary: Update the favorite facility for a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *       - in: body
 *         name: favFacility
 *         description: The updated favorite facility data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lat:
 *               type: number
 *             lng:
 *               type: number
 *     responses:
 *       '200':
 *         description: Favorite facility updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 favFacility:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       lat:
 *                         type: number
 *                       lng:
 *                         type: number
 *                 message:
 *                   type: string
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put("/:id/favfacility",profileController.update_profile_facility);

//Delete profile fav facility
/**
 * @swagger
 * /api/v1/profiles/{id}/favfacility:
 *   delete:
 *     summary: Delete the favorite facility for a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Favorite facility deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete("/:id/favfacility",profileController.delete_profile_facility);

//Get profile adress
/**
 * @swagger
 * /api/v1/profiles/{id}/homeaddress:
 *   get:
 *     summary: Get the home address of a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Home address retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 street:
 *                   type: string
 *                 city:
 *                   type: string
 *                 zip:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/:id/homeaddress",profileController.get_profile_address);

//Set profile home address
/**
 * @swagger
 * /api/v1/profiles/{id}/homeaddress:
 *   post:
 *     summary: Set the home address of a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               zip:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Home address set successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/:id/homeaddress",profileController.set_profile_address);

//Update profile adress
/**
 * @swagger
 * /api/v1/profiles/{id}/homeaddress:
 *   put:
 *     summary: Update the home address of a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               zip:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Home address updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 street:
 *                   type: string
 *                 city:
 *                   type: string
 *                 zip:
 *                   type: string
 *                 message:
 *                   type: string
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put("/:id/homeaddress/",profileController.update_profile_address);

//Delete profile adress
/**
 * @swagger
 * /api/v1/profiles/{id}/homeaddress:
 *   delete:
 *     summary: Delete the home address of a profile
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Home address deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete("/:id/homeaddress",profileController.delete_profile_address);

// * Endpoint as * Method error handling
router.get("/*",profileController.error);

// All routes export
module.exports = router;