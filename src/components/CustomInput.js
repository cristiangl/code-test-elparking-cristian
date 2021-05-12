import React from 'react'
import styled from 'styled-components'

const CustomInputStyled = styled.div`

    font-family: arial;
    display: block;
    position: relative;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 16px;
    width: 45%;    

    input {
        display: none;
    }

    &:hover label {
        background-color: #DFF6F6;
    }

    label {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        background-color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    input:checked ~ label {
        background: var(--secondary-color);
    }

    @media (max-width: 425px) {
        width: 90%;
    }
`

function CustomInput ({ answer, onClick }) {
  return (
       <CustomInputStyled >
            <input onChange={onClick} type="radio" name="answer" id={answer} value={answer}/>
            <label htmlFor={answer}>{answer}</label>
       </CustomInputStyled>
  )
}

export default CustomInput
