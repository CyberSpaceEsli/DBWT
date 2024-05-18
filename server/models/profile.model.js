const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    Benutzername:{type:"String", required: true},
    Passwort:{type:"String", required: true},
    Email:{type:"String", required: true},
    Lieblingsfakultaet:{type:"String", required: true},
    Strasse:{type:"String", required: true},
    PLZ:{type:"Number", required: true},
    Ort:{type:"String", required: true},
});
module.exports = mongoose.model("Profile", ProfileSchema, "profiles");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.