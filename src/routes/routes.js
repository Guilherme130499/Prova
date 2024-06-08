const express = require('express')
const router = express.Router()

//controllers
const FuncionarioController = require('../controllers/FuncionarioController')
const PedidoController = require('../controllers/PedidoController')
const ClienteController = require('../controllers/ClienteController')
const EntregaController = require('../controllers/EntregaController')
const ProdutoController = require('../controllers/Produtos')

//validators
const {validarFuncionario} = require('../validators/FuncionarioValidator')
const {validarID} = require('../validators/IdValidator')
const {validarPedido} = require('../validators/PedidoValidator')
const {validarCliente} = require('../validators/ClienteValidator')
const {validarEntrega} = require('../validators/EntregaValidator')
const {validarProduto} = require('../validators/Produtos')

//funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

//pedido
router.get('/pedidos', PedidoController.buscarTodos)
router.get('/pedidos/:id', validarID, PedidoController.buscarPorID)
router.post('/pedidos', validarPedido, PedidoController.criar)
router.put('/pedidos/:id', validarID, validarPedido, PedidoController.atualizar)
router.delete('/pedidos/:id', validarID, PedidoController.excluir)

//cliente
router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', validarID, ClienteController.buscarPorID)
router.post('/clientes', validarCliente, ClienteController.criar)
router.put('/clientes/:id', validarID, validarCliente, ClienteController.atualizar)
router.delete('/clientes/:id', validarID, ClienteController.excluir)

//entrega
router.get('/entregas', EntregaController.buscarTodos)
router.get('/entregas/:id', validarID, EntregaController.buscarPorID)
router.post('/entregas', validarEntrega, EntregaController.criar)
router.put('/entregas/:id', validarID, validarEntrega, EntregaController.atualizar)
router.delete('/entregas/:id', validarID, EntregaController.excluir)

//produto
router.get('/produtos', ProdutoController.buscarTodos)
router.get('/produtos/:id', validarID, ProdutoController.buscarPorID)
router.post('/produtos', validarProduto, ProdutoController.criar)
router.put('/produtos/:id', validarID, validarProduto, ProdutoController.atualizar)
router.delete('/produtos/:id', validarID, ProdutoController.excluir)



module.exports = router
