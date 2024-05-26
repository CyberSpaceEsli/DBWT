const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes import
const school = require("./routes/school.routes");
const kindergarden = require("./routes/kindergarden.routes");
const socialChildProjects = require("./routes/socialChildProject.routes");
const socialTeenagerProjects = require("./routes/socialTeenagerProject.routes");


const app = express();

//@TODO create your own Port number here, i.e.:
const port = process.env.PORT;
// @TODO add your own dotenv or hard-coded connection string here
const mongoDbUrl = process.env.MONG_URI;

mongoose.connect(mongoDbUrl)
    .then(()=>(console.log("MongoDB connected ... ")))
    .catch(err=>console.log(err))

//middleware 
app.use((req, res, next) => {
    console.log(req.path, req.method, res.statusCode)
    next()
} )

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// @TODO create your own base URL for your API here, i.e.:
app.use("/api/v1/schools", school);
app.use("/api/v1/kindergarden", kindergarden);
app.use("/api/v1/socialchildprojects", socialChildProjects);
app.use("/api/v1/socialteenagerprojects", socialTeenagerProjects);

app.listen(port, ()=>{
    console.log("Server is running on localhost:", port , " !")
})