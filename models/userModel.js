/** Schema for Users */

const { Mongoose } = require("mongoose");

const userSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A name must be provided"],
        },
        username: {
            type: String,
            required: [true, "A username must be provided"],
        },
        password: {
            type: String,
            required: [true, "A password must be provided"],
        },
        admin: {
            type: Boolean,
            required: [true, "A gear type must be provided"],
        },
    },
    {
        timestamps: true,
    }
);

// Model
const User = mongoose.model("User", userSchema);

// Export
module.exports = User;
