import User from './vehicles.model'

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


export const getPosts = async (limit = 9) => {
  return await User.find().limit(limit)
}