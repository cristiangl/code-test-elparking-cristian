import { SAVE_QUESTION, NEW_GAME, GET_REQUEST_QUESTION, SET_REQUEST_QUESTION } from '../actions/rootActions'
import { SUCCESS_ANSWER } from '../constants'

export default function rootReducer (state, action) {
  switch (action.type) {
    case NEW_GAME: {
      return {
        ...state,
        questions: [],
        currentQuestion: null,
        numCorrectAnswers: 0,
        isCurrentQuestionLoad: false
      }
    }
    case GET_REQUEST_QUESTION: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_REQUEST_QUESTION: {
      return {
        ...state,
        currentQuestion: action.payload,
        loading: false,
        error: action.error,
        isCurrentQuestionLoad: true
      }
    }

    case SAVE_QUESTION: {
      return {
        ...state,
        questions: [...state.questions, action.payload],
        numCorrectAnswers: action.payload.result === SUCCESS_ANSWER ? ++state.numCorrectAnswers : state.numCorrectAnswers,
        isCurrentQuestionLoad: false
      }
    }
    default: return state
  }
}
