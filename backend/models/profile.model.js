const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    //@TODO Profile Schema
    username: {type:"String", required:true},
    password: {type:"String", required:true},
    favoriteFacility: {type:"String"},
    street: {type:"String"},
    city: {type:"String"},
    zip: {type:"Number"},
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema, "profiles");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.