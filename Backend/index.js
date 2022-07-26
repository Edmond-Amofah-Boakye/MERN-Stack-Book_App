const dotenv = require('dotenv').config()
const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

//requiring all routes
const booksRoute = require("./routes/booksRoute");
const signUpRoute = require("./routes/signupRoute");
const userLogin = require('./routes/login')



app.use('/images', express.static("images"));
app.use(bodyparser.json());

app.use(cors());

//middlewares
app.use(booksRoute);
app.use(signUpRoute);
app.use(userLogin)



mongoose.connect(process.env.DATABASE, () =>
  console.log("successful")
);
app.listen(PORT, () => console.log("server created!!"));
