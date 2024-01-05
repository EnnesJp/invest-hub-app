import Request from '@/api/Request'
import { useAuthStore } from '@/stores/auth'

export default function usersService() {
  const { post } = Request()
  const store = useAuthStore()

  const createUser = async (userBody) => {
    try {
      const response = await post(`register`, userBody, false)
      store.login(response.content.data.token, response.content.data.user)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createUser,
  }
}
