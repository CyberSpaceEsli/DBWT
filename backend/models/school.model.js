const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    X:  {type:"Number", required: true},
    Y:  {type:"Number", required: true},
    OBJECTID:  {type:"Number", required: true},
    ID:  {type:"Number", required: true},
    TYP:  {type:"Number", required: true},
    ART:  {type:"String", required: true},
    STANDORTTYP:  {type:"Number", required: true},
    BEZEICHNUNG:  {type:"String", required: true},
    KURZBEZEICHNUNG:  {type:"String", required: true},
    STRASSE: {type:"String", required: true},
    PLZ: {type:"String", required: true},
    ORT: {type:"String", required: true},
    TELEFON: {type:"String", required: true},
    FAX: {type:"String", required: true},
    EMAIL: {type:"String", required: true},
    PROFILE: {type:"String", required: true},
    WWW: {type:"String", required: true},
    TRAEGER: {type:"String", required: true},
    TRAEGERTYP: {type:"Number", required: true},
    BEZUGNR: {type:"String", required: true},
    GEBIETSARTNUMMER: {type:"Number", required: true},
    SNUMMER: {type:"Number", required: true},
    NUMMER: {type:"Number", required: true},
    GlobalID: {type:"String", required: true},
    CreationDate: {type:"String", required: true},
    Creator: {type:"String", required: true},
    EditDate: {type:"String", required: true},
    Editor:  {type:"String", required: true}
});
module.exports = mongoose.model("School", SchoolSchema, "schools");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");