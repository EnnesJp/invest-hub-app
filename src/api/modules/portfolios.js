import Request from '@/api/Request'

export default function portfolioService() {
  const { get } = Request()
  const _apiBase = 'portfolios'

  const list = async () => {
    try {
      const response = await get(`${_apiBase}`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    list
  }
}