import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const token = ref('')
  const user = ref({
    id: '',
    name: '',
    user_name: '',
    email: '',
  })

  function login(access_token: string, user_data: any) {
    isAuthenticated.value = true
    token.value = access_token
    user.value = user_data
    localStorage.setItem('token', access_token)
    localStorage.setItem('user', JSON.stringify(user_data))
  }

  function logout() {
    isAuthenticated.value = false
    token.value = ''
    user.value = {
      id: '',
      name: '',
      user_name: '',
      email: '',
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  function checkAuth() {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (token && user) {
      login(token, JSON.parse(user))
    }
  }

  return { isAuthenticated, token, user, login, logout, checkAuth }
})
