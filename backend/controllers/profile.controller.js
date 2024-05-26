//Model import
const Profile = require("../models/profile.model");

// @TODO CRUD Controllers
// Endpoint: /all
exports.all_profiles = (req, res) =>  {
    Profile.find({})
    .then((profiles)=>(res.status(200).send(profiles)))
    .catch((err)=>(res.status(500).send(err)))
}

// Endpoint: /onEmail?email=...
exports.on_email_profile = (req, res) =>  {
    Profile.find({ "email":req.query.EMAIL })
    .then((profiles)=>(res.status(200).send(profiles)))
    .catch((err)=>(res.status(500).send(err)))
}

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /createprofile
/*exports.create_profile = (req, res) =>{
    const {email, pwd}  = req.body

    Profile.create(req.body)
    .then((profile)=>(res.status(200).create({email, pwd})))
    .catch((err)=>(res.status(500).send(err)))
}*/

// Endpoint: /updateprofile
/*exports.update_profile = (req, res) =>{
    const {email, pwd}  = req.body

    Profile.update(req.body)
    .then((profile)=>(res.status(200).update({email, pwd})))
    .catch((err)=>(res.status(500).send(err)))
}*/

// Endpoint: /deleteprofile
/*exports.delete_profile = (req, res) =>{

    Profile.delete({id:'_id'})
    .then((profile)=>(res.status(200).delete()))
    .catch((err)=>(res.status(500).send(err)))
}*/


// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  