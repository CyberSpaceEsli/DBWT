//Model import
const Kindergarden = require("../models/kindergarden.model");

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /all
exports.all_kindergarden = (req, res) => {
    Kindergarden.find({})
    .then((kindergarden)=>(res.status(200).send(kindergarden)))
    .catch((err)=>(res.status(500).send(err)))
}

// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  