const mongoose = require('mongoose')

const schema = new mongoose.Schema (
    {

    nome: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        require: true
    },

    valorProduto : {
        type: Number,
        require: true
    },

    totalProduto: {
        type: String,
        require: true
    },

    observações: {
        type: String,
        require: false
    },


}, { timestamps: true})

const Produto = mongoose.model('produto', schema)

module.exports = Produto