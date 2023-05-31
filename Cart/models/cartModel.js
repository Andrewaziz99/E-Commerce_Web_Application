const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
{
    UserId: 
    {
        type: String 
    },

    ProductId: 
    {
        type: String 
    }
}, 

{
    timestamps: true
}

);

module.exports = mongoose.model("Cart", cartSchema);