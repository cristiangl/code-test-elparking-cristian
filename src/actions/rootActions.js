export const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS'
export const GET_QUESTION = 'GET_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export const RequestInProgressAction = () => {
  return {
    type: REQUEST_IN_PROGRESS
  }
}

export const GetQuestionAction = (question, error = null) => {
  return {
    type: GET_QUESTION,
    payload: question,
    error: error
  }
}

export const SaveQuestionAction = (question) => {
  return {
    type: SAVE_QUESTION,
    payload: question
  }
}
