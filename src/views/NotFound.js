import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import NotFoundImg from '../assets/img/404.svg'

const NotFoundStyled = styled(MainContainerStyled)`

  img{
    width: 400px;
    height: auto;
  }

  @media (max-width: 425px) {
    img{
        width: 100%;
        height: auto;
    }
  }
`

function NotFound () {
  return (
        <NotFoundStyled>
            <h2>Page not found</h2>
            <img src={NotFoundImg} alt="" />
        </NotFoundStyled>
  )
}

export default NotFound
