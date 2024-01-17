import Request from '@/api/Request'

export default function assetsService() {
  const { get } = Request()
  const _apiBase = 'assets'

  const list = async () => {
    try {
      const response = await get(`${_apiBase}`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  const selectData = async () => {
    try {
      const response = await get(`${_apiBase}/select`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    list,
    selectData
  }
}