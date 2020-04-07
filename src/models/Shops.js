const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    shop: String,
    user: String,
    apiKey: String,
    senha: String,
    sharedSecret: String,
    active: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Shops", ShopSchema);
