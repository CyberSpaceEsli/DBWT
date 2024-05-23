//Model import
const School = require("../models/school.model");

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /all
exports.all_schools = (req, res) =>{
    School.find({})
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}

// @TODO CRUD Controllers
// Endpoint: /onKind?kind=Grundschule
exports.on_kind_school = (req, res) =>  {
    School.find({ "kind":req.query.ART })
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}

/*

exports.on_id_school = (req, res)=> {
    School.find({ "_id":req.query.id })
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}

exports.on_plz_school = (req, res)=> {
    School.find({ "PLZ":req.query.PLZ })
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}

exports.create_school = (req, res)=> {
    School.create(req.body)
    .then((schools)=>(res.status(200).send(schools)))
    .catch((err)=>(res.status(500).send(err)))
}

*/


// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  