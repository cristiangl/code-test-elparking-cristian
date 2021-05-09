import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import { SUCCESS_ANSWER } from '../constants'

const QuestionListStyled = styled.div`
  overflow-y: auto;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;

  &.big {
    height: 100%;
    max-height: none;
  }

  .questionListItem {
    width: 90%;
    border-top: 1px solid white;
    padding: 5px 0px;
    margin: 5px 0px;
  }

  .resultQuestion {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 0.9em;
    color: var(--gray-color);
    text-transform: capitalize;
  }
  .resultQuestion span.error { 
    color: #B74B4D;
    margin: 0px 5px;
  }

  .resultQuestion span.success { 
    color: #70B25C;
    margin: 0px 5px;
  }

`

function QuestionList ({ big = false, questions }) {
  return (
      <QuestionListStyled className={(big && 'big')}>
          {questions.slice(0).reverse().map((q, index) => {
            return (
              <div className='questionListItem' key={'hol' + index} >
                <p>What is {q.text}?</p>
                {q.result === SUCCESS_ANSWER
                  ? <p className='resultQuestion'><FontAwesomeIcon size='2x' icon={faCheckCircle} color='#70B25C' /> <span className='success'>{q.number}</span></p>
                  : <p className='resultQuestion'><FontAwesomeIcon size='2x' icon={faTimesCircle} color='#B74B4D' /> <span className='error'>{q.result}</span> - Right answer was {q.number}</p>
                }
              </div>
            )
          })

          }
      </QuestionListStyled>
  )
}

export default QuestionList
