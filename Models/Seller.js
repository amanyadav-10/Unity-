const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({

    catalogue: [
        {
            name: {
                type: String,
            },
            cost: {
                type: Number,
            },
        }
    ],
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;