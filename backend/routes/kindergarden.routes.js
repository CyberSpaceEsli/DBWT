/**
 * @swagger
 * components:
 *   schemas:
 *     Kindergarden:
 *       type: object
 *       required:
 *         - X
 *         - Y
 *         - OBJECTID
 *         - ID
 *         - TRAEGER
 *         - BEZEICHNUNG
 *         - KURZBEZEICHNUNG
 *         - STRASSE
 *         - STRSCHL
 *         - HAUSBEZ
 *         - PLZ
 *         - ORT
 *         - HORT
 *         - KITA
 *         - TELEFON
 *         - EMAIL
 *         - BARRIEREFREI
 *         - INTEGRATIV
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
 *           description: The carrier/organization of the kindergarten
 *         BEZEICHNUNG:
 *           type: string
 *           description: The name of the kindergarten
 *         KURZBEZEICHNUNG:
 *           type: string
 *           description: The short name of the kindergarten
 *         STRASSE:
 *           type: string
 *           description: The street address of the kindergarten
 *         STRSCHL:
 *           type: string
 *           description: The street code
 *         HAUSBEZ:
 *           type: string
 *           description: The house designation
 *         PLZ:
 *           type: string
 *           description: The postal code of the kindergarten's location
 *         ORT:
 *           type: string
 *           description: The city where the kindergarten is located
 *         URL:
 *           type: string
 *           description: The website of the kindergarten
 *           required: false
 *         HORT:
 *           type: number
 *           description: The HORT indicator
 *         KITA:
 *           type: number
 *           description: The KITA indicator
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the kindergarten
 *         EMAIL:
 *           type: string
 *           description: The email address of the kindergarten
 *         BARRIEREFREI:
 *           type: number
 *           description: The barrier-free indicator
 *         INTEGRATIV:
 *           type: number
 *           description: The integrative indicator
 */


const express = require("express");
const router = express.Router();
const kindergardenController = require("../controllers/kindergarden.controller");

// localhost:3000/api/v1/kindergarden/all METHOD: GET
/**
 * @swagger
 * /api/v1/kindergarden/all:
 *   get:
 *     summary: Retrieve a list of all kindergartens
 *     description: Fetch a list of all kindergartens from the database.
 *     responses:
 *       200:
 *         description: A list of kindergartens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Kindergarden'
 *       500:
 *         description: Server error
 */
router.get("/all",kindergardenController.all_kindergarden);

// * Endpoint as * Method error handling
router.get("/*",kindergardenController.error);

// All routes export
module.exports = router;