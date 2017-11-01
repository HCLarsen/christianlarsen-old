const search = (cb) => {
  return fetch(`/users/HCLarsen/repos?sort=updated`, {
    accept: 'application/json',
  }).then(checkStatus).then(cb)
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }
  const error = new Error(`HTTP Error ${response.statusText}`)
  error.status = response.statusText
  error.response = response
  console.log(response.status)
  console.log(error)
  throw error
}

const Client = { search }
export default Client
