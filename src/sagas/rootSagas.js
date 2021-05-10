import { all, fork } from 'redux-saga/effects'
import { requestGetNewQuestion } from './sagas'

export function * rootSagas () {
  yield all([
    fork(requestGetNewQuestion)
  ])
}
