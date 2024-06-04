const mongoose = require('mongoose')
//Importa a biblioteca mongoose

require('dotenv').config()
//Importa o módulo dotenv e chama o método config()
/*O método .config() do módulo dotenv é usado para carregar variáveis de ambiente a partir de um arquivo .env e adicioná-las ao objeto process.env*/


const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

function main() {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=servergui`)
    .then(() => console.log("Conectado ao MongoDB"))
    //Será executada quando a conexão ao MongoDB for estabelecida com sucesso.
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))
    //Será executada se a Promise for rejeitada, ou seja, se houver um erro durante a tentativa de conexão ao MongoDB
}


module.exports = main
//Permite a reutilização de código, tornando a função main acessível em outros arquivos do projeto