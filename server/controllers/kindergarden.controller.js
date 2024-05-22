//Model import
const Kindergarden = require("../models/kindergarden.model");

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /all
exports.all_kindergarden = (req, res) => {
    Kindergarden.find({})
    .then((kindergarden)=>(res.status(200).send(kindergarden)))
    .catch((err)=>(res.status(500).send(err)))
}


// @TODO CRUD Controllers
// Endpoint: /onKind?kind=Grundschule
/*
exports.on_kind_school = (req, res) =>  {
    School.find({ "kind":req.query.ART })
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}
*/

// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  