import { getToken } from './auth'
export const getAxiosRequestConfig = (url, data, method = 'post') => {
  const config = {
    method,
    url: url,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    data,
  }
  console.log(config)
  return config
}

export const getNotes = (url, method = 'get') => {
  const config = {
    method,
    url: '/api/notes/',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  }
  console.log(config)
  return config
}

export const getProfile = (id) => {
  const config = {
    method: 'get',
    url: `/api/auth/profile/${id}/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  }
  console.log(config)
  return config
}

export const getAxiosDeleteConfig = (url, method = 'delete') => {
  const config = {
    method,
    url: url,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  }
  return config
}
