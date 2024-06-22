const UserModel = require("../models/User");
const jwt = require('jsonwebtoken')

exports.requireSignIn = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        console.log("token: " + token);

        if (!token) {
            return res.status(401).json({ error: 'Please Sign In' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token has necessary details (customize as needed)
        if (!decoded || !decoded._id || !decoded.role) {
            return res.status(401).json({ error: 'Invalid Token' });
        }

        // If token is valid, move to the next middleware or route
        req.user = decoded;
        console.log("req user ",req.user);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Authentication failed" });
    }
}

exports.verifyAdmin = async (req, res, next) => {
    const token = req.cookies.token;

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded role",decoded.role);
        if(decoded.role === "ADMIN"){
            next();            
        }else{
            return res.status(401).json({error: "You are not admin"})
        }

    } catch (error) {
         res.status(401).json({error: "Authentication failed"})
    }
}