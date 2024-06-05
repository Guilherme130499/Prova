const Cardapio = require('../models/Cardapio')


async function buscarTodos(req, res) {
    res.json(await Cardapio.find())
}

async function buscarPorID(req, res) {
    const cardapio = await Cardapio.findById(req.params.id)
        if (cardapio) {
            res.json(cardapio)
        } else {
            res.status(404).json({ mensagem: "Cardapio não encontrado!"})
        }
}

async function criar(req, res) {
    const cardapio = new Cardapio(req.body)
    const cardapioCriado = await cardapio.save()
        res.status(201).json(cardapioCriado)
}

async function atualizar(req, res) {
    const cardapioAtualizado = await Cardapio.findByIdAndUpdate(req.params.id, req.body,{ new: true })
        if (cardapioAtualizado) {
            res.json(
                {
                    mensagem: "Cardapio atualizado com sucesso", cardapioAtualizado
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Cardapio não encontrado!"})
        }
}

async function excluir(req, res) {
    const cardapioExcluido = await Cardapio.findByIdAndDelete(req.params.id)
        if (cardapioExcluido) {
            res.json(
                {
                    mensagem: "Cardapio excluido com sucesso!", cardapioExcluido
                }
            )
        }   else {
            res.status(404).json({ mensagem: "Cardapio não encontrado!"})
        }
}



module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}