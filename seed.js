const db = require('./models');
const data = require('./Seed-Data/product.json');


db.Product.deleteMany({}, (err, deletedProducts) => {
    db.Product.create(data.products, (err, seededProducts) => {
        if (err) console.log(err);
        
        // console.log(data.products.length, 'products seeded successfully');
        
        process.exit();
    });
});


//  Command to populate db with data: node seed.js