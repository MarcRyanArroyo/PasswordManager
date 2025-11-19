const oUser = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Register = async (oReq, oRes) => {
    try {
        const sEmail = oReq.body.email;
        const sPassword = await bcrypt.hash(oReq.body.password, 10);
        const user = new User({ email: sEmail, password: sPassword });
        await user.save();
        oRes.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        oRes.status(400).json({ error: error.message });
    }
};


const Login = async (oReq, oRes) =>  {
    try {
        const sEmail = oReq.body.email;
        const sPassword = oReq.body.password;

        const user = await User.findOne({ email: sEmail });
        if (!user) return oRes.status(401).json({
            message: "Invalid credentials"
        });

        const isMatch = await bcrypt.compare(sPassword, user.password);
        if (!isMatch) return oRes.status(401).json({
            message: "Invalid credentials"
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        oRes.status(200).json({ token });
    } catch (error) {
        oRes.status(500).json({
            error: error.message
        });
    }
};


module.exports = {
    Register,
    Login
};