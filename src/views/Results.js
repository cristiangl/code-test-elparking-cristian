import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import QuestionList from '../components/QuestionList'
import MainContainerStyled from '../styled/mainContainer'
import NoDataImage from '../assets/img/noData.svg'
import CustomButtonStyled from '../styled/customButton'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { NEW_GAME } from '../actions/rootActions'
import { MAX_NUMBER_QUESTIONS } from '../constants'

const ResultsStyled = styled(MainContainerStyled)`

img{
    width: 300px;
    height: auto;
  }

`
const Button = styled(CustomButtonStyled)`
  margin-top: 20px;
`

function Results () {
  const dispatch = useDispatch()

  const questions = useSelector(state => state.questions)
  const numCorrectAnswers = useSelector(state => state.numCorrectAnswers)

  const history = useHistory()
  function startGame () {
    dispatch({ type: NEW_GAME })
    history.push('/game')
  }

  return (
        <ResultsStyled>
            <h2>Trividabo</h2>
            { questions && questions.length > 0
              ? (
                <>
                  <h3>Results</h3>
                  <p>You got {numCorrectAnswers} out of {MAX_NUMBER_QUESTIONS} questions right</p>
                  <QuestionList big={true} questions={questions}></QuestionList>
                </>
                )
              : (
                <>
                  <p>Oops! There are no resutls</p>
                  <img src={NoDataImage} alt="" />
                </>
                )
            }
            <Button onClick={startGame}>Play again <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon></Button>
        </ResultsStyled>
  )
}

export default Results
