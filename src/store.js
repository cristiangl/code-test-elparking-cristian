import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const initialState = {
  loading: false,
  error: null,
  questions: [],
  currentQuestion: null,
  counter: 0,
  numCorrectAnswers: 0
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
