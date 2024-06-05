const Atendimento = require('../models/Atendimento')

async function buscarTodos(req, res) {
    res.json(await Atendimento.find())
}

async function buscarPorID(req, res) {
    const atendimento = await Atendimento.findById(req.params.id)
    if (atendimento) {
        res.json(atendimento)
    } else {
        res.status(404).json({ mensagem: "Atendimento não encontrado!"})
    }
}

async function criar(req, res) {
    const atendimento = new Atendimento(req.body)
    const atendimentoCriado = await atendimento.save()
        res.status(201).json(atendimentoCriado)
}

async function atualizar(req, res) {
    const atendimentoAtualizado = await Atendimento.findByIdAndUpdate(req.params.id, req.body,{ new: true })
        if (atendimentoAtualizado) {
            res.json(
                {
                    mensagem: "Atendimento atualizado com sucesso", atendimentoAtualizado
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Atendimento não encontrado!"})
        }
}

async function excluir(req, res) {
    const atendimentoExcluido = await Atendimento.findByIdAndDelete(req.params.id)
        if (atendimentoExcluido) {
            res.json(
                {
                    mensagem: "Atendimento excluido com sucesso!", atendimentoExcluido
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Atendimento não encontrado!"})
        }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}