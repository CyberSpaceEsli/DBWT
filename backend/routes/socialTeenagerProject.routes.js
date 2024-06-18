/**
 * @swagger
 * components:
 *   schemas:
 *     SocialTeenagerProject:
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
 *         - FAX
 *       properties:
 *         X:
 *           type: number
 *           description: The X coordinate
 *           example: 12.8928433256839
 *         Y:
 *           type: number
 *           description: The Y coordinate
 *           example: 50.8030042437469
 *         OBJECTID:
 *           type: number
 *           description: The object ID
 *           example: 19
 *         ID:
 *           type: number
 *           description: The ID
 *           example: 19
 *         TRAEGER:
 *           type: string
 *           description: The carrier/organization of the project
 *           example: "solaris Förderzentrum für Jugend & Umwelt gGmbH Sachsen" 
 *         LEISTUNGEN:
 *           type: string
 *           description: The services provided by the project
 *           example: "Schulsozialarbeit"
 *         STRASSE:
 *           type: string
 *           description: The street address of the project
 *           example: "Scheffelstraße 18"
 *         PLZ:
 *           type: number
 *           description: The postal code of the project's location
 *           example: 9120
 *         ORT:
 *           type: string
 *           description: The city where the project is located
 *           example: "Chemnitz"
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the project
 *           example: "0371 2815717"
 *         FAX:
 *           type: string
 *           description: The fax number of the project
 *           required: false
 *           example: "0371 3824315"
 */


const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialTeenagerProjectController = require("../controllers/socialTeenagerProject.controller");

// localhost:3000/api/v1/socialteenagerprojects/all METHOD: GET
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
router.get("/all",socialTeenagerProjectController.all_socialTeenagerProjects);

// * Endpoint as * Method error handling
router.get("/*",socialTeenagerProjectController.error);

// All routes export
module.exports = router;