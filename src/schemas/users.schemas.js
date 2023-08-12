import joi from 'joi'

export const usersSchemas = joi.object(
    {
        nome: joi.string().required(),
        email: joi.string().email().required(),
        senha: joi.string().required(),
        confirmarSenha: joi.string().required().valid(joi.ref("senha")),
        telefone: joi.string().required().min(10).max(11).pattern(/^\d+$/),
        cpf: joi.string().required().length(11)
    }
)


export const authSchemas = joi.object({

    email: joi.string().email().required(),
    senha: joi.string().required()

})