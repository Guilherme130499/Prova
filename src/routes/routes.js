const express = require('express')
const router = express.Router()

//controllers
const FuncionarioController = require('../controllers/FuncionarioController')
const PedidoController = require('../controllers/PedidoController')
const AtendimentoController = require('../controllers/AtendimentoController')
const ClienteController = require('../controllers/ClienteController')

//validators
const {validarFuncionario} = require('../validators/FuncionarioValidator')
const {validarPedido} = require('../validators/PedidoValidator')
const {validarAtendimento} = require('../validators/AtendimentoValidator')
const {validarCliente} = require('../validators/ClienteValidator')

//funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarFuncionario, FuncionarioController.atualizar)
router.delete('funcionarios/:id', FuncionarioController.excluir)

//pedido
router.get('/pedidos', PedidoController.buscarTodos)
router.get('/pedidos/:id', PedidoController.buscarPorID)
router.post('/pedidos', validarPedido, PedidoController.criar)
router.put('/pedidos/:id', validarPedido, PedidoController.atualizar)
router.delete('pedidos/:id', PedidoController.excluir)

//atendimento
router.get('/atendimentos', AtendimentoController.buscarTodos)
router.get('/atendimentos/:id', AtendimentoController.buscarPorID)
router.post('/atendimentos', validarAtendimento, AtendimentoController.criar)
router.put('/atendimentos/:id', validarAtendimento, AtendimentoController.atualizar)
router.delete('atendimentos/:id', AtendimentoController.excluir)

//cliente
router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', ClienteController.buscarPorID)
router.post('/clientes', validarCliente, ClienteController.criar)
router.put('/clientes/:id', validarCliente, ClienteController.atualizar)
router.delete('clientes/:id', ClienteController.excluir)

module.exports = router
//valeu