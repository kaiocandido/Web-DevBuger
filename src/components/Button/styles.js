import styled from "styled-components"

export const ContainerButton = styled.button`
    width: 100%;
    padding: 16px 0px;
    margin: 3px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: white;
    font-family: "Poppins", sans-serif;
    text-shadow: 1px 1px 0px black; 
    background: #2E162C;
    box-shadow: 0px 5px 10px  grey;
    &:hover{
        cursor: pointer;
    }
`