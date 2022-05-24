import User from './post.model'

export const postCreate = async (body) => {
  try {
    const user = {
      ...body
    }
    
    const dbUser = await User.create(user)

    return dbUser

  } catch (err) {
    throw err
  }

  
}