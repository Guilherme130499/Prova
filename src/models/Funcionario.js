const mongoose = require('mongoose')
//Importa a biblioteca mongoose

/*Define a estrutura e as regras de validação para documentos em uma coleção do MongoDB*/
const schema = new mongoose.Schema({
    
    nome: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    },

    admissao: {
        type: Date,
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
}, { timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Funcionario = mongoose.model('funcionario', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção funcionario do MongoDB 
usando o modelo Funcionario*/

module.exports = Funcionario
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto