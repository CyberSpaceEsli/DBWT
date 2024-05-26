//Model import
const School = require("../models/school.model");

// Request for all Persons in respons, no requestParam or Body needed
// Endpoint: /all
exports.all_schools = async (req, res) =>{
       try {
    // Fetch data from MongoDB
    const schools = await School.find({});

    if (!schools || schools.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    // Log the entire data fetched from MongoDB
    console.log("Data from MongoDB:", schools);

    // Return the extracted 'features' array
    res.json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



// Missleading endpoint handling
exports.error = (req, res) => {
    console.log("here")
    res.status(404).send("Error")
  };  