import React, { useEffect } from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import { useHistory } from 'react-router'
import CustomButtonStyled from '../styled/customButton'
import { useDispatch } from 'react-redux'
import { NEW_GAME } from '../actions/rootActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { randomAnswers } from '../utils'

const HomeStyled = styled(MainContainerStyled)`

`

const Button = styled(CustomButtonStyled)``

function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(randomAnswers(1e65))
  }, [])

  const history = useHistory()
  function startGame () {
    dispatch({ type: NEW_GAME })
    history.push('/game')
  }

  return (
        <HomeStyled>
            <h2>Trividabo</h2>
            <p>Welcome to trividabo number quiz!</p>
            <Button onClick={startGame}>Start <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></Button>
        </HomeStyled>
  )
}

export default Home
