import Joi from 'joi'

import createHandler from '../../../lib/middleware/nextConnect'

import { postCreate } from '../../../modules/post/post.service'

import validate  from '../../../lib/middleware/validation'


const postSchema = Joi.object({
  Nome: Joi.string().required().max(50),
  Marca: Joi.string().required().max(50),
  Cor: Joi.string().required().max(50),
  Ano: Joi.number().required().min(1884).max(2022),
  Placa: Joi.string().required()
})


const post = createHandler()
  .post( validate({ body: postSchema }), (req, res) => {
    postCreate(req.body)
    res.status(200).json({ teste: "ok" })
  })


export default post