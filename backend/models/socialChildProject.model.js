const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialChildProjectSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    X: {type:"Number", required: true},
    Y: {type:"Number", required: true},
    OBJECTID: {type:"Number", required: true},
    ID: {type:"Number", required: true},
    TRAEGER: {type:"String", required: true},
    LEISTUNGEN: {type:"String", required: true},
    STRASSE: {type:"String", required: true},
    PLZ: {type:"String", required: true},
    ORT: {type:"String", required: true},
    TELEFON: {type:"String", required: true},
    FAX: {type:"String", required: false},      
  
});
module.exports = mongoose.model("SocialChildProject", SocialChildProjectSchema, "social_child_projects");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.