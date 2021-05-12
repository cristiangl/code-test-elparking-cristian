import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import reduxSaga from 'redux-saga'
import { rootSagas } from './sagas/rootSagas'
import { loadState, saveState } from './utils'

const initialState = {
  loading: false,
  error: null,
  questions: [],
  currentQuestion: null,
  isCurrentQuestionLoad: false,
  numCorrectAnswers: 0
}
const saga = reduxSaga()
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(saga))

const store = createStore(
  rootReducer,
  loadState() || initialState,
  enhancer
)
saga.run(rootSagas)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
