import Joi from 'joi'

export const postSchema = Joi.object({
  Nome: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
  Marca: Joi.string().required().max(50).message('O campo "marca" pode ter no máximo {{#limit}} caracteres.'),
  Cor: Joi.string().required().max(50).message('O campo "cor" pode ter no máximo {{#limit}} caracteres.'),
  Ano: Joi.number().required().min(1884).message('O campo "ano" vai de{{#limit}} até').max(2022).message('{{#limit}}'),
  Placa: Joi.string().required().max(7).message('O campo "placa" pode ter no máximo {{#limit}} caracteres.'),
})

