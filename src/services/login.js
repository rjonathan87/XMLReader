const ENDPOINT = 'http://209.126.12.58/api/backendxmlreader'

const loginService = async ({username, password}) => {
  const res = await fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: username, password: password })
  })
  if (!res.ok)
    throw new Error('Response is not ok!')
  const res_2 = await res.json()
  const { token } = res_2
  return token
}

export default loginService