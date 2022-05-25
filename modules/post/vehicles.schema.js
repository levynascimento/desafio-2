import Joi from 'joi'

export const postSchema = Joi.object({
  Nome: Joi.string().required().max(50),
  Marca: Joi.string().required().max(50),
  Cor: Joi.string().required().max(50),
  Ano: Joi.number().required().min(1884).max(2022),
  Placa: Joi.string().required().max(7).min(7),
})

