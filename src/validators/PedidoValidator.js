const yup = require('yup')

const schema = yup.object().shape(
    {
        atendimento: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        
        produtos: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        valorPedido: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        pagamento: yup
         .string("Campo precisa ser um texto")
         .required("Campo obrigatório"),
         
        cupomDesconto: yup
         .string("Campo precisa ser um texto"),         
    }
)

function validarPedido(req, res, next) {
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
    validarPedido
}