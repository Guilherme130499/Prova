const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        
        cpf: yup
           .string("Campo precisa ser um texto")
           .required("Campo obrigatório"),

        admissao: yup
           .date("Data inválida")
           .required("Campo obrigatório"),

        funcao: yup
            .string("Campo precisa ser um texto")
            .required('Campo obrigatório'),

        telefone: yup
         .string("Campo precisa ser um texto")
         .required("Campo obrigatório"),
    }
)

function validarFuncionario(req, res, next) {
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
    validarFuncionario
}