//Model import
const { default: mongoose } = require("mongoose");
const Profile = require("../models/profile.model");

// @TODO CRUD Controllers
// Endpoint: /all
exports.all_profiles = (req, res) =>  {
    Profile.find({})
    .then((profiles)=>(res.status(200).send(profiles)))
    .catch((err)=>(res.status(500).send(err)))
}

// Handling user signup
exports.signup =  (req, res) => {
    Profile.findOne({ username: req.body.username })
        .then(existingProfile => {
            if (existingProfile) {
                return res.status(400).json({ message: 'Profile already exists' });
            }})
        
    Profile.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.status(200).json({message: 'Profile created successfully'}))
    .catch(err => res.status(500).json({ error: err.message }));
  };
 

// Login controller profile/login
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    Profile.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Check if the password matches
            if (user.password !== password) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            res.status(200).json({ message: 'Login successful' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

// Logout controller profile/logout
exports.logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};


// Delete controller profile/:id
exports.delete_profile = async (req, res) => {
    const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such profile'})
     }

    Profile.findOneAndDelete({ _id:id })
    .then(() => res.status(200).json({id, message: 'Profile successfully deleted'}))
    .catch(err => res.status(500).json({ error: err.message }));

};

// Update controller profile/:id
exports.update_profile = (req, res) => {
   const { id } = req.params


     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such profile'})
     }

   Profile.findOneAndUpdate({ _id:id }, {
      ...req.body
   })
    .then(() => res.status(200).json({id, message: 'Profile successfully updated'}))
    .catch(err => res.status(500).json({ error: err.message }));

};

// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("This triggers me")
    res.status(404).send("Error")
  };  