const axios = require('axios')

const apiUrl = 'http://localhost:4741'


// export const axiosGetAudios = () => {
//   return axios.get(apiUrl + '/index')
// }



export const axiosGetAudiosAuthenticated = (user) => {
  return axios.get(apiUrl + '/index', {
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}



export const axiosPostAudio = (data, user) => {
  return axios.post(apiUrl + '/audios', { audio: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}


export const axiosPatchAudio = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/update/' + id, { audio: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}
