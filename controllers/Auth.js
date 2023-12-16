const User = require("../Models/userSchema");
const Seller = require("../Models/Seller")



// API for registration 
const register = async (req, res) => {
    try {

        const existingUser = await User.findOne({ "username": req.body.username });
        const seller = await Seller.findOne({ "sell_id": req.body.sell_id });
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }
        if (seller) {
            return res.status(400).send("User Id alreadyy registered");
        }
        const prev_email = await User.findOne({ "email": req.body.email });
        if (prev_email) {
            return res.status(400).send("Email Already exits");
        }

        const sell = new Seller(req.body);
        await sell.save();
        const user = new User(req.body);
        await user.save();

        res.send({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}



const login = async (req, res) => {
    try {

        // Find the user in the database
        const user = await User.findOne({ "username": req.body.username });


        if (!user || user.password != req.body.password) {
            return res.status(401).send("Invalid Credentials");
        }


        res.json({ message: 'Login successful', usertype: user.usertype });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = { register, login };
// Two api have been successfully created that is the


