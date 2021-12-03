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
