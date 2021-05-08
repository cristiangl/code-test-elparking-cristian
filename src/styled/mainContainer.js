import styled from 'styled-components'

const MainContainerStyled = styled.div`
    border-radius: 19px;
    background: var(--dark-color);
    box-shadow:  7px 7px 9px #252a2a,-7px -7px 9px #353c3c;
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 20px;

    h2 {
        color: white;
        font-size: 3em;
        text-transform: uppercase;
        margin: 0;
    }

    p {
        color: white;
    }

    .button {
        padding: 10px 20px;
        color: var(--dark-color);
        background-color: var(--secondary-color);
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
    }
    
    .button:hover {
        filter: brightness(120%);
    }
`

export default MainContainerStyled
