const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KindergardenSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    type: {type:"String", required: true},
    properties: {
        OBJECTID: {type:"Number", required: true},
        ID: {type:"Number", required: true},
        TRAEGER: {type:"String", required: true},
        BEZEICHNUNG: {type:"String", required: true},
        KURZBEZEICHNUNG: {type:"String", required: true},
        STRASSE: {type:"String", required: true},
        STRSCHL: {type:"String", required: true},
        HAUSBEZ: {type:"String", required: true},
        PLZ: {type:"String", required: true},
        ORT: {type:"String", required: true},
        HORT: {type:"Number", required: true},
        KITA: {type:"Number", required: true},
        URL: {type:"String", required: true},
        TELEFON: {type:"String", required: true},
        FAX: {type:"String", required: true},
        EMAIL: {type:"String", required: true},
        BARRIEREFREI: {type:"Number", required: true},
        INTEGRATIV: {type:"Number", required: true}
    },
    geometry: {
        type: {type: "String", required: true},
        coordinates: {type: "Number", required: true}
    }
});
module.exports = mongoose.model("Kindergarden", KindergardenSchema, "kindergarden");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.