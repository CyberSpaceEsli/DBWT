const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Routes import
//const person = require("./routes/person.routes");
//require("dotenv").config();

const app = express();
//@TODO create your own Port number here, i.e.:
const port = 3000;
// @TODO add your own dotenv or hard-coded connection string here
//const mongoDbUrl = process.env.CONN_STRING;
//const mongoDbUrl = "mongodb://127.0.0.1:27017/DBWT";
// If you have MongoDB Cluster(Cloud), get your Connection String

/*mongoose.connect(mongoDbUrl)
    .then(()=>(console.log("MongoDB connected ... ")))
    .catch(err=>console.log(err))    */


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// @TODO create your own base URL for your API here, i.e.:
/*app.use("/api/v1/persons", person)
app.use("/api/v1/persons/all", person)
app.use("/api/v1/persons/onEmail", person)
app.use("/api/v1/persons/:id", person)
app.use("/api/v1/persons/create", person) */

app.listen(port, ()=>{
    console.log("Server is running on localhost:", port , " !")
})