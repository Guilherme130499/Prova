const mongoose = require('mongoose')
//Importa a biblioteca mongoose

//Define a estrutura e as regras de validação para documentos em uma coleção do MongoDB
const schema = new mongoose.Schema(
    {
    
    cliente: {
        type: mongoose.Types.ObjectId,
        ref: 'cliente',
        required: true
    }, 

    pedido: {
        type: mongoose.Types.ObjectId,
        ref: 'cardapio',
        required: true
    },

    dataEntrega: {
        type: Date,
        required: true
    },   
    
    horaEntrega: {
        type: String,
        required: true
    },                   
    
    statusPedido: {
        type: String,
        required: true
    },
}, { timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Entrega = mongoose.model('entrega', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção atendimento do MongoDB 
usando o modelo Atendimento*/

module.exports = Entrega
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto
