const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
        .string("Campo precisa ser um texto!")
        .required("Campo obrigatório"),

        descricao: yup
        .string("Campo precisa ser um texto!")
        .required("Campo obrigatório"),

        valorProduto: yup
        .string("Campo precisa ser um texto!")
        .required("Campo obrigatório"),

        totalProduto: yup
        .string("Campo precisa ser um texto!")
        .required("Campo obrigatório"),
        
        observações: yup
        .string("Campo precisa ser um texto")
    }
)

function validarProduto(req, res, next) {
    schema.validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
        const erros = err.inner.map(e =>{
            const erro = {
                campo: e.path,
                erros: e.errors
            }
            return erro
        })
        res.status(400).json(
            {
                mensagem: "Erro na validação dos campos",
                erros
            }
        )
    })
}

module.exports = {
    validarProduto
}