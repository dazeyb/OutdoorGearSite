/** External Modules */


    const express = require('express');

    const methodOverride = require("method-override");
   
    const session = require("express-session");

    const ctrl = require("./controllers");


// MongoStore will be changed
// const MongoStore = require("connect-mongo");



/** Instanced Module */


    const app = express();


/** Ports */

    //  DOTENV
    require("dotenv").config();

    //  PORT
    const PORT = process.env.PORT;


/** Configuration */

    //  EJS
    app.set("view engine", "ejs");


/** Middleware */


    // Body Data
    app.use(express.urlencoded({ extended: true }));

    // Method Overrride
    app.use(methodOverride("_method"));

    // Public folder - so that it is accessible across files
    app.use(express.static(__dirname + "/public"));


/** Models */

    const dbModel = require("./models");

    
/** Controllers */


    // app.use("/", ctrl)

/** Routes */


    //  Home Route
    app.get('/', (req, res) => {
        // res.send('Root Page');
        res.render('Home');
    });



/** Server Listener */


    app.listen(PORT, function() {
        console.log(`Server working at PORT ${PORT}`);
    });


    
    
module.exports = app;
