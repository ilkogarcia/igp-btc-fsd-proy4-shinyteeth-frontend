export const LocalStorageKeys = {
  REFRESH_TOKEN : "refreshToken",
  TOKEN : "token"
}

export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getInLocalStorage = (key) => {
  const result = localStorage.getItem(key)
  return !!result && JSON.parse(result)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
