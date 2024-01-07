const mongoose = require("mongoose");
require('dotenv').config()

//const connectionString = process.env.MONGO_URI

mongoose
  .connect('mongodb+srv://pilotich:hu2K0kPxpRNAkWFP@cluster0.jbysdhn.mongodb.net/test')
  .then(() => console.log("connected to the DB"))
  .catch((err) => console.log(err));


