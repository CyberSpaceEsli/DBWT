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
 *           example: 12.9378394392195
 *         Y:
 *           type: number
 *           description: The Y coordinate
 *           example: 50.884938413956
 *         OBJECTID:
 *           type: number
 *           description: The object ID
 *           example: 6
 *         ID:
 *           type: number
 *           description: The ID
 *           example: 6
 *         TRAEGER:
 *           type: string
 *           description: The carrier/organization of the kindergarten
 *           example: "Privater Träger"
 *         BEZEICHNUNG:
 *           type: string
 *           description: The name of the kindergarten
 *           example: "Uhdestraße 52a Dschungelkids Kindertagespflege"
 *         KURZBEZEICHNUNG:
 *           type: string
 *           description: The short name of the kindergarten
 *           example: "Uhdestraße 52a Dschungelkids Kindertagespflege"
 *         STRASSE:
 *           type: string
 *           description: The street address of the kindergarten
 *           example: "Uhdestraße"
 *         STRSCHL:
 *           type: number
 *           description: The street code
 *           example: 2400
 *         HAUSBEZ:
 *           type: string
 *           description: The house designation
 *           example: "52a"
 *         PLZ:
 *           type: number
 *           description: The postal code of the kindergarten's location
 *           example: 9114
 *         ORT:
 *           type: string
 *           description: The city where the kindergarten is located
 *           example: "Chemnitz"
 *         URL:
 *           type: string
 *           description: The website of the kindergarten
 *           required: false
 *           example: "https://www.kita-dschungelkids.de/"
 *         HORT:
 *           type: number
 *           description: The HORT indicator
 *           example: 0
 *         KITA:
 *           type: number
 *           description: The KITA indicator
 *           example: 1
 *         TELEFON:
 *           type: string
 *           description: The telephone number of the kindergarten
 *           example: "0176 32366084"
 *         EMAIL:
 *           type: string
 *           description: The email address of the kindergarten
 *           example: "tinadmf@yahoo.de"
 *         BARRIEREFREI:
 *           type: number
 *           description: The barrier-free indicator
 *           example: 0
 *         INTEGRATIV:
 *           type: number
 *           description: The integrative indicator
 *           example: 0
 */


const express = require("express");
const router = express.Router();
const kindergardenController = require("../controllers/kindergarden.controller");

// localhost:3000/api/v1/kindergarden/all METHOD: GET
/**
 * @swagger
 * /api/v1/kindergarden/all:
 *   get:
 *     summary: Retrieve a list of all kindergarden
 *     description: Fetch a list of all kindergarden from the database.
 *     responses:
 *       200:
 *         description: A list of kindergarden
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