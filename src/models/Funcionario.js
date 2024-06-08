const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    
    nome: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    },

    funcao: {
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true
    },

    dataAdmissao: {
        type: Date,
        required: true
    },
    
    salario: {
        type: String,
        required: true
    }

}, { timestamps: true })


const Funcionario = mongoose.model('funcionario', schema)


module.exports = Funcionario
