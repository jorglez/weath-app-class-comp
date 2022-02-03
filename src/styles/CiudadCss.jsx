import styled from "styled-components";

export const CiudadCss = styled.section `
  color: white;
  & h1{
    width: fit-content;
    margin: 20px auto;
    display: block;
    text-align: center;
    padding: 15px 30px;
    background-color: rgba(0, 0, 0, 0.5);
    
    border-radius: 15px;
  }
  & .body{
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
    margin: auto;
    padding: 20px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    line-height: 2;
    text-align:center;
  }
`