import styled from 'styled-components'
import loader from '../assets/img/loading.svg'

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

    &.load {
        position: relative;
    }

    &.load:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(45,51,51,0.7);
        z-index: 100;
    }

    &.load::after {
    content: "";
    display: block;
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    width: 100px;
    height: 100px;
    z-index: 102;
    background: url(${loader}) no-repeat center center;
    background-size: 100%;
    }

`
export default MainContainerStyled
