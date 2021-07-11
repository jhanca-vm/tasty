import getProtocol from './utils/getProtocol'

const api = {
  get: (path, { headers: { referer, host } }) =>
    fetch(`${getProtocol(referer)}://${host}/api${path}`).then(response =>
      response.json()
    ),
}

export default api
