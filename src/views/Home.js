import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import { useHistory } from 'react-router'
import CustomButtonStyled from '../styled/customButton'
import { useDispatch } from 'react-redux'
import { NEW_GAME } from '../actions/rootActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const HomeStyled = styled(MainContainerStyled)`

`

const Button = styled(CustomButtonStyled)``

function Home () {
  const dispatch = useDispatch()

  const history = useHistory()
  function startGame () {
    dispatch({ type: NEW_GAME })
    history.push('/game')
  }

  return (
    <HomeStyled>
        <h2>Trividabo</h2>
        <p>Welcome to trividabo number quiz!</p>
        <Button id="startGameButton" onClick={() => startGame()}>Start <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></Button>
    </HomeStyled>
  )
}

export default Home
