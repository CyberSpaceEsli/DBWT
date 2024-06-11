const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialChildProjectController = require("../controllers/socialChildProject.controller");

// localhost:3000/api/v1/socialchildprojects/all METHOD: GET
/**
 * @swagger
 * /api/v1/socialteenagerprojects/all:
 *   get:
 *     summary: Retrieve a list of all social teenager projects
 *     description: Fetch a list of all social teenager projects from the database.
 *     responses:
 *       200:
 *         description: A list of social teenager projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialTeenagerProject'
 *       500:
 *         description: Server error
 */
router.get("/all",socialChildProjectController.all_socialChildProjects);

// * Endpoint as * Method error handling
router.get("/*",socialChildProjectController.error);

// All routes export
module.exports = router;