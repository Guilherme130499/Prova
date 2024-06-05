const mongoose = require('mongoose')
//Importa a biblioteca mongoose

//Define a estrutura e as regras de validação para documentos em uma coleção do MongoDB
const schema = new mongoose.Schema({
    
    nome: {
        type: String,
        required:true
    },

    cpf: {
        type: String,
        required: true
    },

    endereco: {
        cep: String,
        uf: String,
        localidade: String,
        bairro: String,
        logradouro: String,
        numero: String,
        complemento: String,        
    },

    email: {
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true
    },
}, { timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Cliente = mongoose.model('cliente', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção cliente do MongoDB 
usando o modelo Cliente*/

module.exports = Cliente
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto
