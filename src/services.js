import { API } from './constants'

export function fetchQuestion () {
  console.log('API REQ')
  return fetch(API).then(response => response.json())
}
