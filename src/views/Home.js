import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import { useHistory } from 'react-router'
import CustomButtonStyled from '../styled/customButton'

const HomeStyled = styled(MainContainerStyled)`

`

const Button = styled(CustomButtonStyled)``

function Home () {
  const history = useHistory()
  function startGame () {
    history.push('/game')
  }

  return (
        <HomeStyled>
            <h2>Trividabo</h2>
            <p>Welcome to trividabo number quiz!</p>
            <Button onClick={startGame}>Start</Button>
        </HomeStyled>
  )
}

export default Home
