import createHandler from '../../lib/middleware/nextConnect'

import { postCreate, getPosts } from '../../modules/post/vehicles.service'

import validate  from '../../lib/middleware/validation'
import { postSchema } from '../../modules/post/vehicles.schema'



const post = createHandler()
  .post( validate({ body: postSchema }), async (req, res) => {
    try {
      const createdPost = await postCreate(req.body)
      res.status(201).json(createdPost)
    
    } catch (err) {
      if (err.code === 11000)
        return res.status(400).send({ 
          code: 11000,
          duplicatedKey: Object.keys(err.keyPattern)[0]
        })
      console.log(err)
      throw err
    }
  })
  .get( async(req, res) => {
    try {
      const posts = await getPosts()
      res.status(201).json(posts)
    } catch (err) {
      return res.status(500).send(err.message)
    }
    })
 


export default post