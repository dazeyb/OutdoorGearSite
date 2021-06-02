/** External Modules */
const express = require('express');

//      Commented out until used
// const methodOverride = require("method-override");
// const session = require("express-session");

// MongoStore will be changed
// const MongoStore = require("connect-mongo");




/** Instanced Module */
const app = express();


/** Configuration */
//  DOTENV
require("dotenv").config();

//  PORT
const PORT = process.env.PORT;

// Set to view EJS
app.set("view engine", "ejs");




/** Middleware */

//  Body Data
// app.use(express.urlencoded({ extended: true }));

//  Method Overrride
// app.use(methodOverride("_method"));

//  Public folder - so that it is accessible across files
app.use(express.static(__dirname + "/public"));





/** Routes */

//  Home Route
app.get('/', (req, res) => {
    res.send('Root Page');
});




/** Server Listener */
app.listen(PORT, ()=>{
    console.log("I am listening");
});



