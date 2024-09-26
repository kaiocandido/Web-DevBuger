import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
`
export const ContainerMedium = styled.div`
    div{
        h1{
            font-family: "Road Rage", sans-serif;
            display: flex;
            justify-content: center;
            font-size: 100px;
            color: white;
            padding-top: 35px;
            font-weight: 100;
            text-shadow: 2px 2px 0px #4A6E2A; 
        }
    }
`
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;
    margin-top: 140px;
    margin-left: 100px;
    column-gap: 200px;

    img {
        height: 500px;
        width: 500px;
        object-fit: cover; 
        box-shadow: 0 4px 15px grey;
    }
`
export const ContainerAbout = styled.div`
    margin-top: 30px;
    text-align: center;
    padding: 20px; /* Espaçamento interno */
    background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com transparência */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 15px gray; /* Sombra para destaque */
    width: 24%; /* Largura do quadrado */
    max-width: 600px; /* Largura máxima */
    margin-left: 160px; /* Centraliza horizontalmente */
    margin-right: auto; /* Centraliza horizontalmente */

    p {
        color: #4A6E2A;
        font-size: 13px;
        font-weight: 500;
    }
`
export const ContainerAboutTwo = styled.div`
    margin-top: 30px;
    text-align: center;
    padding: 20px; /* Espaçamento interno */
    background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com transparência */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 15px gray; /* Sombra para destaque */
    width: 24%; /* Largura do quadrado */
    max-width: 600px; /* Largura máxima */
    margin-left: 120px; /* Centraliza horizontalmente */
    margin-right: auto; /* Centraliza horizontalmente */

    p {
        color: #4A6E2A;
        font-size: 13px;
        font-weight: 500;
    }
`
export const ContainerAboutThree = styled.div`
    margin-top: 30px;
    text-align: center;
    padding: 20px; /* Espaçamento interno */
    background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com transparência */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 15px gray; /* Sombra para destaque */
    width: 24%; /* Largura do quadrado */
    max-width: 600px; /* Largura máxima */
    margin-left: 120px; /* Centraliza horizontalmente */
    margin-right: auto; /* Centraliza horizontalmente */

    p {
        color: #4A6E2A;
        font-size: 13px;
        font-weight: 500;
    }
`

export const ContainerAboutText = styled.div`
    display: flex;
    column-gap: 20px;
    font-family: "Poppins", sans-serif;
`
