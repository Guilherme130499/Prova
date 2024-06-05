const mongoose = require('mongoose')
//Importa a biblioteca mongoose

//Define a estrutura e as regras de validação para documentos em uma coleção do MongoDB
const schema = new mongoose.Schema(
    {
        pizzasDoces: {
            type: String,        
            required: true
        },        
        
        pizzasSalgadas: {
            type: String,        
            required: true
        },
        
        refrigerantes: {
            type: String,        
            required: true
        },    
    
        sucos: {
            type: String,        
            required: true
        },
    
        cremes: {
            type: String,
            required: true
        },
    
        observacoes: {
            type: String,
            required: false
        },               
    
}, { timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Cardapio = mongoose.model('cardapio', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção atendimento do MongoDB 
usando o modelo Atendimento*/

module.exports = Cardapio
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto
