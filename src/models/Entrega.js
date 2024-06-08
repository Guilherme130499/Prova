const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
    
    pedido: {
        type: mongoose.Types.ObjectId,
        ref: 'pedido',
        required: true
    },

    cliente: {
        type: mongoose.Types.ObjectId,
        ref: 'cliente',
        required: true
    },
    
    tokenConfirmacao: {
        type: String,
        required: false
    },

    dataEntrega: {
        type: Date,
        required: true
    },   
    
    horaEntrega: {
        type: String,
        required: true
    },                   

}, { timestamps: true })


const Entrega = mongoose.model('entrega', schema)


module.exports = Entrega
