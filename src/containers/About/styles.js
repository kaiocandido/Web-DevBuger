import styled from "styled-components"

export const Container = styled.div`
    background-color: #2e162c;
`
export const ContainerMedium = styled.div`
    div{
        h1{
            margin-top: 50px;
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
    display: grid;
    grid-template-columns: 500px 500px;
    justify-content: center;  
    gap: 50px;
    align-items: center;
    margin-top: 140px;
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
    padding: 20px; 
    background-color: rgba(0, 0, 0, 0.8); 
    border-radius: 10px; 
    box-shadow: 0 4px 15px gray; 
    width: 24%; 
    max-width: 600px; 
    margin-left: auto;
    margin-right: auto; 
    p {
        color: #4A6E2A;
        font-size: 13px;
        font-weight: 500;
    }
`
export const ContainerAboutTwo = styled.div`
    margin-top: 30px;
    text-align: center;
    padding: 20px; 
    background-color: rgba(0, 0, 0, 0.8); 
    border-radius: 10px; 
    box-shadow: 0 4px 15px gray; 
    width: 24%; 
    max-width: 600px; 
    margin-left: auto;
    margin-right: auto; 
    p {
        color: #4A6E2A;
        font-size: 13px;
        font-weight: 500;
    }
`
export const ContainerAboutThree = styled.div`
    margin-top: 30px;
    text-align: center;
    padding: 20px; 
    background-color: rgba(0, 0, 0, 0.8); 
    border-radius: 10px; 
    box-shadow: 0 4px 15px gray; 
    width: 24%; 
    max-width: 600px; 
    margin-left: auto;
    margin-right: auto;   
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
    margin-top: 100px;
`
export const ContainerMap = styled.div`
    margin-top: 200px;
    h1{
        margin-bottom: 50px;
    }
`