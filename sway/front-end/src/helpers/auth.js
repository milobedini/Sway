export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const getUsername = () => {
  return window.localStorage.getItem('username')
}

export const setUsername = (username) => {
  window.localStorage.setItem('username', username)
}

export const removeUsername = () => {
  window.localStorage.removeItem('username')
}
