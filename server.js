const { response } = require('express');
const express = require('express');
const app = express();

// DOTENV
require("dotenv").config();

app.get('/test', (req, res) => {
    response.send('Test info');
});

app.listen(4000, ()=>{
    console.log("I am listening");
});



