const mongoose = require('mongoose');

const Comentafacil_Coments = new mongoose.Schema({
    shop: String,
    productId: String,
    rating: Number,
    name: String,
    text: String,
    img_name: String,
    img_size: Number,
    img_key: String,
    img_url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Comentafacil_Coments", Comentafacil_Coments);
