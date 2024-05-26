const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialTeenagerProjectSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    type: {type:"String", required: true},
    properties: {
        OBJECTID: {type:"Number", required: true},
        ID: {type:"Number", required: true},
        TRAEGER: {type:"String", required: true},
        LEISTUNGEN: {type:"String", required: true},
        BEZEICHNUNG: {type:"String", required: true},
        KURZBEZEICHNUNG: {type:"String", required: true},
        STRASSE: {type:"String", required: true},
        PLZ: {type:"String", required: true},
        ORT: {type:"String", required: true},
        TELEFON: {type:"String", required: true},
        FAX: {type:"String", required: true},
        EMAIL: {type:"String", required: true}        
    },
    geometry: {
        type: {type: "String", required: true},
        coordinates: {type: "Number", required: true}
    }
});
module.exports = mongoose.model("SocialTeenagerProject", SocialTeenagerProjectSchema, "social_teenager_projects");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.