import Request from '@/api/Request'

export default function savingPlanService() {
  const { get } = Request()
  const _apiBase = 'saving-plans'

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