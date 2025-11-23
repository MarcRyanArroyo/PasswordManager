import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {saveUser} from '../models/User.js';

export const Register = async (oReq, oRes) => {
    try {
        const sUsername = oReq.body.username;
        const sPassword = await bcrypt.hash(oReq.body.password, 10);
        await saveUser({ username: sUsername, password: sPassword });
        oRes.status(201).json({ message: "User registered successfully" });
    } catch (oError) {
        oRes.status(400).json({ error: oError.message });
    }
};


export const Login = async (oReq, oRes) =>  {
    try {
        const sUsername = oReq.body.username;
        const sPassword = oReq.body.password;

        const user = await User.findOne({ username: sUsername });
        if (!user) return oRes.status(401).json({
            message: "Invalid credentials"
        });

        const isMatch = await bcrypt.compare(sPassword, user.password);
        if (!isMatch) return oRes.status(401).json({
            message: "Invalid credentials"
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        oRes.status(200).json({ token });
    } catch (oError) {
        oRes.status(500).json({
            error: oError.message
        });
    }
};