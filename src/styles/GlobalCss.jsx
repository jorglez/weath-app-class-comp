import styled from "styled-components";
import img from '../images/Fondo.jpg'

export const Global = styled.div `
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    overflow-y: scroll;
    & .active{
      color: orange;
    }
`