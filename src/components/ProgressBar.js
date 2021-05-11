import React from 'react'
import styled from 'styled-components'
import { CHANGE_COLOR_TIME, MAX_TIME_QUESTION } from '../constants'

const ProgressBarStyled = styled.div`

    height: 20px;
    width: 90%;
    background: #000000;
    border: 3px solid #000000;
    border-radius: 50px;
    margin: 20px;
    box-sizing: border-box;

    .filler {
        height: 100%;
        width: ${props => props.percentage}%;
        background: ${props => props.time >= CHANGE_COLOR_TIME ? '#B74B4D' : '#70B25C'};
        border-radius: inherit;
        text-align: right;
    }
`

function ProgressBar ({ time }) {
  const percentage = parseInt((time * 100) / MAX_TIME_QUESTION)
  return (
       <ProgressBarStyled percentage={percentage} time={time} >
           <div className="filler">
           </div>
       </ProgressBarStyled>
  )
}

export default ProgressBar
