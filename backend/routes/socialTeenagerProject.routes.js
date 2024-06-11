/**
 * @swagger
 * components:
 *   schemas:
 *     SocialChildProject:
 *       type: object
 *       required:
 *         - X
 *         - Y
 *         - OBJECTID
 *         - ID
 *         - TRAEGER
 *         - LEISTUNGEN
 *         - STRASSE
 *         - PLZ
 *         - ORT
 *         - TELEFON
 *       properties:
 *         X:
 *           type: number
 *           description: The X coordinate
 *         Y:
 *           type: number
 *           description: The Y coordinate
 *         OBJECTID:
 *           type: number
 *           description: The object ID
 *         ID:
 *           type: number
 *           description: The ID
 *         TRAEGER:
 *           type: string
 *           description: The carrier/organization of the project
 *         LEISTUNGEN:
 *           type: string
 *           description: The services provided by the project
 *         STRASSE:
 *           type: string
 *           description: The street address of the project
 *         PLZ:
 *           type: string
 *           description: The postal code of the project's location
 *         ORT:
 *           type: string
 *           description: The city where the project is located
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the project
 *         FAX:
 *           type: string
 *           description: The fax number of the project
 *           required: false
 */


const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialTeenagerProjectController = require("../controllers/socialTeenagerProject.controller");

// localhost:3000/api/v1/socialteenagerprojects/all METHOD: GET
/**
 * @swagger
 * /api/v1/socialchildprojects/all:
 *   get:
 *     summary: Retrieve a list of all social child projects
 *     description: Fetch a list of all social child projects from the database.
 *     responses:
 *       200:
 *         description: A list of social child projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialChildProject'
 *       500:
 *         description: Server error
 */
router.get("/all",socialTeenagerProjectController.all_socialTeenagerProjects);

// * Endpoint as * Method error handling
router.get("/*",socialTeenagerProjectController.error);

// All routes export
module.exports = router;