import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CustomInput from './CustomInput'
import CustomButtonStyled from '../styled/customButton'
import { ERROR_ANSWER, SKIPPED_ANSWER, SUCCESS_ANSWER, CONFIRM_ANSWER } from '../constants'

const QuestionFormStyled = styled.div`

    width: 100%;

    p {
        font-weight: bold;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        margin: 20px 0px;
    }

    .buttonsBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }

`

const Button = styled(CustomButtonStyled)`
  flex: 1;
  margin: 5px;
`

function QuestionForm ({ question, nextQuestion }) {
  const [choosenAnswer, setChoosenAnswer] = useState(null)

  useEffect(() => {
    setChoosenAnswer(null)
  }, [question])

  const submitQuestionForm = (typeAction) => {
    if (typeAction === CONFIRM_ANSWER) {
      if (question.number.toString() === choosenAnswer.toString()) {
        nextQuestion(SUCCESS_ANSWER)
      } else {
        nextQuestion(ERROR_ANSWER)
      }
    } else {
      nextQuestion(typeAction)
    }
  }

  return (
      <QuestionFormStyled>
          <p>What is {question.text}?</p>
          <form>
          {question.answers.map((answer) => {
            return (
                <CustomInput key={answer} answer={answer} onClick={() => setChoosenAnswer(answer)}></CustomInput>
            )
          })}
          <div className='buttonsBox'>
            <Button className={(!choosenAnswer && 'disabled')} onClick={() => submitQuestionForm(CONFIRM_ANSWER)} >Confirm</Button>
            <Button className="secondary" onClick={ () => submitQuestionForm(SKIPPED_ANSWER) }>Skip</Button>
          </div>
        </form>
      </QuestionFormStyled>
  )
}

export default QuestionForm
