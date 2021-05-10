import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import reduxSaga from 'redux-saga'
import { rootSagas } from './sagas/rootSagas'

const initialState = {
  loading: false,
  error: null,
  questions: [],
  currentQuestion: null,
  counter: 0,
  numCorrectAnswers: 0
}
const saga = reduxSaga()
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(saga))

const store = createStore(
  rootReducer,
  initialState,
  enhancer
)
saga.run(rootSagas)

export default store
