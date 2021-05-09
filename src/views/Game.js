import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { REQUEST_IN_PROGRESS, GET_QUESTION, SAVE_QUESTION } from '../actions/rootActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProgressBar from '../components/ProgressBar'
import QuestionForm from '../components/QuestionForm'
import QuestionList from '../components/QuestionList'
import { API, MAX_NUMBER_QUESTIONS, MAX_TIME_QUESTION, SKIPPED_ANSWER } from '../constants'

const GameStyled = styled(MainContainerStyled)`
`

function Game () {
  const dispatch = useDispatch()
  const history = useHistory()

  const [counter, setCounter] = useState(0)

  const currentQuestion = useSelector((state) => state.currentQuestion)
  const questions = useSelector((state) => state.questions)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)

  const GetNewQuestion = () => {
    dispatch({ type: REQUEST_IN_PROGRESS })
    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.number.toString().includes('e')) {
          GetNewQuestion()
        } else {
          dispatch({
            type: GET_QUESTION,
            payload: data,
            error: null
          })
          setCounter(0)
        }
      })
      .catch((e) => {
        const errorText = 'Hubo un error al cargar la pregunta'
        dispatch({
          type: GET_QUESTION,
          payload: null,
          error: {
            text: errorText,
            type: e.message
          }
        })
      })
  }

  const NextQuestion = (resultQuestion) => {
    const tempQuestion = currentQuestion
    tempQuestion.result = resultQuestion

    dispatch({
      type: SAVE_QUESTION,
      payload: tempQuestion,
      error: null
    })

    GetNewQuestion()
  }

  useEffect(() => {
    GetNewQuestion()
  }, [])

  useEffect(() => {
    if (questions.length === MAX_NUMBER_QUESTIONS) {
      history.push('/results')
    }
  }, [questions])

  useEffect(() => {
    if (error) {
      toast.error(error.text, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }, [error])

  useEffect(() => {
    const timer = counter < MAX_TIME_QUESTION ? setTimeout(() => setCounter(counter + 1), 1000) : NextQuestion(SKIPPED_ANSWER)
    return () => clearTimeout(timer)
  }, [counter])

  return (
        <GameStyled className={(loading && 'load')}>
            <h2>Trividabo</h2>
            {currentQuestion &&
              <>
                <h3>Question {questions.length + 1} of {MAX_NUMBER_QUESTIONS}</h3>
                <ProgressBar time={counter} maxTime={MAX_TIME_QUESTION} ></ProgressBar>
                <QuestionForm question={currentQuestion} nextQuestion={NextQuestion} ></QuestionForm>
              </>
            }
            {questions &&
              <QuestionList questions={questions}></QuestionList>
            }
            <ToastContainer></ToastContainer>
        </GameStyled>
  )
}

export default Game
