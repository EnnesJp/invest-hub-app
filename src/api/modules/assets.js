import Request from '@/api/Request'

export default function assetsService() {
  const { get, post, remove, update } = Request()
  const _apiBase = 'assets'

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

  const selectData = async () => {
    try {
      const response = await get(`${_apiBase}/select`, true)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  const deleteAsset = async (id) => {
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
    selectData,
    create,
    deleteAsset,
    edit
  }
}