import Request from '@/api/Request'

export default function chartsService() {
  const { get } = Request()
  const _apiBase = 'charts'

  const totalPerMonth = async () => {
    try {
      const response = await get(`${_apiBase}/total-month`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    totalPerMonth
  }
}