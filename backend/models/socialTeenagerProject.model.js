const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialTeenagerProjectSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    x: {type:"Number", required: true},
    Y: {type:"Number", required: true},
    OBJECTID: {type:"Number", required: true},
    ID: {type:"Number", required: true},
    TRAEGER: {type:"String", required: true},
    LEISTUNGEN: {type:"String", required: true},
    KURZBEZEICHNUNG: {type:"String", required: true},
    STRASSE: {type:"String", required: true},
    PLZ: {type:"String", required: true},
    ORT: {type:"String", required: true},
    TELEFON: {type:"String", required: true},
    FAX: {type:"String", required: true}      
    
});
module.exports = mongoose.model("SocialTeenagerProject", SocialTeenagerProjectSchema, "social_teenager_projects");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.