const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = asyncHandler(async (req,res,next) =>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) =>{
            if (err) {
                res.status(401).
                res.json({message: "user is not authorized"})
            }
            req.user = decoded.user
            next();
        })
    }
})

module.exports = validateToken;