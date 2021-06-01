const express = require('express');
const app = express();

// DOTENV
require("dotenv").config();



/** PORT */
const PORT = process.env.PORT;



app.get('/', (req, res) => {
    res.send('Root Page');
});

app.listen(PORT, ()=>{
    console.log("I am listening");
});



