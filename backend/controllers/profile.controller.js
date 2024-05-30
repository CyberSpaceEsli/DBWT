//Model import
const Profile = require("../models/profile.model");

// @TODO CRUD Controllers
// Endpoint: /all
exports.all_profiles = (req, res) =>  {
    Profile.find({})
    .then((profiles)=>(res.status(200).send(profiles)))
    .catch((err)=>(res.status(500).send(err)))
}

// Endpoint: /onid?id=...
exports.on_id = (req, res) =>  {
    Profile.findOne({ "id":req.query._id })
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
 

// Login controller
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

// Logout controller
exports.logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};


// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  