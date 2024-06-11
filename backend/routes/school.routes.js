/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - X
 *         - Y
 *         - OBJECTID
 *         - ID
 *         - TYP
 *         - ART
 *         - STANDORTTYP
 *         - BEZEICHNUNG
 *         - KURZBEZEICHNUNG
 *         - STRASSE
 *         - PLZ
 *         - ORT
 *         - TELEFON
 *         - FAX
 *         - EMAIL
 *         - PROFILE
 *         - WWW
 *         - TRAEGER
 *         - TRAEGERTYP
 *         - BEZUGNR
 *         - GEBIETSARTNUMMER
 *         - SNUMMER
 *         - NUMMER
 *         - GlobalID
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
 *         TYP:
 *           type: number
 *           description: The type
 *         ART:
 *           type: string
 *           description: The type of the school
 *         STANDORTTYP:
 *           type: number
 *           description: The standort type
 *         BEZEICHNUNG:
 *           type: string
 *           description: The name of the school
 *         KURZBEZEICHNUNG:
 *           type: string
 *           description: The short name of the school
 *         STRASSE:
 *           type: string
 *           description: The street address of the school
 *         PLZ:
 *           type: string
 *           description: The postal code of the school's location
 *         ORT:
 *           type: string
 *           description: The city where the school is located
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the school
 *         FAX:
 *           type: string
 *           description: The fax number of the school
 *         EMAIL:
 *           type: string
 *           description: The email address of the school
 *         PROFILE:
 *           type: string
 *           description: The profile of the school
 *         WWW:
 *           type: string
 *           description: The website of the school
 *         TRAEGER:
 *           type: string
 *           description: The carrier/organization of the school
 *         TRAEGERTYP:
 *           type: number
 *           description: The type of the carrier/organization
 *         BEZUGNR:
 *           type: string
 *           description: The reference number
 *         GEBIETSARTNUMMER:
 *           type: number
 *           description: The area type number
 *         SNUMMER:
 *           type: number
 *           description: The S number
 *         NUMMER:
 *           type: number
 *           description: The number
 *         GlobalID:
 *           type: string
 *           description: The global ID
 */


const express = require("express");
const router = express.Router();
// Controller import, could also be named import
const schoolController = require("../controllers/school.controller");

// localhost:3000/api/v1/schools/all METHOD: GET

/**
 * @swagger
 * /api/v1/schools/all:
 *   get:
 *     summary: Retrieve a list of all schools
 *     description: Fetch a list of all schools from the database.
 *     responses:
 *       200:
 *         description: A list of schools
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/School'
 *       500:
 *         description: Server error
 */
router.get("/all",schoolController.all_schools);

// * Endpoint as * Method error handling
router.get("/*",schoolController.error);

// All routes export
module.exports = router;