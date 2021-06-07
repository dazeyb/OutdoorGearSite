const db = require('./models');
const data = require('./Seed-Data/product.json');


    // Reseeds data into database so the website can be demoed 
// const run = async () => {

//     try {

//     // Removes all products
//     await db.Product.deleteMany({});

//     // Creates all products
//     const createdAuthors = await db.Product.insertMany(products) => {
//         if (err) return console.log(err);
        
//         console.log(data.products.length, 'Products seeded successfully');
        
//         process.exit();
//     } catch (err) {
//         console.log(err)
//         process.exit();
//     }
//     }
//     });
// });
// };

// run ();

// await db.Store.deleteMany({}, (err, deletedStores) => {
//     db.Store.create(data.stores, (err, seededStores) => {
//         if (err) return console.log(err);
        
//         console.log(data.stores.length, 'Stores seeded successfully');
        
//         process.exit();
//     });
// });


// Seed stores first, manually add store IDS into names
 
// Then seed products
// **** Early attempt to run seeded file 
const run = async () => {

    try {
    // Removes all products
    await db.Product.deleteMany({}, (err, deletedProducts) => {

    // Creates all products
    db.Product.create(data.products, (err, seededProducts) => {
        if (err) return console.log(err);
        
        console.log(data.products.length, 'Products seeded successfully');
        
        process.exit();
    } catch (err) {
        console.log(err)
        process.exit();
    }
    }
    });
});
};

run ();


//  Command to populate db with data: node seed.js


