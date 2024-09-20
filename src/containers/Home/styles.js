import styled from "styled-components"
import BackgroundImg from "../../assets/background.svg"
import BackgroundSection from "../../assets/Padrao.png"

export const Main = styled.main`
background-color: black;
    height: 100%;
    width: 100%;
`

export const Banner = styled.div`
    background: url('${BackgroundImg}');
    background-size: cover;
    background-position: center;
    height: 300px;

    h1{
        font-size: 80px;
        font-weight: 800;
        color: white;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`
export const Container = styled.section`
    //background: url('${BackgroundSection}');
    background-color: black;
    height: 64vh;
    background-color: black;
`
export const Content = styled.div`

`
