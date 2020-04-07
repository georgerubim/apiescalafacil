const mongoose = require('mongoose');

const DeleteShopSchema = new mongoose.Schema({
    shop: String,
    user: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("DeleteShops", DeleteShopSchema);
