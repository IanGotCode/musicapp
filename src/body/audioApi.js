const axios = require('axios')

import apiConfig from '../apiConfig.js'


// export const axiosGetAudios = () => {
//   return axios.get(apiUrl + '/index')
// }



export const axiosGetAudiosAuthenticated = (user) => {
  return axios.get(apiConfig + '/audios', {
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}

// export const axiosGetAudiosAuthenticated = (user) => {
//   return axios.get(apiUrl + '/audios', {
//     headers: {
//       'Authorization':`Token token=${user.token}`
//     }
//   })
// }



export const axiosPostAudio = (data, user) => {
  return axios.post(apiConfig + '/audios', { audio: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}


export const axiosPatchAudio = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiConfig + '/audios/' + id, { audio: { ...data }}, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

// export const axiosDeleteAudio = (data, user) => {
//   const { id } = data
//   delete data.id
//   console.log(data)
//   return axios.delete(apiUrl + '/audios/' + id, {
//     headers: {
//       'Authorization': `Token token=${user.token}`,
//     }
//   })
// }
