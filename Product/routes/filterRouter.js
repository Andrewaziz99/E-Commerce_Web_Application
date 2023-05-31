const express = require('express');
const router = express.Router();
const {categoryFilter,priceFilter, categorypriceFilter} = require("../controllers/filterController")

router.get("/category/:category", categoryFilter)
router.get("/price/:price", priceFilter)
router.get("/categoryprice/:category&&:price",  categorypriceFilter)


module.exports = router