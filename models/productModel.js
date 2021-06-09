/** Schema for Products */

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: [true, "A name must be provided"],
        },
        description: {
            type: String,
            required: [true, "A description must be provided"],
        },
        img: {
            type: String
            // required: [true, "An img url must be provided"],
        },
        type: {
            type: String,
            required: [true, "A gear type must be provided"],
        },
        price: {
            type: Number,
            required: [true, "A price must be provided"],
        },
        stores: 
            [{type: mongoose.Schema.Types.ObjectId, ref: "Store"}]
            // required: [true, "At least one store must be selected"]}],
    },
    {
        timestamps: true,
    }
);

// Model
const Product = mongoose.model("Product", productSchema);

// Export
module.exports = Product;

