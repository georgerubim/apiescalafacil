const mongoose = require('mongoose');

const CreditsSchema = new mongoose.Schema({
    value: Number,
    user: String,
    type: {
        type: String,
        default:"add"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Credits", CreditsSchema);
