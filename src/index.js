const express = require('express')
/*Importa o módulo express, que é um framework para Node.js, 
usado para construir aplicações web e APIs*/
//Permite usar as funcionalidades do express na aplicação

const app = express()
//Chama a função express
//Configura rotas, middlewaress e outros aspectos da aplicação

const PORT = 3000
//Define a porta onde o servidor vai se conectar

const DBConnect = require('./database/connection')
//Importa um módulo localizado em database

DBConnect()
//Conecta-se com o banco de dados

app.use(express.json())
//Permite que a aplicação processe as requisições em JSON

const routes = require('./routes/routes')
//Importa um módulo localizado em routes

app.use(routes)
//Configura a aplicação para usar as rotas definidas no módulo routes


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})

/*Ativa o servidor, permitindo que ele aceite conexões na porta 3000, 
e imprime uma mensagem no console indicando que a aplicação está rodando*/