const yup = require('yup')

const schema = yup.object().shape(
    {
        cardapio: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        
        pedido: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        cliente: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        dataAtendimento: yup
         .date("Data inválida")
         .required("Campo obrigatório"),
         
         horaAtendimento: yup
         .string("Campo precisa ser um texto")
         .required("Campo obrigatório"),
    }
)

function validarAtendimento(req, res, next) {
    schema.validate(req.body, {abortEarly: false })
    .then(() => next())
    .catch(err => {
        
            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.erros
                }
                return erro
            })

            res.status(400).json(
                {
                    mensagem: "Erro na validacao dos campos!",
                    erros
                }            
    )
    })
}

module.exports = {
    validarAtendimento
}