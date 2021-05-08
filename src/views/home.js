import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'

const HomeStyled = styled(MainContainerStyled)`

`

function Home () {
  return (
        <HomeStyled>
            <h2>Trividabo</h2>
            <p>Welcome to trividabo number quiz</p>
            <div className="button">Start</div>
        </HomeStyled>
  )
}

export default Home
