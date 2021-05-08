import styled from 'styled-components'

const CustomButtonStyled = styled.div`

    padding: 10px 20px;
    color: var(--dark-color);
    background-color: var(--secondary-color);
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    
    &:hover {
        filter: brightness(120%);
    }

    &.disabled {
        background-color: var(--gray-color); 
        pointer-events: none;
    }

    &:hover.disabled {
        filter: none;
    }



    &.secondary {
        background-color: #C6CBCB;
    }


`
export default CustomButtonStyled
