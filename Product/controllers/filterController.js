const productModel = require('../models/productModel');

const categoryFilter  = async (req, res) =>{
    // console.log(req.params);
    const filteredProducts = await productModel.find({category: req.params.category})
    res.json({filteredProducts})
}

const priceFilter = async (req, res) =>{  
    const filteredProducts = await productModel.find({price: {$lte: req.params.price}})

    res.json(filteredProducts)
}

const  categorypriceFilter = async (req, res) =>{
    const filteredProducts = await productModel.find({category: req.params.category, price: {$lte: req.params.price}})
    res.json(filteredProducts)
}

module.exports = {
    categoryFilter,
    priceFilter,
    categorypriceFilter
}