import styled from "styled-components"

export const ContainerButton = styled.button`
    width: 109%;
    height: 52px;
    border: none;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-size: 30px;
    color: black;
    &:active {
            transform: scale(1.1);
        }
`