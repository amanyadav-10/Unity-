const Seller = require("../Models/Seller");
const User = require("../Models/userSchema")

// API for list of sellers
const list_of_sellers = async (req, res) => {

    try {
        const { email } = req.params;
        const sell_list = await User.findOne({ usertype: 'seller' });
        console.log({ sell_list });
        res.status(200).send(sell_list);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports = list_of_sellers;
