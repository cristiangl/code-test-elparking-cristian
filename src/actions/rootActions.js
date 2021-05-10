export const NEW_GAME = 'NEW_GAME'
export const GET_REQUEST_QUESTION = 'GET_REQUEST_QUESTION'
export const SET_REQUEST_QUESTION = 'SET_REQUEST_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export const newGameAction = () => {
  return {
    type: NEW_GAME
  }
}

export const getQuestionAction = () => {
  return {
    type: GET_REQUEST_QUESTION
  }
}

export const setQuestionAction = (data, error = null) => {
  return {
    type: SET_REQUEST_QUESTION,
    payload: data,
    error: error
  }
}

export const saveQuestionAction = (question) => {
  return {
    type: SAVE_QUESTION,
    payload: question
  }
}
