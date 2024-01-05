import Request from 'src/api/Request'

export default function usersService() {
  const { post } = Request()

  const createUser = async (userBody) => {
    try {
      const response = await post(`register`, userBody, false)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createUser,
  }
}
