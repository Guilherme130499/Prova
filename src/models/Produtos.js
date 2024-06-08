const mongoose = require('mongoose')

const schema = new mongoose.Schema (
    {
/* perguntar ao professor como fazer que o cliente escolha os produtos 
que estão no "cardápio" pré definidos da pizzaria e definir o valor de cada produto
para aparecer assim que o produto for escolhido

perguntar ao professor como somar cada pedido para constar no valor total do pedido

Perguntar como definir os tamanhos para cada produto ex: pequeno, médio e grande
*/
    nome: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        require: true
    },

    valorProduto : {
        type: String,
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