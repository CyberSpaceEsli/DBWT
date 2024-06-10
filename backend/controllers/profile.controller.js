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

exports.on_id_profile = (req, res) =>  {
    const { id } = req.params

    Profile.findOne({ _id:id })
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
   const { id } = req.params;
   const { username, password } = req.body;

   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ error: 'No such profile' });
   }

   let update = {};

   // Add fields to update object if they are present in the request body
   if (username) update.username = username;
   if (password) update.password = password;

   // Check if there's anything to update
   if (Object.keys(update).length === 0) {
       return res.status(400).json({ error: 'No data to update' });
   }

   // Perform the update
   Profile.findByIdAndUpdate(id, update, { new: true })
       .then(profile => {
           if (!profile) return res.status(404).json({ error: 'Profile not found' });
           res.status(200).json({ id: profile._id, username: profile.username, password: profile.password, message: 'Profile successfully updated' });
       })
       .catch(err => res.status(500).json({ error: err.message }));
};

//get fav facility
exports.get_profile_facility = (req, res) => {
  const { id } = req.params;

  Profile.findById(id)
    .then(profile => {
      if (!profile) return res.status(404).send({ message: 'Profile not found' });
       const favFacility = profile.favFacility.map(facility => ({
        name: facility.name,
        lat: facility.lat,
        lng: facility.lng
      }));
      console.log('Profile:', profile);
      res.status(200).send({id, favFacility});
    })
    .catch(err => res.status(500).send(err));
}

// create fav facility
exports.set_profile_facility = (req, res) => {
    const { id } = req.params;
    const { name, lat, lng } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such profile' });
    }


    Profile.findByIdAndUpdate(id, {favFacility: { name, lat, lng }})
    .then(profile => {
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      const favFacility = profile.favFacility.map(facility => ({
        name: facility.name,
        lat: facility.lat,
        lng: facility.lng
      }));
      res.status(200).json({favFacility, message: 'FavFacility successfully created'});
    })
    .catch(err => res.status(500).json({ error: err.message }));
}

// update fav facility
exports.update_profile_facility = (req, res) => {
    const { id } = req.params;
    const { name, lat, lng } = req.body;

    Profile.findByIdAndUpdate(id, { $set: { favFacility: { name, lat, lng } } })
    .then(profile => {
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      const favFacility = profile.favFacility.map(facility => ({
        name: facility.name,
        lat: facility.lat,
        lng: facility.lng
      }));
      res.status(200).json({favFacility, message: 'FavFacility successfully updated'});
    })
    .catch(err => res.status(500).json({ error: err.message }));

}

// delete fav facility
exports.delete_profile_facility = (req, res) => {
    const { id } = req.params

    Profile.updateOne({ _id:id }, { $unset: { favFacility: { name: '', lat: '', lng: '' } } })
        .then(() => res.status(200).json({id, message: 'FavFacility successfully deleted'}))
        .catch(err => res.status(500).json({ error: err.message }));
};



//Profile Home Address Endpoints
// get home address
exports.get_profile_address = (req, res) => {
    const { id } = req.params

    Profile.findOne({_id:id})
        .select('street city zip')
        .then((address) => res.status(200).json(address))
        .catch(err => res.status(500).json({ error: err.message }));
};

// set home address
exports.set_profile_address = (req, res) => {
    const { id } = req.params
    const { street, city, zip } = req.body

    Profile.findByIdAndUpdate({ _id:id }, {street, city, zip})
        .then(() => res.status(200).json({id, message: 'Homeaddress successfully created'}))
        .catch(err => res.status(500).json({ error: err.message }));
};

// update home address
exports.update_profile_address = (req, res) => {
    const { id } = req.params;
    const { street, city, zip } = req.body;

    Profile.findByIdAndUpdate(id, { $set: { street, city, zip } })
    .then(profile => {
      if (!profile) return res.status(404).json({ error: 'Profile not found' });
      res.status(200).json({street, city, zip, message: 'Homeaddress successfully updated'});
    })
    .catch(err => res.status(500).json({ error: err.message }));
}

// delete home address
exports.delete_profile_address = (req, res) => {
    const { id } = req.params

    Profile.updateOne({ _id:id }, {$unset: { street: "", city: "", zip: "" }})
        .then(() => res.status(200).json({id, message: 'Homeaddress successfully deleted'}))
        .catch(err => res.status(500).json({ error: err.message }));
};


// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("This triggers me")
    res.status(404).send("Error")
  };  