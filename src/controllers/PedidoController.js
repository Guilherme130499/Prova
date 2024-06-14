const Pedido = require('../models/Pedido')

async function buscarTodos(req, res) {
    res.json(await Pedido.find().populate({
        path: "funcionario",
        select: "nome"
    })

    .populate({
        path: "cliente",
        select: "nome"
    })

    .populate({
        path: "produtos.item",
        select: "nome"
    })
)
}

async function buscarPorID(req, res) {
    const pedido = await Pedido.findById(req.params.id).populate({
        path: "funcionario",
        select: "nome"
    })

    .populate({
        path: "cliente",
        select: "nome"
    })

        if (pedido) {
            res.json(pedido)
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!"})
        }
}

async function criar(req, res) {

    if (typeof req.body.produtos === 'string') {
        req.body.produtos = JSON.parse(req.body.produtos);
    }

    const pedido = new Pedido(req.body)

    try 
    {
        const pedidoCriado = await pedido.save()
        res.status(201).json(pedidoCriado)
    } catch (error) {
        res.status(400).json({ mensagem: "Erro ao criar pedido", error });
    }
}

async function atualizar(req, res) {
    const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body,{ new: true })
        if (pedidoAtualizado) {
            res.json(
                {
                    mensagem: "Pedido atualizado com sucesso", 
                    pedidoAtualizado
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Pedido não encontrado!"})
        }
}

async function excluir(req, res) {
    const pedidoExcluido = await Pedido.findByIdAndDelete(req.params.id)
        if (pedidoExcluido) {
            res.json(
                {
                    mensagem: "Pedido excluido com sucesso!", 
                    pedidoExcluido
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Pedido não encontrado!"})
        }
}



module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}