const express = require("express");

const router = express.Router();

const db = require("../models");


// router.get("/", async function (req, res) {
// };

// Index
router.get("/search", function (req, res) {
 
        db.Product.find({})

        .exec(function (err, foundProducts) {
        if (err) return res.send(err);
        
        const context = { products: foundProducts };
        return res.render("Search", context);
    });
});

// Show
router.get("/search/:id", function (req, res) {
 
        db.Product.findById(req.params.id)

        .exec(function (err, foundProduct) {
        if (err) return res.send(err);
        
        const context = { product: foundProduct };
        return res.render("Show", context);
    });
});



// New
router.get("/new", function(req,res) {
    res.render("New");
});


// Create
router.post("/new", function (req, res) {

    // Req.body requests info from form in html (not body)
	db.Product.create(req.body, function (err, createdProduct) {
		if (err) return res.send(err);

			// foundProduct.products.push(createdProduct); // Add product to products array/collection
			// foundProduct.save(); // save relationship to database, commits to memory

			return res.redirect("/search");
	});
});


// Edit
router.get("/:id/edit", function (req, res) {
	db.Product.findById(req.params.id, function (err, foundProduct) {
		if (err) return res.send(err);

		const context = { product: foundProduct };
		res.render("Edit", context);
	});
});





// Update
router.put("/search/:id", function (req, res) {
	db.Product.findByIdAndUpdate(
		// id to find
		req.params.id,
		// data to update
		{
			$set: {
				// title: req.body
				// body: req.body
				...req.body,
			},
		},
		// return the new object
		{ new: true },
		// callback function after the update has completed
		function (err, updatedProduct) {
			if (err) return res.send(err);
			return res.redirect(`/search/${updatedProduct._id}`);
		}
	);
});



// Delete
router.delete("/:id", function (req, res) {
	db.Product.findByIdAndDelete(req.params.id, function (err, deletedProduct) {
		if (err) return res.send(err);

		return res.redirect("/search");
	});
});






        // / when using redirect
        // render no /

module.exports = router;