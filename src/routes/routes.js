const express = require('express')
const router = express.Router()

//controllers
const FuncionarioController = require('../controllers/FuncionarioController')
const PedidoController = require('../controllers/PedidoController')
const AtendimentoController = require('../controllers/AtendimentoController')
const ClienteController = require('../controllers/ClienteController')
const CardapioController = require('../controllers/CardapioController')
const EntregaController = require('../controllers/EntregaController')

//validators
const {validarFuncionario} = require('../validators/FuncionarioValidator')
const {validarID} = require('../validators/IdValidator')
const {validarPedido} = require('../validators/PedidoValidator')
const {validarAtendimento} = require('../validators/AtendimentoValidator')
const {validarCliente} = require('../validators/ClienteValidator')
const {validarEntrega} = require('../validators/EntregaValidator')
const {validarCardapio} = require('../validators/CardapioValidator')

//funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('funcionarios/:id', validarID, FuncionarioController.excluir)

//pedido
router.get('/pedidos', PedidoController.buscarTodos)
router.get('/pedidos/:id', validarID, PedidoController.buscarPorID)
router.post('/pedidos', validarPedido, PedidoController.criar)
router.put('/pedidos/:id', validarID, validarPedido, PedidoController.atualizar)
router.delete('pedidos/:id', validarID, PedidoController.excluir)

//atendimento
router.get('/atendimentos', AtendimentoController.buscarTodos)
router.get('/atendimentos/:id', validarID, AtendimentoController.buscarPorID)
router.post('/atendimentos', validarAtendimento, AtendimentoController.criar)
router.put('/atendimentos/:id', validarID, validarAtendimento, AtendimentoController.atualizar)
router.delete('atendimentos/:id', validarID, AtendimentoController.excluir)

//cliente
router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', validarID, ClienteController.buscarPorID)
router.post('/clientes', validarCliente, ClienteController.criar)
router.put('/clientes/:id', validarID, validarCliente, ClienteController.atualizar)
router.delete('clientes/:id', validarID, ClienteController.excluir)

//entrega
router.get('/entregas', EntregaController.buscarTodos)
router.get('/entregas', validarID, EntregaController.buscarPorID)
router.post('/entregas', validarEntrega, EntregaController.criar)
router.put('/entregas', validarID, validarEntrega, EntregaController.atualizar)
router.delete('/entregas', validarID, EntregaController.excluir)

//cardapio
router.get('/cardapio', CardapioController.buscarTodos)
router.get('/cardapio', validarID, CardapioController.buscarPorID)
router.post('/cardapio', validarCardapio, CardapioController.criar)
router.put('/cardapio', validarID, validarCardapio, CardapioController.atualizar)
router.delete('/cardapio', validarID, CardapioController.excluir)



module.exports = router
