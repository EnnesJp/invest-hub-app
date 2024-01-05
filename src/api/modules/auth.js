import Request from '@/api/Request'
import { useAuthStore } from '@/stores/auth'

export default function authService() {
  const { post } = Request()
  const store = useAuthStore()

  const login = async (credentials) => {
    try {
      const response = await post(`login`, credentials, false)
      store.login(response.content.data.token, response.content.data.user)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    login,
  }
}
