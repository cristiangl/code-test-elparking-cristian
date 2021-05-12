import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getQuestionAction, saveQuestionAction } from '../actions/rootActions'
import ProgressBar from '../components/ProgressBar'
import QuestionForm from '../components/QuestionForm'
import QuestionList from '../components/QuestionList'
import { MAX_NUMBER_QUESTIONS, MAX_TIME_QUESTION, SKIPPED_ANSWER } from '../constants'
import serverDown from '../assets/img/serverDown.svg'
import CustomButtonStyled from '../styled/customButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

const GameStyled = styled(MainContainerStyled)`
    img{
    width: 400px;
    height: auto;
  }
`
const Button = styled(CustomButtonStyled)`
  margin-top: 20px;
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
    dispatch(getQuestionAction())
    setCounter(0)
  }

  const NextQuestion = (resultQuestion) => {
    const tempQuestion = currentQuestion
    tempQuestion.result = resultQuestion
    dispatch(saveQuestionAction(tempQuestion))
    dispatch(getQuestionAction())
    setCounter(0)
  }

  useEffect(() => {
    GetNewQuestion()
  }, [])

  useEffect(() => {
    if (questions && questions.length === MAX_NUMBER_QUESTIONS) {
      history.push('/results')
    }
  }, [questions])

  useEffect(() => {
    if (currentQuestion) {
      const timer = counter < MAX_TIME_QUESTION ? setTimeout(() => setCounter(counter + 1), 1000) : NextQuestion(SKIPPED_ANSWER)
      return () => clearTimeout(timer)
    }
  }, [counter, currentQuestion])

  return (
        <GameStyled className={(loading && 'load')}>
            <h2>Trividabo</h2>
            {error &&
              <>
              <p>We are having problems</p>
              <img src={serverDown} alt="" />
              <Button id="tryAgainButton" onClick={() => GetNewQuestion()}>Try again <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon></Button>
              </>
            }
            {!error && currentQuestion &&
              <>
                <h3>Question {questions.length + 1} of {MAX_NUMBER_QUESTIONS}</h3>
                <ProgressBar time={counter} maxTime={MAX_TIME_QUESTION} ></ProgressBar>
                <QuestionForm question={currentQuestion} nextQuestion={NextQuestion} ></QuestionForm>
              </>
            }
            {!error && questions &&
              <QuestionList questions={questions}></QuestionList>
            }
        </GameStyled>
  )
}

export default Game
