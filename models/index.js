const mongoose = require("mongoose");

require("dotenv").config();

const dbUrl = process.env.MONGODB_URI;


mongoose
    .connect( process.env.MONGODB_URI || dbUrl ), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false, 
    })

    .then(function () {
        console.log("MongoDB connected");
    })
    // To catch errors
    .catch(function(err){
        console.log("MongoDB error");
        console.log(err);
    });

 
mongoose.connection.on("disconnected", function() {
    console.log("MongoDB disconnected");
});


module.exports = {
    Product: require("./productModel"),
    Store: require("./storeModel"),
    User: require("./userModel"),
};

