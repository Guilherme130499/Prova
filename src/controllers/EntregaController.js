const Entrega = require('../models/Entrega')

async function buscarTodos(req, res) {
    res.json(await Entrega.find())
}

async function buscarPorID(req, res) {
    const entrega = await Entrega.findById(req.params.id)
        if (entrega) {
            res.json(entrega)
        } else {
            res.status(404).json({ mensagem: "Entrega não encontrada!"})
        }
}

async function criar(req, res) {
    const entrega = new Entrega(req.body)
    const entregaCriada = await entrega.save()
        res.status(201).json(entregaCriada)
}

async function atualizar(req, res) {
    const entregaAtualizada = await Entrega.findByIdAndUpdate(req.params.id, req.body,{ new: true })
        if (entregaAtualizada) {
            res.json(
                {
                    mensagem: "Entrega atualizada com sucesso", entregaAtualizada
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Entrega não encontrada!"})
        }
}

async function excluir(req, res) {
    const entregaExcluida = await Entrega.findByIdAndDelete(req.params.id)
        if (entregaExcluida) {
            res.json(
                {
                    mensagem: "Entrega excluida com sucesso!", entregaExcluida
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Entrega não encontrada!"})
        }
}



module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}