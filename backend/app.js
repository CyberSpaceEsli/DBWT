const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser") 
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Routes import
const school = require("./routes/school.routes");
const kindergarden = require("./routes/kindergarden.routes");
const socialChildProjects = require("./routes/socialChildProject.routes");
const socialTeenagerProjects = require("./routes/socialTeenagerProject.routes");
const profileRoutes = require("./routes/profile.routes");


const app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation: DBWT',
    version: '1.0.0',
    description: 'This is the API Documentation of an application made with express as part of a university project for the Databases & Web Technologies module.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js', './models/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpacs = swaggerJsdoc(options);

const corsOption = {
    origin: "http://localhost:5173"
}

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


// Use swagger-ui-express for your app's documentation endpoint
app.use('/apidoku', swaggerUi.serve, swaggerUi.setup(swaggerSpacs));


// Allow requests from the frontend
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// @TODO create your own base URL for your API here, i.e.:
app.use("/api/v1/schools", school);
app.use("/api/v1/kindergarden", kindergarden);
app.use("/api/v1/socialchildprojects", socialChildProjects);
app.use("/api/v1/socialteenagerprojects", socialTeenagerProjects);
app.use("/api/v1/profiles", profileRoutes);

app.listen(port, ()=>{
    console.log("Server is running on localhost:", port , " !")
})