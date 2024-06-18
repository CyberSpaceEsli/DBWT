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
 */

const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const socialChildProjectController = require("../controllers/socialChildProject.controller");

// localhost:3000/api/v1/socialchildprojects/all METHOD: GET
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
router.get("/all",socialChildProjectController.all_socialChildProjects);

// * Endpoint as * Method error handling
router.get("/*",socialChildProjectController.error);

// All routes export
module.exports = router;