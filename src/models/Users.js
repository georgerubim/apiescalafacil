const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email: String,
    senha: String,
    convite: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Users", UserSchema);
