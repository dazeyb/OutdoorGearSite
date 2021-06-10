const express = require("express");

const router = express.Router();

const db = require("../models");


// router.get("/", async function (req, res) {
// };

// Index
router.get("/search", async function (req, res) {
	try {
        await db.Product.find({})

		// Another way to fix async/await issue
        .exec(function (err, foundProducts) {
   

		if(err) {
			console.log(err);
			return res.render('Error');
	   	}
        
        const context = { products: foundProducts };
        return res.render("Search", context);
    });
	} catch (err) {
	return res.render("Error");	
	}
});


// Error
router.get("/error", function(req,res) {
    res.render("Error");
});


// Show
router.get("/search/:id", async function (req, res) {
	try {
		// Go into DB, find all info for items with this ID. Turns ID to the rest of its info
		const foundProduct = await db.Product.findById(req.params.id).populate("stores");
		
		// if (err) {
		// 	console.log(err);
		// 	return res.render("Error");
		// }

		// added await
		const context = await { product: foundProduct };
		return res.render("Show", context);

	} catch (err) {
	return res.render("Error");	
	}

});




// New
router.get("/new", function(req,res) {
    res.render("New", { error: false });
});


// Create
router.post("/new", function (req, res) {

	if (!req.body.name || !req.body.price || !req.body.description || !req.body.type) { 
	return res.render("New", {
		error: "All boxes must be filled to create a new product"
	})};

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


module.exports = router;

        // / when using redirect
        // render no /