const express = require("express");

const router = express.Router();

const db = require("../models");


// router.get("/", async function (req, res) {



// };


router.get("/search", function (req, res) {
    // .populate populates show page with all articles on show page for authors. the string it takes in is the key that we're populating from the schema (not the model)
 
        db.Product.find({})

        .exec(function (err, foundProducts) {
        if (err) return res.send(err);
        
        const context = { products: foundProducts };
        return res.render("Search", context);
    });
});


        // / when using redirect
        // render no /

module.exports = router;