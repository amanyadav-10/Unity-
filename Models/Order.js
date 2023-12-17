const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

// we will create the schema for the order here 
const orderSchema = new mongoose.Schema({
    O_id: {
        type: "string",
    },
    order: [
        {
            name: {
                type: String,
            }
        },
        {
            quantity: {
                type: Number,
            }
        }
    ]
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;