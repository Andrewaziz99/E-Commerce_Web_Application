const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name:{
        "type": "String",
         required: true
        },
    price: {
        "type": "Number"
    },
    description: {
        "type": "String"
    },
    category: {
        "type": "String"
    },
    image: {
        "type": "String"
    }
})

module.exports = mongoose.model('Product', productSchema);