const yup = require('yup')

const schema = yup.object().shape(
    {
        pizzasDoces: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        
        pizzasSalgadas: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        refrigerantes: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        sucos: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        cremes: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        observacoes: yup
           .string("Campo precisa ser um texto"),           
    }
)

function validarCardapio(req, res, next) {
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
    validarCardapio
}