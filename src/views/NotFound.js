import React from 'react'
import styled from 'styled-components'
import MainContainerStyled from '../styled/mainContainer'
import NotFoundImg from '../assets/img/notFound.svg'

const NotFoundStyled = styled(MainContainerStyled)`

  img{
    width: 100%;
    height: auto;
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
