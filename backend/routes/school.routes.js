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
 *           example: 12.8840422701945
 *         Y:
 *           type: number
 *           description: The Y coordinate
 *           example: 50.8325546104525
 *         OBJECTID:
 *           type: number
 *           description: The object ID
 *           example: 12
 *         ID:
 *           type: number
 *           description: The ID
 *           example: 13
 *         TYP:
 *           type: number
 *           description: The type
 *           example: 10
 *         ART:
 *           type: string
 *           description: The type of the school
 *           example: "Grundschule"
 *         STANDORTTYP:
 *           type: number
 *           description: The standort type
 *           example: 1
 *         BEZEICHNUNG:
 *           type: string
 *           description: The name of the school
 *           example: "Grundschule Altendorf"
 *         KURZBEZEICHNUNG:
 *           type: string
 *           description: The short name of the school
 *           example: "GS Altendorf"
 *         STRASSE:
 *           type: string
 *           description: The street address of the school
 *           example: "Ernst-Heilmann-Straße 11"
 *         PLZ:
 *           type: number
 *           description: The postal code of the school's location
 *           example: 9116
 *         ORT:
 *           type: string
 *           description: The city where the school is located
 *           example: "Chemnitz"
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the school
 *           example: "0371 36914 16"
 *         FAX:
 *           type: string
 *           description: The fax number of the school
 *           example: "0371 3691422"
 *         EMAIL:
 *           type: string
 *           description: The email address of the school
 *           example: "gs-altendorf@schulen-chemnitz.de"
 *         PROFILE:
 *           type: string
 *           description: The profile of the school
 *           example: "Hort"
 *         WWW:
 *           type: string
 *           description: The website of the school
 *           example: "http://lily84.lima-city.de"
 *         TRAEGER:
 *           type: string
 *           description: The carrier/organization of the school
 *           example: "Kommunal"
 *         TRAEGERTYP:
 *           type: number
 *           description: The type of the carrier/organization
 *           example: 10
 *         BEZUGNR:
 *           type: string
 *           description: The reference number
 *           example: 13
 *         GEBIETSARTNUMMER:
 *           type: number
 *           description: The area type number
 *           example: 40
 *         SNUMMER:
 *           type: number
 *           description: The S number
 *           example: 117
 *         NUMMER:
 *           type: number
 *           description: The number
 *           example: 202
 *         GlobalID:
 *           type: id
 *           description: The global ID
 *           example: UUID('657d048a-9c2d-455b-9717-22e86582cf52')
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