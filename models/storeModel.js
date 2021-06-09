/** Schema for Users */

const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A store name must be provided"],
        },
    },
    {
        timestamps: true,
    }
);

// Model
const Store = mongoose.model("Store", storeSchema);

// Export
module.exports = Store;