import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const postSchema = Joi.object({
  Nome: Joi.string().required().max(50),
  Marca: Joi.string().required().max(50),
  Cor: Joi.string().required().max(50),
  Ano: Joi.number().required().min(1884).max(2022),
  Placa: Joi.string().required().max(7).min(7),
})

export const deletePostSchema = Joi.object({
  id: Joi.objectId().required()
})

