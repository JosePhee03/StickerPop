import { imageContext } from "../types/ImagStatusType"

type keyType = 'GLOBAL_STATE' | 'EFFECT_STATE'

export function setlocalStorage (key:keyType, value:imageContext | boolean) {
  const valueJSON = JSON.stringify(value)
  return window.localStorage.setItem(key, valueJSON)
}

export function getLocalStorage (key:keyType):imageContext | null {
  const getStorage = window.localStorage.getItem(key)
  return getStorage ? JSON.parse(getStorage) : null 
}

export function clearLocalStorage () {
  window.localStorage.clear()
} 
