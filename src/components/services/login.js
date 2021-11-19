require('dotenv').config();

export default function loginService ({username, password}){
  return fetch(`${process.env.ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({user: username, password: password})
  })
  .then( res => {
    if(!res.ok) throw new Error('Response is not ok!')

    return res.json()
  })
  .then( res => {
    const { token } = res
    return token
  })
  .catch( res => console.log(res) )
}