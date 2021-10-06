export default async function (path, options) {
  const URL = 'https://api.tvmaze.com'
  try {
    const response = await fetch(`${URL}${path}`, {
      ...options,
      method: 'GET',
    })
    return response.json()
  } catch (error) {
    return []
  }
}
