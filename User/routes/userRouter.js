const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/tokenValidationMiddleware")

const {getUser, getUsers, userRegister, loginUser} = require("../controllers/usercontroller")

// router.route("/").get( validateToken, getUsers)

router.route("/").post(userRegister)

router.route("/").get(validateToken, getUser)

router.route("/login").post(loginUser);

module.exports = router
