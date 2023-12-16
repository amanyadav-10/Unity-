const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    sell_id: {
        type: String,
        required: true,
        unique: [true, "seller_id not available"]
    },
    catalogue: [
        {
            name: {
                type: String,
                // required: true,
            },
            cost: {
                type: Number,
                // required: true,
            },
        }
    ],

});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;