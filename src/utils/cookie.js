import Cookies from 'js-cookie'

const TokenKey = 'PHPSESSID'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 保存用户信息
export function setUserInfo(user) {
  const {
    token,
  } = user
  setToken(token)
}

// 清楚用户信息
export function removeUserInfo() {
  removeToken()
}