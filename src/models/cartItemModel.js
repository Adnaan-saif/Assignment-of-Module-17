const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }

});

const cartItem = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItem;