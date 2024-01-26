import Request from '@/api/Request'

export default function transactionService() {
  const { get, remove, update, post } = Request()
  const _apiBase = 'transactions'

  const list = async () => {
    try {
      const response = await get(`${_apiBase}`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  const create = async (data) => {
    try {
      const response = await post(`${_apiBase}`, data, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }
  
  const deleteTransaction = async (id) => {
    try {
      const response = await remove(`${_apiBase}/${id}`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  const edit = async (id, data) => {
    try {
      const response = await update(`${_apiBase}/${id}`, data, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    list,
    create,
    deleteTransaction,
    edit
  }
}