import styled from "styled-components";

export const SBCss = styled.form `
  width: fit-content;
  margin: auto;
  & input{
    padding: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
  }
  & button {
    padding: 10px;
    background-color: rgba(0 ,0 ,0, 0.3);
    color: white;
    border-radius: 0 10px 10px 0;
    border: none;
    &:hover{

    }
  }
`