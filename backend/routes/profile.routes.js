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
const profileController = require("../controllers/profile.controller");

/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: Operations related to profiles
 */

// Get all profiles
/**
 * @swagger
 * /api/v1/profiles/all:
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
 *             examples:
 *               standard:
 *                 summary: A list of profiles
 *                 value:
 *                   - id: 66661ee3fd89bb57896ab90b
 *                     username: johndoe
 *                     password: hashedpassword123
 *                     favFacility:
 *                       - name: mensa⁵⁵
 *                         lat: 50.81516
 *                         lng: 12.930730380790806
 *                     street: Reichenhainer Str. 70
 *                     city: Chemnitz
 *                     zip: 09126
 *                     lat: 50.8157942
 *                     long: 12.9294896
 *                   - id: 66698998ddffcd831f4c1842
 *                     username: janedoe
 *                     password: hashedpassword456
 *                     favFacility:
 *                       - name: Alte Aktienspinnerei
 *                         lat: 50.84156805
 *                         lng: 12.926978805856704
 *                     street: Straße der Nationen 62
 *                     city: Chemnitz
 *                     zip: 09111
 *                     lat: 50.83904065
 *                     long: 12.92828972456397
 *       '500':
 *         description: Internal server error
 */
router.get("/all", profileController.all_profiles)

// Get profile by id
/**
 * @swagger
 * /api/v1/profiles/{id}:
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
 *             examples:
 *               johndoe:
 *                 summary: An example profile
 *                 value:
 *                   id: 66661ee3fd89bb57896ab90b
 *                   username: johndoe
 *                   password: hashedpassword123
 *                   favFacility:
 *                     - name: mensa⁵⁵
 *                       lat: 50.81516
 *                       lng: 12.930730380790806
 *                   street: Reichenhainer Str. 70
 *                   city: Chemnitz
 *                   zip: 09126
 *                   lat: 50.8157942
 *                   long: 12.9294896
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
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: hashedpassword123
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
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 message:
 *                   type: string
 *             examples:
 *               success:
 *                 summary: Successful response
 *                 value:
 *                   id: 66661ee3fd89bb57896ab90b
 *                   username: johndoe
 *                   password: hashedpassword123
 *                   message: Profile created successfully
 *       '400':
 *         description: Profile already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             examples:
 *               exists:
 *                 summary: Profile already exists
 *                 value:
 *                   message: Profile already exists
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Server error
 *                 value:
 *                   error: Internal server error
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
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: hashedpassword123
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
 *             examples:
 *               success:
 *                 summary: Successful response
 *                 value:
 *                   message: Login successful
 *       '400':
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             examples:
 *               invalidCredentials:
 *                 summary: Invalid credentials response
 *                 value:
 *                   message: Invalid credentials
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Server error response
 *                 value:
 *                   error: Internal server error
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
 *             examples:
 *               Logout:
 *                 summary: Correct Logout process
 *                 value:
 *                   message: Logged out successfully
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
 *               example: johndoe
 *             password:
 *               type: string
 *               example: newpassword123
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
 *             examples:
 *               success:
 *                 summary: Successful update
 *                 value:
 *                   id: 60d0fe4f5311236168a109ca
 *                   username: johndoe
 *                   password: newpassword123
 *                   message: Profile successfully updated
 *       '400':
 *         description: No data to update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               noData:
 *                 summary: No data to update
 *                 value:
 *                   error: No data to update
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               notFound:
 *                 summary: Profile not found
 *                 value:
 *                   error: Profile not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
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
 *             examples:
 *               success:
 *                 summary: Profile deleted successfully
 *                 value:
 *                   id: 60d0fe4f5311236168a109ca
 *                   message: Profile successfully deleted
 *       '404':
 *         description: No such profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               notFound:
 *                 summary: Profile not found
 *                 value:
 *                   error: No such profile
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
 */
router.delete("/:id",profileController.delete_profile);

//Get profile fav facility of profile
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
 *             examples:
 *               example-1:
 *                 summary: Favorite facility of johndoe
 *                 value:
 *                   id: 60d0fe4f5311236168a109ca
 *                   favFacility:
 *                     - name: Mensa⁵⁵
 *                       lat: 50.81516
 *                       lng: 12.930730380790806
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             examples:
 *               notFound:
 *                 summary: Profile not found
 *                 value:
 *                   message: Profile not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
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
 *               example: Mensa⁵⁵
 *             lat:
 *               type: number
 *               example: 50.81516
 *             lng:
 *               type: number
 *               example: 12.930730380790806
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
 *             examples:
 *               example-1:
 *                 summary: Favorite facility created for johndoe
 *                 value:
 *                   favFacility:
 *                     - name: Mensa⁵⁵
 *                       lat: 50.81516
 *                       lng: 12.930730380790806
 *                   message: Favorite facility created successfully
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               notFound:
 *                 summary: Profile not found
 *                 value:
 *                   error: Profile not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
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
 *               example: Alte Aktienspinnerei
 *             lat:
 *               type: number
 *               example: 50.84156805
 *             lng:
 *               type: number
 *               example: 12.926978805856704
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
 *             examples:
 *               example-1:
 *                 summary: Favorite facility updated for johndoe
 *                 value:
 *                   favFacility:
 *                     - name: Alte Aktienspinnerei
 *                       lat: 50.84156805
 *                       lng: 12.926978805856704
 *                   message: Favorite facility updated successfully
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               notFound:
 *                 summary: Profile not found
 *                 value:
 *                   error: Profile not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
 */
router.put("/:id/favfacility",profileController.update_profile_facility);

// Delete fav facility of profile
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
 *             examples:
 *               example-1:
 *                 summary: Favorite facility deleted for johndoe
 *                 value:
 *                   id: 66661ee3fd89bb57896ab90b
 *                   message: Favorite facility deleted successfully
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
 */
router.delete("/:id/favfacility",profileController.delete_profile_facility);

//Get profile home address
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
 *             examples:
 *               example-1:
 *                 summary: Home address of johndoe
 *                 value:
 *                   street: Reichenhainer Str. 70
 *                   city: Chemnitz
 *                   zip: 09126
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               serverError:
 *                 summary: Internal server error
 *                 value:
 *                   error: Internal server error
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
 *           example:
 *             street: Reichenhainer Str. 70
 *             city: Chemnitz
 *             zip: 09126
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
 *             example:
 *               id: 66661ee3fd89bb57896ab90b
 *               message: Successfully added home address
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Could not set home address
 */
router.post("/:id/homeaddress",profileController.set_profile_address);

//Update profile home address
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
 *           example:
 *             street: Straße der Nationen 62
 *             city: Chemnitz
 *             zip: 09111
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
 *             example:
 *               street: Straße der Nationen 62
 *               city: Chemnitz
 *               zip: 09111
 *               message: Home address updated successfully
 *       '404':
 *         description: Profile not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Profile not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal server error
 */
router.put("/:id/homeaddress/",profileController.update_profile_address);

//Delete profile home address
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
 *             example:
 *               id: 66661ee3fd89bb57896ab90b
 *               message: Home address deleted successfully
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal server error
 */
router.delete("/:id/homeaddress",profileController.delete_profile_address);

// * Endpoint as * Method error handling
router.get("/*",profileController.error);

// All routes export
module.exports = router;