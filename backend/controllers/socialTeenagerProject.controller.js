//Model import
const SocialTeenagerProjects = require("../models/socialTeenagerProject.model");

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /all
exports.all_socialTeenagerProjects = (req, res) => {
    SocialTeenagerProjects.find({})
    .then((socialTeenagerProjects)=>(res.status(200).send(socialTeenagerProjects)))
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