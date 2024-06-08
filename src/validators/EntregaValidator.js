const yup = require('yup')

const schema = yup.object().shape(
    {
        pedido: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
            
        cliente: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
            
        tokenConfirmacao: yup
        .string("Campo precisa ser um texto")
        .required("Campo obrigatório"),

        dataEntrega: yup
            .date("Data inválida")
            .required("Campo obrigatório"),

        horaEntrega: yup
            .string("Campo precisa ser um texto")
            .required('Campo obrigatório'),

    }
)

function validarEntrega(req, res, next) {
    schema.validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
        
            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
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
    validarEntrega
}