import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'

const GameStyled = styled(MainContainerStyled)`

`

function Game () {
  return (
        <GameStyled>
            <h2>Trividabo</h2>
            <p>Game View</p>
        </GameStyled>
  )
}

export default Game
