const search = (cb) => {
  return fetch(`https://api.github.com/users/HCLarsen/repos?sort=updated`, {
    accept: 'application/json',
  }).then(checkStatus).then(cb)
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }
  const error = new Error(`HTTP Error ${response.statusText} ${response.url}`)
  error.status = response.statusText
  error.response = response
  console.log(response.status + response.url)
  console.log(error)
  throw error
}

const Client = { search }
export default Client

//Proxy error: Could not proxy request /users/HCLarsen/repos?sort=updated from localhost:3000 to https://api.github.com.
//See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (undefined).

//[HPM] Error occurred while trying to proxy request /users/HCLarsen/repos?sort=updated from localhost:3000 to //https://api.github.com (undefined) (https://nodejs.org/api/errors.html#errors_common_system_errors)
