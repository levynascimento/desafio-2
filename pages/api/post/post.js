import Joi from 'joi'

import createHandler from '../../../lib/middleware/nextConnect'

import { postCreate } from '../../../modules/post/post.service'

import validate  from '../../../lib/middleware/validation'
import { postSchema } from '../../../modules/post/post.schema'



const post = createHandler()
  .post( validate({ body: postSchema }), async (req, res) => {
    try {
      const createdPost = await postCreate(req.body)
      res.status(201).json(createdPost)
    
    } catch (err) {
      throw err
    }
  })


export default post