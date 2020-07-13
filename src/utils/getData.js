const MOCKS = '/mocks/producstArray.json'

export const getDataById = async (id) => {
  const response = await self.fetch(MOCKS)
  const data = await response.json()
  data = data.filter(item => item.id_product_type === id)
  data = data.slice(20)
  return data
}

