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
    fetch('http://numbersapi.com/random/trivia?fragment&json')
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
        console.log(errorText)
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
    if (questions.length === 10) {
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
    const timer = counter < 30 ? setTimeout(() => setCounter(counter + 1), 1000) : NextQuestion('skiped')
    return () => clearTimeout(timer)
  }, [counter])

  return (
        <GameStyled className={(loading && 'load')}>
            <h2>Trividabo</h2>
            {currentQuestion &&
              <>
                <p>Question {questions.length + 1}</p>
                <ProgressBar time={counter} maxTime='30' ></ProgressBar>
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
