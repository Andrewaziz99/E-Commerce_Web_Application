const express = require("express");
const {getCartProducts, addCartProduct, deleteCartProduct, checkout} = require("../controllers/cartController");
const validateToken = require('../middleware/tokenValidationMiddleware');

const router = express.Router();

router.get("/", validateToken, getCartProducts);

router.post("/:productid", validateToken, addCartProduct);

router.delete("/checkout", validateToken, checkout);

router.delete("/:productid", validateToken, deleteCartProduct);


module.exports = router