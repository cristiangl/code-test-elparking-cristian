import { REQUEST_IN_PROGRESS, GET_QUESTION, SAVE_QUESTION } from '../actions/rootActions'

export default function rootReducer (state, action) {
  console.log(action)
  switch (action.type) {
    case REQUEST_IN_PROGRESS: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_QUESTION: {
      const quest = action.payload
      if (!action.error && quest) {
        quest.answers = []
        quest.answers.push(quest.number.toPrecision())
        do {
          let rangeLimit = 10
          if (quest.number.toString().length > 3) {
            rangeLimit = Math.pow(10, quest.number.toString().length - 1)
          }
          const gapNumber = Math.ceil(Math.random() * rangeLimit) * (Math.round(Math.random()) ? 1 : -1)
          const randomNumber = parseInt(quest.number) + gapNumber
          if (!quest.answers.includes(randomNumber)) {
            quest.answers.push(randomNumber)
          }
        } while (quest.answers.length < 4)
      }
      return {
        ...state,
        currentQuestion: quest,
        loading: false,
        error: action.error
      }
    }

    case SAVE_QUESTION: {
      return {
        ...state,
        questions: [...state.questions, action.payload]
      }
    }
    default: return state
  }
}
