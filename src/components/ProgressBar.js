import React from 'react'
import styled from 'styled-components'

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
        background: ${props => props.time >= 23 ? '#B74B4D' : '#70B25C'};
        border-radius: inherit;
        text-align: right;
    }
`

function ProgressBar ({ time, maxTime }) {
  const percentage = parseInt((time * 100) / maxTime)
  return (
       <ProgressBarStyled percentage={percentage} time={time} >
           <div className="filler">
           </div>
       </ProgressBarStyled>
  )
}

export default ProgressBar
