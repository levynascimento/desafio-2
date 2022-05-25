import createHandler from '../../lib/middleware/nextConnect'

import { postCreate, getPosts, deletePost } from '../../modules/post/vehicles.service'

import validate  from '../../lib/middleware/validation'
import { postSchema, deletePostSchema } from '../../modules/post/vehicles.schema'



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
  .delete(validate(deletePostSchema), async(req, res) => {
    try {
      const deletedPost = await deletePost(req.body.id)
      if (deletedPost)
        return res.status(200).send({ ok: true })

      return res.status(400).send('post not found')

    } catch (err) {
      return res.status(500).send(err.message)
    }
  })


export default post