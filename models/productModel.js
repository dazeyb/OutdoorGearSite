/** Schema for Products */

const { Mongoose } = require("mongoose");

const productSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A name must be provided"],
        }
        description: {
            type: String,
            required: [true, "A description must be provided"],
        }
        img: {
            type: String,
            required: [true, "An img url must be provided"],
        }
        type: {
            type: String,
            required: [true, "A gear type must be provided"],
        }    
        stock: {
            type: Number,
            required: [true, "An img url must be provided"],
        }
        price: {
            type: Number,
            required: [true, "A price must be provided"],
        }
    }
);

// Model
const Product = mongoose.model("Product", productSchema);

// Export
module.exports = Product;

