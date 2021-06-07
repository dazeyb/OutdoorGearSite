const db = require('./models');
const data = require('./Seed-Data/product.json');


    // Reseeds data into database so the website can be demoed 
const run = async () => {

    // Removes all products
    await db.Product.deleteMany({}, (err, deletedProducts) => {
    db.Product.create(data.products, (err, seededProducts) => {
        if (err) return console.log(err);
        
        console.log(data.products.length, 'Products seeded successfully');
        
        process.exit();
    });
});
};

run ();

// await db.Store.deleteMany({}, (err, deletedStores) => {
//     db.Store.create(data.stores, (err, seededStores) => {
//         if (err) return console.log(err);
        
//         console.log(data.stores.length, 'Stores seeded successfully');
        
//         process.exit();
//     });
// });


//  Command to populate db with data: node seed.js