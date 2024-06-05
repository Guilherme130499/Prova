const mongoose = require('mongoose')
//Importa a biblioteca mongoose

//Define a estrutura e as regras de validação para documentos em uma coleção do MongoDB
const schema = new mongoose.Schema(
    {
    
    cardapio: {
        type: mongoose.Types.ObjectId,
        ref: 'cardapio',
        required: true
    }, 

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
    
    dataAtendimento: {
        type: Date,
        required: true
    },
    
    horaAtendimento: {
        type: String,
        required: true
    },               
    
}, { timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Atendimento = mongoose.model('atendimento', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção atendimento do MongoDB 
usando o modelo Atendimento*/

module.exports = Atendimento
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto
