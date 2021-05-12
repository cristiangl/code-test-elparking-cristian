import { API } from './constants'

export function fetchQuestion () {
  return fetch(API).then(response => response.json())
}
