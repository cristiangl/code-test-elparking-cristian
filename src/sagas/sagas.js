import { GET_REQUEST_QUESTION, setQuestionAction } from '../actions/rootActions'
import { fetchQuestion } from '../services'
import { call, put, takeLatest } from 'redux-saga/effects'
import { randomAnswers } from '../utils'

function * processGetNewQuestion (action) {
  try {
    const quest = yield call(fetchQuestion)

    quest.answers = randomAnswers(quest.number)

    yield put(setQuestionAction(quest))
  } catch (e) {
    yield put(setQuestionAction(null, e.message))
  }
}

export function * requestGetNewQuestion () {
  yield takeLatest(GET_REQUEST_QUESTION, processGetNewQuestion)
}
