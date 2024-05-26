const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    //@TODO add your required Keys, Datastructures and Schema logic
    EMAIL:{type:"String", required: true},
    PWD:{type:"String", required: true}
});
module.exports = mongoose.model("Profile", ProfileSchema, "profiles");
//module.exports = mongoose.model("People", PersonSchema, "YOUR COLLECTION");
// Third parameter should match to your collection name, for example db.<name>.