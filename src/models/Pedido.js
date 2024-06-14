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
        
    funcionario: { 
        type: mongoose.Types.ObjectId,
        ref: 'funcionario',
        required: true 
        },

    produtos:[{
        item: {
            type: mongoose.Types.ObjectId,
            ref: 'produto',        
            required: true
    }
    }],
    
    statusPedido: {
        type: String,
        required: true
    },

    pagamento: {
        type: String,        
        required: true
    },

    cupomDesconto: {
        type: String,
        required: false
    }, 

    valorPedido: {
        type: Number,        
        required: true
    },      
    
}, 
{ timestamps: true })
//Adiciona automaticamente os campos 'createdAt' e 'updateAt'

const Pedido = mongoose.model('pedido', schema)
/*Permite a criação, leitura, atualização e exclusão de documentos na coleção atendimento do MongoDB 
usando o modelo Atendimento*/

module.exports = Pedido
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto